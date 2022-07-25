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

  const catchablePrice = (
    <Box display="flex" alignItems="center" justifyContent="center">
      <img src={process.env.PUBLIC_URL + '/Inv_Dinks.png'} alt={catchable.name} className="dinks"/>
      <Typography fontSize="small">{`${new Intl.NumberFormat('en-US').format(catchable.sellPrice)}`}</Typography>
    </Box>
  )

  return (
    <Box width={275}>
      <Card variant="outlined">
        <CardContent sx={{textAlign: "center", textTransform: 'capitalize', position: 'relative'}}>
          <Box position="absolute" top={8} left={8}>
            <Chip size="small" label={catchable.type} color={catchableTypesColor[catchable.type]}/>
          </Box>
          <Box display="flex" justifyContent="center">
            <Thumbail
              src={getPreviewSrc()}
              alt={catchable.name}/>
          </Box>
          <Typography fontWeight="bold" align="center">{catchable.name}</Typography>
          <Box mt={1}>
            <CatchableCardItemSection title="Season"
                                      text={<Typography fontSize="small">{returnAllOrJoinValues(catchable.seasons, SEASONS)}</Typography>}/>
          </Box>
          <Box mt={1}>
            <CatchableCardItemSection title="Time found"
                                      text={<Typography fontSize="small">{returnAllOrJoinValues(catchable.timesFound, TIMES_FOUND, 'All day')}</Typography>}/>
          </Box>
          <Box mt={1}>
            <CatchableCardItemSection title="Where" text={<Typography fontSize="small">{catchable.habitats.join(', ')}</Typography>}/>
          </Box>
          <Box mt={1}>
            <CatchableCardItemSection title="Sell Price"
                                      text={catchablePrice}/>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
