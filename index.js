import 'react-toolbox/lib/commons.scss';
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Category from './modules/Category'
import Product from './modules/ProductDetail'
import Search from './modules/Search'
import Searchresult from './modules/Searchresult'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'
//import routes from './modules/routes'

render((
    <Router history={browserHistory}>
	    <Route path="/" component={App}>
		    <IndexRoute component={Home}/>
		    <Route path="/repos" component={Repos}>
		      <Route path="/repos/:userName" component={Repo}/>
		    </Route>
		    <Route path="/about" component={About}/>
		    <Route path="/category/:idcategory" component={Category}/>
		    <Route path="/product/:idproduct" component={Product}/>
		    <Route path="/search" component={Search}>
		      <Route path="/search/searchresult/:qstring" component={Searchresult}/>
		    </Route>
	  	</Route>
    </Router>), document.getElementById('app'))
