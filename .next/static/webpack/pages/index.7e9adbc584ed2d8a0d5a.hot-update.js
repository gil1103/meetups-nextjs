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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
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
/* harmony default export */ __webpack_exports__["default"] = (HomePage); // const MEETUPS = [
// 	{
// 		id: 'm1',
// 		image:
// 			'https://corporette.com/wp-content/uploads/2017/03/best-places-for-informal-business-meetings-for-women-lawyers-consultants-and-more.jpg',
// 		title: 'A first Meetup',
// 		address: 'Some address 5, 12345',
// 		description: 'this is a first meetup!'
// 	},
// 	{
// 		id: 'm2',
// 		image:
// 			'https://www.anywhere.pl/wp-content/uploads/2019/07/stanislawie-1024x535-2.jpg',
// 		title: 'A second Meetup',
// 		address: 'Some address 8, 89678',
// 		description: 'this is a second meetup!'
// 	}
// ];
// export async function getServerSideProps(contex) { // run for every req-should be used for data changes very frequentely
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3hCLHNCQUNDLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUMscUVBQUMsc0VBQUQ7QUFBWSxhQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBTUE7O0tBUFFGLFE7O0FBb0NNQSx1RUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2U5YWRiYzU4NGVkMmQ4YTBkNWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHdpbGwgYmUgcm91dGVkIHVuZGVyIG91ci1kb21haW4uY29tLyAoZGVmdWx0IHJvdXRpbmcpXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPjwvSGVhZD5cclxuXHRcdFx0PE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz47XHJcblx0XHQ8L0ZyYWdtZW50PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuXHRjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG5cdFx0J21vbmdvZGIrc3J2Oi8vZ2lsOnRlc3QxMjM0QGNsdXN0ZXIwLmwzc25pLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5J1xyXG5cdCk7XHJcblx0Y29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcblx0Y29uc3QgbWVldHVwQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuXHJcblx0Y29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cENvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcclxuXHJcblx0Y2xpZW50LmNsb3NlKCk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRtZWV0dXBzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xyXG5cdFx0XHRcdHRpdGxlOiBtZWV0dXAudGl0bGUsXHJcblx0XHRcdFx0YWRkcmVzczogbWVldHVwLmFkZHJlc3MsXHJcblx0XHRcdFx0aW1hZ2U6IG1lZXR1cC5pbWFnZSxcclxuXHRcdFx0XHRpZDogbWVldHVwLl9pZC50b1N0cmluZygpXHJcblx0XHRcdH0pKVxyXG5cdFx0fSxcclxuXHRcdHJldmFsaWRhdGU6IDFcclxuXHRcdC8vIGlzIHRoZSBudW1iZXIgaW4gc2VjLCBuZXh0anMgd2lsbCB3YWl0IHVudGlsbCByZWdlbmVyYXRlIHRoZSBwYWdlIGZvciBpbmNvbWluZyByZXFcclxuXHRcdC8vIHRoaXMgZW5zdXJlIHRoZSBwYWdlIHdpbGwgYmUgcmVnZW5lcmF0ZWQgZnJvbSB0aGUgc2VydmVyIGFmdGVyIGRlcGxveWVtZW50XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcblxyXG4vLyBjb25zdCBNRUVUVVBTID0gW1xyXG4vLyBcdHtcclxuLy8gXHRcdGlkOiAnbTEnLFxyXG4vLyBcdFx0aW1hZ2U6XHJcbi8vIFx0XHRcdCdodHRwczovL2NvcnBvcmV0dGUuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzAzL2Jlc3QtcGxhY2VzLWZvci1pbmZvcm1hbC1idXNpbmVzcy1tZWV0aW5ncy1mb3Itd29tZW4tbGF3eWVycy1jb25zdWx0YW50cy1hbmQtbW9yZS5qcGcnLFxyXG4vLyBcdFx0dGl0bGU6ICdBIGZpcnN0IE1lZXR1cCcsXHJcbi8vIFx0XHRhZGRyZXNzOiAnU29tZSBhZGRyZXNzIDUsIDEyMzQ1JyxcclxuLy8gXHRcdGRlc2NyaXB0aW9uOiAndGhpcyBpcyBhIGZpcnN0IG1lZXR1cCEnXHJcbi8vIFx0fSxcclxuLy8gXHR7XHJcbi8vIFx0XHRpZDogJ20yJyxcclxuLy8gXHRcdGltYWdlOlxyXG4vLyBcdFx0XHQnaHR0cHM6Ly93d3cuYW55d2hlcmUucGwvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDcvc3RhbmlzbGF3aWUtMTAyNHg1MzUtMi5qcGcnLFxyXG4vLyBcdFx0dGl0bGU6ICdBIHNlY29uZCBNZWV0dXAnLFxyXG4vLyBcdFx0YWRkcmVzczogJ1NvbWUgYWRkcmVzcyA4LCA4OTY3OCcsXHJcbi8vIFx0XHRkZXNjcmlwdGlvbjogJ3RoaXMgaXMgYSBzZWNvbmQgbWVldHVwISdcclxuLy8gXHR9XHJcbi8vIF07XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleCkgeyAvLyBydW4gZm9yIGV2ZXJ5IHJlcS1zaG91bGQgYmUgdXNlZCBmb3IgZGF0YSBjaGFuZ2VzIHZlcnkgZnJlcXVlbnRlbHlcclxuLy8gXHRjb25zdCByZXEgPSBjb250ZXgucmVxO1xyXG4vLyBcdGNvbnN0IHJlcyA9IGNvbnRleC5yZXM7XHJcblxyXG4vLyAgIC8vZmV0Y2ggZGF0YSBmcm9tIEFQSVxyXG5cclxuLy8gXHRyZXR1cm4ge1xyXG4vLyBcdFx0cHJvcHM6IHtcclxuLy8gICAgICAgbWVldHVwczogTUVFVFVQU1xyXG4vLyAgICAgfVxyXG4vLyBcdH07XHJcbi8vIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==