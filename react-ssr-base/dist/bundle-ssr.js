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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Routers = exports.AppRouters = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Home = __webpack_require__(/*! ./containers/home/Home.jsx */ \"./src/containers/home/Home.jsx\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Login = __webpack_require__(/*! ./containers/login/Login.jsx */ \"./src/containers/login/Login.jsx\");\n\nvar _Header = __webpack_require__(/*! ./components/head/Header.jsx */ \"./src/components/head/Header.jsx\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar AppRouters = exports.AppRouters = function AppRouters(props) {\n  console.log(props);\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_Header2.default, null),\n    (0, _reactRouterConfig.renderRoutes)(props.route.routes)\n  );\n};\n\nvar Routers = exports.Routers = [{\n  path: \"/\",\n  component: AppRouters,\n  key: \"home\",\n  routes: [{\n    path: '/',\n    component: _Home2.default,\n    exact: true,\n    loadData: _Home.loadHomeData,\n    key: \"home\"\n  }, {\n    path: \"/login\",\n    exact: true,\n    component: _Login.Login,\n    key: \"login\"\n  }]\n}];\n\n// export default (\n//   <div>\n//     <Route path=\"/\" exact component={Home} />\n//     <Route path=\"/login\" exact component={Login} />\n//   </div>\n// )\n\n//# sourceURL=webpack:///./src/Routers.js?");

/***/ }),

/***/ "./src/api/API.js":
/*!************************!*\
  !*** ./src/api/API.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.apiInstance = exports.API = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar API_HOST = \"http://localhost:3010\";\n\nvar API = exports.API = {\n  GET_HOME_LIST: '/api/get_home_list',\n  LOGIN: '/api/login',\n  LOGOUT: '/api/logout',\n  TRANSLATE: \"/api/translate\"\n};\n\nvar apiInstance = exports.apiInstance = _axios2.default.create({\n  baseURL: API_HOST\n});\n\n//# sourceURL=webpack:///./src/api/API.js?");

/***/ }),

/***/ "./src/components/head/Header.jsx":
/*!****************************************!*\
  !*** ./src/components/head/Header.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _Action = __webpack_require__(/*! ../../store/Action.Login */ \"./src/store/Action.Login.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header(props) {\n  var loginState = props.loginState;\n\n\n  console.log('....');\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'span',\n      null,\n      'Home'\n    ),\n    _react2.default.createElement('br', null),\n    loginState ? loginRender(props) : _react2.default.createElement(\n      _reactRouterDom.Link,\n      { onClick: function onClick(e) {\n          return props.onLoginHandler(props);\n        }, to: '' },\n      '\\u767B\\u5F55'\n    ),\n    _react2.default.createElement('br', null)\n  );\n};\n\nvar loginRender = function loginRender(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { onClick: function onClick(e) {\n          return props.onLogoutHandler(props);\n        }, to: '' },\n      '\\u9000\\u51FA'\n    )\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    loginState: state.Login.isLogin\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onLogoutHandler: function onLogoutHandler() {\n      return dispatch((0, _Action.onLogOut)());\n    },\n    onLoginHandler: function onLoginHandler() {\n      return dispatch((0, _Action.onLogin)());\n    }\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Header);\n\n//# sourceURL=webpack:///./src/components/head/Header.jsx?");

/***/ }),

/***/ "./src/containers/home/Home.jsx":
/*!**************************************!*\
  !*** ./src/containers/home/Home.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.loadHomeData = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _Action = __webpack_require__(/*! ../../store/Action.Home */ \"./src/store/Action.Home.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = function (_React$Component) {\n  _inherits(Home, _React$Component);\n\n  function Home(props) {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));\n  }\n\n  _createClass(Home, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var _props = this.props,\n          name = _props.name,\n          newsList = _props.newsList;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h1',\n          null,\n          name\n        ),\n        _react2.default.createElement(\n          'div',\n          null,\n          ' \\u540C\\u6784\\u670D\\u52A1\\u5668\\u8DEF\\u7531 '\n        ),\n        newsList && newsList.map(function (item) {\n          return _react2.default.createElement(\n            'p',\n            { key: item.id },\n            item.title\n          );\n        }),\n        _react2.default.createElement(\n          'button',\n          { onClick: function onClick(e) {\n              _this2.props.getHomeList();\n            } },\n          ' \\u70B9\\u51FB\\u4E00\\u4E0B '\n        )\n      );\n    }\n\n    /**客户端初始化的时候发起的数据初始化请求 */\n\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var newsList = this.props.newsList;\n\n      if (!newsList.length) {\n        // this.props.getHomeList();\n      }\n    }\n  }]);\n\n  return Home;\n}(_react2.default.Component);\n\n/**ssr服务器端路由时候发起的数据初始化请求 */\n\n\nvar loadHomeData = exports.loadHomeData = function loadHomeData(store) {\n  return store.dispatch(_Action.HomeAction.get_home_list());\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  console.log('....home state');\n  console.log(state);\n  return {\n    name: state.Home.name,\n    newsList: state.Home.newsList\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getHomeList: function getHomeList() {\n      dispatch(_Action.HomeAction.get_home_list());\n    }\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);\n\n//# sourceURL=webpack:///./src/containers/home/Home.jsx?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.render = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"react-router\");\n\nvar _Routers = __webpack_require__(/*! ../Routers */ \"./src/Routers.js\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _Store = __webpack_require__(/*! ../store/Store */ \"./src/store/Store.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _Header = __webpack_require__(/*! ../components/head/Header.jsx */ \"./src/components/head/Header.jsx\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar template = '\\n<html lang=\"en\">\\n<head>\\n  <meta charset=\"UTF-8\">\\n  <title>Document</title>\\n</head>\\n<body>\\n  <div id=\"root\"><!--content--></div>\\n  <script>\\n    window.content = $SOTRE;\\n  </script>\\n  <script src=\"index.js\"></script>\\n</body>\\n</html>\\n';\n\nvar render = exports.render = function render(store, req) {\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.path, content: {} },\n      (0, _reactRouterConfig.renderRoutes)(_Routers.Routers)\n    )\n  ));\n  var storeData = JSON.stringify(store.getState());\n  template = template.replace('$SOTRE', storeData);\n  var html = template.replace('<!--content-->', content);\n  console.log(html);\n  return html;\n};\n\n//# sourceURL=webpack:///./src/ssr/Render.js?");

/***/ }),

/***/ "./src/ssr/index.js":
/*!**************************!*\
  !*** ./src/ssr/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _Render = __webpack_require__(/*! ./Render */ \"./src/ssr/Render.js\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Store = __webpack_require__(/*! ../store/Store */ \"./src/store/Store.js\");\n\nvar _Routers = __webpack_require__(/*! ../Routers */ \"./src/Routers.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\napp.use(_express2.default.static('public'));\n\napp.get('*', function (req, res) {\n  //获取一个 sotre() 的实例\n  var store = (0, _Store.ssrStore)();\n  //匹配当前的路由 \n  var matchedRouters = (0, _reactRouterConfig.matchRoutes)(_Routers.Routers, req.path);\n  //get到相关的promiese\n  var promisess = [];\n  matchedRouters.forEach(function (item) {\n    if (item.route.loadData) {\n      console.log('......');\n      console.log(item);\n      promisess.push(item.route.loadData(store));\n    }\n  });\n  console.log(promisess.length + '----------');\n  console.log(promisess);\n\n  /** 相关的promiss 处理完成之后 开始渲染page */\n  Promise.all(promisess).then(function (load) {\n    var html = (0, _Render.render)(store, req);\n    res.send(html);\n  });\n});\n\napp.listen(3000, function () {\n  console.log('ssr server start....');\n});\n\n//# sourceURL=webpack:///./src/ssr/index.js?");

/***/ }),

/***/ "./src/store/Action.Home.js":
/*!**********************************!*\
  !*** ./src/store/Action.Home.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.HomeAction = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _API = __webpack_require__(/*! ../api/API */ \"./src/api/API.js\");\n\nvar _ActionConst = __webpack_require__(/*! ./ActionConst */ \"./src/store/ActionConst.js\");\n\nvar _ActionCreate = __webpack_require__(/*! ./ActionCreate */ \"./src/store/ActionCreate.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar HomeAction = exports.HomeAction = {\n  createAction: _ActionCreate.createAction,\n  get_home_list: function get_home_list() {\n    return function (dispatch) {\n      return _API.apiInstance.get(_API.API.GET_HOME_LIST).then(function (res) {\n        var action = (0, _ActionCreate.createAction)(_ActionConst.ACTION_CONSTANTS.GET_HOME_LIST);\n        action = Object.assign(action, { newsList: res.data.list });\n        console.log(action);\n        dispatch(action);\n      });\n    };\n  }\n};\n\n//# sourceURL=webpack:///./src/store/Action.Home.js?");

/***/ }),

/***/ "./src/store/Action.Login.js":
/*!***********************************!*\
  !*** ./src/store/Action.Login.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.onLogOut = exports.onLogin = undefined;\n\nvar _ActionConst = __webpack_require__(/*! ./ActionConst */ \"./src/store/ActionConst.js\");\n\nvar _ActionCreate = __webpack_require__(/*! ./ActionCreate */ \"./src/store/ActionCreate.js\");\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _API = __webpack_require__(/*! ../api/API */ \"./src/api/API.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar onLogin = exports.onLogin = function onLogin() {\n  return function (dispatch, state) {\n    return _API.apiInstance.post(_API.API.LOGIN, { user: 'tao' }).then(function (res) {\n      var act = (0, _ActionCreate.createAction)(_ActionConst.ACTION_CONSTANTS.CHANGE_LOGIN_STATE);\n      act.loginState = res.data.success;\n      dispatch(act);\n    }).catch(function (err) {\n      var act = (0, _ActionCreate.createAction)(_ActionConst.ACTION_CONSTANTS.CHANGE_LOGIN_ERROR);\n      act.loginState = res.data.success;\n      act.code = res.data.code;\n      dispatch(act);\n    });\n  };\n};\n\nvar onLogOut = exports.onLogOut = function onLogOut() {\n  return function (dispatch, state) {\n    return _API.apiInstance.post(_API.API.LOGOUT, { user: 'tao' }).then(function (res) {\n      var act = (0, _ActionCreate.createAction)(_ActionConst.ACTION_CONSTANTS.CHANGE_LOGIN_STATE);\n      act.loginState = res.data.success;\n      dispatch(act);\n    }).catch(function (err) {\n      var act = (0, _ActionCreate.createAction)(_ActionConst.ACTION_CONSTANTS.CHANGE_LOGIN_ERROR);\n      act.loginState = res.data.success;\n      act.code = res.data.code;\n      dispatch(act);\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/store/Action.Login.js?");

/***/ }),

/***/ "./src/store/ActionConst.js":
/*!**********************************!*\
  !*** ./src/store/ActionConst.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar ACTION_CONSTANTS = exports.ACTION_CONSTANTS = {\n  GET_HOME_LIST: \"__getHomeList__\",\n  CHANGE_LOGIN_STATE: \"__change_login_state\",\n  CHANGE_LOGIN_ERROR: \"__change_login_error__\"\n};\n\n//# sourceURL=webpack:///./src/store/ActionConst.js?");

/***/ }),

/***/ "./src/store/ActionCreate.js":
/*!***********************************!*\
  !*** ./src/store/ActionCreate.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar action_struct = {\n  type: \"\"\n};\n\nvar createAction = exports.createAction = function createAction(type) {\n  if (!type) return null;\n  var action = Object.assign(action_struct, { type: type });\n  return action;\n};\n\n//# sourceURL=webpack:///./src/store/ActionCreate.js?");

/***/ }),

/***/ "./src/store/Reducer.Home.js":
/*!***********************************!*\
  !*** ./src/store/Reducer.Home.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ActionConst = __webpack_require__(/*! ./ActionConst */ \"./src/store/ActionConst.js\");\n\nvar defaultState = {\n  name: \"Tao....\",\n  newsList: []\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _ActionConst.ACTION_CONSTANTS.GET_HOME_LIST:\n      console.log('..........');\n      console.log(action);\n      return {\n        newsList: action.newsList,\n        name: state.name\n      };\n      break;\n  }\n  return state;\n};\n\n//# sourceURL=webpack:///./src/store/Reducer.Home.js?");

/***/ }),

/***/ "./src/store/Reducer.Login.js":
/*!************************************!*\
  !*** ./src/store/Reducer.Login.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ActionConst = __webpack_require__(/*! ./ActionConst */ \"./src/store/ActionConst.js\");\n\nvar defaultState = {\n  isLogin: false,\n  loginError: 0\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  var newState = null;\n  switch (action.type) {\n    case _ActionConst.ACTION_CONSTANTS.CHANGE_LOGIN_STATE:\n      newState = Object.assign(defaultStatus, { isLogin: action.loginState });\n      return newState;\n      break;\n    case _ActionConst.ACTION_CONSTANTS.CHANGE_LOGIN_ERROR:\n      newState = Object.assign(defaultStatus, { isLogin: action.loginState, loginError: action.code });\n      return newState;\n      break;\n  }\n  return state;\n};\n\n//# sourceURL=webpack:///./src/store/Reducer.Login.js?");

/***/ }),

/***/ "./src/store/Reducer.js":
/*!******************************!*\
  !*** ./src/store/Reducer.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _ReducerHome = __webpack_require__(/*! ./Reducer.Home.js */ \"./src/store/Reducer.Home.js\");\n\nvar _ReducerHome2 = _interopRequireDefault(_ReducerHome);\n\nvar _ReducerLogin = __webpack_require__(/*! ./Reducer.Login.js */ \"./src/store/Reducer.Login.js\");\n\nvar _ReducerLogin2 = _interopRequireDefault(_ReducerLogin);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reducer = (0, _redux.combineReducers)({\n  Home: _ReducerHome2.default,\n  Login: _ReducerLogin2.default\n});\n\nexports.default = reducer;\n\n//# sourceURL=webpack:///./src/store/Reducer.js?");

/***/ }),

/***/ "./src/store/Store.js":
/*!****************************!*\
  !*** ./src/store/Store.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.ssrStore = exports.clientStore = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _Reducer = __webpack_require__(/*! ./Reducer */ \"./src/store/Reducer.js\");\n\nvar _Reducer2 = _interopRequireDefault(_Reducer);\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// let window = window || {};\n// 是否启用调试工具\n\n//客户端获取的store\nvar clientStore = exports.clientStore = function clientStore() {\n    console.log(\".......... clientStore\");\n    var defaultState = window.content;\n    var composeEnhancers = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;\n    return (0, _redux.createStore)(_Reducer2.default, defaultState, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default)));\n};\n\n//服务端获取的store\nvar ssrStore = exports.ssrStore = function ssrStore() {\n    var composeEnhancers = _redux.compose;\n    return (0, _redux.createStore)(_Reducer2.default, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default)));\n};\n\n//# sourceURL=webpack:///./src/store/Store.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

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

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

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

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });