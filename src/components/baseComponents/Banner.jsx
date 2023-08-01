import { Grid } from "@mui/material";
import { UnstlyedLink as Link, loopList } from "../utils";
import { styled } from '@mui/material/styles';
import * as styleVars from '../styleVariables';


export const Banner = styled('img')({
    borderRadius:styleVars.borderRadius,
    width:'100%',
    margin:'auto',    
})


// const BannerFrame = styled(Box)({
//     margin:'4px',
//     display:'block',
//     justifyContent:'center',
//     alignContent:'center',
//     width:'calc(100%/2 - 1rem)',
//     '& :hover':{
//         cursor:'pointer'
//     }
// })

// const BannersBox = styled('div')({
//     display:'flex',
//     justifyContent:'center',
//     backgroundColor:'inherit',
//     overflow:'visible',
//     width:'100%',
//     padding:0,
//     margin:'auto',
//     flexWrap:"wrap",
//     flexDirection:'row',
// })

 
export const BannerWrapper = ({data, breakpoints}) => {
    return(
        
        <Grid item xs={breakpoints.xs} sm={breakpoints.sm} md={breakpoints.md} lg={breakpoints.lg} >
            <Link to={`${data.link}`}>
                <Banner src={data.image}/>
            </Link>
        </Grid>
    );
}


export const BannerGrid = ({ data, breakpoints, props }) => {

    const children = loopList(data, BannerWrapper, { breakpoints: breakpoints })

    return(
        <Grid container direction={'row'} {...props}>
            {children}
        </Grid>
    );
}


 