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
  id: 'm3',
  image: 'https://www.restaurantinteriordesign.eu/wp-content/uploads/2018/08/THE-BURJ-AL-ARAB-HOTEL-Al-Muntaha-lounge-bar.jpg',
  title: 'THE BURJ AL ARAB HOTEL',
  address: 'Al Muntaha lounge bar',
  description: 'One of the most dazzling and spectacular luxury lounge bars in the world atop the world’s most luxurious seven-star hotel the Burj Al Arab on the Arabian Gulf, one is awed into admiring silence by the sweeping 180 degrees, wide-angled panoramas across the blue ocean and the City of Gold in resplendent glory'
}, {
  id: 'm4',
  image: 'https://www.restaurantinteriordesign.eu/wp-content/uploads/2018/08/THE-BURJ-AL-ARAB-HOTEL-Al-Muntaha-lounge-bar.jpg',
  title: 'RITZ CARLTON',
  address: 'HONG KONG',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiLCJNRUVUVVBTIiwiaWQiLCJpbWFnZSIsInRpdGxlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN4QixzQkFDQyxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNDLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUVDO0FBQ0MsWUFBSSxFQUFDLGFBRE47QUFFQyxlQUFPLEVBQUM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFRQyxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFZQTs7S0FiUUYsUTs7QUEwQ01BLHVFQUFmO0FBRUEsSUFBTUcsT0FBTyxHQUFHLENBQ2Y7QUFDQ0MsSUFBRSxFQUFFLElBREw7QUFFQ0MsT0FBSyxFQUNKLHlJQUhGO0FBSUNDLE9BQUssRUFBRSxnQkFKUjtBQUtDQyxTQUFPLEVBQUUsdUJBTFY7QUFNQ0MsYUFBVyxFQUFFO0FBTmQsQ0FEZSxFQVNmO0FBQ0NKLElBQUUsRUFBRSxJQURMO0FBRUNDLE9BQUssRUFDSiwrRUFIRjtBQUlDQyxPQUFLLEVBQUUsaUJBSlI7QUFLQ0MsU0FBTyxFQUFFLHVCQUxWO0FBTUNDLGFBQVcsRUFBRTtBQU5kLENBVGUsRUFpQmY7QUFDQ0osSUFBRSxFQUFFLElBREw7QUFFQ0MsT0FBSyxFQUNKLHFIQUhGO0FBSUNDLE9BQUssRUFBRSx3QkFKUjtBQUtDQyxTQUFPLEVBQUUsdUJBTFY7QUFNQ0MsYUFBVyxFQUNWO0FBUEYsQ0FqQmUsRUEwQmY7QUFDQ0osSUFBRSxFQUFFLElBREw7QUFFQ0MsT0FBSyxFQUNKLHFIQUhGO0FBSUNDLE9BQUssRUFBRSxjQUpSO0FBS0NDLFNBQU8sRUFBRSxXQUxWO0FBTUNDLGFBQVcsRUFDVjtBQVBGLENBMUJlLENBQWhCLEMsQ0FxQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjYzODQ4ZWFkMzhlZDIxOTI4ODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHdpbGwgYmUgcm91dGVkIHVuZGVyIG91ci1kb21haW4uY29tLyAoZGVmdWx0IHJvdXRpbmcpXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8RnJhZ21lbnQ+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT5NeSBNZWV0dXBzPC90aXRsZT5cclxuXHRcdFx0XHQ8bWV0YVxyXG5cdFx0XHRcdFx0bmFtZT1cImRlc2NyaXB0aW9uXCJcclxuXHRcdFx0XHRcdGNvbnRlbnQ9XCJicm93c2UgYSBodWdlIGxpc3Qgb2YgaGlnaGx5IGFjdGl2ZSBtZWV0dXBzIVwiXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHQ8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPjtcclxuXHRcdDwvRnJhZ21lbnQ+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG5cdGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcblx0XHQnbW9uZ29kYitzcnY6Ly9naWw6dGVzdDEyMzRAY2x1c3RlcjAubDNzbmkubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknXHJcblx0KTtcclxuXHRjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG5cclxuXHRjb25zdCBtZWV0dXBDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG5cclxuXHRjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG5cclxuXHRjbGllbnQuY2xvc2UoKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdG1lZXR1cHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XHJcblx0XHRcdFx0dGl0bGU6IG1lZXR1cC50aXRsZSxcclxuXHRcdFx0XHRhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuXHRcdFx0XHRpbWFnZTogbWVldHVwLmltYWdlLFxyXG5cdFx0XHRcdGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKClcclxuXHRcdFx0fSkpXHJcblx0XHR9LFxyXG5cdFx0cmV2YWxpZGF0ZTogMVxyXG5cdFx0Ly8gaXMgdGhlIG51bWJlciBpbiBzZWMsIG5leHRqcyB3aWxsIHdhaXQgdW50aWxsIHJlZ2VuZXJhdGUgdGhlIHBhZ2UgZm9yIGluY29taW5nIHJlcVxyXG5cdFx0Ly8gdGhpcyBlbnN1cmUgdGhlIHBhZ2Ugd2lsbCBiZSByZWdlbmVyYXRlZCBmcm9tIHRoZSBzZXJ2ZXIgYWZ0ZXIgZGVwbG95ZW1lbnRcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuXHJcbmNvbnN0IE1FRVRVUFMgPSBbXHJcblx0e1xyXG5cdFx0aWQ6ICdtMScsXHJcblx0XHRpbWFnZTpcclxuXHRcdFx0J2h0dHBzOi8vY29ycG9yZXR0ZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDMvYmVzdC1wbGFjZXMtZm9yLWluZm9ybWFsLWJ1c2luZXNzLW1lZXRpbmdzLWZvci13b21lbi1sYXd5ZXJzLWNvbnN1bHRhbnRzLWFuZC1tb3JlLmpwZycsXHJcblx0XHR0aXRsZTogJ0EgZmlyc3QgTWVldHVwJyxcclxuXHRcdGFkZHJlc3M6ICdTb21lIGFkZHJlc3MgNSwgMTIzNDUnLFxyXG5cdFx0ZGVzY3JpcHRpb246ICd0aGlzIGlzIGEgZmlyc3QgbWVldHVwISdcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAnbTInLFxyXG5cdFx0aW1hZ2U6XHJcblx0XHRcdCdodHRwczovL3d3dy5hbnl3aGVyZS5wbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNy9zdGFuaXNsYXdpZS0xMDI0eDUzNS0yLmpwZycsXHJcblx0XHR0aXRsZTogJ0Egc2Vjb25kIE1lZXR1cCcsXHJcblx0XHRhZGRyZXNzOiAnU29tZSBhZGRyZXNzIDgsIDg5Njc4JyxcclxuXHRcdGRlc2NyaXB0aW9uOiAndGhpcyBpcyBhIHNlY29uZCBtZWV0dXAhJ1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6ICdtMycsXHJcblx0XHRpbWFnZTpcclxuXHRcdFx0J2h0dHBzOi8vd3d3LnJlc3RhdXJhbnRpbnRlcmlvcmRlc2lnbi5ldS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9USEUtQlVSSi1BTC1BUkFCLUhPVEVMLUFsLU11bnRhaGEtbG91bmdlLWJhci5qcGcnLFxyXG5cdFx0dGl0bGU6ICdUSEUgQlVSSiBBTCBBUkFCIEhPVEVMJyxcclxuXHRcdGFkZHJlc3M6ICdBbCBNdW50YWhhIGxvdW5nZSBiYXInLFxyXG5cdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdCdPbmUgb2YgdGhlIG1vc3QgZGF6emxpbmcgYW5kIHNwZWN0YWN1bGFyIGx1eHVyeSBsb3VuZ2UgYmFycyBpbiB0aGUgd29ybGQgYXRvcCB0aGUgd29ybGTigJlzIG1vc3QgbHV4dXJpb3VzIHNldmVuLXN0YXIgaG90ZWwgdGhlIEJ1cmogQWwgQXJhYiBvbiB0aGUgQXJhYmlhbiBHdWxmLCBvbmUgaXMgYXdlZCBpbnRvIGFkbWlyaW5nIHNpbGVuY2UgYnkgdGhlIHN3ZWVwaW5nIDE4MCBkZWdyZWVzLCB3aWRlLWFuZ2xlZCBwYW5vcmFtYXMgYWNyb3NzIHRoZSBibHVlIG9jZWFuIGFuZCB0aGUgQ2l0eSBvZiBHb2xkIGluIHJlc3BsZW5kZW50IGdsb3J5J1xyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6ICdtNCcsXHJcblx0XHRpbWFnZTpcclxuXHRcdFx0J2h0dHBzOi8vd3d3LnJlc3RhdXJhbnRpbnRlcmlvcmRlc2lnbi5ldS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wOC9USEUtQlVSSi1BTC1BUkFCLUhPVEVMLUFsLU11bnRhaGEtbG91bmdlLWJhci5qcGcnLFxyXG5cdFx0dGl0bGU6ICdSSVRaIENBUkxUT04nLFxyXG5cdFx0YWRkcmVzczogJ0hPTkcgS09ORycsXHJcblx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0J09uZSBvZiB0aGUgbW9zdCBkYXp6bGluZyBhbmQgc3BlY3RhY3VsYXIgbHV4dXJ5IGxvdW5nZSBiYXJzIGluIHRoZSB3b3JsZCBhdG9wIHRoZSB3b3JsZOKAmXMgbW9zdCBsdXh1cmlvdXMgc2V2ZW4tc3RhciBob3RlbCB0aGUgQnVyaiBBbCBBcmFiIG9uIHRoZSBBcmFiaWFuIEd1bGYsIG9uZSBpcyBhd2VkIGludG8gYWRtaXJpbmcgc2lsZW5jZSBieSB0aGUgc3dlZXBpbmcgMTgwIGRlZ3JlZXMsIHdpZGUtYW5nbGVkIHBhbm9yYW1hcyBhY3Jvc3MgdGhlIGJsdWUgb2NlYW4gYW5kIHRoZSBDaXR5IG9mIEdvbGQgaW4gcmVzcGxlbmRlbnQgZ2xvcnknXHJcblx0fVxyXG5dO1xyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXgpIHsgLy8gcnVuIGZvciBldmVyeSByZXEtc2hvdWxkIGJlIHVzZWQgZm9yIGRhdGEgY2hhbmdlcyB2ZXJ5IGZyZXF1ZW50ZWx5XHJcbi8vIFx0Y29uc3QgcmVxID0gY29udGV4LnJlcTtcclxuLy8gXHRjb25zdCByZXMgPSBjb250ZXgucmVzO1xyXG5cclxuLy8gICAvL2ZldGNoIGRhdGEgZnJvbSBBUElcclxuXHJcbi8vIFx0cmV0dXJuIHtcclxuLy8gXHRcdHByb3BzOiB7XHJcbi8vICAgICAgIG1lZXR1cHM6IE1FRVRVUFNcclxuLy8gICAgIH1cclxuLy8gXHR9O1xyXG4vLyB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=