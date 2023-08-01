import { Toman } from "../utils";
import { styled } from '@mui/material/styles';


const PriceBox = styled('div')({
    fontWeight:'bold',
    display:'flex',
    alignContent:'center',
    fontFamily:'Shabnam FD',
    width:'fit-content',
})

const PriceNoOffBox = styled('div')({
     textDecoration:'line-through',
     opacity:'50%',
     fontSize:'12px',
     textAlign:'center',
     fontFamily:'Shabnam FD' 
})

export const PriceNoOff = ({price, sx, off}) => {
    const priceNoOff = parseInt(price)*(1+off/100)
    price = priceNoOff.toLocaleString()
    return(
        <div style={{ width:'fit-content', ...sx }}>
            <PriceNoOffBox title='قیمت بدون تخفیف' style={{visibility:off?'visible':'hidden'}}>
                {price}
            </PriceNoOffBox>
        </div>                    
    )
}

export const Price = ({price, sx}) => {
    price = parseInt(price).toLocaleString()
    return(
        <PriceBox className="Price"  title='قیمت نهایی' sx={sx} >
            { price? price : 'ناموجود'}
            {<Toman/>}
        </PriceBox>   
    )
}