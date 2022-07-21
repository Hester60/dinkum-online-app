import Box from "@mui/material/Box";
import {Card, CardContent, Skeleton} from "@mui/material";
import CatchableCardItemSectionSkeleton from "./CatchableCardItemSectionSkeleton";

export default function CatchableCardItemSkeleton() {

    return (
        <Box width={275}>
            <Card>
                <CardContent sx={{textAlign: "center", textTransform: 'capitalize', position: 'relative'}}>
                    <Box display="flex" justifyContent="center">
                        <Skeleton variant="rectangular" width={95} height={95}/>
                    </Box>
                    <Box display="flex" alignItems="center" flexDirection="column">
                        <Skeleton sx={{my: 1}} width="25%"/>
                        <CatchableCardItemSectionSkeleton titleWidth="18%" textWidth="40%" />
                        <CatchableCardItemSectionSkeleton titleWidth="18%" textWidth="40%" />
                        <CatchableCardItemSectionSkeleton titleWidth="18%" textWidth="70%" />
                        <CatchableCardItemSectionSkeleton titleWidth="18%" textWidth="15%" />
                    </Box>

                </CardContent>
            </Card>
        </Box>
    )
}
