import { Grid, Typography, Box, Paper } from "@mui/material";
import { styled } from "@mui/styles";
import { FarsiNumber, loopList } from './utils';
import { UnstlyedLink as Link } from "./utils";
import * as styleVars from './styleVariables';

const BestSeller = styled(Paper)({
    display:'flex',
    alignItems:'center',
    alignContent:'center',
    padding:'8px',
    // height:'5vw',
    borderRadius: styleVars.borderRadius,
    
})

const BestSellerBox = ({data}) => {

    return(
            <BestSeller elevation={1}  sx={{ height:'80px',  }}>
                <div style={{ width:'20%', textAlign:'center' }}>
                    <FarsiNumber fontWeight={'bold'} color='primary' sx={{ fontSize:{lg:'40px', s:'30px', xs:'20px' } ,alignSelf:'center', minWidth:'35px', px:'8px' }} >{data.rank}</FarsiNumber>
                </div>
                
                    <img src={data.picture}  height='80%'  style={{borderRadius: styleVars.borderRadius}}/>
                    <Typography
                     fontSize={12}
                     fontWeight={'bold'}
                     alignSelf='center'
                     margin='8px'
                     sx={{ fontSize:{ sm:'12px', xs:'10px' } }}>
                        {data.title}
                    </Typography>
            </BestSeller>
    )
}


const BestSellerRowItem = ({data}) => {
    return(
        <Grid item xs={6} sm={6} md={3} lg={3}>
            <Link to={data.link}>
                <BestSellerBox data={data}/>
            </Link>
        </Grid>
    )
}


const BestSellersTable = ({data}) => {
    data = Data
    const children = loopList(data, BestSellerRowItem)
    return(
        <Box sx={{ border:styleVars.borderRoot, borderRadius:styleVars.borderRadius,width:'100%',margin:'auto',  }}>
            <Typography textAlign={'center'} padding={'10px'}>پرفروش ترین محصولات</Typography>
            <Grid container direction={'row'} spacing={1} padding='8px'>
                {children}
            </Grid>
        </Box>
    )
}

export default BestSellersTable;

const Data = [
    {rank:'01',picture:'/heater.jpg',title:'بخاری برقی پارس‌خزر', price:'۲۱۷,۰۰۰',off:50, link:'/products/5555'},
    {rank:'02',picture:'/heater.jpg',title:'بخاری برقی پارس‌خزر', price:'۲۱۷,۰۰۰',off:50, link:'/products/5555'},
    {rank:'03',picture:'/heater.jpg',title:'بخاری برقی پارس‌خزر', price:'۲۱۷,۰۰۰',off:50, link:'/products/5555'},
    {rank:'04',picture:'/heater.jpg',title:'بخاری برقی پارس‌خزر', price:'۲۱۷,۰۰۰',off:50, link:'/products/5555'},
    {rank:'05',picture:'/heater.jpg',title:'بخاری برقی پارس‌خزر', price:'۲۱۷,۰۰۰',off:50, link:'/products/5555'},
    {rank:'06',picture:'/heater.jpg',title:'بخاری برقی پارس‌خزر', price:'250000',off:50, link:'/products/5555'},
    {rank:'07',picture:'/heater.jpg',title:'بخاری برقی پارس‌خزر', price:'250000',off:50, link:'/products/5555'},
    {rank:'08',picture:'/heater.jpg',title:'بخاری برقی پارس‌خزر', price:'250000',off:50, link:'/products/5555'},
    {rank:'09',picture:'/heater.jpg',title:'بخاری برقی پارس‌خزر', price:'250000',off:50, link:'/products/5555'},
    {rank:'10',picture:'/heater.jpg',title:'بخاری برقی پارس‌خزر', price:'250000',off:50, link:'/products/5555'},
    {rank:'11',picture:'/heater.jpg',title:'بخاری برقی پارس‌خزر', price:'250000',off:50, link:'/products/5555'},
    {rank:'12',picture:'/heater.jpg',title:'بخاری برقی پارس‌خزر', price:'250000',off:50, link:'/products/5555'},
]