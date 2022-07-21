import CatchableCardItem from "./CatchableCardItem/CatchableCardItem";
import Box from "@mui/material/Box";

export default function CatchableCardsList({catchables}) {
    return (
        <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
            {catchables.map((catchable) => <CatchableCardItem key={catchable._id} catchable={catchable} />)}
        </Box>
    )
}
