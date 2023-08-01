import {styled} from "@mui/system";
import React from "react";
import {Button, Divider, useMediaQuery} from "@mui/material";
// import * as styleVars from "../../styleVariables";
import {FlexRow} from "../../baseComponents/Flex";
import RadioGroupRating, {customIcons as gradeIcons} from "../../baseComponents/Rating";
// import {loopList} from "../../utils";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ListAltIcon from "@mui/icons-material/ListAltRounded";
import CommentIcon from "@mui/icons-material/SmsOutlined";
import Comments from "./Comments";
import DescTable from "./DescriptionTable";
import { useBasketState } from "../../../context/BasketContext";


const Description = styled('p')({
    textAlign:'justify',
    maxWidth:'90vw',

    fontSize:'0.8rem',
    lineHeight:'1.6rem',
})

const DescriptionBox = styled('div')({
    margin:'1rem',
    width:'80%',
})


const DescriptionText = () => {
    const desc = useBasketState().productData.description;
    
    const [open, setState] = React.useState(false);

    function handleOpenDescription() {
        setState(!open)
    }

    let description = open? desc : desc.slice(0,400)+'...' ;
    let buttonText = open? 'کمتر' : 'بیشتر';

    return(
            <Description>
                {description}
                <Button onClick={handleOpenDescription} sx={{ padding:0 }}>{buttonText}</Button>
            </Description>
    )
}


const DescriptionPanelTitle = ({title, icon}) =>{
    const Icon = icon
    return(
        <FlexRow sx={{mb:'0', alignItems:'center'}}>

            <Icon color='primary' variant='outlined' />
            <h4 style={{position:'relative', marginRight:'4px'}}>{title}</h4>

        </FlexRow>
    )
}

const DescriptionPanel = () => {
    const sm = useMediaQuery('(max-width:780px)');

    return(
        <DescriptionBox sx={{ width:sm ? '100%' : '80%', fontSize:sm ? '0.9rem':'1rem' }}>
            <DescriptionPanelTitle title={'معرفی محصول'} icon={SlideshowIcon} top='5px'/>

            <Divider />
            <DescriptionText />
            <DescriptionPanelTitle title={'مشخصات'} icon={ListAltIcon} top='5px'/>
            <Divider />

            <DescTable />
            <DescriptionPanelTitle title={'نظرات'} icon={CommentIcon} top='10px' />

            <Divider />
            <div>

                <Comments />
            </div>
        </DescriptionBox>
    )
}
//////////////////////////////////////////////////////////////////////////


export default DescriptionPanel;