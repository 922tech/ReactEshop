import { BannerGrid } from "./baseComponents/Banner";
 

const DiBanner = () => {
    const data = bannersArr
    const breakpoints = { xs:12,sm:12, md:6, lg:6}

    return(
        <BannerGrid  data={data} breakpoints={breakpoints} props={{columnSpacing:0.5, rowSpacing:0}}/>          
    )
}


export default DiBanner;

const bannersArr = [
    {image:'/dibanner.jpg', link:'/products'},
    {image:'/dibanner.jpg', link:'/'},
] 