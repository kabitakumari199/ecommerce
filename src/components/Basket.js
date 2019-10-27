import React, { Component } from 'react';
import {deleteProduct} from '../actions/index';
import { connect } from "react-redux";
import util from '../util'
 class Basket extends Component {
    render() {
        const { cartItems } = this.props;
        var total = 0;
        cartItems.map(item => {
         total += item.price*item.count;
        });
        console.log('total',total);

        return (
            <div className="alert alert-info">
                {cartItems.length === 0
                    ? "Basket is empty" :
                    <div>You have {cartItems.length} items in the basket. <hr /></div>
                }
                {cartItems.length > 0 &&
                    <div>
                        <ul style={{ marginLeft: -25 }}>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <b>{item.title}</b>
                                    <button style={{ float: 'right' }} className="btn btn-danger btn-xs"
                                        onClick={() => this.props.deleteProduct(this.props.cartItems, item)}>X</button>
                                    <br />
                                    {item.count} X {util.formatCurrency(item.price)}
                                </li>))
                            }
                        </ul>
                         
                          <b>Sum: {util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}
                        </b>
                        <button onClick={() => alert('Todo: Implement checkout page.')} className="btn btn-primary">checkout</button>
                    </div>
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
     cartItems:state.productReducer.cartItems    
    };
  };
export default connect(mapStateToProps,{deleteProduct})(Basket);