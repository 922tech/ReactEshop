
import { ImportContacts, LocalPhone, OfflineBolt, Storefront,ShoppingBasket } from "@mui/icons-material"
import MenuIcon from '@mui/icons-material/Menu';
import { Accordion, AccordionSummary, Box, Button, Divider, Drawer, IconButton, Typography } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import Logo from "../logo"
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const drawerEventHandler = React.createContext(null)

const DrawerItem = (props) => {
    const clickHandler = React.useContext(drawerEventHandler)
    // console.log(clickHandler())
    const Icon = props.icon
    const styles = props.sx
    return(
    <Box display='flex' alignContent='space-between' sx={{width:'13rem', border:'0.5px hidden', borderRadius:2, margin:'1rem', padding:'0.15rem 0 0 0', ...styles}}>
        <Button variant='text' sx={{padding:'0 0 0 0' , color:'inherit'}} onClick={clickHandler()}>
                {Icon && (<Icon sx={{ padding:'0 5px 0 5px' }}/>) }
                
                <Typography fontSize={14}>
                    <Link to={`${props.link}`} style={{ color:'inherit',textDecoration: 'none' }}>{props.text}</Link>
                </Typography>
        </Button>
    </Box>
    );
}

const DrawerAccordion = () => {
    return(
        <Accordion>

            <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-controls='drawerOptions-content' id='drawerOptions-header'>
                <Typography sx={{ padding:'0 0.5rem' }}>نوکلئیک اسید</Typography>
            </AccordionSummary>

            <AccordionDetails >
                <DrawerItem text="DNA"/>
                <DrawerItem text="Primer"/>
            </AccordionDetails>
        </Accordion>
    );
}
/******/
function MyDrawer(props){

    // const sideBarData = props.drawerData
    const sideBarData = data

    const [state, setState] = React.useState({right:false})
    // console.log(state)

    const toggleDrawer = (isOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
        setState({right:isOpen})
        return;
    }


    return (
    <>
        <IconButton 
        size="large" edge='start'
        color='inherit'
        aria-label="menu"
        sx={{ ...props.sx }} 
        onClick={toggleDrawer(true)} >
            <MenuIcon/>
        </IconButton>

        <Drawer anchor='right'
         open={state['right']}
         onClose={toggleDrawer(false)}
         >
            {/* CONTENT OF DRAWER */}
            <drawerEventHandler.Provider value={() => toggleDrawer(false)}>
            <Box role="presentation" >
                    <Logo sx={{ padding:'12px 16px 9px 5px ' }}/>
                    <Divider variant='middle' sx={{ width:'90%' }}/>

                    <DrawerItem link='/products' text="راکیزه شاپ" icon={ShoppingBasket}/>
                    <DrawerItem link='/journal' text="مجله راکیزه" icon={ImportContacts}/>
                    <DrawerItem link='/' text="فروش ویژه" icon={OfflineBolt}/>
                    <DrawerItem link='/' text="در راکیزه بفروشید" icon={Storefront}/>
                    <DrawerItem link='/contact-us' text="تماس با ما" icon={LocalPhone}/>
                    <DrawerItem link='/about-us' text="درباره راکیزه" icon={ImportContacts}/>

                    <Divider variant='middle' sx={{ width:'90%' }}/>
                    <DrawerItem text="دسته بندی کالاها"/>

                    <Divider variant='middle' sx={{ width:'90%' }}/>

                    {
                    sideBarData.map((obj,key) =>
                       ( <DrawerItem text={obj.title}  icon={obj.icon} key={key}/>)
                        )
                    }
                    {/* <DrawerAccordion/> */}
            </Box>
            </drawerEventHandler.Provider>
        </Drawer>
    </>)
}

export default MyDrawer;

const data = [
    {title:'کیت تست',icon:ImportContacts},
    {title:'کیت تست',icon:ImportContacts},
    {title:'کیت تست',icon:ImportContacts},
    {title:'کیت تست',icon:ImportContacts},
]