import CatchableCardItem from "./CatchableCardItem/CatchableCardItem";
import Box from "@mui/material/Box";
import CatchableCardItemSkeleton from "./CatchableCardItem/CatchableCardItemSkeleton";

export default function CatchableCardsList({catchables, isLoading}) {
    const loadingCardsList = (
        <>
            {Array(23).fill(0).map((e, i) => {
                return <CatchableCardItemSkeleton key={i}/>
            })}
        </>
    )

    return (
        <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center">
            {isLoading ?
                loadingCardsList :
                catchables.map((catchable) => <CatchableCardItem key={catchable._id}
                                                                 catchable={catchable}/>)}
        </Box>
    )
}
