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
// 	},
// 		image:
// 			'https://www.restaurantinteriordesign.eu/wp-content/uploads/2018/08/THE-BURJ-AL-ARAB-HOTEL-Al-Muntaha-lounge-bar.jpg',
// 		title: 'THE BURJ AL ARAB HOTELA second Meetup',
// 		address: 'Al Muntaha lounge bar',
// 		description: 'THE BURJ AL ARAB HOTEL'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3hCLHNCQUNDLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0MscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBRUM7QUFDQyxZQUFJLEVBQUMsYUFETjtBQUVDLGVBQU8sRUFBQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQVFDLHFFQUFDLHNFQUFEO0FBQVksYUFBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVlBOztLQWJRRixROztBQTBDTUEsdUVBQWYsRSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMjZjMzNiMmI5MGQyNjE3NmFmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gd2lsbCBiZSByb3V0ZWQgdW5kZXIgb3VyLWRvbWFpbi5jb20vIChkZWZ1bHQgcm91dGluZylcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxGcmFnbWVudD5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPk15IE1lZXR1cHM8L3RpdGxlPlxyXG5cdFx0XHRcdDxtZXRhXHJcblx0XHRcdFx0XHRuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG5cdFx0XHRcdFx0Y29udGVudD1cImJyb3dzZSBhIGh1Z2UgbGlzdCBvZiBoaWdobHkgYWN0aXZlIG1lZXR1cHMhXCJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+O1xyXG5cdFx0PC9GcmFnbWVudD5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcblx0Y29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuXHRcdCdtb25nb2RiK3NydjovL2dpbDp0ZXN0MTIzNEBjbHVzdGVyMC5sM3NuaS5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSdcclxuXHQpO1xyXG5cdGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG5cdGNvbnN0IG1lZXR1cENvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcblxyXG5cdGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcblxyXG5cdGNsaWVudC5jbG9zZSgpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0bWVldHVwczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcclxuXHRcdFx0XHR0aXRsZTogbWVldHVwLnRpdGxlLFxyXG5cdFx0XHRcdGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxyXG5cdFx0XHRcdGltYWdlOiBtZWV0dXAuaW1hZ2UsXHJcblx0XHRcdFx0aWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKVxyXG5cdFx0XHR9KSlcclxuXHRcdH0sXHJcblx0XHRyZXZhbGlkYXRlOiAxXHJcblx0XHQvLyBpcyB0aGUgbnVtYmVyIGluIHNlYywgbmV4dGpzIHdpbGwgd2FpdCB1bnRpbGwgcmVnZW5lcmF0ZSB0aGUgcGFnZSBmb3IgaW5jb21pbmcgcmVxXHJcblx0XHQvLyB0aGlzIGVuc3VyZSB0aGUgcGFnZSB3aWxsIGJlIHJlZ2VuZXJhdGVkIGZyb20gdGhlIHNlcnZlciBhZnRlciBkZXBsb3llbWVudFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG5cclxuLy8gY29uc3QgTUVFVFVQUyA9IFtcclxuLy8gXHR7XHJcbi8vIFx0XHRpZDogJ20xJyxcclxuLy8gXHRcdGltYWdlOlxyXG4vLyBcdFx0XHQnaHR0cHM6Ly9jb3Jwb3JldHRlLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMy9iZXN0LXBsYWNlcy1mb3ItaW5mb3JtYWwtYnVzaW5lc3MtbWVldGluZ3MtZm9yLXdvbWVuLWxhd3llcnMtY29uc3VsdGFudHMtYW5kLW1vcmUuanBnJyxcclxuLy8gXHRcdHRpdGxlOiAnQSBmaXJzdCBNZWV0dXAnLFxyXG4vLyBcdFx0YWRkcmVzczogJ1NvbWUgYWRkcmVzcyA1LCAxMjM0NScsXHJcbi8vIFx0XHRkZXNjcmlwdGlvbjogJ3RoaXMgaXMgYSBmaXJzdCBtZWV0dXAhJ1xyXG4vLyBcdH0sXHJcbi8vIFx0e1xyXG4vLyBcdFx0aWQ6ICdtMicsXHJcbi8vIFx0XHRpbWFnZTpcclxuLy8gXHRcdFx0J2h0dHBzOi8vd3d3LmFueXdoZXJlLnBsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA3L3N0YW5pc2xhd2llLTEwMjR4NTM1LTIuanBnJyxcclxuLy8gXHRcdHRpdGxlOiAnQSBzZWNvbmQgTWVldHVwJyxcclxuLy8gXHRcdGFkZHJlc3M6ICdTb21lIGFkZHJlc3MgOCwgODk2NzgnLFxyXG4vLyBcdFx0ZGVzY3JpcHRpb246ICd0aGlzIGlzIGEgc2Vjb25kIG1lZXR1cCEnXHJcbi8vIFx0fSxcclxuXHJcbi8vIFx0XHRpbWFnZTpcclxuLy8gXHRcdFx0J2h0dHBzOi8vd3d3LnJlc3RhdXJhbnRpbnRlcmlvcmRlc2lnbi5ldS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9USEUtQlVSSi1BTC1BUkFCLUhPVEVMLUFsLU11bnRhaGEtbG91bmdlLWJhci5qcGcnLFxyXG4vLyBcdFx0dGl0bGU6ICdUSEUgQlVSSiBBTCBBUkFCIEhPVEVMQSBzZWNvbmQgTWVldHVwJyxcclxuLy8gXHRcdGFkZHJlc3M6ICdBbCBNdW50YWhhIGxvdW5nZSBiYXInLFxyXG4vLyBcdFx0ZGVzY3JpcHRpb246ICdUSEUgQlVSSiBBTCBBUkFCIEhPVEVMJ1xyXG5cclxuXHJcblxyXG4vLyBdO1xyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXgpIHsgLy8gcnVuIGZvciBldmVyeSByZXEtc2hvdWxkIGJlIHVzZWQgZm9yIGRhdGEgY2hhbmdlcyB2ZXJ5IGZyZXF1ZW50ZWx5XHJcbi8vIFx0Y29uc3QgcmVxID0gY29udGV4LnJlcTtcclxuLy8gXHRjb25zdCByZXMgPSBjb250ZXgucmVzO1xyXG5cclxuLy8gICAvL2ZldGNoIGRhdGEgZnJvbSBBUElcclxuXHJcbi8vIFx0cmV0dXJuIHtcclxuLy8gXHRcdHByb3BzOiB7XHJcbi8vICAgICAgIG1lZXR1cHM6IE1FRVRVUFNcclxuLy8gICAgIH1cclxuLy8gXHR9O1xyXG4vLyB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=