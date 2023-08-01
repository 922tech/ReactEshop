// import {FlexRow} from "../../baseComponents/Flex";
// import * as styleVars from "../../styleVariables";
// import {loopList} from "../../utils";
// import React from "react";
// import Checkbox from '@mui/material/Checkbox';
//
//
// const options = ['500 گرم','1000 گرم']
// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
//
// const Alternative = ({data}) => {
//     return(
//         <FlexRow sx={{ fontSize:'0.8rem', padding:'4px', margin:'5px', alignItems:'center', borderRadius:styleVars.borderRadius, border:styleVars.borderRoot }}>
//             <Checkbox {...label} size='small' sx={{ '& .MuiCheckbox-root::hover':{color:'inherit'} }}/>
//             <div style={{ paddingLeft:'6px', paddingRight:0 }}>{data}</div>
//         </FlexRow>
//     )
// }
// const Options = () => {
//     const children = loopList(options, Alternative)
//   return(
//       <FlexRow>
//           {children}
//       </FlexRow>
//   )
// }
//
// export  default Options;


// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {styled} from "@mui/system";
import FormControl from "@mui/material/FormControl";
import {Box} from "@mui/material";
import {loopList} from "../../utils";
import { useBasketDispatch, setOptionCallback, useBasketState } from '../../../context/BasketContext';

const Select = styled('select')(({theme})=>({
    padding:'8px',
    border:`2px solid `,
    borderRadius:'3px',
    backgroundColor:'white',
    fontSize:'1rem',
    fontFamily:'Shabnam',
    margin:0
}))

const Option = styled('option')((props)=>({
    fontSize:'1rem',
    border:`2px solid `,
    borderRadius:'3px',
    backgroundColor:'white',
    margin:0,
    fontFamily:'Shabnam'
}))

const options = [
        {value:0, name:'وزن'},
        {value:100, name:'100 گرم'},
        {value:200, name:'200 گرم'},
        {value:300, name:'300 گرم'}
    ]


export default function Options({value}) {
    /* value is the very variable that should be added to shopping card */

    const { purchaseList } = useBasketState()
    const data  = useBasketState().productData
    const choices = data.options
    const menuItems = choices.map(
        (data, key) => <Option value={data.value} key={key}>{data.name}</Option>
    )
    
    

    
    console.log('OPTIONSSSS',purchaseList[data.id]?.option);
    const [option, setOption] = React.useState(purchaseList[data.id]? purchaseList[data.id]?.option : '');
    const width = option === '' ? `${4}rem` : 'fit-content';
    const dispatch = useBasketDispatch()
    
    const handleChange = (event) => {
    const selectedOption = event.target.value
    setOption(selectedOption);
    value = selectedOption
    setOptionCallback(dispatch, value);
 
  };
  
  return (
    <Box sx={{ minWidth:120 }}>
    <FormControl sx={{ mx:'4px', my:'12px' ,width:'fit-content', }} fullWidth>
          <Select
            id="select"
            value={option}
            placeholder="وزن"
            onChange={handleChange}
          >
              {menuItems}
          </Select>
    </FormControl>
    </Box>
  );
}




