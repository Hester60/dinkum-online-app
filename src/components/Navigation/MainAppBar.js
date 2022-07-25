import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './MainAppBar.css';

export default function MainAppBar() {
    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="fixed" elevation={0}>
                    <Toolbar className="toolbar">
                        <Box display="flex" alignItems="center" flexGrow={1}>
                            <img src={process.env.PUBLIC_URL + '/sitelogo.png'} alt="Dinkum Online logo" className="navbar-logo"/>
                        </Box>
                        <Button color="inherit">Catchables</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Toolbar className="toolbar" />
        </>
    );
}
