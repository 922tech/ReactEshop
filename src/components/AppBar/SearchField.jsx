import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, InputBase, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/styles';
import { useState } from 'react';


const InputBox = styled('div')(props => ({
    borderRadius:'10px',
    textColor:'white',
    backgroundColor:'rgb(195, 203, 210)',
    opacity:'40%',
    '&:hover':{
        backgroundColor:'rgb(180, 184, 188)'
    },
    
}))

 const MyInput = styled(InputBase)(props => ({
    borderRadius:'10px',
    textColor:'white',
    backgroundColor:'rgba(195, 203, 210, 0.50)',
    // opacity:'40%',
    marginRight:'14px' ,
    paddingRight:'15px',
    width:'50%',
    [props.theme.breakpoints.down('sm')]:{
        width:'100%',    
        // marginBottom:'10px'
    },

    // '& .div':{
    //     marginRight:'14px' ,
    //     paddingRight:'15px'

    // },
    '&:hover':{
        backgroundColor:'rgba(195, 203, 210, 0.70)'
    },
    
    '& input::placeholder':{
        color:'white',
        opacity:'70%'
    },
    '& input::text':{
        color:'white',
        opacity:'100%'
    }

 }))


 const SearchFiled = (props) => {
    const [words, setWords] = useState('')

    function handleSearch(e) {
        if (true) {
            setWords(e.target.value)
            console.log(words)
        }
    }

    const mQ = useTheme().breakpoints.down('md')
    // const mQ = useTheme().breakpoints.down('sm')
    const xs = useMediaQuery(mQ)
    const mB = xs? '10px' : 0

    return(
    <Box className='InputBox' display='flex' sx={{ flexGrow:props.flexGrow, alignItems:'center', marginBottom:mB }}>
        <MyInput className='MyInput' placeholder='جستجو' onChange={(e) => setTimeout(handleSearch, 400,e)}/>
        <IconButton sx={{color:'white',right:{xs:'6px', md:'auto',lg:'auto'}}}>
            <SearchIcon color='white'  />
        </IconButton>
    </Box>
    );
}
 
export default SearchFiled;