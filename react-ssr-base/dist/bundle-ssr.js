/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ssr/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Routers.js":
/*!************************!*\
  !*** ./src/Routers.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Home = __webpack_require__(/*! ./containers/home/Home.jsx */ \"./src/containers/home/Home.jsx\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Login = __webpack_require__(/*! ./containers/login/Login.jsx */ \"./src/containers/login/Login.jsx\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _react2.default.createElement(\n  'div',\n  null,\n  _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _Home2.default }),\n  _react2.default.createElement(_reactRouterDom.Route, { path: '/login', exact: true, component: _Login.Login })\n);\n\n//# sourceURL=webpack:///./src/Routers.js?");

/***/ }),

/***/ "./src/components/head/Header.jsx":
/*!****************************************!*\
  !*** ./src/components/head/Header.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Header = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = exports.Header = function Header() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: '/' },\n      'Home'\n    ),\n    _react2.default.createElement('br', null),\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: '/Login' },\n      'Login'\n    )\n  );\n};\n\n//# sourceURL=webpack:///./src/components/head/Header.jsx?");

/***/ }),

/***/ "./src/containers/home/Home.jsx":
/*!**************************************!*\
  !*** ./src/containers/home/Home.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = function (_React$Component) {\n  _inherits(Home, _React$Component);\n\n  function Home(props) {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));\n  }\n\n  _createClass(Home, [{\n    key: 'render',\n    value: function render() {\n      var name = this.props.name;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h1',\n          null,\n          name\n        ),\n        _react2.default.createElement(\n          'div',\n          null,\n          ' \\u540C\\u6784\\u670D\\u52A1\\u5668\\u8DEF\\u7531 '\n        ),\n        _react2.default.createElement(\n          'button',\n          { onClick: function onClick(e) {\n              alert('再来一下');\n            } },\n          ' \\u70B9\\u51FB\\u4E00\\u4E0B '\n        )\n      );\n    }\n  }]);\n\n  return Home;\n}(_react2.default.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    name: state.getIn(['Home', \"name\"])\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, null)(Home);\n\n//# sourceURL=webpack:///./src/containers/home/Home.jsx?");

/***/ }),

/***/ "./src/containers/login/Login.jsx":
/*!****************************************!*\
  !*** ./src/containers/login/Login.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Login = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ../../components/head/Header.jsx */ \"./src/components/head/Header.jsx\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Login = exports.Login = function (_React$Component) {\n  _inherits(Login, _React$Component);\n\n  function Login(props) {\n    _classCallCheck(this, Login);\n\n    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));\n  }\n\n  _createClass(Login, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        \"Login\"\n      );\n    }\n  }]);\n\n  return Login;\n}(_react2.default.Component);\n\n//# sourceURL=webpack:///./src/containers/login/Login.jsx?");

/***/ }),

/***/ "./src/ssr/Render.js":
/*!***************************!*\
  !*** ./src/ssr/Render.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.render = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Routers = __webpack_require__(/*! ../Routers */ \"./src/Routers.js\");\n\nvar _Routers2 = _interopRequireDefault(_Routers);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _Store = __webpack_require__(/*! ../store/Store */ \"./src/store/Store.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _Header = __webpack_require__(/*! ../components/head/Header.jsx */ \"./src/components/head/Header.jsx\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar template = '\\n<html lang=\"en\">\\n<head>\\n  <meta charset=\"UTF-8\">\\n  <title>Document</title>\\n</head>\\n<body>\\n  <div id=\"root\"><!--content--></div>\\n  <script src=\"index.js\"></script>\\n</body>\\n</html>\\n';\n\nvar render = exports.render = function render(req) {\n\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: (0, _Store.ssrStore)() },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.path, content: {} },\n      _react2.default.createElement(_Header.Header, null),\n      _Routers2.default\n    )\n  ));\n  var html = template.replace('<!--content-->', content);\n  console.log(html);\n  return html;\n};\n\n//# sourceURL=webpack:///./src/ssr/Render.js?");

/***/ }),

/***/ "./src/ssr/index.js":
/*!**************************!*\
  !*** ./src/ssr/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _Render = __webpack_require__(/*! ./Render */ \"./src/ssr/Render.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\napp.use(_express2.default.static('public'));\n\napp.get('*', function (req, res) {\n  var html = (0, _Render.render)(req);\n  res.send(html);\n});\n\napp.listen(3000, function () {\n  console.log('ssr server start....');\n});\n\n//# sourceURL=webpack:///./src/ssr/index.js?");

/***/ }),

/***/ "./src/store/Reducer.Home.js":
/*!***********************************!*\
  !*** ./src/store/Reducer.Home.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _immutable = __webpack_require__(/*! immutable */ \"immutable\");\n\nvar defaultState = (0, _immutable.fromJS)({\n  name: \"Tao....\",\n  newList: []\n});\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  return state;\n};\n\n//# sourceURL=webpack:///./src/store/Reducer.Home.js?");

/***/ }),

/***/ "./src/store/Reducer.js":
/*!******************************!*\
  !*** ./src/store/Reducer.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reduxImmutable = __webpack_require__(/*! redux-immutable */ \"redux-immutable\");\n\nvar _ReducerHome = __webpack_require__(/*! ./Reducer.Home.js */ \"./src/store/Reducer.Home.js\");\n\nvar _ReducerHome2 = _interopRequireDefault(_ReducerHome);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reducer = (0, _reduxImmutable.combineReducers)({\n  Home: _ReducerHome2.default\n});\n\nexports.default = reducer;\n\n//# sourceURL=webpack:///./src/store/Reducer.js?");

/***/ }),

/***/ "./src/store/Store.js":
/*!****************************!*\
  !*** ./src/store/Store.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.ssrStore = exports.store = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _Reducer = __webpack_require__(/*! ./Reducer */ \"./src/store/Reducer.js\");\n\nvar _Reducer2 = _interopRequireDefault(_Reducer);\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar window = window || {};\n\n// 是否启用调试工具\nvar composeEnhancers = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;\n\n// 使用中间件\nvar store = exports.store = (0, _redux.createStore)(_Reducer2.default, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default)));\n\nvar ssrStore = exports.ssrStore = function ssrStore() {\n    return (0, _redux.createStore)(_Reducer2.default, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default)));\n};\n\n//# sourceURL=webpack:///./src/store/Store.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"immutable\");\n\n//# sourceURL=webpack:///external_%22immutable%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-immutable":
/*!**********************************!*\
  !*** external "redux-immutable" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-immutable\");\n\n//# sourceURL=webpack:///external_%22redux-immutable%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });