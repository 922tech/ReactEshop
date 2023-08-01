import React from 'react';
import {useLocalStorage} from "../components/utils";

var BasketStateContext = React.createContext(null)
var BasketDispatchContext = React.createContext(null)


function basketReducer(state, action) {

    let basket;
    const updateBasketInLocalStorage = (basket) => localStorage.setItem('basket', JSON.stringify(basket));
    const updateBasket = () => {
        basket = {
            [action.payload.id]:{...action.payload, number:state.counterValue},
            ...state.purchaseList}
    };

    switch (action.type) {

        case 'setProductData':
            state.productData = action.payload
            return state

        case 'add':
            basket = { [action.payload.id]:{...action.payload, number:state.counterValue, option:state.option }, ...state.purchaseList};
            state.is_added = true
            updateBasketInLocalStorage(basket);
            console.log(basket)
            return {...state, purchaseList:basket};

        case 'delete':            
            basket = JSON.parse(localStorage.basket);
            const productID =  action.payload
            delete basket[productID];
            delete state.purchaseList[productID];
            updateBasketInLocalStorage(basket);
            console.log('delete',productID, state.purchaseList);
            state.is_added = false
            return  {...state, purchaseList:basket};

        case 'incProductNumber':
            if (state.purchaseList[action.payload]){
                state.purchaseList[action.payload].number+=1
            }
            else{
                state.counterValue+=1;
            }
            updateBasket();
            updateBasketInLocalStorage(basket)
            // console.log('COUNTER ==== ',state.purchaseList[action.payload])
            return state
        
        case 'decProductNumber':
            if (state.purchaseList[action.payload]){
                state.purchaseList[action.payload].number-=1
            }
            else{
                state.counterValue-=1;
            }
            updateBasket();
            updateBasketInLocalStorage(basket);
            return state

        case 'setOption':
            state.option = action.payload;

            const product = state.purchaseList[state.productData.id]
            if (product){
                product.option = state.option
                // product.option = action.payload.option
                console.log('OPTIONs /',product, state.option,state)
                updateBasketInLocalStorage(state.purchaseList);
            }
            
            return state
            
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

const BasketContextProvider = ({children}) => {
  const [basket, _] = useLocalStorage('basket', {});

  var [state, dispatch] = React.useReducer(basketReducer,{
      purchaseList: basket,
      counterValue:1,
      option:'',
      productData:{},
      is_added:false,
      auth:{},
  });
  return(
      <BasketStateContext.Provider value={state}>
          <BasketDispatchContext.Provider value={dispatch}>
              {children}
          </BasketDispatchContext.Provider>
      </BasketStateContext.Provider>
  );
}

function useBasketState(){
    var context = React.useContext(BasketStateContext);
    if (context === undefined) throw new Error('useLayoutState must be used within a LayoutProvider');
    return context;
}

function useBasketDispatch(){
    var context = React.useContext(BasketDispatchContext);
    if (context === undefined) throw new Error('useLayoutState must be used within a LayoutProvider');
    return context;
}

function addToShoppingCard(dispatch, productData) {
    dispatch(
        {
            type: 'add',
            payload:productData
        }
    );
}

function deleteFromShoppingCard(dispatch, productData) {
    dispatch(
        {
            type: 'delete',
            payload: productData.id
        }
    );
}

function setProductData(dispatch, productData) {
    dispatch(
        {
            type: 'setProductData',
            payload: productData,
        }
    );
}

function incNumber(dispatch, productData) {
    dispatch(
        {
            type: 'incProductNumber',
            payload:productData.id
        }
    );
}

function decNumber(dispatch, productData) {
    dispatch(
        {
            type: 'decProductNumber',
            payload:productData.id
        }
    );
}

function setOptionCallback(dispatch, option) {
    dispatch(
        {
            type: 'setOption',
            payload:option
        }
    );
}
export {
    BasketContextProvider, useBasketState, useBasketDispatch,
    setProductData,addToShoppingCard, deleteFromShoppingCard, incNumber, decNumber,
    setOptionCallback
};