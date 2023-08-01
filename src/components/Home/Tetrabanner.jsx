import { BannerGrid } from "../baseComponents/Banner";
 

const TetraBanner = () => {
    const data = bannersArr
    const breakpoints = { xs:6,sm:6, md:3, lg:3, }

    return(
        <BannerGrid  data={data} breakpoints={breakpoints} props={{columnSpacing:0.5, rowSpacing:0}}/>          
    )
}


export default TetraBanner;

const bannersArr = [
    {image:'/tetrabanner.jpg', link:'/products'},
    {image:'/tetrabanner2.jpg', link:'/'},
    {image:'/tetrabanner3.jpg', link:'/products'},
    {image:'/tetrabanner.jpg', link:'/'}
] 