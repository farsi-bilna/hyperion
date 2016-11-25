// modules/About.js
import React from 'react'
import ReactPaginate from 'react-paginate';
import Remarkable from 'remarkable'
import NavLink from './NavLink'
import Media from 'react-bootstrap/lib/Media';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { Link } from 'react-router'
//import MediaBody from 'react-bootstrap/lib/MediaBody';
//import MediaHeading from 'react-bootstrap/lib/MediaHeading';


var Product = React.createClass({
  getInitialState: function() {
    return {active: false};
  },
  handleToggle : function() {
    this.setState({active: !this.state.active});
  },
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
        <div className="prod-name" onClick={this.handleToggle}>
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

var ProductBox = React.createClass({
  loadProductsFromServer: function() {
    $.ajax({
      url: this.props.url,
      data     : {limit: this.props.perPage, page: this.state.page},
      dataType: 'json',
      type     : 'GET',
      success: function(data) {
        this.setState({data: data.data, filteratt:data.filter.attributes, cat_name: data.title, pageNum: Math.ceil(data.total_count / this.props.perPage)});
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: [], page : 0};
  },
  componentDidMount: function() {
    this.loadProductsFromServer();
  },
  handlePageClick : function(data) {
    let selected = data.selected;
    let page = Math.ceil(selected * this.props.perPage);
    console.log( data + data.selected + page);

    this.setState({page: page}, () => {
      this.loadProductsFromServer();
      console.log(selected);
    });
  },
  render: function() {

    /*var handlePageClick = function(data){
      let selected = data.selected;
      let page = Math.ceil(selected * this.props.perPage);

      this.setState({page: page}, () => {
        this.loadProductsFromServer();
      });
    };*/
    return (
      <div className="ProductList category-page">
        <div className="tag-title">
        <h3 className="title _h3">{this.state.cat_name}</h3>
        </div>
        <ProductList data={this.state.data} />
        <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageNum={this.state.pageNum}
                       marginPagesDisplayed={1}
                       pageRangeDisplayed={5}
                       clickCallback={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
      </div>
    );
  }
});

var ProductList = React.createClass({
  render: function() {
    var productNodes = this.props.data.map(function(product, index) {
      return (
        <Product productname={product.name} rating={product.rating.summary} key={index} url={product.url_key} price={product.price.final} productId={product.id} image={product.image_default.small_image.vertical} new={product.is_new} brand={product.brand.name} >
        </Product>
      );
    });
    return (
      <ul className="productList">
        {productNodes}
      </ul>
    );
  }
});

var filterprice = React.createClass({
  render: function() {
    return(
      <div>
        filter price
        {this.props.price.max}
        {this.props.price.min}
      </div>
    )
  }
  
})

var Attributechild = React.createClass({
  render: function() {
    
    if (this.props.attchild) {
      var filterNodes = this.props.attchild.map(function(attchild, index) {
      console.log(attchild);
        return (
        <div>
          <Link to={{ pathname: '/category', query: { atribute: true } }} activeClassName="active">
            <label><input type="checkbox" value={attchild.value} /> {attchild.label}</label>
          </Link>
        </div>
        );
      });
    }
    return(
       <div className="productfilterchild">
        {filterNodes}
      </div>
    )
  }
});
var Filtercategory = React.createClass({
  render: function() {
    if (this.props.datafilteratt) {
      var filterNodes = this.props.datafilteratt.map(function(filteratt, index) {
      console.log(filteratt);
        return (
          <div>
          {filteratt.code}
          <Attributechild attchild={filteratt.data} attname={filteratt.code} key={index}/>
          </div>
        );
      });
    }
    return(
       <div className="productfilter">
       this filter <br/>
        {filterNodes}
      </div>
    )
  }
});
export default React.createClass({
  render() {
    
    const { idcategory } = this.props.params;
    return (
      <ProductBox url={"https://charlie.orami.co.id/api/categories/"+ idcategory + "/products?limit=all"} perPage={5} />
      
    )
  }
})
