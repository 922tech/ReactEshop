import { Typography, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/styles";
import { useThemeProps, useWidth } from "./utils";


const FooterBox = styled('div')((props) => ({
    background:'#1976d2',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    height:'160px',
    alignItems:'center'
}))


const InfoText = styled(Typography)((props) => ({
    fontSize:'12px',
    margin:'0',
    color:'white'
}))


const InfoBox = styled('div')((props) => ({
    display:'flex',
    flexDirection:'column',
    height:'75%',
    width:'75%',
    fontSize:'10px',
    padding:'0 10px'

}))

const Enamad = () => {
    return(
        <img src="./enamad.png" height='75%%'  alt="" srcset="" style={{ margin:'auto',borderRadius:'10px' }}/>
    )
}


const info = {
    tel:'021-88954431',
    address:'تهران - خیابان انقلاب - خیابان قدس - خیابان ایتالیا - ازمایشگاه جامع دانشگاه علوم پزشکی تهران - طبقه هشتم',
    telegram:'@Rakizeh',
    description:'فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد',
} 
const Info = ({data}) => {
    const theme = useTheme()
    const mQ = useMediaQuery(theme.breakpoints.up('lg'))

    data = info
    console.log(mQ)
    return (
        <InfoBox>
            <InfoText style={{ fontSize:'16px', fontWeight:'bold' }}>فروشگاه اینترنتی  دیجی لب</InfoText>
            { mQ && (<InfoText style={{ textAlign:'justify' }}>{data.description}</InfoText>)}
            <InfoText>تلفن: {data.tel}</InfoText>
            <InfoText>تلگرام: {data.telegram}</InfoText>
            <InfoText>آدرس: {data.address}</InfoText>
        </InfoBox>
    )
}


const Footer = () => {
    
    return(
        <>
            <FooterBox>
                <Info/>
                <Enamad/>
            </FooterBox>
        </>
    )
}
export default Footer;