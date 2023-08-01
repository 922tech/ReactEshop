import * as styleVars from "../../styleVariables";
import {FlexRow} from "../../baseComponents/Flex";
import {Storefront} from "@mui/icons-material";
import {Box, Divider} from "@mui/material";
import Button from "@mui/material/Button"
import {Price, PriceNoOff} from "../../baseComponents/Price";
import {loopList} from "../../utils";
import React from "react";
import {styled} from "@mui/system";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import {OffChip} from "../../baseComponents/OffChip";
import AddToBasketRoot from "../../baseComponents/AddToBasketRoot";
import Counter from "../../baseComponents/Counter";
import { useBasketState } from "../../../context/BasketContext";

const productData = {id:'123'}

const cardContent  = [
    {text:'تضمین کیفیت' , icon: <WorkspacePremiumIcon /> },
    {text:'نازل ترین قیمت' , icon:<PriceCheckIcon /> },
    {text:'هر ساعتی از شبانه روز' , icon: <AccessTimeIcon /> },
]

const CardP = styled('p')({
    paddingRight: '6px',
})

const HeaderBox= styled(FlexRow)({
    height: '100%',
    alignItems: 'center',
    background: '#d6d6d6a6',
    borderTopLeftRadius: styleVars.borderRadius,
    borderTopRightRadius: styleVars.borderRadius
})

const ProductCard = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'start',
    flexGrow: 1,
    flexDirection: 'column',
    minWidth:'230px',
    maxWidth:'280px',
    border: styleVars.borderRoot,
    borderRadius: styleVars.borderRadius,
    marginRight: '10px',
    marginLeft: '20px',
    fontSize: '0.9rem',
})

const BottomShoppingCardWrapper = styled(Box)({
    display:'grid',
    position:'sticky',
    bottom:'0%',
    borderRadius:'10px',
    border:'2px',
    height:'1%',
    width:'97%',
    margin:'auto',
    backgroundColor:'white',
    py:'8px',
    boxShadow:5
})

const ShoppingCardDesc = ({data}) => {
  return(
      <FlexRow sx={{ alignItems:'center', mr:'6px', fontSize:'0.8rem' }}>
      {data.icon}
      <CardP>{data.text}</CardP>
      </FlexRow>
  )
}

export const BottomShoppingCard = (props) => {
    const { price, off } = useBasketState().productData
    const bps = {
    disableElevation:true,
    variant:"contained",
    sx:{ width:'75%', m:'auto' }
    }
    return(
        <BottomShoppingCardWrapper>
            <FlexRow sx={{alignItems:'center', pr:'4px'}}>
                    <Storefront />
                    <p style={{ paddingRight:'6px' }}>فروشنده:</p>
                    <p style={{ fontWeight:'bold', paddingRight:'6px' }}> راکیزه ژن</p>
                </FlexRow>
            <FlexRow sx={{ alignItems: 'center', justifySelf: 'left', pl:'4px' }}>
                    <PriceNoOff price={'25000'}/>
                    <OffChip scale={0.8} label={off+'%'} color='primary' sx={{ mr: '8px' }}/>
            </FlexRow>
            <Price price={price}  sx={{fontSize: '1rem', justifySelf: 'left'}}/>

            {/*<Button disableElevation variant="contained" sx={{ width:'75%', m:'auto' }}>افزودن به سبد خرید</Button>*/}
            {/*<AddToBasketButton data={productData}/>*/}
            
            <AddToBasketRoot data={productData} component={Button} componentProps={bps}/>

        </BottomShoppingCardWrapper>
)
}


export const DashboardShoppingCard = (props) => {
    const { price, off } = useBasketState().productData
    let isAdded = null;
    console.log('OOFF','%')
    console.log('OOFF',off,'%')
    
    return (
        <ProductCard>
            <HeaderBox>
                <Storefront sx={{ mr:'6px' }}/>
                <FlexRow>
                    <p style={{ paddingRight:'6px' }}>فروشنده:</p>
                    <p style={{ fontWeight:'bold', paddingRight:'6px' }}> راکیزه ژن</p>
                </FlexRow>
            </HeaderBox>
            <Divider/>
            {loopList(cardContent,ShoppingCardDesc)}
            


            <div style={{ justifyItems: 'left', display: 'grid', fontSize: '2rem', paddingLeft: '8px', paddingRight:'8px' }}>

                <FlexRow sx={{ justifyContent: 'space-between',width:'100%'}}>
                    <Counter productData={productData}/>
                    <FlexRow sx={{ alignItems: 'center' }}>
                        <PriceNoOff price={'25000'}/>
                        <OffChip scale={0.8} label={off+'%'} color='primary' sx={{ mr: '8px' }}/>
                    </FlexRow>
                </FlexRow>
                <Price price={price}  sx={{fontSize: '1.5rem'}}/>
            </div>

            {/*<Button*/}
            {/*    disableElevation*/}
            {/*    variant="contained"*/}
            {/*    sx={{*/}
            {/*    width: '75%',*/}
            {/*    alignSelf: 'center',*/}
            {/*    my: '1rem'*/}
            {/*}}>*/}
            {/*    افزودن به سبد خرید*/}
            {/*</Button>*/}
            <AddToBasketRoot data={productData} component={Button} componentProps={pps} isAdded={isAdded}/>
        </ProductCard>
    )
}

const pps = {
    disableElevation:true,
    variant:"contained",
    sx:{
    width: '75%',
    alignSelf: 'center',
    my: '1rem'
    }
}

