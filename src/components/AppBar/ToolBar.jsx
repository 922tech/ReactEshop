import React from 'react';
import { Link } from 'react-router-dom';
import {Toolbar, IconButton, Box, Badge} from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Logo from './../logo';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchFiled from './SearchField';
import MyDrawer from './Drawer';
import {useBasketState} from "../../context/BasketContext";
// import {useLocalStorage} from "../utils";


const BasketIcon = () => {
    const purchaseList  = useBasketState().purchaseList;
    // const state = useBasketState();
    const num = Object.keys(purchaseList).length
    console.log(useBasketState())
    // console.log(state)
   return(
      <Badge badgeContent={num} color={"error"} sx={{ '& span':{fontFamily:'Shabnam FD'} }}>
            <ShoppingCartIcon />
      </Badge>
  )
}
export const SingleLineToolbar = props => {
    // const auth = props.is_authenticated

    return(
        <Toolbar>
                <MyDrawer />
                <Link to={`/`} style={{ color:'inherit',textDecoration: 'none' }}>
                <Logo sx={{ pr:'16px',pl:'16px' }} /></Link>

                <SearchFiled flexGrow={20} />
                {/* <MyMenu auth={auth} /> */}
                <IconButton size="large" edge='start' color='inherit' aria-label="menu" sx={{ mr: 2 }}>
                    <AccountCircle/>
                </IconButton>
                

                <IconButton size="large" edge='start' color='inherit' aria-label="menu" sx={{ mr: 2 }}>
                    {/*<ShoppingCartIcon />*/}
                    <BasketIcon />

                </IconButton>

            {/* { auth && (<MyMenu/>)} */}
            
            </Toolbar>
    )
}


/************************************/
export const DoubleLineToolbar = props => {
    // const auth = props.is_authenticated

    return(
        <Toolbar  sx={{ flexGrow:1, display:'flex', alignItems:'space-between',flexDirection:'column',pt:'5px' }} >
            <Box width='100%' display='flex' justifyContent='space-between' alignItems='center'  >
                
                <MyDrawer />
                <Logo width='50%' sx={{ display:'flex', justifyContent:'start', width:'100%' }}/>
                 
                {/* <MyMenu auth={auth} /> */}
                <Box  display='flex' justifyContent='flex-end'>
                    <IconButton size="large" edge='start' color='inherit' aria-label="menu" sx={{ mr: 0 }}>
                        <AccountCircle/>
                    </IconButton>
                    
                    <IconButton size="large" edge='start' color='inherit' aria-label="menu" sx={{ mr: 0 }}>

                        <BasketIcon />
                    {/*<ShoppingCartIcon /> */}

                    </IconButton>
                </Box>
            </Box>
            {/* { auth && (<MyMenu/>)} */}

            <Box  sx={{ width:'100%', display:'flex', borderTop:'1px black',justifyContent:'space-between', alignItems:'center',flexDirection:'row' }}>
                <SearchFiled flexGrow={20} />
            </Box>
            
        </Toolbar>
    )
}
