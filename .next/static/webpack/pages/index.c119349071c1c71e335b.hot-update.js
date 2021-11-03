webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Gil\\Downloads\\Coding\\react-projects\\meetups-nextjs\\pages\\index.js";
// will be routed under our-domain.com/ (defult routing)




function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "My Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "browse a huge list of highly active meetups!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, this), ";"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }, this);
}

_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);
var MEETUPS = [{
  id: 'm1',
  image: 'https://corporette.com/wp-content/uploads/2017/03/best-places-for-informal-business-meetings-for-women-lawyers-consultants-and-more.jpg',
  title: 'A first Meetup',
  address: 'Some address 5, 12345',
  description: 'this is a first meetup!'
}, {
  id: 'm2',
  image: 'https://www.anywhere.pl/wp-content/uploads/2019/07/stanislawie-1024x535-2.jpg',
  title: 'A second Meetup',
  address: 'Some address 8, 89678',
  description: 'this is a second meetup!'
}, {
  id: 'm2',
  image: 'https://www.restaurantinteriordesign.eu/wp-content/uploads/2018/08/THE-BURJ-AL-ARAB-HOTEL-Al-Muntaha-lounge-bar.jpg',
  title: 'THE BURJ AL ARAB HOTEL',
  address: 'Al Muntaha lounge bar',
  description: 'One of the most dazzling and spectacular luxury lounge bars in the world atop the world’s most luxurious seven-star hotel the Burj Al Arab on the Arabian Gulf, one is awed into admiring silence by the sweeping 180 degrees, wide-angled panoramas across the blue ocean and the City of Gold in resplendent glory'
}]; // export async function getServerSideProps(contex) { // run for every req-should be used for data changes very frequentely
// 	const req = contex.req;
// 	const res = contex.res;
//   //fetch data from API
// 	return {
// 		props: {
//       meetups: MEETUPS
//     }
// 	};
// }

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiLCJNRUVUVVBTIiwiaWQiLCJpbWFnZSIsInRpdGxlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN4QixzQkFDQyxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNDLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUVDO0FBQ0MsWUFBSSxFQUFDLGFBRE47QUFFQyxlQUFPLEVBQUM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFRQyxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFZQTs7S0FiUUYsUTs7QUEwQ01BLHVFQUFmO0FBRUEsSUFBTUcsT0FBTyxHQUFHLENBQ2Y7QUFDQ0MsSUFBRSxFQUFFLElBREw7QUFFQ0MsT0FBSyxFQUNKLHlJQUhGO0FBSUNDLE9BQUssRUFBRSxnQkFKUjtBQUtDQyxTQUFPLEVBQUUsdUJBTFY7QUFNQ0MsYUFBVyxFQUFFO0FBTmQsQ0FEZSxFQVNmO0FBQ0NKLElBQUUsRUFBRSxJQURMO0FBRUNDLE9BQUssRUFDSiwrRUFIRjtBQUlDQyxPQUFLLEVBQUUsaUJBSlI7QUFLQ0MsU0FBTyxFQUFFLHVCQUxWO0FBTUNDLGFBQVcsRUFBRTtBQU5kLENBVGUsRUFpQmhCO0FBQ0FKLElBQUUsRUFBRSxJQURKO0FBRUNDLE9BQUssRUFDSixxSEFIRjtBQUlDQyxPQUFLLEVBQUUsd0JBSlI7QUFLQ0MsU0FBTyxFQUFFLHVCQUxWO0FBTUNDLGFBQVcsRUFBRTtBQU5kLENBakJnQixDQUFoQixDLENBOEJBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMxMTkzNDkwNzFjMWM3MWUzMzViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB3aWxsIGJlIHJvdXRlZCB1bmRlciBvdXItZG9tYWluLmNvbS8gKGRlZnVsdCByb3V0aW5nKVxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCc7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZyYWdtZW50PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+TXkgTWVldHVwczwvdGl0bGU+XHJcblx0XHRcdFx0PG1ldGFcclxuXHRcdFx0XHRcdG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcblx0XHRcdFx0XHRjb250ZW50PVwiYnJvd3NlIGEgaHVnZSBsaXN0IG9mIGhpZ2hseSBhY3RpdmUgbWVldHVwcyFcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz47XHJcblx0XHQ8L0ZyYWdtZW50PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuXHRjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG5cdFx0J21vbmdvZGIrc3J2Oi8vZ2lsOnRlc3QxMjM0QGNsdXN0ZXIwLmwzc25pLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5J1xyXG5cdCk7XHJcblx0Y29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcblx0Y29uc3QgbWVldHVwQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuXHJcblx0Y29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cENvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcclxuXHJcblx0Y2xpZW50LmNsb3NlKCk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRtZWV0dXBzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xyXG5cdFx0XHRcdHRpdGxlOiBtZWV0dXAudGl0bGUsXHJcblx0XHRcdFx0YWRkcmVzczogbWVldHVwLmFkZHJlc3MsXHJcblx0XHRcdFx0aW1hZ2U6IG1lZXR1cC5pbWFnZSxcclxuXHRcdFx0XHRpZDogbWVldHVwLl9pZC50b1N0cmluZygpXHJcblx0XHRcdH0pKVxyXG5cdFx0fSxcclxuXHRcdHJldmFsaWRhdGU6IDFcclxuXHRcdC8vIGlzIHRoZSBudW1iZXIgaW4gc2VjLCBuZXh0anMgd2lsbCB3YWl0IHVudGlsbCByZWdlbmVyYXRlIHRoZSBwYWdlIGZvciBpbmNvbWluZyByZXFcclxuXHRcdC8vIHRoaXMgZW5zdXJlIHRoZSBwYWdlIHdpbGwgYmUgcmVnZW5lcmF0ZWQgZnJvbSB0aGUgc2VydmVyIGFmdGVyIGRlcGxveWVtZW50XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcblxyXG5jb25zdCBNRUVUVVBTID0gW1xyXG5cdHtcclxuXHRcdGlkOiAnbTEnLFxyXG5cdFx0aW1hZ2U6XHJcblx0XHRcdCdodHRwczovL2NvcnBvcmV0dGUuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAzL2Jlc3QtcGxhY2VzLWZvci1pbmZvcm1hbC1idXNpbmVzcy1tZWV0aW5ncy1mb3Itd29tZW4tbGF3eWVycy1jb25zdWx0YW50cy1hbmQtbW9yZS5qcGcnLFxyXG5cdFx0dGl0bGU6ICdBIGZpcnN0IE1lZXR1cCcsXHJcblx0XHRhZGRyZXNzOiAnU29tZSBhZGRyZXNzIDUsIDEyMzQ1JyxcclxuXHRcdGRlc2NyaXB0aW9uOiAndGhpcyBpcyBhIGZpcnN0IG1lZXR1cCEnXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogJ20yJyxcclxuXHRcdGltYWdlOlxyXG5cdFx0XHQnaHR0cHM6Ly93d3cuYW55d2hlcmUucGwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDcvc3RhbmlzbGF3aWUtMTAyNHg1MzUtMi5qcGcnLFxyXG5cdFx0dGl0bGU6ICdBIHNlY29uZCBNZWV0dXAnLFxyXG5cdFx0YWRkcmVzczogJ1NvbWUgYWRkcmVzcyA4LCA4OTY3OCcsXHJcblx0XHRkZXNjcmlwdGlvbjogJ3RoaXMgaXMgYSBzZWNvbmQgbWVldHVwISdcclxuXHR9LFxyXG57XHJcbmlkOiAnbTInLFxyXG5cdGltYWdlOlxyXG5cdFx0J2h0dHBzOi8vd3d3LnJlc3RhdXJhbnRpbnRlcmlvcmRlc2lnbi5ldS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9USEUtQlVSSi1BTC1BUkFCLUhPVEVMLUFsLU11bnRhaGEtbG91bmdlLWJhci5qcGcnLFxyXG5cdHRpdGxlOiAnVEhFIEJVUkogQUwgQVJBQiBIT1RFTCcsXHJcblx0YWRkcmVzczogJ0FsIE11bnRhaGEgbG91bmdlIGJhcicsXHJcblx0ZGVzY3JpcHRpb246ICdPbmUgb2YgdGhlIG1vc3QgZGF6emxpbmcgYW5kIHNwZWN0YWN1bGFyIGx1eHVyeSBsb3VuZ2UgYmFycyBpbiB0aGUgd29ybGQgYXRvcCB0aGUgd29ybGTigJlzIG1vc3QgbHV4dXJpb3VzIHNldmVuLXN0YXIgaG90ZWwgdGhlIEJ1cmogQWwgQXJhYiBvbiB0aGUgQXJhYmlhbiBHdWxmLCBvbmUgaXMgYXdlZCBpbnRvIGFkbWlyaW5nIHNpbGVuY2UgYnkgdGhlIHN3ZWVwaW5nIDE4MCBkZWdyZWVzLCB3aWRlLWFuZ2xlZCBwYW5vcmFtYXMgYWNyb3NzIHRoZSBibHVlIG9jZWFuIGFuZCB0aGUgQ2l0eSBvZiBHb2xkIGluIHJlc3BsZW5kZW50IGdsb3J5J1xyXG59XHJcblxyXG5cclxuXHJcbl07XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleCkgeyAvLyBydW4gZm9yIGV2ZXJ5IHJlcS1zaG91bGQgYmUgdXNlZCBmb3IgZGF0YSBjaGFuZ2VzIHZlcnkgZnJlcXVlbnRlbHlcclxuLy8gXHRjb25zdCByZXEgPSBjb250ZXgucmVxO1xyXG4vLyBcdGNvbnN0IHJlcyA9IGNvbnRleC5yZXM7XHJcblxyXG4vLyAgIC8vZmV0Y2ggZGF0YSBmcm9tIEFQSVxyXG5cclxuLy8gXHRyZXR1cm4ge1xyXG4vLyBcdFx0cHJvcHM6IHtcclxuLy8gICAgICAgbWVldHVwczogTUVFVFVQU1xyXG4vLyAgICAgfVxyXG4vLyBcdH07XHJcbi8vIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==