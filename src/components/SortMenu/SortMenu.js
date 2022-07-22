import {KeyboardArrowDown} from "@mui/icons-material";
import Button from "@mui/material/Button";
import {Menu, MenuItem} from "@mui/material";
import {useState} from "react";
import Typography from "@mui/material/Typography";

export default function SortMenu({sortValues, setSort, currentSort}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        const value = event.currentTarget.outerText.toLowerCase();

        if (sortValues.includes(value)) {
            setSort(value);
        }

        setAnchorEl(null);
    };

    const sortItems = sortValues.map(sortValue => (
        <MenuItem value={sortValue} key={sortValue} onClick={handleClose}>
            <Typography sx={{textTransform: 'capitalize'}}>{sortValue}</Typography>
        </MenuItem>
    ))

    return (
        <>
            <Button
                id="sort-button"
                aria-haspopup="true"
                variant="text"
                disableElevation
                aria-controls={open ? 'sort-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDown/>}
            >
                {currentSort}
            </Button>
            <Menu
                id="sort-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {sortItems}
            </Menu>
        </>
    )
}
