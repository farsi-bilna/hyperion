import React from 'react'
import NavLink from './NavLink'
import PageHeader from './PageHeader';
//import AppBar from './appBar.js';  

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
        <PageHeader title="Direktori"/>
        {/*<ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li><NavLink to="/search">Search</NavLink></li>
        </ul>*/}
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    )
  }
})
