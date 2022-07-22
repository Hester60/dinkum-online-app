import Box from "@mui/material/Box";
import {Card, CardContent, Chip} from "@mui/material";
import Typography from "@mui/material/Typography";
import Thumbail from "../../Thumbnail/Thumbnail";
import CatchableCardItemSection from "./CatchableCardItemSection";
import returnAllOrJoinValues from "../../../utils/returnAllOrJoinValues";
import {TIMES_FOUND} from "../../../constants/timesFoundConstants";
import {SEASONS} from "../../../constants/seasonsConstants";

export default function CatchableCardItem({catchable}) {

    const getPreviewSrc = () => `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_PREVIEWS_PATH}${catchable.preview}`
    const catchableTypesColor = {'fish': 'primary', 'critter': 'secondary', 'bugs': 'success'}

    return (
        <Box width={275}>
            <Card variant="outlined">
                <CardContent sx={{textAlign: "center", textTransform: 'capitalize', position: 'relative'}}>
                    <Box position="absolute"  top={8} left={8}>
                        <Chip size="small" label={catchable.type} color={catchableTypesColor[catchable.type]}/>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Thumbail
                            src={getPreviewSrc()}
                            alt={catchable.name}/>
                    </Box>
                    <Typography fontWeight="bold" align="center">{catchable.name}</Typography>
                    <Box mt={1}>
                        <CatchableCardItemSection title="Season" text={returnAllOrJoinValues(catchable.seasons, SEASONS)}/>
                    </Box>
                    <Box mt={1}>
                        <CatchableCardItemSection title="Time found" text={returnAllOrJoinValues(catchable.timesFound, TIMES_FOUND)}/>
                    </Box>
                    <Box mt={1}>
                        <CatchableCardItemSection title="Where" text={catchable.habitats.join(', ')}/>
                    </Box>
                    <Box mt={1}>
                        <CatchableCardItemSection title="Sell Price"
                                                  text={`Ð ${new Intl.NumberFormat('en-US').format(catchable.sellPrice)}`}/>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}
