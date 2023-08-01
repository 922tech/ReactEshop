import React from "react";
import {FlexRow} from "../../baseComponents/Flex";
import {customIcons as gradeIcons} from "../../baseComponents/Rating";
import {Box, Divider, useMediaQuery, useTheme} from "@mui/material";
import {styled} from "@mui/system";
import Options from "./Options";
import {DashboardShoppingCard, BottomShoppingCard} from "./ShoppingCard";
import { useBasketState } from "../../../context/BasketContext";
import { loopList } from "../../utils";


const ProductPanel = styled(FlexRow)({
    justifyContent: 'space-between',
    paddingBottom: '1rem'
})

const CardP = styled('p')({
    paddingRight: '10px',
})

const FeedbackCountBox = styled(FlexRow)({
    opacity: '70%',
    fontSize: '0.6rem',
    width: 'fit-content'
})

const DescriptionP = styled('p')({
    padding: '4px',
    margin: 0
})

const ProductCard = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'start',
    flexGrow: 1,
    flexDirection: 'column',
})

const Property = ({data, sx}) => {
    return (
        <FlexRow sx= {{...sx, fontSize: '0.8rem'}}>
                <DescriptionP sx = {{fontWeight: 'bold', paddingRight: '0'}}>{data[0]}:</DescriptionP>
                <DescriptionP>{data[1]}</DescriptionP>
        </FlexRow>
    )
}


const Feedbacks = () => {
    const { comments, feedbackStatus, feedbacks } = useBasketState().productData

    console.log(comments.length, feedbackStatus, feedbacks)
    return (
        <>
            <FeedbackCountBox>
                        {gradeIcons[feedbackStatus].icon}
                <CardP>
                        از {feedbacks} بازخورد
                </CardP>
                <CardP sx = {{position: 'relative', right: '29%', padding: 0}}>{comments.length} نظر</CardP>
            </FeedbackCountBox>
        </>
    )
}

/////////////////////////////////////////////////////////////////////////

const pos = {position: 'relative', right: '25%'}

const ProductData = (props) => {
    const { brand, category, title, features } = useBasketState().productData

    return (
        <ProductCard sx={{ flexGrow: 3, justifyContent: 'flex-start' }}>
            <h2>{title}</h2>
            <FlexRow sx={{ fontSize: '0.8rem', justifyContent: 'flex-start', width: 'fit-content' }}>
                <Property Key={'برند'} value={brand} data={['برند',brand]}/>
                <Property Key={'دسته بندی'} value={category} data={['دسته بندی',category]} sx={pos}/>
            </FlexRow>

            <Feedbacks/>
            <Divider/>
            <Options />

            <CardP sx = {{fontWeight: 'bold', fontSize: '0.9rem'}}>مشخصات</CardP>
            <ul style = {{margin: '0'}}>
                { features.map( (data, key) => <li><Property key={key} data={data}/></li> ) }
            </ul>
        </ProductCard>
    )
}
/////////////////////////////////////////////////////////////////////////

const ProductDashboardContent = (props) => {
    const sm = useMediaQuery('(max-width:780px)');
    const md = useMediaQuery('(max-width:1055px)');
    const lg = useMediaQuery('(min-width:1055px)');
    const { image, title } = useBasketState().productData
    // const img = "http://localhost:3000/muller.jpg"
    // const title = 'محیط کشت مولر هینتون آگار'

    const imgWidth = (!lg) ? '50%':'inherit' ;
    const imgMargin = (!lg) ? '0':'16px' ;
    const imgPos = (!lg) ? '50%':'auto' ;

    return(
      <>
        <FlexRow sx={{  mx:imgMargin, width:imgWidth, justifyItems:'center', maxWidth:lg?'25%':'100%' }}>
            <img width='100%' height='100%'  src={`${image}`} alt={`${image}`} style={{ position:'relative', right:imgPos }}/>
        </FlexRow>
        <ProductData title={title} sx = {{ flexGrow: 1, border:'1px solid black' }}>دیتا</ProductData>
        {lg && <DashboardShoppingCard/>}
      </>
    )
}

const ProductDashboard = (props) => {
    // const description = desc
    const sm = useMediaQuery('(max-width:780px)');
    const md = useMediaQuery('(max-width:1055px)');
    const lg = useMediaQuery('(min-width:1055px)');

    const Large = (
        <ProductPanel>
             <ProductDashboardContent />
        </ProductPanel>)
    return (
        <>
        {lg && Large}
        {!lg && <ProductDashboardContent />}
        </>
    )
}

export default ProductDashboard;