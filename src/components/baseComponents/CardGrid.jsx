import { Hello, useThemeProps } from './blog';
import {useMediaQuery,Paper ,Card,CardContent,CardMedia,CardActions, Grid, Button, Box,Typography, Pagination, Link, Chip ,Stack} from "@mui/material";
import {Visibility, CreateOutlined,AccessTime } from '@material-ui/icons/';
import {PriceNoOff,Price} from './baseComponents/Price';

const GridCard = (props) => {
    const Component = props.component
    return(
        <Grid display='flex' item key={props.key} justifyContent='center' xs={12} md={3} sm={6}  {...props.overrides}> <Component {...props}/> </Grid>
    )
}

const MyGrid = (props) => {
    const breakpoints = [useThemeProps('sm'),useThemeProps('md'),useThemeProps('lg')]
    console.log(breakpoints)

    return(
    <Grid container direction='row' justifyContent='center' columnSpacing={{md:1, sm:0.05, xs:0.0}} rowSpacing={{md:2, sm:2, xs:0}} sx={{width:{md:'70%',sm:'80%', xs:'100%'}}} {...props.overrides} >
        {props.elements}
    </Grid>
    );
}

function PostCard(props) {
    let title = props.title
    const breakpoints = [useThemeProps('sm'),useThemeProps('md'),useThemeProps('lg')]
    // console.log('length is ======'+title.length)

    if (breakpoints.includes(true)) {

        if( title.length < 50 ){
            title = title + '.'.repeat(50 - title.length)
        } 
        else if (title.length >= 50) {
            title = title.slice(0,46) + '...'
        }
    }
    
    return( 
        <>
        <Card sx={{  margin:'0px solid', width:{lg:'8rem',sm:'10rem' , md:'10rem', xs:'auto'}, height:{sm:'20rem' , md:'20rem', xs:'auto'}, }} >
                <CardMedia src={props.src} height='150rem' width='150rem' component="img" title={props.title} sx={{ objectFit: "contain", alignContent:'center'}}/>
            {/*<Box>*/}
                {/* <img src={props.src} alt=""  height='150vw' width='150vw' /> */}

                <CardContent sx={{ display:'unset', height:'5vw',width:'auto'}}>
                    <Stack direction='column' width={'90%'} spacing={1} sx={{ width:'99%' }} >

                    <Stack direction='row'  >
                        <Typography  title="عنوان" sx={{fontSize: 10, maxHeight:{'xs':'auto','md':'auto'}}} >{title}</Typography>
                    </Stack>
                        {/* <Stack direction='row'>
                            <Typography title="قیمت"  style={{fontSize: 8,display:'unset', alignItems:'center', opacity:'50%', padding:'7px 4px 0px 4px'}}>{props.date} </Typography>
                        </Stack> */}
                    
                        <Stack direction='row' spacing={4}>
                            {/* <Stack> <CreateOutlined fontSize='small' style={{width:'0.9rem', paddingTop:'2.5px'}} /> </Stack> */}
                            <Stack> <Typography  title="نویسنده" sx={{fontSize: 8, paddingTop:'5px', paddingRight:'2px'}}>{props.auther} </Typography></Stack>
                        </Stack>

                    </Stack>
                </CardContent>
        </Card>
        </>
    );
}

const MyPaper= (props) => {
    let title = props.title
    const active = props.active
    const breakpoints = [useThemeProps('sm'),useThemeProps('md'),useThemeProps('lg')]

    if (breakpoints.includes(true)) {
        
        if (title.length >= 35) {
            title = title.slice(0,35-1) + '...'
        }
    }
    
    return (
    <Paper elevation={1} sx={{ position:'relative', margin:'0px solid', minWidth:{lg:'10rem',md:'8rem',sm:'12rem', xs:'18rem'}, width:{sm:'90%', md:'100%', xs:'90%'}, height:{sm:'20rem' , md:'18rem', xs:'95%', }, }} >
        
                <CardMedia src={props.src} height='70%' width='150rem' component="img"
                 title={props.title} sx={{ objectFit: "contain", alignContent:'center'}}/>
          
                <Box sx={{ display:'unset', height:'5vw',width:'auto'}}>
                    <Stack direction='column' width={'90%'} spacing={1} sx={{ padding:'0 5px 0 5px' }} >

                    <Stack direction='row' height='30px'  >
                        <Typography  title="عنوان محصول" sx={{fontSize: 13, maxHeight:{'xs':'auto','md':'auto'}}} >{title}</Typography>
                    </Stack>
                       
                        <Stack direction='row' spacing={1} justifyContent='left' alignContent='left'>
                            {active &&(
                            <Stack direction='column'>
                                <Stack direction='row'> 
                                    <Typography  title="تخفیف" sx={{fontSize:7, textDecoration:'line-through', marginLeft:'3px',lineHeight:3.5,opacity:'70%'}}>{props.price} </Typography>
                                    <Typography  sx={{fontSize:9, borderRadius:'3px', margin:'-4px 1px 12px 1px', padding:'4px 2px 2px 3px', color:'white', backgroundColor:'green', justifyContent:'center' }}>25%</Typography>
                                    {/* <Price price={props.price}/>
                                    <PriceNoOff priceNoOff={props.price}/> */}
                                </Stack>
                                <Stack sx={{ flexDirection:'row-reverse' }}> <Typography  title="قیمت" sx={{fontSize: 10, fontWeight:'bold',}}>{props.price} </Typography></Stack>
                            </Stack>)}
                            {!active &&(
                                <Stack direction='column'>
                                <Stack sx={{ flexDirection:'row-reverse' }}> <Typography  title="قیمت" sx={{fontSize: 10, fontWeight:'bold',}}> </Typography></Stack>
                                <Stack sx={{ flexDirection:'row-reverse' }}> <Typography  title="قیمت" sx={{fontSize: 10, fontWeight:'bold',}}>ناموجود</Typography></Stack>
                            </Stack>
                            )

                            }
                        </Stack>
                    </Stack>
                </Box>
                    {/* <Typography  title="عنوان" sx={{fontSize: 10, maxHeight:{'xs':'auto','md':'auto'}}} >{props.title}</Typography> */}

        </Paper>
        )
}

// (<GridCard component={PostCard}  title='راکیزه چیست؟' auther='23000 تومان'  src="/default.jpg"></GridCard>)
const arr = [,
<GridCard component={MyPaper}  title=' ساخت کشور المان محیط کشت مولر-هینتون آگار مرک پانصد گرمی' price='23000 تومان'  src="/phone.webp"></GridCard>,
<GridCard component={MyPaper}  title='محیط کشت مولر-هینتون آگار مرک 500' active={1} price='230000000 تومان'  src="/phone.webp"></GridCard>,
<GridCard component={MyPaper}  title='محیط کشت مولر-هینتون آگار مرک 500' active={1} price='23000 تومان'  src="/phone.webp"></GridCard>,
<GridCard component={MyPaper}  title='محیط کشت مولر-هینتون آگار مرک 500' active={1} price='23000 تومان'  src="/phone.webp"></GridCard>,
<GridCard component={MyPaper}  title='محیط کشت مولر-هینتون آگار مرک 500' active={1} price='23000 تومان'  src="/heater.jpg"></GridCard>,
<GridCard component={MyPaper}  title='محیط کشت مولر-هینتون آگار مرک 500' price='23000 تومان'  src="/heater.jpg"></GridCard>,
<GridCard component={MyPaper}  title='محیط کشت مولر-هینتون آگار مرک 500' price='23000 تومان'  src="/heater.jpg"></GridCard>,
<GridCard component={MyPaper}  title='محیط کشت مولر-هینتون آگار مرک 500' price='23000 تومان'  src="/heater.jpg"></GridCard>,
]



function Products(){
    return(
        <>
                <Box display='flex'  justifyContent='center' sx={{ marginTop:'40px' }} >
                    <MyGrid elements={arr} overrides={{ padding:'0 -20px 0 -20px',width:{md:'40%',sm:'40%',xs:'70%'}, }} />
                </Box>
            <Pagination variant='outlined' count={10} sx={{direction:'ltr',display: 'flex', justifyContent: 'center', margin:'2rem 0 2rem 0'}}/>

        </>
    )
}