import {Card, CardContent, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function SearchCatchables({resultsNumber, children}) {
    return (
        <Card>
            <CardContent>
                <Typography color="text.secondary" gutterBottom>
                    Filtering (total results: {resultsNumber})
                </Typography>
                <Stack direction="row" spacing={1} mt={2}>
                    {children}
                </Stack>
            </CardContent>
        </Card>
    )
}
