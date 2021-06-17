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
      flag: 'en'
    }, {
      language: 'français',
      flag: 'fr'
    }, {
      language: 'deutsche',
      flag: 'de'
    }],
    activeLanguage: 0,
    approachData: [{
      img: '1',
      title: 'One to One',
      text: 'Getting the necessaty clarity about the current state to help you to improve your game.'
    }, {
      img: '2',
      title: 'Anywhere',
      text: 'Access to valuable and portable program which allow you to setup and live anywhere you want.'
    }, {
      img: '3',
      title: 'On Time',
      text: 'Puncuality is our top priority because it\'s an essential criteria to assess a program quality.'
    }, {
      img: '4',
      title: 'Online Coures',
      text: 'Online business coaching now offers you a very powerful way to empower your business into success.'
    }, {
      img: '5',
      title: 'Consulting',
      text: 'You will get a clear senso of direction for your business, throught assessment and faster results.'
    }, {
      img: '6',
      title: 'Self Development',
      text: 'Business Coaching often keep you focus and develop you both in a professional and personal way.'
    }],
    exploreData: [{
      img: './dist/img/home-business-service-slide-01-480x298.jpg',
      title: 'Consultative Training',
      text: 'With a coach addessing multiple issues that are off balance, affecting your business in various unconsidered ways.'
    }, {
      img: './dist/img/home-business-service-slide-02-480x298.jpg',
      title: 'Real Deal Coaching',
      text: 'Brings an exeptionally powerful opportunity. Being able to accept, to work with that opportunity.'
    }, {
      img: './dist/img/home-business-service-slide-03-480x298.jpg',
      title: 'Advisor training Program',
      text: 'Getting high quality, entrepreneur mindset driven online business coaching, is what is needed.'
    }],
    coursesData: [{
      img: './dist/img/course-01.jpg',
      title: 'Learning to Write as a Professional Author',
      price: '40'
    }, {
      img: './dist/img/course-02.jpg',
      title: 'Customer-centric Info-Tech Strategies',
      price: 'Free'
    }, {
      img: './dist/img/course-03.jpg',
      title: 'Open Programming Courses for Everyone: Python',
      price: '19'
    }, {
      img: './dist/img/course-04.jpg',
      title: 'Academic Listening and Note-taking',
      price: '26'
    }],
    FAQ: [{
      question: 'How can we help?',
      answer: 'How many courses you\' been on, using however many techniques and methods. Unless you\'ve come to realize the value of mindset, then you\'ve yet to understand how succes comes. With every else\'s mindset involved impacting too. Hence why business coaching is so crucial for success. ',
      active: true
    }, {
      question: 'Why would I need a business COACH?',
      answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa repellendus placeat blanditiis sequi reiciendis maiores odio dolorem! Aut unde magnam vitae atque, iusto ipsa illum nemo quod accusantium rem dicta reiciendis natus necessitatibus est optio quam culpa officiis deserunt delectus. Id ullam in ratione accusamus blanditiis omnis veritatis velit quas.',
      active: false
    }, {
      question: 'What is one-on-one coaching?',
      answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa repellendus placeat blanditiis sequi reiciendis maiores odio dolorem! Aut unde magnam vitae atque, iusto ipsa illum nemo quod accusantium rem dicta reiciendis natus necessitatibus est optio quam culpa officiis deserunt delectus. Id ullam in ratione accusamus blanditiis omnis veritatis velit quas.',
      active: false
    }],
    events: [{
      name: 'Storytelling Workshop',
      place: 'Texas, US',
      date: '11-22-2020',

      get day() {
        return dayjs(this.date).format("DD");
      },

      get month() {
        return dayjs(this.date).format("MMM");
      }

    }, {
      name: 'Painting Art Contest 2020',
      place: 'New York, US',
      date: '10-10-2020',

      get day() {
        return dayjs(this.date).format("DD");
      },

      get month() {
        return dayjs(this.date).format("MMM");
      }

    }, {
      name: 'International Art Fair 2020',
      place: 'Hamburg, Germany',
      date: '11-23-2020',

      get day() {
        return dayjs(this.date).format("DD");
      },

      get month() {
        return dayjs(this.date).format("MMM");
      }

    }, {
      name: 'Street Performance: Call for Artists',
      place: 'Illinois, US',
      date: '12-15-2020',

      get day() {
        return dayjs(this.date).format("DD");
      },

      get month() {
        return dayjs(this.date).format("MMM");
      }

    }, {
      name: 'Consumer Food Safety Education Conference',
      place: 'Illinois, US',
      date: '07-22-2020',

      get day() {
        return dayjs(this.date).format("DD");
      },

      get month() {
        return dayjs(this.date).format("MMM");
      }

    }, {
      name: 'How meditation improve your mental health?',
      place: 'Dubai',
      date: '08-12-2020',

      get day() {
        return dayjs(this.date).format("DD");
      },

      get month() {
        return dayjs(this.date).format("MMM");
      }

    }],
    reviews: [{
      firstName: 'Mina',
      lastName: 'Hollace',
      profession: 'Freelancer',
      title: 'High level of efficiency and scientific teaching methods',
      text: 'I\'m free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me. ',
      image: './dist/img/testimonial-avata-02.jpg'
    }, {
      firstName: 'Madley',
      lastName: 'Pondor',
      profession: 'IT Specialist',
      title: 'Professional team of specialists and passionate mentors ad reach',
      text: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
      image: './dist/img/testimonial-avata-04.jpg'
    }, {
      firstName: 'Florence',
      lastName: 'Themes',
      profession: 'Multimedia Admin',
      title: 'It\'s a choice of quality for people with special needs',
      text: 'I\'m very strict person so I require everything to be organized and neat. Then, I\'ll be able to make things rigth and shine. MaxCoach guys just got me.',
      image: './dist/img/testimonial-avata-03.jpg'
    }, {
      firstName: 'James',
      lastName: 'Bullet',
      profession: 'Freelancer',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, impedit.',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptate culpa, qui numquam unde a, ipsa doloribus labore accusamus saepe eum quas obcaecati sit ex.',
      image: './dist/img/testimonial-avata-01.jpg'
    }],
    activeReview: 0,
    exploreLinks: ['Start here', 'Success story', 'Blog', 'Courses', 'About us', 'Contact us'],
    informationLinks: ['Membership', 'Purchase guide', 'Privacy policy', 'Terms of service']
  },
  methods: {
    showFAQ: function showFAQ(index) {
      this.FAQ.forEach(function (data, i) {
        if (index == i && !data.active) {
          data.active = true;
        } else {
          data.active = false;
        }
      });
    },
    showLanguage: function showLanguage(index) {
      this.activeLanguage = index;
    },
    showReview: function showReview(index) {
      this.activeReview = index;
    }
  },
  mounted: function mounted() {
    var _this = this;

    setInterval(function () {
      if (_this.activeReview == _this.reviews.length - 1) {
        _this.activeReview = 0;
      } else {
        _this.activeReview++;
      }
    }, 3000);
  }
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;