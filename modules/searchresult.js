// modules/About.js
import React from 'react'
import Remarkable from 'remarkable'
import Media from 'react-bootstrap/lib/Media'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'


var Product = React.createClass({
  rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  },

  render: function() {
    return (
    <Media>
        <Media.Left>
        <img width={120} class="image" src={this.props.image}/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>
        	<a class="url_prod" href={this.props.url}>
          	{this.props.productname}
          	</a>
          </Media.Heading>
          <p>
            <span>Rp. {this.props.price}</span><br/>
            <span><Glyphicon glyph="star" />{this.props.rating}</span>
          </p>
        </Media.Body>
        {/*<span dangerouslySetInnerHTML={this.rawMarkup()} />*/}
      </Media>
    );
  }
});

var ProductBox = React.createClass({
  loadProductsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.data});
        //console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({data: "not found"});
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadProductsFromServer();
  },
  render: function() {
    return (
      <div className="ProductBox">
        <h1>Product list</h1>
        <ProductList data={this.state.data} />
      </div>
    );
  }
});

var ProductList = React.createClass({
  render: function() {
    var productNodes = this.props.data.map(function(product, index) {
      return (
        <Product productname={product.name} rating={product.rating.summary} key={index} url={product.url_key} price={product.price.final} image={product.image_default.small_image.vertical}>
          {product.short_desc}
        </Product>
      );
    });
    return (
      <div className="productList">
        {productNodes}
      </div>
    );
  }
});

export default React.createClass({
	convertUrlapi: function(value) {
    var qstring = value;
    var url1 = "https://charlie.orami.co.id/api/products/search?q=" + qstring ;
    console.log(url1);
    return url1;
  },
  render() {
    const { qstring } = this.props.params;
    return (
      <ProductBox url={"https://charlie.orami.co.id/api/products/search?q=" + qstring}   />
    )
  }
})
