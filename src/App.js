import React, { Component } from 'react';
import Products from './components/Products';
import Filter from './components/Filter';
import Basket from './components/Basket';
import {fetchProducts} from './actions/index';
import { connect } from "react-redux";
import './App.css';

class App extends Component {


 

  render() {
    return (
      <div className="container">
        <h1 className="text-align-center">E-commerce Shopping Cart </h1>
        <hr />
        <div className="row">
          <div className="col-md-9">
            <Filter />
            <hr />
            <Products />
          </div>
          <div className="col-md-3">
            {/* <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} /> */}
            { <Basket cartItems={this.props.cartItems}  />}
          </div>

        </div>

      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     products:state.productReducer.items,
//     filteredProducts:state.productReducer.items,
//     isFreeShipping:state.productReducer.isFreeShipping
//   };
// };



// const mapDispachToProps = dispatch => {
//   return {
//     onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
//     onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
    
//   };
// };
// export default connect(mapStateToProps,{fetchProducts})(App);

export default (App);
