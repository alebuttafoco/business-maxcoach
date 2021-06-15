/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

var app = new Vue({
  el: "#app",
  data: {
    navbarLinks: ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],
    languages: [{
      language: 'english',
      flag: 'gb'
    }, {
      language: 'italiano',
      flag: 'it'
    }, {
      language: 'español',
      flag: 'es'
    }, {
      language: 'français',
      flag: 'fr'
    }]
  },
  methods: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Undefined variable.\n   ╷\n15 │                 color: $logo_color;\r\n   │                        ^^^^^^^^^^^\n   ╵\n  src\\partials\\_navbar.scss 15:24  @import\n  src\\app.scss 5:9                 root stylesheet\n    at processResult (C:\\Users\\alebuttafoco\\Desktop\\Boolean\\Repository Esercitazioni\\proj-html-vuejs\\node_modules\\webpack\\lib\\NormalModule.js:701:19)\n    at C:\\Users\\alebuttafoco\\Desktop\\Boolean\\Repository Esercitazioni\\proj-html-vuejs\\node_modules\\webpack\\lib\\NormalModule.js:807:5\n    at C:\\Users\\alebuttafoco\\Desktop\\Boolean\\Repository Esercitazioni\\proj-html-vuejs\\node_modules\\loader-runner\\lib\\LoaderRunner.js:399:11\n    at C:\\Users\\alebuttafoco\\Desktop\\Boolean\\Repository Esercitazioni\\proj-html-vuejs\\node_modules\\loader-runner\\lib\\LoaderRunner.js:251:18\n    at context.callback (C:\\Users\\alebuttafoco\\Desktop\\Boolean\\Repository Esercitazioni\\proj-html-vuejs\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at C:\\Users\\alebuttafoco\\Desktop\\Boolean\\Repository Esercitazioni\\proj-html-vuejs\\node_modules\\sass-loader\\dist\\index.js:54:7\n    at Function.call$2 (C:\\Users\\alebuttafoco\\Desktop\\Boolean\\Repository Esercitazioni\\proj-html-vuejs\\node_modules\\sass\\sass.dart.js:93405:16)\n    at _render_closure1.call$2 (C:\\Users\\alebuttafoco\\Desktop\\Boolean\\Repository Esercitazioni\\proj-html-vuejs\\node_modules\\sass\\sass.dart.js:81763:12)\n    at _RootZone.runBinary$3$3 (C:\\Users\\alebuttafoco\\Desktop\\Boolean\\Repository Esercitazioni\\proj-html-vuejs\\node_modules\\sass\\sass.dart.js:27547:18)\n    at _FutureListener.handleError$1 (C:\\Users\\alebuttafoco\\Desktop\\Boolean\\Repository Esercitazioni\\proj-html-vuejs\\node_modules\\sass\\sass.dart.js:26096:19)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.scss"]();
/******/ 	
/******/ })()
;