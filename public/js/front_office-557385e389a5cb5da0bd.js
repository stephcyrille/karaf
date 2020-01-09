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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/js/frontend/front_office/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/frontend/front_office/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/frontend/front_office/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\a\\Documents\\stephcyrille\\Social\\resources\\js\\frontend\\front_office\\index.js: Unexpected token (16:4)\n\n  14 | if (document.getElementById('root')) {\n  15 |   ReactDOM.render(\n> 16 |     <Provider store={store}>\n     |     ^\n  17 |       <ConnectedRouter history={history}>\n  18 |         <App />\n  19 |       </ConnectedRouter>\n    at Parser.raise (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:7012:17)\n    at Parser.unexpected (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:8405:16)\n    at Parser.parseExprAtom (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:9661:20)\n    at Parser.parseExprSubscripts (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:9237:23)\n    at Parser.parseMaybeUnary (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:9217:21)\n    at Parser.parseExprOps (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:9083:23)\n    at Parser.parseMaybeConditional (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:9056:23)\n    at Parser.parseMaybeAssign (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:9015:21)\n    at Parser.parseExprListItem (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:10331:18)\n    at Parser.parseCallExpressionArguments (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:9434:22)\n    at Parser.parseSubscript (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:9342:29)\n    at Parser.parseSubscripts (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:9258:19)\n    at Parser.parseExprSubscripts (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:9247:17)\n    at Parser.parseMaybeUnary (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:9217:21)\n    at Parser.parseExprOps (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:9083:23)\n    at Parser.parseMaybeConditional (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:9056:23)\n    at Parser.parseMaybeAssign (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:9015:21)\n    at Parser.parseExpression (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:8965:23)\n    at Parser.parseStatementContent (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:10819:23)\n    at Parser.parseStatement (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:10690:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:11266:25)\n    at Parser.parseBlockBody (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:11253:10)\n    at Parser.parseBlock (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:11237:10)\n    at Parser.parseStatementContent (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:10766:21)\n    at Parser.parseStatement (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:10690:17)\n    at Parser.parseIfStatement (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:11044:28)\n    at Parser.parseStatementContent (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:10735:21)\n    at Parser.parseStatement (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:10690:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:11266:25)\n    at Parser.parseBlockBody (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:11253:10)\n    at Parser.parseTopLevel (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:10621:10)\n    at Parser.parse (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:12131:10)\n    at parse (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\parser\\lib\\index.js:12182:38)\n    at parser (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:187:34)\n    at normalizeFile (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:113:11)\n    at runSync (C:\\Users\\a\\Documents\\stephcyrille\\Social\\node_modules\\@babel\\core\\lib\\transformation\\index.js:44:43)");

/***/ })

/******/ });