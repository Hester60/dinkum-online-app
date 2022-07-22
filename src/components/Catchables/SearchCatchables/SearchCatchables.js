import {Card, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function SearchCatchables({resultsNumber, children}) {
    return (
        <Card elevation={0}>
            <Typography color="text.secondary" gutterBottom>
                Filtering
            </Typography>
            {children}
        </Card>
    )
}
