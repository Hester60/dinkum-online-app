import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {Chip, Divider} from "@mui/material";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from "@mui/material/Typography";

export default function FilterChip({values, setValues, filterName}) {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(filterName);
    const [chipColor, setChipColor] = useState("default");

    useEffect(() => {
        const selected = Object.entries(values).filter(e => e[1].selected === true);

        if (selected.length === 0) {
            setTitle(filterName);
            setChipColor("default");
        } else {
            setTitle(selected.length === 0 ? filterName : selected.map(e => e[1].name).join(', '));
            setChipColor("warning");
        }

    }, [values]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: {...values[e.target.name], selected: e.target.checked}});
    }

    const checkboxes = Object.keys(values).map(k => (
        <FormControlLabel key={values[k].name}
                          control={
                              <Checkbox onChange={handleChange} checked={values[k].selected} name={values[k].name}/>
                          }
                          label={<Typography sx={{textTransform: 'capitalize'}}>{values[k].name}</Typography>}
        />
    ));

    return (
        <>
            <Box>
                <Chip variant="outlined" color={chipColor} label={
                    <Typography sx={{textTransform: 'capitalize'}}>
                        {title}
                    </Typography>
                }
                      onClick={handleClickOpen}/>
            </Box>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
                <DialogTitle>{filterName}</DialogTitle>
                <FormControl sx={{mx: 3}} component="fieldset" variant="standard">
                    <FormGroup>
                        {checkboxes}
                    </FormGroup>
                </FormControl>
                <Divider sx={{mt: 1}}/>
                <DialogActions sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button onClick={handleClose} color="warning">Remove</Button>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
