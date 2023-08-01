import { AccordionDetails, Box, Checkbox, FormControlLabel, Slider, styled } from '@mui/material';
import GridedTable from './baseComponents/GridedTable';
import { loopList, useWidth } from './utils';
import { FlexCol } from './baseComponents/Flex';
import * as styleVars from './styleVariables';
import { Accordion, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';


const CardsWrapper = styled(Box)({
    display:'flex',
    flexDirection:'column',
    width:'15%',
    marginRight:'8px',
    
})

const FiltersWrapper = styled('ul')({ 
 display:'inline-flex',
 justifyContent:'flex-start',
 marginBottom:0,
 marginRight:0,
 paddingRight:0,
 width:'70%' })

const FilterItem = styled('p')((props, theme)=>({
    padding:'5px 5px 5px 15px',
    fontSize:'13px',
    width:"fit-content",
    backgroungColor:props.checked?theme.palette.primary:'transparent',
    '&:hover':{cursor:'pointer'},
    
}))

const CardText = styled('p')({
    textAlign:'center',
})

const CategoryCard = styled('div')({
    borderRadius: styleVars.borderRadius,
    border: styleVars.borderRoot, 
    width:'100%',
    position:'relative',
    top:'69px',
    padding:'2px'

});

const ResponsiveTypography = ({children,sx}) => {
    return(
        <Typography sx={{ ...sx, fontSize:{xs:'12px', md:'1rem', s:'12px'} }}>{children}</Typography>
    )
}
const PriceFilterSlider = ({data, range}) => {
    const [priceRange, setPriceRange] =  React.useState([0,100000])
    function valuetext(value) {
    return `${value}تومان`;
    }

  const handleChange = (event, newValue) => {
        setPriceRange(newValue);
        range = priceRange
  };

    return (
    <AccordionDetails onClick={() => filter(data)} sx={{ fontSize:'14px', p:0, width:'90%'}} >

        <ResponsiveTypography sx={{ padding:'0 0.5rem', fontSize:'14px', fontFamily:'Shabnam FD' }}>
            {`${parseInt(priceRange[1]).toLocaleString()} - ${parseInt(priceRange[0]).toLocaleString()} هزارتومان` }
        </ResponsiveTypography>

        <Slider
            getAriaLabel={() => 'محدوده قیمت'}
            value={priceRange}
            onChange={handleChange}
            valueLabelDisplay="off"
            min={100}
            step={100}
            max={10000}
            getAriaValueText={valuetext}
            sx={{ mr:'15px',pr:'3px',width:'90%',
            '& .MuiSlider-thumb':{height:'15px', width:'15px'},
            '& .MuiSlider-track':{height:'2px'},
            '& .Mui-active':{boxShadow:'0 0 10px 5px'} }}
        />

    </AccordionDetails>
    )
}

const PriceFilterWrapper = () => {
    return(
        <Accordion sx={{ boxShadow:'none', pd:'2px' }}>
            <AccordionSummary
             expandIcon={<ExpandMoreIcon/>}
             aria-controls='drawerOptions-content'
             id='drawerOptions-header'
            >
                <ResponsiveTypography sx={{ padding:'0 0.5rem' }}>محدوده قیمت</ResponsiveTypography>
            </AccordionSummary>
            <PriceFilterSlider/>
         </Accordion>
    )
}

const AccordionDetail = ({data}) => {
    const [check, setCheck] =  React.useState(false)
    console.log(check)

    return (
    <AccordionDetails sx={{ fontSize:'14px', p:0 }} >
        <FormControlLabel
         checked={check}
         control={<Checkbox defaultChecked={false} />}
         label={data}
         sx={{mr:'1px', fontSize:'12px', '& .MuiFormControlLabel-label':{fontSize:{lg:'14px', md:'12px'}}}}
         onChange={() => setCheck(!check)}
         />
    </AccordionDetails>
    )
}

const DrawerAccordion = ({data}) => {
    console.log(data);
    return(
        <Accordion sx={{ boxShadow:'none', pd:'2px' }}>
            <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls='drawerOptions-content'
             id='drawerOptions-header'
            >
                <ResponsiveTypography sx={{ padding:'0 0.5rem' }}>{data.title}</ResponsiveTypography>
            </AccordionSummary>
           {data.detail.map((value,key)=>  (<AccordionDetail data={value} key={key}/>))}
        </Accordion>
    )
};
function filter(){
    // the function speaks to server API
    return null
};
const Filter = ({text}) => {
    return(
        <FilterItem onClick={filter}>
            {text}
        </FilterItem>
    )
};

const Filters = () => {
    return(
        <FiltersWrapper>
            <FilterItem sx={{ fontSize:{md:'12px', xs:'10px'} }}>مرتب سازی بر اساس:</FilterItem>
            <Filter text={'گران‌ترین'}/>
            <Filter text={'ارزان‌ترین'}/>
            <Filter text={'محبوب‌ترین'}/>
            <Filter text={'جدید ترین'}/>
        </FiltersWrapper>
    )
}

const Products = () => {
    const Width = useWidth()
    const BPs = ['xs','s']
    const [filter, userFilter] = React.useState('')
    
    function handleFilterState(){
        
    }
    return(
        <>
        <Box sx={{ display:'flex', justifyContent: 'space-around' }}>

            {!BPs.includes(Width) &&
             (<CardsWrapper>
                <CategoryCard sx={{ pd:'2px' }}>
                    {loopList(filterData, DrawerAccordion, {})}
                    <PriceFilterWrapper />
                </CategoryCard>   
            </CardsWrapper>)}

            <FlexCol sx={{width:'80%', alignContent:'center', justifyContent:'center'}}>
                {Width !== 'xs' &&
                 (<FiltersWrapper>
                    <FilterItem sx={{ fontSize:{md:'12px', xs:'10px'} }}>مرتب سازی بر اساس:</FilterItem>
                    <Filter text={'گران‌ترین'}/>
                    <Filter text={'ارزان‌ترین'}/>
                    <Filter text={'محبوب‌ترین'}/>
                    <Filter text={'جدید ترین'}/>
                 </FiltersWrapper>)}
                <GridedTable
                 data={Data}
                 sx={{width:'100%', boxSizing:''}}
                 lengths={{lg:3, md:4, sm:6, xs:12}}
                 />
            </FlexCol>
            <br />
        </Box>
        <br />
        </>
    )
};
export default Products;

const filterData  = [
    {title:'دسته‌بندی', detail:['محیط کشت', 'کیت تست', 'ظروف ازمایشگاهی']},
    {title:'برند', detail:['Merk', 'QLab', 'Sigma']},
]
const Data = [
    {id:0, picture:'/heater.jpg',title:'محیط کشت مولر هینتون اگار', price:0,off:0, link:'/products'},
    {id:1, picture:'/heater.jpg',title:'محیط کشت مولر هینتون اگار', price:'۲۱۷,۰۰۰',off:50, link:'/products'},
    {id:2, picture:'/heater.jpg',title:'محیط کشت مولر هینتون اگار', price:0,off:0, link:'/products'},
    {id:3, picture:'/heater.jpg',title:'محیط کشت مولر هینتون اگار', price:0,off:0, link:'/products'},
    {id:4, picture:'/heater.jpg',title:'محیط کشت مولر هینتون اگار', price:'۲۱۷,۰۰۰',off:50, link:'/products'},
    {id:5, picture:'/heater.jpg',title:'محیط کشت مولر هینتون اگار', price:'۲۱۷,۰۰۰',off:50, link:'/products'},
    {id:6, picture:'/heater.jpg',title:'محیط کشت مولر هینتون اگار', price:'250000',off:50, link:'/products'},
    {id:7, picture:'/heater.jpg',title:'محیط کشت مولر هینتون اگار', price:'250000',off:0, link:'/products'},
    {id:8, picture:'/heater.jpg',title:'محیط کشت مولر هینتون اگار', price:'250000',off:50, link:'/products'},
    {id:9, picture:'/heater.jpg',title:'محیط کشت مولر هینتون اگار', price:'250000',off:0, link:'/products'},
    {id:10, picture:'/heater.jpg',title:'محیط کشت مولر هینتون اگار', price:'250000',off:50, link:'/products'},
    {id:11, picture:'/heater.jpg',title:'محیط کشت مولر هینتون اگار', price:'250000',off:50, link:'/products'},
]
