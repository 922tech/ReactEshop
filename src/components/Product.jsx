import { Button, Typography, Divider,  } from "@mui/material";
import { styled } from "@mui/system";
// import { matchPath } from "react-router";
import RadioGroupRating from "./baseComponents/Rating";
import *  as styleVars from './styleVariables';
import {customIcons as gradeIcons} from './baseComponents/Rating';
import { FlexRow } from './baseComponents/Flex';
import './../fonts.css'
import {PriceNoOff,Price} from './baseComponents/Price';
import { Storefront } from "@mui/icons-material";
import { FilmBox, FilmFrame, FilmTape, FilmFrameDescription } from './baseComponents/FilmTape';
import { loopList, UnstlyedLink as Link } from "./utils";
import React from "react";
import CommentsIcon from "./baseComponents/icons/comments";
import QualitiesIcon from "./baseComponents/icons/qualities";
import { OffChip } from "./utils";
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ListAltIcon from '@mui/icons-material/ListAltRounded';
import CommentIcon from '@mui/icons-material/SmsOutlined';

// const FlexRow = styled('div')({
//     display:'flex',
//     flexDirection:'row'
// })

const ProductPanel = styled(FlexRow)({
    justifyContent:'space-between',
    paddingBottom:'1rem'
})

const ProductCard = styled('div')({
    display:'flex',
    justifyContent:'center',
    alignContent:'start',
    flexGrow:1,
    flexDirection:'column',
})

const CardP = styled('p')( {
    paddingRight:'10px',
} )


const FeedbackCountBox = styled(FlexRow)({
    opacity:'70%',
    fontSize:'0.6rem',
    width:'fit-content'
})


const DescriptionP = styled('p')({
    padding:'4px',
    margin:0
})

const Description = styled('p')({
    textAlign:'justify',
    width:'100%',
    fontSize:'0.9rem',
    lineHeight:'1.6rem',
})

const FilmProduct = ({data})=>{
    return(
      <FilmFrame >
        <Link to={`${data.link}`}>
          <img style={{ borderRadius:'10px', }} width='100%' height='100%' src={data.img} alt={data.title} loading="lazy"/>
        </Link>
        <FilmFrameDescription>{data.title}</FilmFrameDescription>
        <Price price={data.price} sx={{ alignSelf:'center' }}/>
      </FilmFrame>
      )
  }

const OtherProductsFilm = () => {
    const data = itemData
    const children = loopList(data, FilmProduct)
    return(
        <FilmBox>
            <FilmTape>
                {children}
            </FilmTape>
        </FilmBox>
    )
}

const itemData = [
    {
      img: '/phone.webp',
      title: 'محیط کشت',
      link:'/products',
      price:'2500000'
    },
    {
      img: '/phone.webp',
      title: 'کیت تست',
      link:'/products',
      price:'2500000'

    },
    {
      img: '/phone.webp',
      title: 'بافر آزمایشگاهی',
      link:'/products',
      price:'2500000'

    },
    {
      img: '/phone.webp',
      title: 'اسید و باز',
      link:'/products',
      price:'2500000'

    },
    {
      img: '/phone.webp',
      title: 'ظروف ازمایشگاهی',
      link:'/products'
    },
    {
      img: '/phone.webp',
      title: 'ابزار آزمایشگاهی',
      link:'/products'
    },


  ];

/////////////////////////////////////////////////////////////////////////

const Property = ({Key, value, sx}) =>{
    return(
            <FlexRow sx={{...sx, fontSize:'0.8rem'}} >
                <DescriptionP sx={{ fontWeight:'bold',paddingRight:'0' }}>{Key}:</DescriptionP>
                <DescriptionP>{value}</DescriptionP>
            </FlexRow>
    )
}


const Feedbacks = () => {
    const grade = 5
    const comments = 55
    const reaction = 200

    return(
            <FeedbackCountBox>
                        {gradeIcons[grade].icon}
                    <CardP >
                        از {comments} بازخورد
                    </CardP>
                <CardP sx={{position: 'relative', right: '29%', padding:0}}>{reaction} نظر</CardP>
            </FeedbackCountBox>
    )
}
/////////////////////////////////////////////////////////////////////////

const pos = { position: 'relative', right: '25%' }
const ProductData = (props) => {

    return(
        <ProductCard sx={{ flexGrow:5, justifyContent:'flex-start' }}>
            <h2>{props.title}</h2>
            <FlexRow sx={{ fontSize:'0.8rem' , justifyContent:'flex-start', width:'fit-content' }}>
                <Property Key={'برند'} value='Merk' />
                <Property Key={'دسته بندی'} value='محیط کشت' sx={pos}/>
            </FlexRow>
            <Feedbacks/>
            <Divider/>

            <CardP sx={{fontWeight:'bold', fontSize:'0.9rem' }}>مشخصات</CardP>
            <ul style={{margin:'0'}}>
                <li><Property Key={"وزن"} value='500 گرم' /></li>
                <li><Property Key={"وزن"} value='500 گرم'/></li>
                <li><Property Key={"وزن"} value='500 گرم'/></li>
            </ul>
        </ProductCard>
    )
}
const widthRoot = '300px'
/////////////////////////////////////////////////////////////////////////

const ShoppingCard = (props) => {
    return(
        <ProductCard sx={{ border:styleVars.borderRoot, borderRadius: styleVars.borderRadius, marginRight:'10px', flexGrow:1,  mr:'10px',ml:'20px',
        fontSize:'0.9rem' }}>
            
            <FlexRow sx={{height:'100%',alignItems:'center', background:'#d6d6d6a6', borderTopLeftRadius:styleVars.borderRadius, borderTopRightRadius:styleVars.borderRadius}}>
                <Storefront/>
                <CardP>
                فروشنده: راکیزه ژن
                </CardP> 
                 
            </FlexRow>
            <Divider/>
            <CardP>ارسال فوری</CardP> 
            <CardP>نازل ترین قیمت</CardP> 
            <CardP>کمترین انرژی</CardP> 
            <div style={{justifyItems:'left', display:'grid', fontSize:'2rem', paddingLeft:'1.1rem'}}>
                
                <FlexRow sx={{alignItems:'center', justifySelf:'left'}}>
                    <PriceNoOff price={'25000'} />
                    <OffChip scale={0.8} label={'50%'} color='primary' sx={{mr:'8px'}}/>
                </FlexRow>
                <Price price={'2500000'}  sx={{ fontSize:'1.5rem' }}/>
            </div>

            <Button variant="contained" sx={{width:'75%', alignSelf:'center' , my:'1rem'}}>افزودن به سبد خرید</Button>
        </ProductCard>
    )
}

/////////////////////////////////////////////////////////////////////////

const ProductDashboard = (props) => {
    // const description = desc
    return(
            <ProductPanel>
                <div>
                    <img width={widthRoot} src="http://localhost:3000/phone.webp" alt="" />
                </div>
                <ProductData title={props.title} sx={{ flexGrow:1 }}>دیتا</ProductData>
                <ShoppingCard />
            </ProductPanel>
    )
}
//////////////////////////////////////////////////////////////////////////

const DescriptionBox = styled('div')({
    margin:'1rem',
    width:'80%'
    // borderTop: styleVars.borderRoot,
    // borderRadius:styleVars.borderRadius
})


const DescriptionText = () => {
    const [open, setState] = React.useState(false)

    function handleOpenDescription(params) {
        setState(!open)
    }

    let description = open? desc : desc.slice(0,400)+'...' ;
    let buttonText = open? 'کمتر' : 'بیشتر';

    return(
            <Description>
                {description}
                <Button onClick={handleOpenDescription} sx={{ padding:0 }}>{buttonText}</Button>
            </Description>
    )
}

const DescTableWrappwer = styled('ul')({
    width:'75%',
    marginRight:'2rem'
})

const DescTableRowItemSpan = styled('span')({
    // background:'#8080800f',
    margin:'4px',
    padding:'8px',
    width:'8rem',
    fontSize:'0.8rem',
})

const DescTableRow = ({Key, value}) => {
    return(
        <li style={{ display:'flex' }}>
            <DescTableRowItemSpan sx={{ flexGrow:1, borderLeftWidth:'1px' }}>{Key}</DescTableRowItemSpan>
            <DescTableRowItemSpan sx={{ flexGrow:10 }}>{value}</DescTableRowItemSpan>
            <Divider />
        </li>
    )
}


const DescTable = () => {
    return(

        <DescTableWrappwer>
            <DescTableRow Key={'وزن'} value={'500 گرم'}/>
            <Divider/>
            <DescTableRow Key={'وزن'} value={'500 گرم'}/>
            <Divider/>
            <DescTableRow Key={'نقطه جوش'} value={'500 گرم'}/>
            <Divider/>
 0       </DescTableWrappwer>

    )
}

//////////////////////////
const CommentWrapper = styled('div')({
    borderRadius:styleVars.borderRadius,
    // border:styleVars.borderRoot,
    background:'#e1dfdf45',
    width:'95%',
    margin:'10px',
    padding:'10px',
    fontSize:'0.8rem',
})


const Comment = ({data}) => {
    return(
        <CommentWrapper>
            <FlexRow sx={{alignItems:'center', }}>
                <span>
                    <div style={{padding:'2px 0 2px 5px'}}>
                        {gradeIcons[data.rate].icon}
                    </div>
                </span>
                <span style={{fontFamily:'Shabnam FD', paddingLeft:'0.5rem', fontSize:'0.7rem', opacity:'100%'}}>{data.date}</span>
                <span style={{fontFamily:'Shabnam FD', paddingLeft:'0.5rem', fontSize:'0.7rem', opacity:'100%'}}>{data.user}</span>
            </FlexRow>
            <p>{data.text}</p>
        </CommentWrapper>
    )
}


const egcomments = [
    {user:'محمدعلی شیرالی', date:'1402/1/1', text:'محصول  خیلی خوبی بود و راضی بودم فقط درپوشش رو وقتی برمیداری دیگه مشکل جا بره', rate:2},
    {user:'محمدعلی شیرالی', date:'1402/1/1', text:'محصول  خیلی خوبی بود و راضی بودم فقط درپوشش رو وقتی برمیداری دیگه مشکل جا بره', rate:2},
    {user:'محمدعلی شیرالی', date:'1402/1/1', text:'محصول  خیلی خوبی بود و راضی بودم فقط درپوشش رو وقتی برمیداری دیگه مشکل جا بره', rate:2},
    {user:'محمدعلی شیرالی', date:'1402/1/1', text:'محصول  خیلی خوبی بود و راضی بودم فقط درپوشش رو وقتی برمیداری دیگه مشکل جا بره', rate:2},
]


const Comments = () => {
    const comments = egcomments
    const children = loopList(comments, Comment)

    return(
        <div >
            <br />
            {children}
            <br />
        </div>
    )
}
///////////////////////////////////////////////////////
const DescriptionPanelTitle = ({title, icon}) =>{
    const Icon = icon
    return(
        <FlexRow sx={{mb:'0', alignItems:'center'}}>
                
            <Icon color='primary' variant='outlined' />
            <h4 style={{position:'relative', marginRight:'4px'}}>{title}</h4>
                
        </FlexRow>
    )
}

const DescriptionPanel = () => {

    return(
        <DescriptionBox>
            <DescriptionPanelTitle title={'معرفی محصول'} icon={SlideshowIcon} top='5px'/>

            <Divider />
            <DescriptionText />
            {/* <h4>مشخصات</h4> */}
            <DescriptionPanelTitle title={'مشخصات'} icon={ListAltIcon} top='5px'/>
            <Divider />

            <DescTable />
            <DescriptionPanelTitle title={'نظرات'} icon={CommentIcon} top='10px' />
        
            <Divider />
            <div>
                <p>به این محصول امتیاز دهید</p>
                <RadioGroupRating style={{ direction:'ltr' }}/>
                <Comments />
            </div>
        </DescriptionBox>
    )
}
//////////////////////////////////////////////////////////////////////////

const DescriptionCardBox = styled('div')({
    display:'flex',
    position:'sticky',
    flexDirection:'column',
    justifyContent:'center',
    alignContent:'center',
    top:'5px',
    margin:'80px 16px 16px 16px ',
    width:'20%' ,
    height:'fit-content',
    border:styleVars.borderRoot,
    borderRadius:styleVars.borderRadius,
})

const CardItem = styled('div')({
    // display:'block',
    margin:'auto'
})

const DescriptionCard = () => {
    return(
            <DescriptionCardBox>
                    <img src="/phone.webp" width='75%' alt="" srcset="" style={{margin:'auto'}}/>
                 <CardItem>sdf</CardItem>
                 <CardItem>sdf</CardItem>
                 <CardItem>sdf</CardItem>
            </DescriptionCardBox>
    )
}

/////////////////////////////////////////////////////////////////////////
const Product =  () => {
    const path =  window.location.pathname
    // const slug = path.split('/').reverse()[0]
    // console.log(slug)
    return(
        <>
            
                <p>راهنما</p>
            {/* <h1 style={{position:'relative',}}>{decodeURI(slug)}</h1> */}
                <ProductDashboard title='محیط کشت مولر هینتون آگار مرک'/>

                <div>
                    <Divider />
                    <h3 style={{paddingRight:'1rem'}}>محصولات پیشنهادی</h3>
                    <Divider />
                <br/>
                    <OtherProductsFilm />
                </div>
                <Divider></Divider>

                <br/>

                <FlexRow>
                    <DescriptionPanel />
                    
                    <DescriptionCard/>  
                    
                </FlexRow>
            

        </>
    )
}

const desc = ('فروش پی ست آزمایشگاهی  فروش پی ست (آب فشان) با قیمت مناسب و کیفیت تضمینی در فروشگاه اینترنتی تمادکالا به صورت تک یا عمده به فروش می رسد. برای دریافت اطلاعات تکمیلی پیرامون پی ست آزمایشگاهی و سایر ظروف آزمایشگاهی با فروشگاه تمادکالا تماس حاصل فرمایید.  آب فشان، پی ست یا پیست(به انگلیسی: Wash bottle یا Piset) یکی از وسایل مورد استفاده در آزمایشگاه می باشد که متشکل از یک بطری پلاستیکی و یک نازل در بالای آن می باشد. عموما درب این پیست های آزمایشگاهی از جنس پلی پروپیلن و بدنه آن از جنس پلی اتیلن می باشند. درب و بدنه این آب فشان در مقایسه با نسل قدیمی به صورت یکپارچه می باشند.  از این ابزار برای شست وشوی ابزار و وسایلی همچون بالن آزمایشگاهی و انتقال حجمی از مایعات مورد استفاده قرار می گیرد. به جهت خاصیت انعطاف پذیری و قابل ارتجاع این وسیله، می توان با فشردن بدنه ی پلاستیکی فشار داخل یطری را افزایش داد و همین امر سبب می شود تا مایع داخل بطری به صورت باریکه ای بیرون ریزد. قابل توجه است که زاویه ی نازل کاملا قابل تنظیم توسط دست می باشد.  یکسری از این پی ست ها لیبل دار بوده و برای نگهداری 4 مایع مختلف(آب مقطر، ایزوپروپیل الکل، اتانول و متانول) در حجم های 500 و 1000 میلی لیتری تولید می شوند و قابلیت انتقال مواد تا دمای 75 درجه سانتیگراد را دارا می باشند. نسل جدیدی از این پی ست ها نیز از جنس LDPE هستند.  یکپارچه بودن بدنه و نازل احتمال نشت و چکه نمودن مایع را از بین می برد. ویژگی پی ست آزمایشگاهی      قابلیت فریز کردن     انعطاف پذیر با قابلیت ارتجاعی     مقاوم در برابر اکثر اسیدها و مواد شیمیایی رایج در آزمایشگاه  موارد استفاده پی ست آزمایشگاهی      انتقال حجمی مایعات     شستشوی ابزار و تجهیزات آزمایشگاهی')
export default Product;