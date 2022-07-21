import Box from "@mui/material/Box";

export default function Thumbail({src, alt}) {
    return (
        <Box width={95} display="flex" justifyContent="center">
            <img width="100%"
                 src={src}
                 alt={alt}/>
        </Box>
    )
}
