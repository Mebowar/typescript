/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/1webpack/form-control.ts":
/*!**************************************!*\
  !*** ./src/1webpack/form-control.ts ***!
  \**************************************/
/***/ (() => {


const SHOW_ERROR_MESSAGES = 'show-error-message';
const form = document.querySelector('.form');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const password2 = document.querySelector('.password2');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    hideErrorMessages(this);
});
function hideErrorMessages(form) {
    form
        .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
        .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}
function showErrorMessage(input, msg) {
    const formFields = input.parentElement;
    const errorMessage = formFields.querySelector('.error-message');
    errorMessage.innerText = msg;
    formFields.classList.add(SHOW_ERROR_MESSAGES);
}
showErrorMessage(username, 'MENSAGEM');
hideErrorMessages(form);


/***/ }),

/***/ "./src/1webpack/index.ts":
/*!*******************************!*\
  !*** ./src/1webpack/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const form_control_1 = __importDefault(__webpack_require__(/*! ./form-control */ "./src/1webpack/form-control.ts"));
(0, form_control_1.default)();


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/1webpack/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map