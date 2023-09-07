import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { KeyboardArrowRight, KeyboardArrowDown } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function LateralMenu(props) {
    const { tittle, options } = props
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <MenuItem>
            <Button
                sx={{justifyContent: 'start', margin: '0', padding:'0', color: 'white', fontSize: '0.90rem', fontWeight: '400'}}
                fullWidth
                id={tittle}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
            {tittle}
            {anchorEl ? <KeyboardArrowDown /> : <KeyboardArrowRight />}         
            </Button>
            <Menu
                id={tittle}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                {options.map((option, index) => {
                    return(
                        <MenuItem key={index} onClick={handleClose} component={Link} to={option.to}>{option.name}</MenuItem>
                    )
                })}
            </Menu>
        </MenuItem>
    );
}
