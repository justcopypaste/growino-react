import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Card } from "@mui/material";
import VuiTypography from "components/VuiTypography";
import Grid from "@mui/material/Grid";
import { SlArrowDown } from "react-icons/sl";

export default function Dropdown() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Card style={{ padding: "15px 22px" }}>
                    <Grid display="flex" alignItems="center" gap="10px" >
                        <VuiTypography variant="h5" fontWeight="light" color="white">
                            Armario 1
                        </VuiTypography>
                        <SlArrowDown color="white"></SlArrowDown>
                    </Grid>
                </Card>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}><VuiTypography variant="h5" fontWeight="light" color="white">Armario 1</VuiTypography></MenuItem>
            </Menu>
        </div>
    );
}