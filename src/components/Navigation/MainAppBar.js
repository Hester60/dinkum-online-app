import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function MainAppBar() {
    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="fixed" elevation={0}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Dinkum Online
                        </Typography>
                        <Button color="inherit">Catchables</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Toolbar />
        </>
    );
}
