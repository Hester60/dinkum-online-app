import MainAppBar from "./components/Navigation/MainAppBar";
import {Routes, Route, Navigate} from "react-router-dom";
import Catchables from "./containers/catchables/Catchables";
import Box from "@mui/material/Box";
import {Container, createTheme, ThemeProvider} from "@mui/material";
import MainFooter from "./components/Footer/MainFooter";

const theme = createTheme({
    palette: {
        primary: {
            main: '#572e14',
        },
        secondary: {
            main: '#2e7d32',
        },
    },
});

const Routing = () => {
    return (
        <Routes>
            <Route path="/catchables" element={<Catchables/>}/>
            <Route path="/" element={<Navigate to="/catchables" replace={true}/>}/>
        </Routes>
    )
}

const PageLayout = ({children}) => {
    return (
        <div>
            <MainAppBar/>
            <Container>
                <Box py={3}>
                    {children}
                </Box>
            </Container>
            <MainFooter/>
        </div>
    )
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <PageLayout>
                <Routing/>
            </PageLayout>
        </ThemeProvider>
    );
}

export default App;
