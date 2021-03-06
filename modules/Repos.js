// modules/Repos.js
import React from 'react'
import NavLink from './NavLink'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import ListGroup from 'react-bootstrap/lib/ListGroup';
// ...


var CategorymenuBox = React.createClass({
  loadProductsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          datalevel1: data
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {datalevel1: []};
  },
  componentDidMount: function() {
    this.loadProductsFromServer();
  },
  render: function() {
    return (
        <CategoryList data={this.state.datalevel1} />
    );
  }
});
var CategoryList3 = React.createClass({
  render: function(){
    if (this.props.data) {
      var productNodes3 = this.props.data.map(function(categorymenu3, i) {
        return(
        <ListGroupItem key={i}><NavLink to={'/category/'+categorymenu3.id}>{categorymenu3.name}</NavLink></ListGroupItem>
          
        );
      });
    }
    return (
      <ListGroup>
        {productNodes3}
      </ListGroup>
    );
  }
});
var CategoryList2 = React.createClass({
  render: function(){
    var productNodes2 = this.props.data.map(function(categorymenu2, i) {
      return(
        <ListGroupItem key={i}>
          

          <NavLink to={'/category/'+categorymenu2.id}>{categorymenu2.name}</NavLink>
           <CategoryList3 data={categorymenu2.child} />
        </ListGroupItem>
      );
    });
    return (
      <ListGroup>
        {productNodes2}
      </ListGroup>
    );
  }
});
var CategoryList = React.createClass({
  convertUrl: function() {
    var rawMarkup = this.props.categorymenuid;
    var url1 = "/repos/" + rawMarkup ;
    return url1 ;
  },
  render: function() {
    var productNodes = this.props.data.map(function(categorymenu, i) {
      return (
      <ListGroupItem key={i}>
        <NavLink to={'/category/'+categorymenu.id}>{categorymenu.name}</NavLink>
        {/*<CategoryList2 data={categorymenu.child} />*/}
      </ListGroupItem>
      );
    });
    return (
      <ListGroup>
        {productNodes}
      </ListGroup>
    );
  }
});

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Direktori</h2>

        <CategorymenuBox url="https://charlie.orami.co.id/api/home/megamenu"  />
        
  		{this.props.children}
      </div>
    )
  }
})
