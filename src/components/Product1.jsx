import {Divider} from "@mui/material";
import {FlexRow} from "./baseComponents/Flex";
import React from "react";


const Product =  () => {
    const path =  window.location.pathname
    // const slug = path.split('/').reverse()[0]
    // console.log(slug)
    return(
        <>
                <p>راهنما</p>
            {/* <h1 style={{position:'relative',}}>{decodeURI(slug)}</h1> */}
                <ProductDashboard title='محیط کشت مولر هینتون آگار مرک'/>

                <div>
                    <Divider />
                    <h3 style={{paddingRight:'1rem'}}>محصولات پیشنهادی</h3>
                    <Divider />
                <br/>
                    <OtherProductsFilm />
                </div>
                <Divider></Divider>

                <br/>

                <FlexRow>
                    <DescriptionPanel />

                    <DescriptionCard/>

                </FlexRow>


        </>
    )
}
