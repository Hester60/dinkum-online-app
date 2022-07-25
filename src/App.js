import MainAppBar from "./components/Navigation/MainAppBar";
import {Routes, Route, Navigate} from "react-router-dom";
import Catchables from "./containers/catchables/Catchables";
import Box from "@mui/material/Box";
import {Container} from "@mui/material";
import MainFooter from "./components/Footer/MainFooter";

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
        <PageLayout>
            <Routing/>
        </PageLayout>
    );
}

export default App;
