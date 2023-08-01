import { Box,Grid, Stack, Typography, IconButton } from "@mui/material";
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import { styled } from '@mui/material/styles';
import { loopList, useWidth, roundGridLineCorners, UnstlyedLink as Link } from "../utils";
import {PriceNoOff,Price} from './../baseComponents/Price';
import {OffChip} from "./OffChip";
import AddToBasketRoot from "./AddToBasketRoot";
import { useBasketState } from "../../context/BasketContext";


const borderRoot = '1px solid #46464645'

const AddIcon = (isActive) => {
    return (
    <AddShoppingCartRoundedIcon
     fontSize="small"
     color={isActive.isActive? 'primary':'#c5cae9'}
     style={{marginBottom:'-10px'}}
    />
    )
};

const DeleteIconBotton = () => (
    <DeleteIcon 
    fontSize="small"
    color='primary'
    style={{marginBottom:'-10px'}}
    />
);

const AddButton = ({onClick, data, isActive}) => {
    const isAdded =  useBasketState().purchaseList[data.id]    
    return(
        <IconButton
         sx={{ px:'5px', width:'fit-content', height:'fit-content', border:'1px', borderRadius:'10%' }}
         onClick={onClick} 
         title={'افزون به سبد خرید'}
         disabled={!isActive}
         
         >
             { isAdded? <DeleteIconBotton /> : <AddIcon isActive={isActive}/>  }
        </IconButton>
    )
}

const Table = styled(Grid)({
    margin:'auto',
    minWidth:'300px',
    width:'100%',
    maxWidth:'100%',
    borderRadius:'10px',
    borderTop:borderRoot,
    borderLeft:borderRoot,
});

const RowItem = ({data,borderStyles}) => {
    const AddButtonComponent = ({onClick, isActive}) => <AddButton data={data} onClick={onClick} isActive={isActive}/>
    
    return(

        <Stack container direction='column'  sx={{ borderRight:borderRoot, borderBottom:borderRoot,  padding:'7%', ...borderStyles,'& :hover':{cursor:"pointer"}  }} >
            <Link to={`${data.link}`}>
                <Stack item>
                    <img src={data.picture} alt={data.title} width="75%" style={{margin:'auto'}}/>
                </Stack>
            </Link>

            <Stack item>
                    <Typography 
                     title='نام محصول' 
                     variant='p' 
                     sx={{ padding:'20px 0 10px 0',fontSize:'12px', fontWeight:'bold' }}
                    >
                        {data.title}
                    </Typography>
                    
                    <OffChip 
                     title='تخفیف' 
                     label={`${data.off}%`} 
                     color='primary' 
                     style={{visibility: Boolean(data.off) && Boolean(data.off)?'visible':'hidden'}}  
                    />

                    <Box 
                      display='flex'
                      flexDirection='row'
                      justifyContent={'space-between'}
                    //   justifyContent={data.price && data.off?'space-between':'flex-end'}
                      alignItems='end' alignContent='center'
                    >
                        {/* {(<OffChip title='تخفیف' label={`${data.off}%`} color='primary'  />)} */}
                    <AddToBasketRoot data={data} component={AddButtonComponent}/>
                        {/* {Boolean(data.off) && Boolean(data.off) && (<OffChip title='تخفیف' label={`${data.off}%`} color='primary'  />)} */}
                        <Box display='flex' flexDirection='column' alignItems='baseline'>
                            {(<PriceNoOff title='قیمت بدون تخفیف' price={data.price} off={data.off} sx={{ marginLeft:'18px', alignSelf:'self-end' }} />) }
                            { <Price title='قیمت نهایی' price={data.price} off={data.off}/>  }
                        </Box>
                    </Box >
            </Stack>
        </Stack>
    );
}

const rowNums = {md:3, lg:2, sm:6, xs:6}

const RowItemWrapper = (props) =>{
    return(
            <Grid item key={props.key} {...props.rowLengths} >
                    <RowItem data={props.data} borderStyles={props.borderStyles}/>
            </Grid>
    )
}

const GridedTable = ({data, sx, lengths={md:3, lg:2, sm:6, xs:6}}) => {
    
    // const lengths = rowNums;
    let children = loopList(data, RowItemWrapper, {rowLengths:lengths} );
    let rowLen = 12/lengths[useWidth()];
    roundGridLineCorners(children, rowLen);

    return(
         
            // <Typography sx={{ textAlign:'center', my:'10px' }}>منتخب محصولات حراج</Typography>
            <Table container spacing={0} margin='auto' style={sx}>
                {children}
            </Table>
         
    );
}


export default GridedTable;
