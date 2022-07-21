import Box from "@mui/material/Box";
import {Skeleton} from "@mui/material";

export default function CatchableCardItemSectionSkeleton({titleWidth, textWidth}) {
    return (
        <Box width="100%" display="flex" flexDirection="column" alignItems="center">
            <Skeleton width={titleWidth}/>
            <Skeleton width={textWidth}/>
        </Box>
    )
}
