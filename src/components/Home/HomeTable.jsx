import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import GridedTable from '../baseComponents/GridedTable';

const HomeTableBox = styled('div')({
    width:'100%',
    margin:'auto',
})

 const HomeTable = () => {
     
     
    return(
        <HomeTableBox>
            <Typography sx={{ textAlign:'center', my:'10px' }}>منتخب محصولات حراج</Typography>
            <GridedTable data={Data} />
        </HomeTableBox>
    )
}
export default HomeTable;

/////////////////////////////////////////////

const Data = [
    {id:0,picture:'/heater.jpg',title:'بخاری برقی پارس‌‌خزر', price:'220000',off:50, link:'/products'},
    {id:1,picture:'/heater.jpg',title:'بخاری برقی پارس‌‌خزر', price:'250000',off:50, link:'/products'},
    {id:2,picture:'/heater.jpg',title:'بخاری برقی پارس‌‌خزر', price:'250000',off:50, link:'/products'},
    {id:3,picture:'/heater.jpg',title:'بخاری برقی پارس‌‌خزر', price:'250000',off:50, link:'/products'},
    {id:4,picture:'/heater.jpg',title:'بخاری برقی پارس‌‌خزر', price:'380000',off:50, link:'/products'},
    {id:5,picture:'/heater.jpg',title:'بخاری برقی پارس‌‌خزر', price:'250000',off:50, link:'/products'},
    {id:6,picture:'/heater.jpg',title:'بخاری برقی پارس‌‌خزر', price:'250000',off:50, link:'/products'},
    {id:8,picture:'/heater.jpg',title:'بخاری برقی پارس‌‌خزر', price:'450000',off:50, link:'/products'},
    {id:9,picture:'/heater.jpg',title:'بخاری برقی پارس‌‌خزر', price:'250000',off:50, link:'/products'},
    {id:10,picture:'/heater.jpg',title:'بخاری برقی پارس‌‌خزر', price:'250000',off:50, link:'/products'},
    {id:11,picture:'/heater.jpg',title:'بخاری برقی پارس‌‌خزر', price:'120000',off:50, link:'/products'},
    {id:12,picture:'/heater.jpg',title:'بخاری برقی پارس‌‌خزر', price:'250000',off:50, link:'/products'},
]