import React from "react";
import {useBasketDispatch, useBasketState, addToShoppingCard, deleteFromShoppingCard} from "../../context/BasketContext";

const AddToBasketRoot = ({data, component, componentProps, isAdded=false}) => {
    const El = component
    const productId = data.id
    const isActive = Boolean(data.price)

    const { purchaseList } = useBasketState()
    const dispatch = useBasketDispatch();
    
    let added = Boolean(purchaseList[productId]);
    // const [added, setAdded] = React.useState(Boolean(purchaseList[productId]));
    const text = added ? 'افزوده شده به سبد' : 'افزودن به سبد خرید';

    function handleClick() {
        if(!added){
            addToShoppingCard(dispatch, data);
        }
        else{
            deleteFromShoppingCard(dispatch, data);
        }
        
        isAdded = added;
     }

    return(
        <El {...componentProps}
         onClick={handleClick}
         color={added ? 'success':'primary'}
         children={text}
         isActive={isActive}
        />
    )
}
export default AddToBasketRoot;