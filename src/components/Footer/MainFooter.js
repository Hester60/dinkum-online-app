import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Container} from "@mui/material";

export default function MainFooter() {
    return (
        <Box component="div" py={2} bgcolor="primary.main" color="white">
            <Container sx={{textAlign: 'center'}}>
                <Typography fontSize="small">
                    Made by <a className="styled-link" href="https://thomascarbuccia.fr" rel="noreferrer"
                               target="_blank">Thomas CARBUCCIA</a>.
                    Dinkum Online is a fan-made website that claims no ownership of any intellectual property associated
                    with James Bendon and <a href="https://www.playdinkum.com/" className="styled-link" rel="noreferrer"
                                             target="_blank">Dinkum</a>.
                </Typography>
            </Container>
        </Box>
    )
}
