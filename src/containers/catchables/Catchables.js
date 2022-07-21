import {useEffect, useState} from "react";
import api from '../../api';
import Box from "@mui/material/Box";
import CatchableCardsList from "../../components/catchables/CatchableCardsList";

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
            {isLoading ? <div>Loading ...</div> : (
                <CatchableCardsList catchables={catchables} />
            )}
        </Box>
    )
}
