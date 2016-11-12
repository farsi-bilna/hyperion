import React from 'react'
import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';

/*var Carouselimage = React.createClass({
  render: function() {
  console.log(this.props.carouselimageitem);
    return (
        <CarouselItem>
          <img width={200} height={200} alt="200x200" src={this.props.carouselimageitem}/>
        </CarouselItem>
    );
  }
});

var CarouselList = React.createClass({
  render: function() {
    var carouselNodes = this.props.data.map(function(dataimage, index) {
      return (
        <Carouselimage carouselimageitem={dataimage.image} key={index}/>
      );
    });
    return (
      <Carousel>
        {carouselNodes}
      </Carousel>
    );
  }
});

var CarouselHome = React.createClass({
  loadProductsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          data: data.slider
        });
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
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
    if (this.state.data) {
      return (
        <CarouselList data={this.state.data}/>
      );
    }
  }
});*/

export default React.createClass({
  render() {
    return (
        <div>homepage</div>
    )
  }
})