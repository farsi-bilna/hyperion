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
var CategoryList = React.createClass({
  convertUrl: function() {
    var rawMarkup = this.props.categorymenuid;
    var url1 = "/repos/" + rawMarkup ;
    return url1 ;
  },
  render: function() {
    if (this.props.data) {
      var productNodes = this.props.data.map(function(categorymenu, i) {
        return (
        <ListGroupItem key={i}>
          <NavLink to={'/category/'+categorymenu.id}>{categorymenu.name}</NavLink>
          {/*<CategoryList data={categorymenu.child} />*/}
        </ListGroupItem>
        );
      });
    }
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
