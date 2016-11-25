import React, { PropTypes } from 'react'
import { AppBar } from 'react-toolbox/lib/app_bar'
import Logo from './Logo.js'
import Drawer from 'react-toolbox/lib/drawer'
import CategorymenuBox from './Repos.js'
import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu'
import { IconButton , Button} from 'react-toolbox/lib/button'; // Bundled component import

var HomeLink = React.createClass ({
  handleHome : function() {
    window.location = '/';
  },
  render: function() {
    return (
      <div>
        <Button label='Orami' primary onClick={this.handleHome} />
      </div>
    );
  }
});
export default React.createClass({

  getInitialState: function() {
    return {active: false};
  },
  handleToggle : function() {
    this.setState({active: !this.state.active});
  },
  GotoSearch : function() {
    window.location = '/search';
  },
  render() {
    return (
      <AppBar leftIcon="menu" onLeftIconClick={ this.handleToggle } onRightIconClick={ this.GotoSearch} rightIcon="search">
        <HomeLink/>
        <Drawer active={this.state.active} onOverlayClick={this.handleToggle}>
          <CategorymenuBox />
        </Drawer>

      </AppBar>
    )
  }
})

