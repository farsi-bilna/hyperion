import React from 'react'
import NavLink from './NavLink'
import Search from './Search'

import Logo from './Logo.js';
var PageHeader = React.createClass({
  render() {
    return (
      <div className="header" id="content">
        <div className="container">
          <div className="left-header">
          <NavLink to="/" onlyActiveOnIndex><Logo /></NavLink>
            <div className="direktori"><NavLink to="/repos">{this.props.title}</NavLink></div>
            <p>{this.props.subTitle}</p>
          </div>
          <div className="right-header">
            <Search/>
            <NavLink to="/search">Search</NavLink>
          </div>
        </div>
      </div>
    );
  }
});

export default PageHeader;