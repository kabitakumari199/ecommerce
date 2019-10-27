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

export function filterProducts(products,size){  
    return (dispatch) =>{
        dispatch({type:'FILTER_PRODUCTS_BY_SIZE', payload:{
         size:size,
         items:size === '' ? products:products.filter(a =>a.availableSizes.indexOf(size.toUpperCase())) 
        }
    });
 }
}
export function sortProducts(products,sort){ 
 //  const product = products.slice(); 
  if (sort !== '') {
    products.sort((a, b) =>
      (sort === 'lowestprice'
        ? ((a.price > b.price) ? 1 : -1)
        : ((a.price < b.price) ? 1 : -1)));
  } else {
    products.sort((a, b) => (a.id > b.id) ? 1 : -1);
  }  

  return (dispatch) => {
      dispatch({type:'FILTER_PRODUCTS_BY_PRICE', payload:{
       sort:sort,
       items:[...products] 
      }
  });
}
}


export function addToCart(items, product) {
  const cartItems = items.slice();
  let productAlreadyInCart = false;
  cartItems.forEach(item => {
      if (item.id === product.id) {
        item.count += 1;
        productAlreadyInCart = true;
      }
    });
    if (!productAlreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    return (dispatch) => {
      console.log('add to cart clicked',cartItems);
        dispatch({type:'ADD_TO_CART',payload:{
        cartItems:cartItems
        }
      });

    }

}

export function deleteProduct(items,product){
    const cartItems = items.slice().filter(elm =>elm.id!==product.id);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
     return (dispatch) => {
        dispatch({type:"DELETE_ITEM",payload:{
          cartItems
          }
        });
     }
}


