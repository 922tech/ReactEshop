import {styled} from "@mui/system";
import * as styleVars from "../../styleVariables";
import React from "react";
import {Button} from "@mui/material";
import {detectBrowser} from "../../utils";
import AddToBasketRoot from "../../baseComponents/AddToBasketRoot";
import { useBasketState } from "../../../context/BasketContext";

const DescriptionCardBox = styled('div')({
    display: 'flex',
    position: 'sticky',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    top: '5px',
    margin: '80px 16px 16px 16px ',
    width: '20%',
    height: 'fit-content',
    border: styleVars.borderRoot,
    borderRadius: styleVars.borderRadius,
    fontSize:'0.7vw'
})

const CardItem = styled('div')({
    margin: 'auto',
    fontSize:'0.8rem',
    textAlign:'center',
    maxWidth:'95%',
    py:'4px'
})

const DescriptionCard = () => {
    const { id,title } = useBasketState().productData
    const browser = detectBrowser()
    return (
        <DescriptionCardBox sx={{ mt:browser==='chrome'?'93px':'80px' }}>

                <img src = "/phone.webp" width = '75%' alt = "" srcset = "" style = {{margin: 'auto', paddingTop:'16px'}}/>
                 <CardItem>{title}</CardItem>
            <AddToBasketRoot data={ {id:id} } component={Button} componentProps={pps}/>

            {/*<Button*/}
            {/*    disableElevation*/}
            {/*    variant = "contained"*/}
            {/*    sx={{*/}
            {/*    width: '75%',*/}
            {/*    alignSelf: 'center',*/}
            {/*    my: '1rem',*/}
            {/*    fontSize:'1.2vw'*/}
            {/*    }}>*/}
            {/*    افزودن به سبد خرید*/}
            {/*</Button>*/}
            </DescriptionCardBox>
    )
}
export default DescriptionCard;
const pps = {
    disableElevation:true,
    variant :"contained",
    sx:{
        width: '75%',
        alignSelf: 'center',
        my: '1rem',
        fontSize:'1.2vw'
    },
}
