// modules/About.js
import React from 'react'
import Remarkable from 'remarkable'
import NavLink from './NavLink'
import Media from 'react-bootstrap/lib/Media';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
//import MediaBody from 'react-bootstrap/lib/MediaBody';
//import MediaHeading from 'react-bootstrap/lib/MediaHeading';



var ProductBox = React.createClass({
  loadProductsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          data: data,  
          detailInfo : data.detail_info
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: [], image : [], detailInfo:[]};
  },
  componentDidMount: function() {
    this.loadProductsFromServer();
  },
  render: function() {
    if (this.state.data) {
      return (
        <div className="product-page">
          <img src={this.state.image} />
          <h1> {this.state.data.name} </h1>
          {this.state.data.short_desc}
          <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Tab 1">
              {this.state.detailInfo.description}
            </Tab>
            <Tab eventKey={2} title="Tab 2">
              {this.state.detailInfo.nutrition_fact}
            </Tab>
          </Tabs>
        </div>
      );
    }
  }
});


export default React.createClass({
  render() {
    
    const { idproduct } = this.props.params;
    return (
      <ProductBox url={"https://charlie.orami.co.id/api/products/"+ idproduct } />
      
    )
  }
})
