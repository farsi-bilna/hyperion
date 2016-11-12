/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _compression = __webpack_require__(3);

	var _compression2 = _interopRequireDefault(_compression);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(5);

	var _reactRouter = __webpack_require__(6);

	var _routes = __webpack_require__(7);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)();

	app.use((0, _compression2.default)());

	// serve our static stuff like index.css
	app.use(_express2.default.static(_path2.default.join(__dirname, 'public'), { index: false }));

	// send all requests to index.html so browserHistory works
	app.get('*', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    if (err) {
	      res.status(500).send(err.message);
	    } else if (redirect) {
	      res.redirect(redirect.pathname + redirect.search);
	    } else if (props) {
	      // hey we made it!
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	      res.send(renderPage(appHtml));
	    } else {
	      res.status(404).send('Not Found');
	    }
	  });
	});

	function renderPage(appHtml) {
	  return '\n    <!doctype html public="storage">\n    <html>\n    <meta charset=utf-8/>\n    <title>My First React Router App</title>\n    <link rel=stylesheet href=/index.css>\n<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>\n    <div id=app>' + appHtml + '</div>\n    <script src="/bundle.js"></script>\n   ';
	}

	var PORT = process.env.PORT || 8080;
	app.listen(PORT, function () {
	  console.log('Production Express server running at localhost:' + PORT);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-toolbox/lib/commons.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _App = __webpack_require__(9);

	var _App2 = _interopRequireDefault(_App);

	var _About = __webpack_require__(12);

	var _About2 = _interopRequireDefault(_About);

	var _Category = __webpack_require__(14);

	var _Category2 = _interopRequireDefault(_Category);

	var _Search = __webpack_require__(16);

	var _Search2 = _interopRequireDefault(_Search);

	var _Searchresult = __webpack_require__(17);

	var _Searchresult2 = _interopRequireDefault(_Searchresult);

	var _Repos = __webpack_require__(18);

	var _Repos2 = _interopRequireDefault(_Repos);

	var _Repo = __webpack_require__(19);

	var _Repo2 = _interopRequireDefault(_Repo);

	var _Home = __webpack_require__(20);

	var _Home2 = _interopRequireDefault(_Home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _App2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/repos', component: _Repos2.default },
	    _react2.default.createElement(_reactRouter.Route, { path: '/repos/:userName', component: _Repo2.default })
	  ),
	  _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/category/:idcategory', component: _Category2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/search', component: _Search2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/search/searchresult/:qstring', component: _Searchresult2.default })
	); // modules/routes.js

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(10);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _reactBootstrap = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Import common styles
	//import AppBar from './appBar.js';  


	exports.default = _react2.default.createClass({
	  displayName: 'App',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h1',
	        null,
	        'React Router Tutorial'
	      ),
	      _react2.default.createElement('button', null),
	      _react2.default.createElement(
	        'ul',
	        { role: 'nav' },
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/', onlyActiveOnIndex: true },
	            'Home'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/about' },
	            'About'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/repos' },
	            'Repos'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/search' },
	            'Search'
	          )
	        )
	      ),
	      this.props.children
	    );
	  }
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'NavLink',
	  render: function render() {
	    return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'active' }));
	  }
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _remarkable = __webpack_require__(13);

	var _remarkable2 = _interopRequireDefault(_remarkable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// modules/About.js
	var Product = _react2.default.createClass({
	  displayName: 'Product',

	  rawMarkup: function rawMarkup() {
	    var md = new _remarkable2.default();
	    var rawMarkup = md.render(this.props.children.toString());
	    return { __html: rawMarkup };
	  },

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'product' },
	      _react2.default.createElement(
	        'h2',
	        { className: 'productName' },
	        _react2.default.createElement(
	          'a',
	          { 'class': 'url_prod', href: this.props.url },
	          this.props.productname
	        )
	      ),
	      _react2.default.createElement('img', { 'class': 'image', src: this.props.image }),
	      _react2.default.createElement('span', { dangerouslySetInnerHTML: this.rawMarkup() })
	    );
	  }
	});

	var ProductBox = _react2.default.createClass({
	  displayName: 'ProductBox',

	  loadProductsFromServer: function loadProductsFromServer() {
	    $.ajax({
	      url: this.props.url,
	      dataType: 'json',
	      cache: false,
	      success: function (data) {
	        this.setState({ data: data.data });
	        //console.log(data);
	      }.bind(this),
	      error: function (xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	  },
	  getInitialState: function getInitialState() {
	    return { data: [] };
	  },
	  componentDidMount: function componentDidMount() {
	    this.loadProductsFromServer();
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'ProductBox' },
	      _react2.default.createElement(
	        'h1',
	        null,
	        'Product list'
	      ),
	      _react2.default.createElement(ProductList, { data: this.state.data })
	    );
	  }
	});

	var ProductList = _react2.default.createClass({
	  displayName: 'ProductList',

	  render: function render() {
	    var productNodes = this.props.data.map(function (product) {
	      return _react2.default.createElement(
	        Product,
	        { productname: product.name, key: product.id, url: product.url_key, image: product.image_default.small_image.vertical },
	        product.short_desc
	      );
	    });
	    return _react2.default.createElement(
	      'div',
	      { className: 'productList' },
	      productNodes
	    );
	  }
	});

	exports.default = _react2.default.createClass({
	  displayName: 'About',
	  render: function render() {
	    return _react2.default.createElement(ProductBox, { url: 'https://charlie.orami.co.id/api/categories/7661/products' });
	  }
	});

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("remarkable");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactPaginate = __webpack_require__(15);

	var _reactPaginate2 = _interopRequireDefault(_reactPaginate);

	var _remarkable = __webpack_require__(13);

	var _remarkable2 = _interopRequireDefault(_remarkable);

	var _NavLink = __webpack_require__(10);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// modules/About.js
	var Product = _react2.default.createClass({
	  displayName: 'Product',

	  rawMarkup: function rawMarkup() {
	    var md = new _remarkable2.default();
	    var rawMarkup = md.render(this.props.children.toString());
	    return { __html: rawMarkup };
	  },

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'product' },
	      _react2.default.createElement(
	        'h2',
	        { className: 'productName' },
	        _react2.default.createElement(
	          'a',
	          { 'class': 'url_prod', href: this.props.url },
	          this.props.productname
	        )
	      ),
	      _react2.default.createElement('img', { 'class': 'image', src: this.props.image }),
	      _react2.default.createElement('span', { dangerouslySetInnerHTML: this.rawMarkup() })
	    );
	  }
	});

	var ProductBox = _react2.default.createClass({
	  displayName: 'ProductBox',

	  loadProductsFromServer: function loadProductsFromServer() {
	    $.ajax({
	      url: this.props.url,
	      data: { limit: this.props.perPage, offset: this.state.offset },
	      dataType: 'json',
	      cache: false,
	      success: function (data) {
	        this.setState({ data: data.data, cat_name: data.title, pageNum: Math.ceil(data.total_count / this.props.perPage) });
	        console.log(this.props.perPage + " state : " + this.state.offset);
	      }.bind(this),
	      error: function (xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	  },
	  getInitialState: function getInitialState() {
	    return { data: [], offset: 0 };
	  },
	  componentDidMount: function componentDidMount() {
	    this.loadProductsFromServer();
	  },
	  render: function render() {
	    var _this = this;

	    var handlePageClick = function handlePageClick(data) {
	      var selected = data.selected;
	      var offset = Math.ceil(selected * _this.props.perPage);

	      _this.setState({ offset: offset }, function () {
	        _this.loadProductsFromServer();
	      });
	    };
	    return _react2.default.createElement(
	      'div',
	      { className: 'ProductBox' },
	      _react2.default.createElement(
	        'h1',
	        null,
	        'Product list in ',
	        this.state.cat_name,
	        ' '
	      ),
	      _react2.default.createElement(_reactPaginate2.default, { previousLabel: "previous",
	        nextLabel: "next",
	        breakLabel: _react2.default.createElement(
	          'a',
	          { href: '' },
	          '...'
	        ),
	        breakClassName: "break-me",
	        pageNum: this.state.pageNum,
	        marginPagesDisplayed: 2,
	        pageRangeDisplayed: 5,
	        clickCallback: this.handlePageClick,
	        containerClassName: "pagination",
	        subContainerClassName: "pages pagination",
	        activeClassName: "active" }),
	      _react2.default.createElement(ProductList, { data: this.state.data })
	    );
	  }
	});

	var ProductList = _react2.default.createClass({
	  displayName: 'ProductList',

	  render: function render() {
	    var productNodes = this.props.data.map(function (product, index) {
	      return _react2.default.createElement(
	        Product,
	        { productname: product.name, key: index, url: product.url_key, image: product.image_default.small_image.vertical },
	        product.short_desc
	      );
	    });
	    return _react2.default.createElement(
	      'div',
	      { className: 'productList' },
	      productNodes
	    );
	  }
	});

	exports.default = _react2.default.createClass({
	  displayName: 'Category',
	  render: function render() {
	    var idcategory = this.props.params.idcategory;

	    return _react2.default.createElement(ProductBox, { url: "https://charlie.orami.co.id/api/categories/" + idcategory + "/products", perPage: 10 });
	  }
	});

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("react-paginate");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "Search",

	  contextTypes: {
	    router: _react2.default.PropTypes.object
	  },
	  handleSubmit: function handleSubmit(event) {
	    event.preventDefault();
	    var qstring = event.target.elements[0].value;
	    var convert_qstring = "?q=" + qstring;
	    var api_url = "https://charlie.orami.co.id/api/products/search" + convert_qstring;
	    var path = "/search/searchresult/" + qstring;
	    console.log(api_url);
	    this.context.router.push(path);
	  },
	  render: function render() {
	    var qstring = this.props.params.qstring;

	    return _react2.default.createElement(
	      "div",
	      null,
	      _react2.default.createElement(
	        "form",
	        { onSubmit: this.handleSubmit },
	        _react2.default.createElement("input", { type: "text", placeholder: qstring }),
	        _react2.default.createElement(
	          "button",
	          { type: "submit" },
	          "Go"
	        )
	      ),
	      this.props.children
	    );
	  }
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _remarkable = __webpack_require__(13);

	var _remarkable2 = _interopRequireDefault(_remarkable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// modules/About.js
	var Product = _react2.default.createClass({
	  displayName: 'Product',

	  rawMarkup: function rawMarkup() {
	    var md = new _remarkable2.default();
	    var rawMarkup = md.render(this.props.children.toString());
	    return { __html: rawMarkup };
	  },

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'product' },
	      _react2.default.createElement(
	        'h2',
	        { className: 'productName' },
	        _react2.default.createElement(
	          'a',
	          { 'class': 'url_prod', href: this.props.url },
	          this.props.productname
	        )
	      ),
	      _react2.default.createElement('img', { 'class': 'image', src: this.props.image }),
	      _react2.default.createElement('span', { dangerouslySetInnerHTML: this.rawMarkup() })
	    );
	  }
	});

	var ProductBox = _react2.default.createClass({
	  displayName: 'ProductBox',

	  loadProductsFromServer: function loadProductsFromServer() {
	    $.ajax({
	      url: this.props.url,
	      dataType: 'json',
	      cache: false,
	      success: function (data) {
	        this.setState({ data: data.data });
	        //console.log(data);
	      }.bind(this),
	      error: function (xhr, status, err) {
	        this.setState({ data: "not found" });
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	  },
	  getInitialState: function getInitialState() {
	    return { data: [] };
	  },
	  componentDidMount: function componentDidMount() {
	    this.loadProductsFromServer();
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'ProductBox' },
	      _react2.default.createElement(
	        'h1',
	        null,
	        'Product list'
	      ),
	      _react2.default.createElement(ProductList, { data: this.state.data })
	    );
	  }
	});

	var ProductList = _react2.default.createClass({
	  displayName: 'ProductList',

	  render: function render() {
	    var productNodes = this.props.data.map(function (product) {
	      return _react2.default.createElement(
	        Product,
	        { productname: product.name, key: product.id, url: product.url_key, image: product.image_default.small_image.vertical },
	        product.short_desc
	      );
	    });
	    return _react2.default.createElement(
	      'div',
	      { className: 'productList' },
	      productNodes
	    );
	  }
	});

	exports.default = _react2.default.createClass({
	  displayName: 'Searchresult',

	  convertUrlapi: function convertUrlapi(value) {
	    var qstring = value;
	    var url1 = "https://charlie.orami.co.id/api/products/search?q=" + qstring;
	    console.log(url1);
	    return url1;
	  },
	  render: function render() {
	    var qstring = this.props.params.qstring;

	    return _react2.default.createElement(ProductBox, { url: "https://charlie.orami.co.id/api/products/search?q=" + qstring });
	  }
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(10);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// ...


	// modules/Repos.js
	var CategorymenuBox = _react2.default.createClass({
	  displayName: 'CategorymenuBox',

	  loadProductsFromServer: function loadProductsFromServer() {
	    $.ajax({
	      url: this.props.url,
	      dataType: 'json',
	      cache: false,
	      success: function (data) {
	        this.setState({
	          datalevel1: data
	        });
	      }.bind(this),
	      error: function (xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	  },
	  getInitialState: function getInitialState() {
	    return { datalevel1: [] };
	  },
	  componentDidMount: function componentDidMount() {
	    this.loadProductsFromServer();
	  },
	  render: function render() {
	    return _react2.default.createElement(CategoryList, { data: this.state.datalevel1 });
	  }
	});
	var CategoryList3 = _react2.default.createClass({
	  displayName: 'CategoryList3',

	  render: function render() {
	    if (this.props.data) {
	      var productNodes3 = this.props.data.map(function (categorymenu3, i) {
	        return _react2.default.createElement(
	          'li',
	          { className: 'categoryItem3', key: i },
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/category/' + categorymenu3.id },
	            categorymenu3.name
	          )
	        );
	      });
	    }
	    return _react2.default.createElement(
	      'ul',
	      { className: 'CategoryList3' },
	      productNodes3
	    );
	  }
	});
	var CategoryList2 = _react2.default.createClass({
	  displayName: 'CategoryList2',

	  render: function render() {
	    var productNodes2 = this.props.data.map(function (categorymenu2, i) {
	      return _react2.default.createElement(
	        'li',
	        { className: 'categoryItem2', key: i },
	        _react2.default.createElement(
	          _NavLink2.default,
	          { to: '/category/' + categorymenu2.id },
	          categorymenu2.name
	        ),
	        _react2.default.createElement(CategoryList3, { data: categorymenu2.child })
	      );
	    });
	    return _react2.default.createElement(
	      'ul',
	      { className: 'CategoryList2' },
	      productNodes2
	    );
	  }
	});
	var CategoryList = _react2.default.createClass({
	  displayName: 'CategoryList',

	  convertUrl: function convertUrl() {
	    var rawMarkup = this.props.categorymenuid;
	    var url1 = "/repos/" + rawMarkup;
	    return url1;
	  },
	  render: function render() {
	    var productNodes = this.props.data.map(function (categorymenu, i) {
	      return _react2.default.createElement(
	        'li',
	        { className: 'categoryItem', key: i },
	        _react2.default.createElement(
	          _NavLink2.default,
	          { to: '/category/' + categorymenu.id },
	          categorymenu.name
	        ),
	        _react2.default.createElement(CategoryList2, { data: categorymenu.child })
	      );
	    });
	    return _react2.default.createElement(
	      'ul',
	      { className: 'CategoryList' },
	      productNodes
	    );
	  }
	});

	exports.default = _react2.default.createClass({
	  displayName: 'Repos',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h2',
	        null,
	        'Repos'
	      ),
	      _react2.default.createElement(CategorymenuBox, { url: 'https://charlie.orami.co.id/api/home/megamenu' }),
	      this.props.children
	    );
	  }
	});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _remarkable = __webpack_require__(13);

	var _remarkable2 = _interopRequireDefault(_remarkable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Product = _react2.default.createClass({
	  displayName: 'Product',

	  rawMarkup: function rawMarkup() {
	    var md = new _remarkable2.default();
	    var rawMarkup = md.render(this.props.children.toString());
	    return { __html: rawMarkup };
	  },

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'product' },
	      _react2.default.createElement(
	        'h2',
	        { className: 'productName' },
	        _react2.default.createElement(
	          'a',
	          { 'class': 'url_prod', href: this.props.url_prod },
	          this.props.productname
	        )
	      ),
	      _react2.default.createElement('img', { 'class': 'image', src: this.props.image }),
	      _react2.default.createElement('span', { dangerouslySetInnerHTML: this.rawMarkup() })
	    );
	  }
	});

	var ProductBox = _react2.default.createClass({
	  displayName: 'ProductBox',

	  loadProductsFromServer: function loadProductsFromServer() {
	    $.ajax({
	      url: this.props.url,
	      dataType: 'json',
	      cache: false,
	      success: function (data) {
	        this.setState({ data: data.data });
	        console.log(this.props.url);
	        console.log(data);
	      }.bind(this),
	      error: function (xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	  },
	  getInitialState: function getInitialState() {
	    return { data: [] };
	  },
	  componentDidMount: function componentDidMount() {
	    this.loadProductsFromServer();
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'ProductBox' },
	      _react2.default.createElement(
	        'h1',
	        null,
	        'Product list'
	      ),
	      _react2.default.createElement(ProductList, { data: this.state.data })
	    );
	  }
	});

	var ProductList = _react2.default.createClass({
	  displayName: 'ProductList',

	  render: function render() {
	    var productNodes = this.props.data.map(function (product) {
	      return _react2.default.createElement(
	        Product,
	        { productname: product.name, key: product.id, url_prod: product.url_key, image: product.image_default.small_image.vertical },
	        product.short_desc
	      );
	    });
	    return _react2.default.createElement(
	      'div',
	      { className: 'productList' },
	      productNodes
	    );
	  }
	});

	exports.default = _react2.default.createClass({
	  displayName: 'Repo',


	  convertUrlapi: function convertUrlapi(value) {
	    var id_cat = value;
	    var url1 = "https://charlie.orami.co.id/api/categories/" + id_cat + "/products";
	    console.log(url1);
	    return url1;
	  },
	  render: function render() {
	    var _props$params = this.props.params;
	    var userName = _props$params.userName;
	    var repoName = _props$params.repoName;

	    return _react2.default.createElement(ProductBox, { url: this.convertUrlapi(userName) });
	  }
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Home',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      'Home'
	    );
	  }
	});

/***/ }
/******/ ]);