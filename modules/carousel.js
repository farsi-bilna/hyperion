// modules/About.js
import React from 'react'
import ReactPaginate from 'react-paginate';
import Remarkable from 'remarkable'
import NavLink from './NavLink'
import Media from 'react-bootstrap/lib/Media';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
//import MediaBody from 'react-bootstrap/lib/MediaBody';
//import MediaHeading from 'react-bootstrap/lib/MediaHeading';


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
        	<NavLink to={'/product/'+this.props.productId}>
          	{this.props.productname}
          </NavLink>
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
      data     : {limit: this.props.perPage, offset: this.state.offset},
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.data, cat_name: data.title, pageNum: Math.ceil(data.total_count / this.props.perPage)});
        console.log(this.props.perPage + " state : " + this.state.offset);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: [], offset : 0};
  },
  componentDidMount: function() {
    this.loadProductsFromServer();
  },
  render: function() {

    var handlePageClick = (data) => {
      let selected = data.selected;
      let offset = Math.ceil(selected * this.props.perPage);

      this.setState({offset: offset}, () => {
        this.loadProductsFromServer();
      });
    };
    return (
      <div className="ProductList category-page">
        <h1>{this.state.cat_name} </h1>
        <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageNum={this.state.pageNum}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       clickCallback={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
        <ProductList data={this.state.data} />
        
      </div>
    );
  }
});

var ProductList = React.createClass({
  render: function() {
    var productNodes = this.props.data.map(function(product, index) {
      return (

        <Product productname={product.name} rating={product.rating.summary} key={index} url={product.url_key} price={product.price.final} productId={product.id} image={product.image_default.small_image.vertical}>
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
  render() {
    
    const { idcategory } = this.props.params;
    return (
      <ProductBox url={"https://charlie.orami.co.id/api/categories/"+ idcategory + "/products"} perPage={10} />
      
    )
  }
})
