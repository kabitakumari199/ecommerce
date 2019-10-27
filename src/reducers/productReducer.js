const initialState = {
    filteredProducts:[],
    isFreeShipping:true,
    items:[],
    size: '', 
    sort: '',
    cartItems: []
    
};

if (localStorage.getItem('cartItems')) {
    initialState.cartItems = JSON.parse(localStorage.getItem('cartItems'));
}

const productReducer = (state = initialState,action)=> {
    switch(action.type){
        case 'FETCH_PRODUCT': {
            return {
                ...state,
                items:action.data,
                filteredProducts:action.data
            }
        }
        case 'FILTER_PRODUCTS_BY_SIZE':{
            return {
               ...state,
               filteredProducts:action.payload.items,size:action.payload.size
            }
        }
        case 'FILTER_PRODUCTS_BY_PRICE':{
            return {
               ...state,
               filteredProducts:action.payload.items,sort:action.payload.sort
            }
        }
        case 'ADD_TO_CART':{
            console.log('Cart Item is clicked',action.payload.cartItems);
            return {
               ...state,
               cartItems:action.payload.cartItems
            }
        }

        case 'DELETE_ITEM':{
            console.log('Item is deleted',action.payload.cartItems);
            return {
               ...state,
               cartItems:action.payload.cartItems
            }
        }

        default:return state;

    }
}
export default productReducer;



