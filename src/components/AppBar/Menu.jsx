import React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Menu, MenuItem, Button } from '@mui/material';



const  MyMenu = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    }; 

    if (props.auth) {
    
    return(  
        <>
        <Button variant="outlined"
         color="inherit"
         aria-controls={open ? 'my-menu' : undefined}
         aria-expanded={open ? 'true' : undefined}
         aria-haspopup='true'
         onClick={handleClick}
         >
            <AccountCircle className='my-account' style={{padding:'2px 4px 4px 2px'}}/>
            اطلاعات حساب 
         </Button>

            <Menu id='my-menu' anchorEl={anchorEl} open={open}
             onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}}>
                
                <MenuItem onClick={handleClose}> حساب کاربری </MenuItem>
                <MenuItem onClick={handleClose}> سبد خرید </MenuItem>
            </Menu>
            </>
            );
    }

 } 

 export default MyMenu;