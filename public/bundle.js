/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib/GameObject.ts":
/*!*******************************!*\
  !*** ./src/lib/GameObject.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameObject": () => (/* binding */ GameObject)
/* harmony export */ });
/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ "./src/lib/Sprite.ts");

var GameObject = /** @class */ (function () {
    function GameObject(config) {
        this.x = 0;
        this.y = 0;
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.sprite = new _Sprite__WEBPACK_IMPORTED_MODULE_0__.Sprite({
            gameObject: this,
            src: config.src
        });
    }
    return GameObject;
}());



/***/ }),

/***/ "./src/lib/Overworld.ts":
/*!******************************!*\
  !*** ./src/lib/Overworld.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Overworld": () => (/* binding */ Overworld)
/* harmony export */ });
/* harmony import */ var _maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maps */ "./src/lib/maps.ts");
/* harmony import */ var _OverworldMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OverworldMap */ "./src/lib/OverworldMap.ts");


var Overworld = /** @class */ (function () {
    function Overworld(config) {
        var _a, _b, _c, _d;
        this.containerElement = config.containerElement;
        this.canvas = (_b = (_a = this.containerElement) === null || _a === void 0 ? void 0 : _a.querySelector('.game-canvas')) !== null && _b !== void 0 ? _b : null;
        this.ctx = (_d = (_c = this.canvas) === null || _c === void 0 ? void 0 : _c.getContext('2d')) !== null && _d !== void 0 ? _d : null;
        this.map = null;
    }
    Overworld.prototype.startGameLoop = function () {
        var _this = this;
        var step = function () {
            _this.map.drawLowerImage(_this.ctx);
            Object.values(_this.map.gameObjects)
                .forEach(function (gameObject) {
                gameObject.sprite.draw(_this.ctx);
            });
            _this.map.drawUpperImage(_this.ctx);
        };
        requestAnimationFrame(function () {
            step();
        });
        step();
    };
    Overworld.prototype.init = function () {
        this.map = new _OverworldMap__WEBPACK_IMPORTED_MODULE_1__.OverworldMap(_maps__WEBPACK_IMPORTED_MODULE_0__.maps.DemoRoom);
        this.startGameLoop();
    };
    return Overworld;
}());



/***/ }),

/***/ "./src/lib/OverworldMap.ts":
/*!*********************************!*\
  !*** ./src/lib/OverworldMap.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverworldMap": () => (/* binding */ OverworldMap)
/* harmony export */ });
var OverworldMap = /** @class */ (function () {
    function OverworldMap(config) {
        var _a, _b;
        this.gameObjects = config.gameObjects;
        this.lowerImage = new Image();
        this.upperImage = new Image();
        this.lowerImage.src = (_a = config.lowerSrc) !== null && _a !== void 0 ? _a : null;
        this.upperImage.src = (_b = config.lowerSrc) !== null && _b !== void 0 ? _b : null;
    }
    OverworldMap.prototype.drawLowerImage = function (ctx) {
        if (this.lowerImage.src) {
            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(this.lowerImage, 0, 0);
        }
    };
    OverworldMap.prototype.drawUpperImage = function (ctx) {
        if (this.upperImage.src) {
            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(this.upperImage, 0, 0);
        }
    };
    return OverworldMap;
}());



/***/ }),

/***/ "./src/lib/Sprite.ts":
/*!***************************!*\
  !*** ./src/lib/Sprite.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sprite": () => (/* binding */ Sprite)
/* harmony export */ });
var Sprite = /** @class */ (function () {
    function Sprite(config) {
        var _this = this;
        this.isLoaded = false;
        this.isShadowLoaded = false;
        this.image = new Image();
        this.image.src = config.src || 'assets/characters/people/hero.png';
        this.image.onload = function () {
            _this.isLoaded = true;
        };
        this.shadow = new Image();
        this.useShadow = true;
        if (this.useShadow) {
            this.shadow.src = "assets/characters/shadow.png";
        }
        this.shadow.onload = function () {
            _this.isShadowLoaded = true;
        };
        this.animation = config.animations || {
            idleDown: [
                [0, 0]
            ]
        };
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;
        this.gameObject = config.gameObject;
    }
    Sprite.prototype.draw = function (ctx) {
        var x = this.gameObject.x * 16 - 8;
        var y = this.gameObject.y * 16 - 18;
        this.isShadowLoaded && (ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(this.shadow, x, y));
        this.isLoaded && (ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(this.image, 0, 0, 32, 32, x, y, 32, 32));
    };
    return Sprite;
}());



/***/ }),

/***/ "./src/lib/maps.ts":
/*!*************************!*\
  !*** ./src/lib/maps.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maps": () => (/* binding */ maps)
/* harmony export */ });
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./src/lib/GameObject.ts");

var maps = {
    DemoRoom: {
        lowerSrc: "assets/maps/DemoLower.png",
        upperSrc: "assets/maps/DemoUpper.png",
        gameObjects: {
            hero: new _GameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject({
                x: 5,
                y: 6,
            }),
            npc1: new _GameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject({
                x: 7,
                y: 8,
                src: 'assets/characters/people/npc1.png'
            })
        }
    },
    Kitchen: {
        lowerSrc: "assets/maps/KitchenLower.png",
        upperSrc: "assets/maps/KitchenUpper.png",
        gameObjects: {
            hero: new _GameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject({
                x: 3,
                y: 1,
            }),
            npc1: new _GameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject({
                x: 7,
                y: 8,
                src: 'assets/characters/people/npc2.png'
            }),
            npc2: new _GameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject({
                x: 4,
                y: 5,
                src: 'assets/characters/people/npc3.png'
            })
        }
    }
};


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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_Overworld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/Overworld */ "./src/lib/Overworld.ts");

function main() {
    var overworld = new _lib_Overworld__WEBPACK_IMPORTED_MODULE_0__.Overworld({
        containerElement: document.querySelector('.game-container')
    });
    overworld.init();
}
main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixHQUFHLEVBQUUsbUNBQW1DO2FBQ3pDLENBQUM7WUFDRixJQUFJLEVBQUUsSUFBSSxtREFBVSxDQUFDO2dCQUNuQixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixHQUFHLEVBQUUsbUNBQW1DO2FBQ3pDLENBQUM7U0FDSDtLQUNGO0NBQ0Y7Ozs7Ozs7VUN0Q0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04yQztBQUUzQyxTQUFTLElBQUk7SUFDWCxJQUFNLFNBQVMsR0FBRyxJQUFJLHFEQUFTLENBQUM7UUFDOUIsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztLQUM1RCxDQUFDO0lBRUYsU0FBUyxDQUFDLElBQUksRUFBRTtBQUNsQixDQUFDO0FBRUQsSUFBSSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnBnLWpzLXBpenphLWxlZ2VuZHMvLi9zcmMvbGliL0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vcnBnLWpzLXBpenphLWxlZ2VuZHMvLi9zcmMvbGliL092ZXJ3b3JsZC50cyIsIndlYnBhY2s6Ly9ycGctanMtcGl6emEtbGVnZW5kcy8uL3NyYy9saWIvT3ZlcndvcmxkTWFwLnRzIiwid2VicGFjazovL3JwZy1qcy1waXp6YS1sZWdlbmRzLy4vc3JjL2xpYi9TcHJpdGUudHMiLCJ3ZWJwYWNrOi8vcnBnLWpzLXBpenphLWxlZ2VuZHMvLi9zcmMvbGliL21hcHMudHMiLCJ3ZWJwYWNrOi8vcnBnLWpzLXBpenphLWxlZ2VuZHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnBnLWpzLXBpenphLWxlZ2VuZHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JwZy1qcy1waXp6YS1sZWdlbmRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnBnLWpzLXBpenphLWxlZ2VuZHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ycGctanMtcGl6emEtbGVnZW5kcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL1Nwcml0ZSdcblxuaW50ZXJmYWNlIEdhbWVPYmplY3RQcm9wcyB7XG4gIHg6IG51bWJlclxuICB5OiBudW1iZXJcbiAgc3JjPzogc3RyaW5nXG59XG5cbmV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0IHtcbiAgcHVibGljIHg6IG51bWJlciA9IDBcbiAgcHVibGljIHk6IG51bWJlciA9IDBcbiAgcHVibGljIHNwcml0ZTogU3ByaXRlXG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBHYW1lT2JqZWN0UHJvcHMpIHtcbiAgICB0aGlzLnggPSBjb25maWcueCB8fCAwXG4gICAgdGhpcy55ID0gY29uZmlnLnkgfHwgMFxuICAgIHRoaXMuc3ByaXRlID0gbmV3IFNwcml0ZSh7XG4gICAgICBnYW1lT2JqZWN0OiB0aGlzLFxuICAgICAgc3JjOiBjb25maWcuc3JjXG4gICAgfSlcbiAgfVxufSIsImltcG9ydCB7IG1hcHMgfSBmcm9tICcuL21hcHMnXG5pbXBvcnQgeyBPdmVyd29ybGRNYXAgfSBmcm9tICcuL092ZXJ3b3JsZE1hcCdcblxuaW50ZXJmYWNlIE92ZXJ3b3JsZFByb3BzIHtcbiAgY29udGFpbmVyRWxlbWVudD86IEVsZW1lbnRcbn1cblxuZXhwb3J0IGNsYXNzIE92ZXJ3b3JsZCB7XG4gIHB1YmxpYyBjb250YWluZXJFbGVtZW50PzogRWxlbWVudFxuICBwdWJsaWMgY2FudmFzPzogSFRNTENhbnZhc0VsZW1lbnRcbiAgcHVibGljIGN0eD86IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICBwdWJsaWMgbWFwPzogT3ZlcndvcmxkTWFwXG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBPdmVyd29ybGRQcm9wcykge1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudCA9IGNvbmZpZy5jb250YWluZXJFbGVtZW50XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNvbnRhaW5lckVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWNhbnZhcycpID8/IG51bGxcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzPy5nZXRDb250ZXh0KCcyZCcpID8/IG51bGxcbiAgICB0aGlzLm1hcCA9IG51bGxcbiAgfVxuXG4gIHN0YXJ0R2FtZUxvb3AoKSB7XG4gICAgY29uc3Qgc3RlcCA9ICgpID0+IHtcblxuICAgICAgdGhpcy5tYXAuZHJhd0xvd2VySW1hZ2UodGhpcy5jdHgpXG5cbiAgICAgIE9iamVjdC52YWx1ZXModGhpcy5tYXAuZ2FtZU9iamVjdHMpXG4gICAgICAgIC5mb3JFYWNoKChnYW1lT2JqZWN0KSA9PiB7XG4gICAgICAgICAgZ2FtZU9iamVjdC5zcHJpdGUuZHJhdyhcbiAgICAgICAgICAgIHRoaXMuY3R4XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuXG4gICAgICB0aGlzLm1hcC5kcmF3VXBwZXJJbWFnZSh0aGlzLmN0eClcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgc3RlcCgpXG4gICAgfSlcblxuICAgIHN0ZXAoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLm1hcCA9IG5ldyBPdmVyd29ybGRNYXAobWFwcy5EZW1vUm9vbSlcbiAgICB0aGlzLnN0YXJ0R2FtZUxvb3AoKVxuICB9XG59IiwiaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcblxuaW50ZXJmYWNlIE92ZXJ3b3JsZE1hcFByb3BzIHtcbiAgZ2FtZU9iamVjdHM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBHYW1lT2JqZWN0XG4gIH1cbiAgbG93ZXJTcmM6IHN0cmluZ1xuICB1cHBlclNyYzogc3RyaW5nXG59XG5cbmV4cG9ydCBjbGFzcyBPdmVyd29ybGRNYXAge1xuICBwdWJsaWMgZ2FtZU9iamVjdHM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBHYW1lT2JqZWN0XG4gIH1cbiAgcHVibGljIGxvd2VySW1hZ2U/OiBIVE1MSW1hZ2VFbGVtZW50XG4gIHB1YmxpYyB1cHBlckltYWdlPzogSFRNTEltYWdlRWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogT3ZlcndvcmxkTWFwUHJvcHMpIHtcbiAgICB0aGlzLmdhbWVPYmplY3RzID0gY29uZmlnLmdhbWVPYmplY3RzXG5cbiAgICB0aGlzLmxvd2VySW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgIHRoaXMudXBwZXJJbWFnZSA9IG5ldyBJbWFnZSgpXG5cbiAgICB0aGlzLmxvd2VySW1hZ2Uuc3JjID0gY29uZmlnLmxvd2VyU3JjID8/IG51bGxcbiAgICB0aGlzLnVwcGVySW1hZ2Uuc3JjID0gY29uZmlnLmxvd2VyU3JjID8/IG51bGxcbiAgfVxuXG4gIGRyYXdMb3dlckltYWdlKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLmxvd2VySW1hZ2Uuc3JjKSB7XG4gICAgICBjdHg/LmRyYXdJbWFnZSh0aGlzLmxvd2VySW1hZ2UsIDAsIDApXG4gICAgfVxuICB9XG5cbiAgZHJhd1VwcGVySW1hZ2UoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsKSB7XG4gICAgaWYgKHRoaXMudXBwZXJJbWFnZS5zcmMpIHtcbiAgICAgIGN0eD8uZHJhd0ltYWdlKHRoaXMudXBwZXJJbWFnZSwgMCwgMClcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi9HYW1lT2JqZWN0J1xuXG5pbnRlcmZhY2UgU3ByaXRlUHJvcHMge1xuICBzcmM/OiBzdHJpbmdcbiAgYW5pbWF0aW9ucz86IHtcbiAgICBpZGxlRG93bjogYW55XG4gIH1cbiAgY3VycmVudEFuaW1hdGlvbj86IHN0cmluZ1xuICBjdXJyZW50QW5pbWF0aW9uRnJhbWU/OiBudW1iZXJcbiAgZ2FtZU9iamVjdD86IEdhbWVPYmplY3Rcbn1cblxuZXhwb3J0IGNsYXNzIFNwcml0ZSB7XG4gIHB1YmxpYyBpbWFnZTogSFRNTEltYWdlRWxlbWVudFxuICBwdWJsaWMgaXNMb2FkZWQ6IGJvb2xlYW5cbiAgcHVibGljIHNoYWRvdzogSFRNTEltYWdlRWxlbWVudFxuICBwdWJsaWMgaXNTaGFkb3dMb2FkZWQ6IGJvb2xlYW5cbiAgcHVibGljIHVzZVNoYWRvdzogYm9vbGVhblxuICBwdWJsaWMgYW5pbWF0aW9uOiB7fVxuICBwdWJsaWMgY3VycmVudEFuaW1hdGlvbjogc3RyaW5nXG4gIHB1YmxpYyBjdXJyZW50QW5pbWF0aW9uRnJhbWU6IG51bWJlclxuICBwdWJsaWMgZ2FtZU9iamVjdDogR2FtZU9iamVjdFxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogU3ByaXRlUHJvcHMpIHtcbiAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2VcbiAgICB0aGlzLmlzU2hhZG93TG9hZGVkID0gZmFsc2VcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgIHRoaXMuaW1hZ2Uuc3JjID0gY29uZmlnLnNyYyB8fCAnYXNzZXRzL2NoYXJhY3RlcnMvcGVvcGxlL2hlcm8ucG5nJ1xuICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLnNoYWRvdyA9IG5ldyBJbWFnZSgpXG4gICAgdGhpcy51c2VTaGFkb3cgPSB0cnVlXG4gICAgaWYgKHRoaXMudXNlU2hhZG93KSB7XG4gICAgICB0aGlzLnNoYWRvdy5zcmMgPSBcImFzc2V0cy9jaGFyYWN0ZXJzL3NoYWRvdy5wbmdcIlxuICAgIH1cbiAgICB0aGlzLnNoYWRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmlzU2hhZG93TG9hZGVkID0gdHJ1ZVxuICAgIH1cblxuICAgIHRoaXMuYW5pbWF0aW9uID0gY29uZmlnLmFuaW1hdGlvbnMgfHwge1xuICAgICAgaWRsZURvd246IFtcbiAgICAgICAgWzAsIDBdXG4gICAgICBdXG4gICAgfVxuICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IGNvbmZpZy5jdXJyZW50QW5pbWF0aW9uIHx8IFwiaWRsZURvd25cIlxuICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbkZyYW1lID0gMFxuXG4gICAgdGhpcy5nYW1lT2JqZWN0ID0gY29uZmlnLmdhbWVPYmplY3RcbiAgfVxuXG4gIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsKSB7XG4gICAgY29uc3QgeCA9IHRoaXMuZ2FtZU9iamVjdC54ICogMTYgLSA4XG4gICAgY29uc3QgeSA9IHRoaXMuZ2FtZU9iamVjdC55ICogMTYgLSAxOFxuXG4gICAgdGhpcy5pc1NoYWRvd0xvYWRlZCAmJiBjdHg/LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuc2hhZG93LFxuICAgICAgeCwgeVxuICAgIClcblxuICAgIHRoaXMuaXNMb2FkZWQgJiYgY3R4Py5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgMCwgMCxcbiAgICAgIDMyLCAzMixcbiAgICAgIHgsIHksXG4gICAgICAzMiwgMzJcbiAgICApXG4gIH1cbn0iLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xuXG5leHBvcnQgY29uc3QgbWFwcyA9IHtcbiAgRGVtb1Jvb206IHtcbiAgICBsb3dlclNyYzogXCJhc3NldHMvbWFwcy9EZW1vTG93ZXIucG5nXCIsXG4gICAgdXBwZXJTcmM6IFwiYXNzZXRzL21hcHMvRGVtb1VwcGVyLnBuZ1wiLFxuICAgIGdhbWVPYmplY3RzOiB7XG4gICAgICBoZXJvOiBuZXcgR2FtZU9iamVjdCh7XG4gICAgICAgIHg6IDUsXG4gICAgICAgIHk6IDYsXG4gICAgICB9KSxcbiAgICAgIG5wYzE6IG5ldyBHYW1lT2JqZWN0KHtcbiAgICAgICAgeDogNyxcbiAgICAgICAgeTogOCxcbiAgICAgICAgc3JjOiAnYXNzZXRzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzEucG5nJ1xuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIEtpdGNoZW46IHtcbiAgICBsb3dlclNyYzogXCJhc3NldHMvbWFwcy9LaXRjaGVuTG93ZXIucG5nXCIsXG4gICAgdXBwZXJTcmM6IFwiYXNzZXRzL21hcHMvS2l0Y2hlblVwcGVyLnBuZ1wiLFxuICAgIGdhbWVPYmplY3RzOiB7XG4gICAgICBoZXJvOiBuZXcgR2FtZU9iamVjdCh7XG4gICAgICAgIHg6IDMsXG4gICAgICAgIHk6IDEsXG4gICAgICB9KSxcbiAgICAgIG5wYzE6IG5ldyBHYW1lT2JqZWN0KHtcbiAgICAgICAgeDogNyxcbiAgICAgICAgeTogOCxcbiAgICAgICAgc3JjOiAnYXNzZXRzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzIucG5nJ1xuICAgICAgfSksXG4gICAgICBucGMyOiBuZXcgR2FtZU9iamVjdCh7XG4gICAgICAgIHg6IDQsXG4gICAgICAgIHk6IDUsXG4gICAgICAgIHNyYzogJ2Fzc2V0cy9jaGFyYWN0ZXJzL3Blb3BsZS9ucGMzLnBuZydcbiAgICAgIH0pXG4gICAgfVxuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBPdmVyd29ybGQgfSBmcm9tICcuL2xpYi9PdmVyd29ybGQnXG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnN0IG92ZXJ3b3JsZCA9IG5ldyBPdmVyd29ybGQoe1xuICAgIGNvbnRhaW5lckVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWNvbnRhaW5lcicpXG4gIH0pXG5cbiAgb3ZlcndvcmxkLmluaXQoKVxufVxuXG5tYWluKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=