import { useRef, useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {FlexRow} from "./Flex";
import { IconButton } from '@mui/material';
import * as styleVars from '../styleVariables';
import {useBasketDispatch, useBasketState, incNumber, decNumber} from "../../context/BasketContext";

const styles =  ({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `12px`,
    // border: `1rem solid gray`,
    backgroundColor: 'white',
    border:styleVars.borderRoot,
    borderRadius:'60px',
    width:'fit-content',

    '&:focus-within': {
      borderColor: 'blue',
    },
  },

  control: {
    backgroundColor: 'white',
    border: `1rem solid ${
      'gray'
    }`,

    '&:disabled': {
      borderColor: 'gray',
      opacity: 0.8,
      backgroundColor: 'transparent',
    },
  },

  input: {
    textAlign: 'center',
    paddingRight: `5px !important`,
    paddingLeft: `5px !important`,
    width: '2rem',
    height:'1.5rem',
    margin:'0 0.5rem 0 0.5rem',
    flex: 1,
    fontSize:'0.9rem',
    border:'1px hidden gray',
    fontFamily:'Shabnam FD'
  },
  Button:{
    borderRadius:'100%',
    border:'1px hidden',
    width:'20px',
    height:'20px',
    color:'white',
    backgroundColor:'primary.main',
    
    '&:focus-within': {
      borderColor: 'blue',
    },

  },
  icon:{
    width:'18px',
    height:'18px',
  }
});


export default function Counter({ number, sx={}, productData }) {
  // const { styles } = useStyles();
  const dispatch = useBasketDispatch()
  const wrapperSX = {...sx, ...styles.wrapper}
  const {purchaseList} = useBasketState()
  const initialValue = purchaseList[productData.id]?.number
  // console.log(initialValue)
  const [value, setValue] = useState(initialValue?initialValue:1);

  function handleClickIncrement(e){
    setValue(value+1);
    incNumber(dispatch, productData);
    number = value
   }
   
  function handleClickDecrement(){
    if (value > 1) {
      setValue(value-1);
      decNumber(dispatch, productData);
      number = value
    };
   }

  return (
    <FlexRow sx={wrapperSX}>
      <IconButton onClick={handleClickIncrement} sx={styles.Button} disableRipple>
        <AddIcon style={styles.icon}/>
      </IconButton>

      <input
        value={`${value}`}
        onChange={(e) => {setValue(Number(e.target.value)); console.log(typeof value)}}
        style={styles.input}
      />

      <IconButton onClick={handleClickDecrement} sx={styles.Button} disableRipple>
        <RemoveIcon style={styles.icon}/>
      </IconButton>
    </FlexRow>
  );
}