import {useEffect, useState} from "react";
import api from '../../api';
import Box from "@mui/material/Box";
import CatchableCardsList from "../../components/Catchables/CatchableCardsList";
import SearchCatchables from "../../components/Catchables/SearchCatchables/SearchCatchables";

export default function Catchables() {
    const [catchables, setCatchables] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        api.get(`${process.env.REACT_APP_API_URL}/catchables`)
            .then(response => {
                const {data} = response;
                setCatchables(data);
            })
            .catch(err => {
                alert(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <Box>
            <SearchCatchables/>
            <Box mt={3}>
                <CatchableCardsList catchables={catchables} isLoading={isLoading}/>
            </Box>
        </Box>
    )
}
