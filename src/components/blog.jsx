import useState from 'react';
import {useMediaQuery ,Card,CardContent,CardMedia,CardActions, Grid, Button, Box,Typography, Pagination, Link, Chip ,Stack} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {Visibility, CreateOutlined,AccessTime } from '@material-ui/icons/';

export const Hello = () => {return(<h1>HELLO</h1>)}

export const useThemeProps = (breakpoint) => {
    const theme = useTheme()
    const query = useMediaQuery(theme.breakpoints.up(breakpoint))
    return query
  }

function onViewPost(url){
    // router : view post url
    return null
}

const CardViewActin = () => {
    return(
        <Box display='flex' justifyContent='flex-end' sx={{margin:'-10px 15px 5px 5px'}} alignItems='center'>
        <CardActions> 
            {/* <Button variant='outlined' onClick={() => onViewPost(props.url)} sx={{opacity:'95%'}}> */}
            <Button variant='outlined' onClick={useThemeProps} sx={{opacity:'95%'}}>

                {/* <Link> */}
                <Visibility />
                {/* </Link> */}
            </Button>
        </CardActions>
    </Box>
    )
}
  
export function PostCard(props) {
    let title = props.title
    const breakpoints = [useThemeProps('sm'),useThemeProps('md'),useThemeProps('lg')]

    if (breakpoints.includes(true)) {
        title = (props.title.length < 25) ? (props.title) : ((props.title.slice(0,25)+'...'));
    }
    
    return( 
        <>
        <Card>
                <CardMedia src={props.src} component="img" title={props.title} />
            {/*<Box>*/}

                <CardContent sx={{padding:'5px 15px 0 15px', display:'inline-block'}}>
                    <Stack direction='column' width={'80'} spacing={1}>
                    {/* <Chip label={props.date} variant='outlined' size='small' sx={{fontSize:10}} width={'2.5rem'}/> */}
                        <Stack direction='row'>
                            <AccessTime fontSize='small' style={{width:'0.75rem', paddingTop:'3px', opacity:'60%'}} />
                            <Typography title="تاریخ"  style={{fontSize: 10, alignItems:'center', opacity:'50%', padding:'7px 4px 0px 4px'}}>{props.date} </Typography>
                        </Stack>
                    {/* </Chip> */}
                    <Typography  title="عنوان" sx={{fontSize: 15, fontWeight:'bold', maxHeight:{'xs':'auto','md':'1rem'}}} >{title}</Typography>
                    
                        <Stack direction='row' spacing={4}>
                            <Stack> <CreateOutlined fontSize='small' style={{width:'0.9rem', paddingTop:'2.5px'}} /> </Stack>
                            <Stack> <Typography  title="نویسنده" sx={{fontSize: 12, paddingTop:'5px', paddingRight:'2px'}}>{props.auther} </Typography></Stack>
                        </Stack>

                    </Stack>
                </CardContent>
        </Card>
        </>
    );
}
/////////////////////////// Grid //////////////////////////////
export const GridCard = (props) => {
    const Component = props.component
    return(
        <Grid item key={props.key}  xs={12} md={4} sm={6} {...props.overrides}> <Component {...props}/> </Grid>
    )
}

export const MyGrid = (props) => {
    return(
    <Grid container direction='row' spacing={2}  style={{width:'80%'}} {...props.overrides} >
        {props.elements}
    </Grid>
    );
}
/////////////////////////////////////////////////////////////

export function Blog() {

    return(
    <>
        {/* <Typography variant='h2'>بلاگ</Typography> */}
        {/* <h2>بلاگ</h2> */}
        <Box display='flex'  justifyContent="center"   alignItems="center" sx={{ my:'2rem' }}>
            <Grid container direction='row'   spacing={2}  style={{width:'80%'}} >
                <Grid item  xs={12} md={4} sm={6}> <PostCard title='راکیزه چیست؟' auther='حمید بهزادی' date="2022/11/10" src="/default.jpg"/> </Grid>
                <Grid item  xs={12} md={4} sm={6}> <PostCard title='نقش فسفولیپید در ترابرد غشایی سلول چیست؟' auther='حمید بهزادی' date="2022/11/10" src="/default.jpg"/> </Grid>
                <Grid item  xs={12} md={4} sm={6}> <PostCard title='راکیزه چیست؟' auther='حمید بهزادی' date="2022/11/10" src="/default.jpg"/> </Grid>
                <Grid item  xs={12} md={4} sm={6}> <PostCard title='راکیزه چیست؟' auther='حمید بهزادی' date="2022/11/10" src="/default.jpg"/> </Grid>
                <Grid item  xs={12} md={4} sm={6}> <PostCard title='راکیزه چیست؟' auther='حمید بهزادی' date="2022/11/10" src="/default.jpg"/> </Grid>
                <Grid item  xs={12} md={4} sm={6}> <PostCard title='راکیزه چیست؟' auther='حمید بهزادی' date="2022/11/10" src="/default.jpg"/> </Grid>
            </Grid>
        </Box>
        <Pagination variant='outlined' count={10} sx={{direction:'ltr',display: 'flex', justifyContent: 'center', margin:'2rem 0 2rem 0'}}/>
    </>
    );
}
