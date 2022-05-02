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
        var _a, _b;
        this.x = 0;
        this.y = 0;
        this.x = (_a = config.x) !== null && _a !== void 0 ? _a : 0;
        this.y = (_b = config.y) !== null && _b !== void 0 ? _b : 0;
        this.sprite = new _Sprite__WEBPACK_IMPORTED_MODULE_0__.Sprite({
            gameObject: this,
            src: config === null || config === void 0 ? void 0 : config.src
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
            // this.map.drawUpperImage(this.ctx)
            Object.values(_this.map.gameObjects)
                .forEach(function (gameObject) {
                gameObject.sprite.draw(_this.ctx);
            });
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
        var _a, _b, _c;
        this.isLoaded = false;
        this.isShadowLoaded = false;
        this.image = new Image();
        this.image.src = (_a = config.src) !== null && _a !== void 0 ? _a : 'assets/characters/people/hero.png';
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
        this.animation = (_b = config.animations) !== null && _b !== void 0 ? _b : {
            idleDown: [
                [0, 0]
            ]
        };
        this.currentAnimation = (_c = config.currentAnimation) !== null && _c !== void 0 ? _c : "idleDown";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixHQUFHLEVBQUUsbUNBQW1DO2FBQ3pDLENBQUM7WUFDRixJQUFJLEVBQUUsSUFBSSxtREFBVSxDQUFDO2dCQUNuQixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixHQUFHLEVBQUUsbUNBQW1DO2FBQ3pDLENBQUM7U0FDSDtLQUNGO0NBQ0Y7Ozs7Ozs7VUN0Q0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04yQztBQUUzQyxTQUFTLElBQUk7SUFDWCxJQUFNLFNBQVMsR0FBRyxJQUFJLHFEQUFTLENBQUM7UUFDOUIsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztLQUM1RCxDQUFDO0lBRUYsU0FBUyxDQUFDLElBQUksRUFBRTtBQUNsQixDQUFDO0FBRUQsSUFBSSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnBnLWpzLXBpenphLWxlZ2VuZHMvLi9zcmMvbGliL0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vcnBnLWpzLXBpenphLWxlZ2VuZHMvLi9zcmMvbGliL092ZXJ3b3JsZC50cyIsIndlYnBhY2s6Ly9ycGctanMtcGl6emEtbGVnZW5kcy8uL3NyYy9saWIvT3ZlcndvcmxkTWFwLnRzIiwid2VicGFjazovL3JwZy1qcy1waXp6YS1sZWdlbmRzLy4vc3JjL2xpYi9TcHJpdGUudHMiLCJ3ZWJwYWNrOi8vcnBnLWpzLXBpenphLWxlZ2VuZHMvLi9zcmMvbGliL21hcHMudHMiLCJ3ZWJwYWNrOi8vcnBnLWpzLXBpenphLWxlZ2VuZHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnBnLWpzLXBpenphLWxlZ2VuZHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JwZy1qcy1waXp6YS1sZWdlbmRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcnBnLWpzLXBpenphLWxlZ2VuZHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ycGctanMtcGl6emEtbGVnZW5kcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL1Nwcml0ZSdcblxuaW50ZXJmYWNlIEdhbWVPYmplY3RQcm9wcyB7XG4gIHg6IG51bWJlclxuICB5OiBudW1iZXJcbiAgc3JjPzogc3RyaW5nXG59XG5cbmV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0IHtcbiAgcHVibGljIHg6IG51bWJlciA9IDBcbiAgcHVibGljIHk6IG51bWJlciA9IDBcbiAgcHVibGljIHNwcml0ZTogU3ByaXRlXG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBHYW1lT2JqZWN0UHJvcHMpIHtcbiAgICB0aGlzLnggPSBjb25maWcueCA/PyAwXG4gICAgdGhpcy55ID0gY29uZmlnLnkgPz8gMFxuICAgIHRoaXMuc3ByaXRlID0gbmV3IFNwcml0ZSh7XG4gICAgICBnYW1lT2JqZWN0OiB0aGlzLFxuICAgICAgc3JjOiBjb25maWc/LnNyY1xuICAgIH0pXG4gIH1cbn0iLCJpbXBvcnQgeyBtYXBzIH0gZnJvbSAnLi9tYXBzJ1xuaW1wb3J0IHsgT3ZlcndvcmxkTWFwIH0gZnJvbSAnLi9PdmVyd29ybGRNYXAnXG5cbmludGVyZmFjZSBPdmVyd29ybGRQcm9wcyB7XG4gIGNvbnRhaW5lckVsZW1lbnQ/OiBFbGVtZW50XG59XG5cbmV4cG9ydCBjbGFzcyBPdmVyd29ybGQge1xuICBwdWJsaWMgY29udGFpbmVyRWxlbWVudD86IEVsZW1lbnRcbiAgcHVibGljIGNhbnZhcz86IEhUTUxDYW52YXNFbGVtZW50XG4gIHB1YmxpYyBjdHg/OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgcHVibGljIG1hcD86IE92ZXJ3b3JsZE1hcFxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogT3ZlcndvcmxkUHJvcHMpIHtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQgPSBjb25maWcuY29udGFpbmVyRWxlbWVudFxuICAgIHRoaXMuY2FudmFzID0gdGhpcy5jb250YWluZXJFbGVtZW50Py5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jYW52YXMnKSA/PyBudWxsXG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcz8uZ2V0Q29udGV4dCgnMmQnKSA/PyBudWxsXG4gICAgdGhpcy5tYXAgPSBudWxsXG4gIH1cblxuICBzdGFydEdhbWVMb29wKCkge1xuICAgIGNvbnN0IHN0ZXAgPSAoKSA9PiB7XG5cbiAgICAgIHRoaXMubWFwLmRyYXdMb3dlckltYWdlKHRoaXMuY3R4KVxuICAgICAgLy8gdGhpcy5tYXAuZHJhd1VwcGVySW1hZ2UodGhpcy5jdHgpXG5cbiAgICAgIE9iamVjdC52YWx1ZXModGhpcy5tYXAuZ2FtZU9iamVjdHMpXG4gICAgICAgIC5mb3JFYWNoKChnYW1lT2JqZWN0KSA9PiB7XG4gICAgICAgICAgZ2FtZU9iamVjdC5zcHJpdGUuZHJhdyhcbiAgICAgICAgICAgIHRoaXMuY3R4XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHN0ZXAoKVxuICAgIH0pXG5cbiAgICBzdGVwKClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5tYXAgPSBuZXcgT3ZlcndvcmxkTWFwKG1hcHMuRGVtb1Jvb20pXG4gICAgdGhpcy5zdGFydEdhbWVMb29wKClcbiAgfVxufSIsImltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XG5cbmludGVyZmFjZSBPdmVyd29ybGRNYXBQcm9wcyB7XG4gIGdhbWVPYmplY3RzOiB7XG4gICAgW2tleTogc3RyaW5nXTogR2FtZU9iamVjdFxuICB9XG4gIGxvd2VyU3JjOiBzdHJpbmdcbiAgdXBwZXJTcmM6IHN0cmluZ1xufVxuXG5leHBvcnQgY2xhc3MgT3ZlcndvcmxkTWFwIHtcbiAgcHVibGljIGdhbWVPYmplY3RzOiB7XG4gICAgW2tleTogc3RyaW5nXTogR2FtZU9iamVjdFxuICB9XG4gIHB1YmxpYyBsb3dlckltYWdlPzogSFRNTEltYWdlRWxlbWVudFxuICBwdWJsaWMgdXBwZXJJbWFnZT86IEhUTUxJbWFnZUVsZW1lbnRcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IE92ZXJ3b3JsZE1hcFByb3BzKSB7XG4gICAgdGhpcy5nYW1lT2JqZWN0cyA9IGNvbmZpZy5nYW1lT2JqZWN0c1xuXG4gICAgdGhpcy5sb3dlckltYWdlID0gbmV3IEltYWdlKClcbiAgICB0aGlzLnVwcGVySW1hZ2UgPSBuZXcgSW1hZ2UoKVxuXG4gICAgdGhpcy5sb3dlckltYWdlLnNyYyA9IGNvbmZpZy5sb3dlclNyYyA/PyBudWxsXG4gICAgdGhpcy51cHBlckltYWdlLnNyYyA9IGNvbmZpZy5sb3dlclNyYyA/PyBudWxsXG4gIH1cblxuICBkcmF3TG93ZXJJbWFnZShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwpIHtcbiAgICBpZiAodGhpcy5sb3dlckltYWdlLnNyYykge1xuICAgICAgY3R4Py5kcmF3SW1hZ2UodGhpcy5sb3dlckltYWdlLCAwLCAwKVxuICAgIH1cbiAgfVxuXG4gIGRyYXdVcHBlckltYWdlKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLnVwcGVySW1hZ2Uuc3JjKSB7XG4gICAgICBjdHg/LmRyYXdJbWFnZSh0aGlzLnVwcGVySW1hZ2UsIDAsIDApXG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gJy4vR2FtZU9iamVjdCdcblxuaW50ZXJmYWNlIFNwcml0ZVByb3BzIHtcbiAgc3JjPzogc3RyaW5nXG4gIGFuaW1hdGlvbnM/OiB7XG4gICAgaWRsZURvd246IGFueVxuICB9XG4gIGN1cnJlbnRBbmltYXRpb24/OiBzdHJpbmdcbiAgY3VycmVudEFuaW1hdGlvbkZyYW1lPzogbnVtYmVyXG4gIGdhbWVPYmplY3Q/OiBHYW1lT2JqZWN0XG59XG5cbmV4cG9ydCBjbGFzcyBTcHJpdGUge1xuICBwdWJsaWMgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnRcbiAgcHVibGljIGlzTG9hZGVkOiBib29sZWFuXG4gIHB1YmxpYyBzaGFkb3c6IEhUTUxJbWFnZUVsZW1lbnRcbiAgcHVibGljIGlzU2hhZG93TG9hZGVkOiBib29sZWFuXG4gIHB1YmxpYyB1c2VTaGFkb3c6IGJvb2xlYW5cbiAgcHVibGljIGFuaW1hdGlvbjoge31cbiAgcHVibGljIGN1cnJlbnRBbmltYXRpb246IHN0cmluZ1xuICBwdWJsaWMgY3VycmVudEFuaW1hdGlvbkZyYW1lOiBudW1iZXJcbiAgcHVibGljIGdhbWVPYmplY3Q6IEdhbWVPYmplY3RcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IFNwcml0ZVByb3BzKSB7XG4gICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlXG4gICAgdGhpcy5pc1NoYWRvd0xvYWRlZCA9IGZhbHNlXG5cbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKClcbiAgICB0aGlzLmltYWdlLnNyYyA9IGNvbmZpZy5zcmMgPz8gJ2Fzc2V0cy9jaGFyYWN0ZXJzL3Blb3BsZS9oZXJvLnBuZydcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgdGhpcy5zaGFkb3cgPSBuZXcgSW1hZ2UoKVxuICAgIHRoaXMudXNlU2hhZG93ID0gdHJ1ZVxuICAgIGlmICh0aGlzLnVzZVNoYWRvdykge1xuICAgICAgdGhpcy5zaGFkb3cuc3JjID0gXCJhc3NldHMvY2hhcmFjdGVycy9zaGFkb3cucG5nXCJcbiAgICB9XG4gICAgdGhpcy5zaGFkb3cub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5pc1NoYWRvd0xvYWRlZCA9IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLmFuaW1hdGlvbiA9IGNvbmZpZy5hbmltYXRpb25zID8/IHtcbiAgICAgIGlkbGVEb3duOiBbXG4gICAgICAgIFswLCAwXVxuICAgICAgXVxuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBjb25maWcuY3VycmVudEFuaW1hdGlvbiA/PyBcImlkbGVEb3duXCJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZSA9IDBcblxuICAgIHRoaXMuZ2FtZU9iamVjdCA9IGNvbmZpZy5nYW1lT2JqZWN0XG4gIH1cblxuICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCkge1xuICAgIGNvbnN0IHggPSB0aGlzLmdhbWVPYmplY3QueCAqIDE2IC0gOFxuICAgIGNvbnN0IHkgPSB0aGlzLmdhbWVPYmplY3QueSAqIDE2IC0gMThcblxuICAgIHRoaXMuaXNTaGFkb3dMb2FkZWQgJiYgY3R4Py5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLnNoYWRvdyxcbiAgICAgIHgsIHlcbiAgICApXG5cbiAgICB0aGlzLmlzTG9hZGVkICYmIGN0eD8uZHJhd0ltYWdlKFxuICAgICAgdGhpcy5pbWFnZSxcbiAgICAgIDAsIDAsXG4gICAgICAzMiwgMzIsXG4gICAgICB4LCB5LFxuICAgICAgMzIsIDMyXG4gICAgKVxuICB9XG59IiwiaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcblxuZXhwb3J0IGNvbnN0IG1hcHMgPSB7XG4gIERlbW9Sb29tOiB7XG4gICAgbG93ZXJTcmM6IFwiYXNzZXRzL21hcHMvRGVtb0xvd2VyLnBuZ1wiLFxuICAgIHVwcGVyU3JjOiBcImFzc2V0cy9tYXBzL0RlbW9VcHBlci5wbmdcIixcbiAgICBnYW1lT2JqZWN0czoge1xuICAgICAgaGVybzogbmV3IEdhbWVPYmplY3Qoe1xuICAgICAgICB4OiA1LFxuICAgICAgICB5OiA2LFxuICAgICAgfSksXG4gICAgICBucGMxOiBuZXcgR2FtZU9iamVjdCh7XG4gICAgICAgIHg6IDcsXG4gICAgICAgIHk6IDgsXG4gICAgICAgIHNyYzogJ2Fzc2V0cy9jaGFyYWN0ZXJzL3Blb3BsZS9ucGMxLnBuZydcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuICBLaXRjaGVuOiB7XG4gICAgbG93ZXJTcmM6IFwiYXNzZXRzL21hcHMvS2l0Y2hlbkxvd2VyLnBuZ1wiLFxuICAgIHVwcGVyU3JjOiBcImFzc2V0cy9tYXBzL0tpdGNoZW5VcHBlci5wbmdcIixcbiAgICBnYW1lT2JqZWN0czoge1xuICAgICAgaGVybzogbmV3IEdhbWVPYmplY3Qoe1xuICAgICAgICB4OiAzLFxuICAgICAgICB5OiAxLFxuICAgICAgfSksXG4gICAgICBucGMxOiBuZXcgR2FtZU9iamVjdCh7XG4gICAgICAgIHg6IDcsXG4gICAgICAgIHk6IDgsXG4gICAgICAgIHNyYzogJ2Fzc2V0cy9jaGFyYWN0ZXJzL3Blb3BsZS9ucGMyLnBuZydcbiAgICAgIH0pLFxuICAgICAgbnBjMjogbmV3IEdhbWVPYmplY3Qoe1xuICAgICAgICB4OiA0LFxuICAgICAgICB5OiA1LFxuICAgICAgICBzcmM6ICdhc3NldHMvY2hhcmFjdGVycy9wZW9wbGUvbnBjMy5wbmcnXG4gICAgICB9KVxuICAgIH1cbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgT3ZlcndvcmxkIH0gZnJvbSAnLi9saWIvT3ZlcndvcmxkJ1xuXG5mdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCBvdmVyd29ybGQgPSBuZXcgT3ZlcndvcmxkKHtcbiAgICBjb250YWluZXJFbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jb250YWluZXInKVxuICB9KVxuXG4gIG92ZXJ3b3JsZC5pbml0KClcbn1cblxubWFpbigpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9