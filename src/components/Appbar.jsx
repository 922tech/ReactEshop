import React from 'react';
import { AppBar, Box } from "@mui/material";
import { useWidth } from './utils';
import {DoubleLineToolbar, SingleLineToolbar} from './AppBar/ToolBar';


function is_authenticated(){
    // TODO : auth from axios
    // TODO : Create a User Class
    return true
}
 
// useLocalStorage()
function getAppBarBanner(){
    return("/banner.gif")
}


const Appbar = (props) => {
    
    // const auth = props.is_authenticated
    // const banner = props.AppBarBanner
    const auth = is_authenticated()
    /* switch banner */
    // const banner = getAppBarBanner()
    const banner = null
    // const xs = useThemeProps('xs','up')
    // const xs = useThemeProps('sm','up')
    let th = useWidth()
    const xs = th === 'xs' || th === 'sm'
    return (
        <div>
            {banner && (<div style={{marginBottom:'-4.8px',width:'100%',height:'20%',objectFit:'contain'}}>
                 <img src={banner} width='100%' height='100%' alt="" srcset="" style={{maxWidth:'100%'}}/>
            </div>)}
        <Box sx={{  display:'flex', }} alignContent='space-between'>
            <AppBar position='sticky' elevation={0}>
                { xs && (<DoubleLineToolbar/>) }
                { !xs && (<SingleLineToolbar/>) }
            </AppBar>
        </Box>
        </div>
    )
};

export default Appbar;
