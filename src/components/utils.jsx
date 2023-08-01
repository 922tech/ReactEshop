
import {useTheme, useMediaQuery, Chip, Typography, SvgIcon} from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';



export const UnstlyedLink = styled(Link)({
  color:'inherit',
  textDecoration:'inherit',
})


export const Toman = ({ scale=1 }) => {
  return(
    <svg preserveAspectRatio="xMidYMid meet" style={{width:`${scale}rem`, height:`${scale}rem`, margin:'auto'}}>
      <g transform={`scale(${scale})`}>
        <path fill-rule="evenodd" d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" clip-rule="evenodd"></path>
      </g>
    </svg>
  ) 
}


export const FarsiNumber = styled(Typography)({
  fontFamily:'Shabnam FD'
})

export function roundGridLineCorners(itemList, rowLen,){

  const listLength = itemList.length
  let lastRow = listLength%rowLen == 0 ? listLength - rowLen : listLength - listLength%rowLen + 1 ;

  for(let i in itemList){
        
    if(i==0){
        itemList[0] = React.cloneElement(itemList[0], {borderStyles:{borderTopRightRadius: '10px'}})
    }
    else if(i==rowLen-1){
        itemList[i] = React.cloneElement(itemList[i], {borderStyles:{borderTopRightLeft: '10px'}})
    }
    else if(i==lastRow){
        itemList[i] = React.cloneElement(itemList[i], {borderStyles:{borderBottomRightRadius: '10px'}})
    }
    else if(i==listLength-1){
        itemList[i] = React.cloneElement(itemList[i], {borderStyles:{borderBottomLeftRadius: '10px'}})
    }
}
}

export function useThemeProps(breakpoint,arg='down') {
    const theme = useTheme()
    let attr = null

    switch(arg){
      case 'down':
        attr = () => theme.breakpoints.down(breakpoint)

      case 'up':
        attr = () => theme.breakpoints.up(breakpoint)

      case 'only':
        attr = () => theme.breakpoints.only(breakpoint)
      break;
    }

    return useMediaQuery(attr(),{noSsr:true})
  }


  export function useWidth() {
    const theme = useTheme();
    const keys = [...theme.breakpoints.keys].reverse();
    return (
      keys.reduce((output, key) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const matches = useMediaQuery(theme.breakpoints.up(key));
        return !output && matches ? key : output;
      }, null) || 'xs'
    );
  }
  

export function loopList(data, component, props) {
  const El = component
  return (data.map(
    (obj,index) => <El key={index} data={obj} {...props}/>)
    );
 }
 
 export function sepNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

export function detectBrowser(){

         let userAgent = navigator.userAgent;
         let browserName;

         if(userAgent.match(/chrome|chromium|crios/i)){
             browserName = "chrome";
           }else if(userAgent.match(/firefox|fxios/i)){
             browserName = "firefox";
           }  else if(userAgent.match(/safari/i)){
             browserName = "safari";
           }else if(userAgent.match(/opr\//i)){
             browserName = "opera";
           } else if(userAgent.match(/edg/i)){
             browserName = "edge";
           }else{
             browserName="No browser detection";
           }
         return browserName;
  }

export function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }

  });
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
       console.log(error);
    }
  };
  return [storedValue, setValue];
}


export function clickSlideShow(slides){

  const next = document.getElementsByClassName('swiper-button-next')[0]
  const prev = document.getElementsByClassName('swiper-button-previous')[0]

  for (let i = 0; i < slides.length; i++) {
    setTimeout(next.click,3000)
    console.log('click===========================')
  }

  for (let i = 0; i < slides.length; i++) {
    console.log('click===========================')
    setTimeout(prev.click,3000)
  }

}