import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import { borderRadius } from "../styleVariables";
import { loopList, UnstlyedLink as Link } from "../utils";


export const FilmBox = styled(Box)({
    width:{md:'90%',lg:'90%',sm:"100%", xs:'100%'},
    height:{md:'10%',lg:'10%',sm:"20%", xs:'20%'},
    margin:'auto',
})

export const FilmTape = styled('ul')((props) => ({
    listStyleType: 'none',
    backgroundColor: '#e3e3e329',
    display:'flex',
    margin:'auto',
    flexDirection:'row',
    width:'80%',
    height:'20%',
    overflowX:'auto',
    overflowY:'clip',
    borderRadius: borderRadius,
    margin:'auto'
     
}))

export const FilmFrame = styled('li')({
    flex:'0 0 auto',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    width:'25%',
    height:'90%', 
    padding:'3px',
    border:'1px hidden',
    borderRadius:'10px',
    margin:'auto',
    '& :hover':{'cursor':'pointer'},
    
})

export const FilmFrameDescription =  styled('p')({
    // flex:'0 0 auto',
    width:'50%',
    textAlign:'center',
    margin:'auto',
    padding:'2px',
    fontSize:'13px',
    fontWeight:'bold'
})

const FilmTapeItem = ({data})=>{
  return(
    <FilmFrame >
      <Link to={`${data.link}`}>
        <img style={{ borderRadius:'10px', }} width='100%' height='100%' src={data.img} alt={data.title} loading="lazy"/>
      </Link>
      <FilmFrameDescription>{data.title}</FilmFrameDescription>
    </FilmFrame>)
}

export default  function StandardImageList() {
    const filmData = itemData
    const children = loopList(filmData,FilmTapeItem)
    return (
        <FilmBox>
            <FilmTape>
              {children}
            </FilmTape>
        </FilmBox>

    );
}
 
const itemData = [
  {
    img: '/phone.webp',
    title: 'گوشی موبایل 1',
    link:'/products'
  },
  {
    img: '/phone2.jpg',
    title: 'گوشی موبایل 2',
    link:'/products'
  },
  {
    img: '/phone3.jpg',
    title: 'گوشی موبایل 3',
    link:'/products'
  },
  {
    img: '/phone4.jpg',
    title: 'گوشی موبایل 4',
    link:'/products'
  },
  {
    img: '/phone.webp',
    title: 'گوشی موبایل 5',
    link:'/products'
  },
  {
    img: '/phone2.jpg',
    title: 'گوشی موبایل 6',
    link:'/products'
  },
  
  
];
