import React from 'react';
import {Box} from '@mui/material';
import { styled, makeStyles } from '@mui/material/styles';


const Slide = styled('div')(props => ({
    transitionDuration:'0.5s',
    width:'100%', 
    
    })
);

const HomePageBox = styled(Box)(props =>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow:'hidden'
    })
);


const SliderContainer = styled('div')((props) => ({
    display: 'block',
    overflow:'hidden',
    flexDirection:'row',
    justifyContent:'center',
    // width:'16rem',
    // height:'26rem',
    width: `calc(400px)`,
    // width: `calc(300px * ${props.length})`,
    margin: '0 auto',

    // objectFit: "contain",
    // animation:'animation: slide 10s ease infinite'
    })
);

function getSliderImages(){
    const images = ["/slider2.jpg","/slider0.jpg","/slider1.jpg"]
    return images
}

const Slider = props => {
    const images = getSliderImages()
    const [state, setState]  = React.useState(0)
    
    function slide(direction){
        // const images = document.getElementsByClassName('slide')
        if(state >= images.length){
            setState(0)
        }

        if(direction === 'right'){
            if(state < images.length -1 ){
                setState(state+1)
                console.log('right & state is ',state)
                // slides[0].style.marginLeft = `-${100*state}%`
            }
        };
        if(direction === 'left'){
            if(state > 0){
                setState(state-1)
                console.log('left & state is ',state)
                // slides[0].style.marginLeft = `-${100*state}%`
            }
        }
    }
        const frameWidth = '300px'
        return(
            <>
            <SliderContainer length={images.length} sx={{ display:'flex' }} >
                <button onClick={() => slide('right')}> {'<'} </button>        
                    <div style={{ display:'flex', flexDirection:'row', overflow:'hidden',width: frameWidth }}>
                        <Slide className='slide' style={{ marginLeft:`-${100*state}%` }}>
                            <img  width={frameWidth} src={images[0]} alt=''/>
                        </Slide>
                        <Slide className='slide' > <img  width={frameWidth} src={images[1]} alt=''/></Slide>
                        <Slide className='slide' > <img  width={frameWidth} src={images[2]} alt=''/></Slide>
                    </div>
                <button onClick={() => slide('left')}> {'>'} </button>
    
            </SliderContainer>
            </>
        )
}
   

