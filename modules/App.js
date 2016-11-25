import React from 'react'
import NavLink from './NavLink'
import PageHeader from './PageHeader'
import Logo from './Logo'
//import { AppBar } from 'react-toolbox/lib/app_bar';
//import {IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import AppBar from './appBar.js'
import Drawer from 'react-toolbox/lib/drawer';


/*if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js', {scope: './'})
  .then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}*/

export default React.createClass({

  render() {
    return (
      <div>
        {/*
        <PageHeader title="Direktori"/>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li><NavLink to="/search">Search</NavLink></li>
        </ul>*/}

      <AppBar/>
        {this.props.children}
      </div>
    )
  }
})
