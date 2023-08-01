
import StandardImageList from './Home/FilmTape';
import SlideShow from './Home/SlideShow';
import TetraBanner from './Home/Tetrabanner'; 
import MonoBanner from './MonoBanner';
import BestSellersTable from './BestSellers';
import DiBanner from './DiBanner';
import  Table from './Home/HomeTable';


const HomePage = (props) => {

    return (
        <>
            <SlideShow/>
            <br/>
        {/* <div className='home-page' style={{ margin:'auto',width:'98%',height:'auto',display:'flex', flexDirection:'column', alignItems:'center',alignContent:'center', justifyContent:'space-between', justifyItems:'center' }}> */}
        <div className='home-page' style={{ margin:'auto',width:'95%',height:'auto', }}>
            <StandardImageList />
            <br/>
            <DiBanner/>
            <br/>
            <BestSellersTable />
            <br/> 
            <TetraBanner/>
            <br/>
            <Table title='special offer'/>
            <br/>
            <MonoBanner/>
            {/* <br/> */}
            {/* <BlogPosts/> */}
            
         
        </div>
        <br/>

        {/* <Footer/> */}
        </>
    )
}

export default HomePage;
