import React, { Component } from 'react';
import {filterProducts, sortProducts} from '../actions/index';
import { connect } from "react-redux";
class Filter extends Component {


    render() {


        return (
            <div className="row">
                <div className="col-md-4">
                    {`${this.props.products.length} products found.`}
                </div>
                <div className="col-md-4">
                    <label>Order by
               <select className="form-control" value={this.props.sort} onChange={(e)=> this.props.sortProducts(this.props.sortItem, e.target.value)}>
                            <option value="">Select</option>
                            <option value="lowestprice">Lowest to highest</option>
                            <option value="highestprice">Highest to lowest</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                    <label > Filter Size
               <select className="form-control" value={this.props.size} onChange={(e)=> this.props.filterProducts(this.props.items,e.target.value)}>
                            <option value="">ALL</option>
                            <option value="x">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log('ttt',state.productReducer.filteredProducts)
    return {
        sortItem:state.productReducer.filteredProducts,
        items:state.productReducer.items,
        products:state.productReducer.filteredProducts,
        size:state.productReducer.size,
        sort:state.productReducer.sort
    };
  };
  export default connect(mapStateToProps,{filterProducts,sortProducts})(Filter);
