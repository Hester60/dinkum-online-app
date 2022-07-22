import {Card, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function SearchCatchables({resultsNumber, children}) {
    return (
        <Card elevation={0}>
            <Typography color="text.secondary" gutterBottom>
                Filtering (total results: {resultsNumber})
            </Typography>
            <Stack direction="row" spacing={1} mt={2}>
                {children}
            </Stack>
        </Card>
    )
}
