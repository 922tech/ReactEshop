import {Divider, useMediaQuery} from "@mui/material";
import {FlexRow} from "../baseComponents/Flex";
import React from "react";
import ProductDashboard from "./ProductDashboard/Dashboard";
import OtherProductsFilm from "./ProductDashboard/OtherProducts";
import DescriptionPanel from "./Description/Description";
import DescriptionCard from "./Description/DescriptionCard";
import './../../fonts.css'
import {useWidth} from "../utils";
import {BottomShoppingCard} from "./ProductDashboard/ShoppingCard";
import { useBasketDispatch, setProductData } from "../../context/BasketContext";

function getProductData(){
    const data = {
        id:'123',
        title:'بخاری برقی پارس‌خزر',
        brand:'pars',
        category:'بخاری برقی',
        price:'250000',
        off:'50',
        active:1,
        features:[
            ['دمای جوش','500 درجه'],
            ['دمای ذوب','200 درجه'],
            ['دمای انجماد','200 درجه']
        ],
        // image:"http://localhost:3000/muller.jpg",
        image:"http://localhost:3000/heater.jpg",
        comments:[
            {user:'محمدعلی شیرالی', date:'1402/1/1', text:'محصول  خیلی خوبی بود و راضی بودم فقط درپوشش رو وقتی برمیداری دیگه مشکل جا بره', rate:2},
            {user:'محمدعلی شیرالی', date:'1402/1/1', text:'محصول  خیلی خوبی بود و راضی بودم فقط درپوشش رو وقتی برمیداری دیگه مشکل جا بره', rate:2},
            {user:'محمدعلی شیرالی', date:'1402/1/1', text:'محصول  خیلی خوبی بود و راضی بودم فقط درپوشش رو وقتی برمیداری دیگه مشکل جا بره', rate:2},
            {user:'محمدعلی شیرالی', date:'1402/1/1', text:'محصول  خیلی خوبی بود و راضی بودم فقط درپوشش رو وقتی برمیداری دیگه مشکل جا بره', rate:2},
        ],
        feedbacks:55,
        feedbackStatus:5,
        options:[
            {value:0, name:'وزن'},
            {value:100, name:'100 گرم'},
            {value:200, name:'200 گرم'},
            {value:300, name:'300 گرم'}
        ],
        description:'فروش پی ست آزمایشگاهی فروش پی ست (آب فشان) با قیمت مناسب و کیفیت تضمینی در فروشگاه اینترنتی تمادکالا به صورت تک یا عمده به فروش می رسد. برای دریافت اطلاعات تکمیلی پیرامون پی ست آزمایشگاهی و سایر ظروف آزمایشگاهی با فروشگاه تمادکالا تماس حاصل فرمایید. آب فشان، پی ست یا پیست(به انگلیسی: Wash bottle یا Piset) یکی از وسایل مورد استفاده در آزمایشگاه می باشد که متشکل از یک بطری پلاستیکی و یک نازل در بالای آن می باشد. عموما درب این پیست های آزمایشگاهی از جنس پلی پروپیلن و بدنه آن از جنس پلی اتیلن می باشند. درب و بدنه این آب فشان در مقایسه با نسل قدیمی به صورت یکپارچه می باشند. از این ابزار برای شست وشوی ابزار و وسایلی همچون بالن آزمایشگاهی و انتقال حجمی از مایعات مورد استفاده قرار می گیرد. به جهت خاصیت انعطاف پذیری و قابل ارتجاع این وسیله، می توان با فشردن بدنه ی پلاستیکی فشار داخل یطری را افزایش داد و همین امر سبب می شود تا مایع داخل بطری به صورت باریکه ای بیرون ریزد. قابل توجه است که زاویه ی نازل کاملا قابل تنظیم توسط دست می باشد. یکسری از این پی ست ها لیبل دار بوده و برای نگهداری 4 مایع مختلف(آب مقطر، ایزوپروپیل الکل، اتانول و متانول) در حجم های 500 و 1000 میلی لیتری تولید می شوند و قابلیت انتقال مواد تا دمای 75 درجه سانتیگراد را دارا می باشند. نسل جدیدی از این پی ست ها نیز از جنس LDPE هستند. یکپارچه بودن بدنه و نازل احتمال نشت و چکه نمودن مایع را از بین می برد. ویژگی پی ست آزمایشگاهی قابلیت فریز کردن انعطاف پذیر با قابلیت ارتجاعی مقاوم در برابر اکثر اسیدها و مواد شیمیایی رایج در آزمایشگاه موارد استفاده پی ست آزمایشگاهی انتقال حجمی مایعات شستشوی ابزار و تجهیزات آزمایشگاهی',
        offeredProducts:[],
    }
    return data
};

const Product = () => {
    const dispatch = useBasketDispatch();
    const productData = getProductData();
    setProductData(dispatch,productData);
    const sm = useMediaQuery('(max-width:780px)', );
    const md = useMediaQuery('(min-width:1055px)', );
    const lg = useMediaQuery('(min-width:1055px)', );
    // console.log(`sm===========${sm}\nmd===========${md}\nlg===========${lg}\n`)
    const path =  window.location.pathname
    // const slug = path.split('/').reverse()[0]
    // console.log(slug)
    return(
        <>

              <br/>
            {/* <h1 style={{position:'relative',}}>{decodeURI(slug)}</h1> */}
                <ProductDashboard title='محیط کشت مولر هینتون آگار مرک'/>
                <div>
                <br/>
                    <h3 style={{paddingRight:'1rem'}}>محصولات پیشنهادی</h3>
                    <OtherProductsFilm />
                </div>
                <Divider />
                <br/>

                <FlexRow>
                    <DescriptionPanel />
                    {!sm &&  <DescriptionCard/>}
                </FlexRow>
                    {!lg && <BottomShoppingCard/>}


        </>
    )
}

export  default Product;
