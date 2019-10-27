import React, { Component } from 'react';
import util from '../util';
import $ from "jquery";
import {fetchProducts,addToCart} from '../actions/index';
import { connect } from "react-redux";

 class Products extends Component {
    
    constructor(props) {
        super(props);
      }

    componentDidMount(){
      console.log('executed after dom is loaded');
      
          // $('ul li').click(function(){
          //   $(this).text('kaleshwar');
          //   console.log('current clicked item', this);
          // });
          //ReactDOM.findDOMNode(this).addEventListener('ul li', this.showCart);
          const cartBtn = document.querySelector('ul li');
          cartBtn.addEventListener('click', this.showCart);
          console.log(cartBtn);
          document.querySelector('ul li').addEventListener('nv-enter', function (event) {
            console.log('hhhhhhhhhhhhhhhh',event.target);
            // logic
        });
        
        }
         
        showCart = (e) => {
          console.log('click here', e.target)
        }
        


    componentWillMount() {
    
        this.props.fetchProducts();
        console.log('Hello data is loading here');
   
       if (localStorage.getItem('cartItems')) {
         this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems')) });
       }
     }
     

    render() {
       console.log('testing at run time',this.props.products);

        const productItems = this.props.products.map(product => (
           
            <div className="col-md-4" key={product.id}>
                <div className="thumbnail text-center">
                    <a href={`#${product.id}`} onClick={()=> this.props.addToCart(this.props.cartItems, product)}>
                        <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
                        <p>{product.title}</p>                        
                    </a>
                    <b>{util.formatCurrency(product.price)}</b>
                    <button className="btn btn-primary" onClick={()=> this.props.addToCart(this.props.cartItems, product)}>Add to cart</button>
                </div>
            </div>
        ));

        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    products:state.productReducer.filteredProducts,
    cartItems:state.productReducer.cartItems    
  };
};

  export default connect(mapStateToProps,{fetchProducts,addToCart})(Products)