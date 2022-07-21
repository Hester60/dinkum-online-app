import Typography from "@mui/material/Typography";

export default function CatchableCardItemSection({title, text}) {
    return (
        <>
            <Typography fontWeight="bold" fontSize="small" color="secondary">
                {title}
            </Typography>
            <Typography fontSize="small">{text}</Typography>
        </>
    )
}
