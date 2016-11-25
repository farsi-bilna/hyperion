import React from 'react'
import NavLink from './NavLink'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import { Link } from 'react-router'
import FontIcon from 'react-toolbox/lib/font_icon'

var Product = React.createClass({

  render: function() {
    const isNew = this.props.new;
    let newlabel = null;
    if (this.props.new) {
      newlabel = <span className="prod-att new-product">New</span>
    }
    return (
      <li className="prod-widget-horizontal">
      <div className="prod-image">
      <img className="image" src={this.props.image}/>
      </div>
      <div className="wrap-right-area">
        {newlabel}
        <div className="prod-name">
          <NavLink to={'/product/'+this.props.productId}>
            {this.props.productname}
          </NavLink>
        </div>
          <span className="widget-price"><p className="price">Rp. {this.props.price}</p></span>
          <div className="star-product">
            <div className="wrap-star">
            <Glyphicon glyph="star" />
            </div>
            <div className="total-review">{this.props.rating}</div>
          </div>
      </div>
      </li>
    );
  }
});


var ProductList = React.createClass({
  render: function() {
    var productNodes = this.props.data.map(function(product, index) {
      return (
        <listProductHorizontal productname={product.name} rating={product.rating.summary} key={index} url={product.url_key} price={product.price.final} productId={product.id} image={product.image_default.small_image.vertical} new={product.is_new} brand={product.brand.name} theme={theme} />
      );
    });
    return (
      <ul className="productList">
        {productNodes}
      </ul>
    );
  }
});

export default React.createClass({
  render() {
    return (
      <ProductList />
    )
  }
})
