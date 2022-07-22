import {useEffect, useState} from "react";
import api from '../../api';
import Box from "@mui/material/Box";
import CatchableCardsList from "../../components/Catchables/CatchableCardsList";
import SearchCatchables from "../../components/Catchables/SearchCatchables/SearchCatchables";
import {SEASONS} from "../../constants/seasonsConstants";
import {TIMES_FOUND} from "../../constants/timesFoundConstants";
import FilterChip from "../../components/Catchables/SearchCatchables/Filters/FilterChip";

export default function Catchables() {
    const [allCatchables, setAllCatchables] = useState([]);
    const [catchablesResult, setCatchablesResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [seasonsFiltering, setSeasonsFiltering] = useState(initFilterState(SEASONS));
    const [timesFoundFiltering, setTimesFoundFiltering] = useState(initFilterState(TIMES_FOUND));
    const [resultsNumber, setResultsNumber] = useState(0);

    useEffect(() => {
        setIsLoading(true);

        api.get(`${process.env.REACT_APP_API_URL}/catchables`)
            .then(response => {
                const {data} = response;
                setAllCatchables(data);
                setCatchablesResult(data);
                setResultsNumber(data.length)
            })
            .catch(err => {
                alert(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        const results = getResult();
        if (results.length > 0) {
            setResultsNumber(results.length)
        }
        setCatchablesResult(results);
    }, [seasonsFiltering, timesFoundFiltering])

    function initFilterState(values) {
        let obj = {};
        values.forEach(value => {
            obj[value] = {
                name: value,
                selected: false
            }
        });

        return obj;
    }

    function getResult() {
        const seasonsFilters = [];
        const timesFoundFilters = [];

        Object.keys(seasonsFiltering).forEach(k => {
            if (seasonsFiltering[k].selected) {
                seasonsFilters.push(seasonsFiltering[k].name);
            }
        });

        Object.keys(timesFoundFiltering).forEach(k => {
            if (timesFoundFiltering[k].selected) {
                timesFoundFilters.push(timesFoundFiltering[k].name);
            }
        });

        return [...allCatchables].filter(e => {
            if (
                (seasonsFilters.length === 0 || (seasonsFilters.length > 0 && e.seasons.some(season => seasonsFilters.includes(season)))) &&
                (timesFoundFilters.length === 0 || (timesFoundFilters.length > 0 && e.timesFound.some(timeFound => timesFoundFilters.includes(timeFound))))
            ) {
                return true;
            }
        });
    }

    return (
        <Box>
            <SearchCatchables resultsNumber={resultsNumber}>
                <FilterChip filterName="Seasons" values={seasonsFiltering} setValues={setSeasonsFiltering}/>
                <FilterChip filterName="Times found" values={timesFoundFiltering}
                            setValues={setTimesFoundFiltering}/>
            </SearchCatchables>
            <Box mt={3}>
                <CatchableCardsList catchables={catchablesResult} isLoading={isLoading}/>
            </Box>
        </Box>
    )
}
