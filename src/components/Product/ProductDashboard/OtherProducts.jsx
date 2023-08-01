import {FilmBox, FilmFrame, FilmFrameDescription, FilmTape} from "../../baseComponents/FilmTape";
import {loopList, UnstlyedLink as Link} from "../../utils";
import {Price} from "../../baseComponents/Price";
import React from "react";



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

export default OtherProductsFilm;
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
      title: 'بافر',
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
      title: 'ظروف',
      link:'/products'
    },
    {
      img: '/phone.webp',
      title: 'ابزار آزمایشگاهی',
      link:'/products'
    },


  ];
