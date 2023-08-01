import './../custome_swipper.css'
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
// import {clickSlideShow} from "./utils";
const frameWidth = '100vw'

function getSliderImages(){
    const images = ["/slider2.jpg","/slider1.jpg","/slider2.jpg"]
    return images
}
   

const SlideShow = () => {
    
    const images = getSliderImages()
    
    const slides = images.map( (src, key) => 

            <SwiperSlide  key={key}>
                <img style={{ width:frameWidth, height:'100%' , borderRadius:'0 0 5px 5px' }} src={src} alt=''/>
            </SwiperSlide>

        )

    return(
        <>
        <Swiper  
        style={{ width:'100%', height:'70%', "--swiper-navigation-color": "#FFF", "--swiper-pagination-color": "#FFF" }} 
        navigation={true} modules={[Navigation]} className='mySwiper' >
            {slides}
        </Swiper>
        </>
    );
}

export default SlideShow;