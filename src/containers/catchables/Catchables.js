import {useEffect, useState} from "react";
import api from '../../api';
import Box from "@mui/material/Box";
import CatchableCardsList from "../../components/Catchables/CatchableCardsList";
import {SEASONS} from "../../constants/seasonsConstants";
import {TIMES_FOUND} from "../../constants/timesFoundConstants";
import FilterChip from "../../components/Catchables/SearchCatchables/Filters/FilterChip";
import {CATCHABLE_TYPES} from "../../constants/catchableTypesConstants";
import {Card, Stack, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Catchables() {
    const [allCatchables, setAllCatchables] = useState([]);
    const [catchablesResult, setCatchablesResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [seasonsFiltering, setSeasonsFiltering] = useState(initFilterState(SEASONS));
    const [timesFoundFiltering, setTimesFoundFiltering] = useState(initFilterState(TIMES_FOUND));
    const [catchableTypesFiltering, setCatchableTypesFiltering] = useState(initFilterState(CATCHABLE_TYPES));
    const [nameFiltering, setNameFiltering] = useState('');

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
        setResultsNumber(results.length)
        setCatchablesResult(results);
    }, [seasonsFiltering, timesFoundFiltering, catchableTypesFiltering, nameFiltering])

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

    function handleNameFilteringChange(e) {
        setNameFiltering(e.target.value.toLowerCase());
    }

    function getResult() {
        const seasonsFilters = [];
        const timesFoundFilters = [];
        const catchableTypesFilters = [];

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

        Object.keys(catchableTypesFiltering).forEach(k => {
            if (catchableTypesFiltering[k].selected) {
                catchableTypesFilters.push(catchableTypesFiltering[k].name);
            }
        });

        return [...allCatchables].filter(e => {
            if (
                (seasonsFilters.length === 0 || (seasonsFilters.length > 0 && e.seasons.some(season => seasonsFilters.includes(season)))) &&
                (timesFoundFilters.length === 0 || (timesFoundFilters.length > 0 && e.timesFound.some(timeFound => timesFoundFilters.includes(timeFound)))) &&
                (catchableTypesFilters.length === 0 || (catchableTypesFilters.length > 0 && catchableTypesFilters.includes(e.type))) &&
                (nameFiltering.trim() === '' || e.name.toLowerCase().includes(nameFiltering))
            ) {
                return true;
            }
        });
    }

    return (
        <Box>
            <Card elevation={0}>
                <Box pt={1}>
                    <TextField id="outlined-basic" label="Search with name..." variant="outlined" fullWidth
                               value={nameFiltering}
                               type="search"
                               onChange={handleNameFilteringChange}/>
                </Box>
                <Stack direction="row" spacing={1} mt={2}>
                    <FilterChip filterName="Seasons" values={seasonsFiltering} setValues={setSeasonsFiltering} resetState={() => initFilterState(SEASONS)}/>
                    <FilterChip filterName="Times found" values={timesFoundFiltering} resetState={() => initFilterState(TIMES_FOUND)}
                                setValues={setTimesFoundFiltering}/>
                    <FilterChip filterName="Types" values={catchableTypesFiltering} resetState={() => initFilterState(CATCHABLE_TYPES)}
                                setValues={setCatchableTypesFiltering}/>
                </Stack>
                <Box mt={1}>
                    <Typography fontSize="small">Total results: {resultsNumber}</Typography>
                </Box>
            </Card>
            <Box mt={3}>
                <CatchableCardsList catchables={catchablesResult} isLoading={isLoading}/>
            </Box>
        </Box>
    )
}
