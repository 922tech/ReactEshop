import {styled} from "@mui/system";
import {Divider, useMediaQuery} from "@mui/material";
import React from "react";
import { useBasketState } from "../../../context/BasketContext";
import { loopList } from "../../utils";


const DescTableWrappwer = styled('ul')({
    width:'75%',
    marginRight:'2rem'
})

const DescTableRowItemSpan = styled('span')({
    margin:'4px',
    padding:'8px',
    width:'8rem',
    fontSize:'0.8rem',
})

const DescTableRow = ({data}) => {
    return(
        <>
            <li style={{ display:'flex' }}>
                <DescTableRowItemSpan sx={{ flexGrow:1, borderLeftWidth:'1px' }}>{data[0]}</DescTableRowItemSpan>
                <DescTableRowItemSpan sx={{ flexGrow:10 }}>{data[1]}</DescTableRowItemSpan>
                <Divider />
            </li>
            <Divider />
        </>

    )
}


const DescTable = () => {
    const { features } = useBasketState().productData
    const sm = useMediaQuery('(max-width:780px)');
    return(

        <DescTableWrappwer sx={{ marginRight:sm ? 0:'2rem'}}>
            {loopList(features, DescTableRow)}
            {/* <DescTableRow Key={'وزن'} value={'500 گرم'}/>
            <Divider/>
            <DescTableRow Key={'وزن'} value={'500 گرم'}/>
            <Divider/>
            <DescTableRow Key={'نقطه جوش'} value={'500 گرم'}/>
            <Divider/> */}
        </DescTableWrappwer>

    )
}
export default DescTable;