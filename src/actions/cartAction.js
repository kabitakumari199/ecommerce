//calls the login API
export function fetchProducts() {
    return dispatch => {
    fetch('http://localhost:8000/products').then(res => res.json())
    .catch(err => fetch('db.json').then(res => res.json()).then(data => data.products))
    .then(data => {
      dispatch({type:"FETCH_PRODUCT",data});
    })
    }
}

export function addToCart(product) {
    return (dispatch) => {
        dispatch({type:'ADD_TO_CART',product});
    }

}




