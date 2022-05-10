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
            Object
                .values(_this.map.gameObjects)
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
        this.gameObjects = config.gameObjects;
        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;
        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
    }
    OverworldMap.prototype.drawLowerImage = function (ctx) {
        ctx.drawImage(this.lowerImage, 0, 0);
    };
    OverworldMap.prototype.drawUpperImage = function (ctx) {
        ctx.drawImage(this.upperImage, 0, 0);
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
                src: "assets/characters/people/npc1.png"
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
                src: "assets/characters/people/npc2.png"
            }),
            npc2: new _GameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject({
                x: 4,
                y: 5,
                src: "assets/characters/people/npc3.png"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0osQ0FBQyxFQUFFLENBQUM7Z0JBQ0osR0FBRyxFQUFFLG1DQUFtQzthQUN6QyxDQUFDO1NBQ0g7S0FDRjtDQUNGOzs7Ozs7O1VDdENEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMkM7QUFFM0MsU0FBUyxJQUFJO0lBQ1gsSUFBTSxTQUFTLEdBQUcsSUFBSSxxREFBUyxDQUFDO1FBQzlCLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7S0FDNUQsQ0FBQztJQUVGLFNBQVMsQ0FBQyxJQUFJLEVBQUU7QUFDbEIsQ0FBQztBQUVELElBQUksRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3JwZy1qcy1waXp6YS1sZWdlbmRzLy4vc3JjL2xpYi9HYW1lT2JqZWN0LnRzIiwid2VicGFjazovL3JwZy1qcy1waXp6YS1sZWdlbmRzLy4vc3JjL2xpYi9PdmVyd29ybGQudHMiLCJ3ZWJwYWNrOi8vcnBnLWpzLXBpenphLWxlZ2VuZHMvLi9zcmMvbGliL092ZXJ3b3JsZE1hcC50cyIsIndlYnBhY2s6Ly9ycGctanMtcGl6emEtbGVnZW5kcy8uL3NyYy9saWIvU3ByaXRlLnRzIiwid2VicGFjazovL3JwZy1qcy1waXp6YS1sZWdlbmRzLy4vc3JjL2xpYi9tYXBzLnRzIiwid2VicGFjazovL3JwZy1qcy1waXp6YS1sZWdlbmRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JwZy1qcy1waXp6YS1sZWdlbmRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ycGctanMtcGl6emEtbGVnZW5kcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JwZy1qcy1waXp6YS1sZWdlbmRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnBnLWpzLXBpenphLWxlZ2VuZHMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9TcHJpdGUnXG5cbmludGVyZmFjZSBHYW1lT2JqZWN0UHJvcHMge1xuICB4OiBudW1iZXJcbiAgeTogbnVtYmVyXG4gIHNyYz86IHN0cmluZ1xufVxuXG5leHBvcnQgY2xhc3MgR2FtZU9iamVjdCB7XG4gIHB1YmxpYyB4OiBudW1iZXIgPSAwXG4gIHB1YmxpYyB5OiBudW1iZXIgPSAwXG4gIHB1YmxpYyBzcHJpdGU6IFNwcml0ZVxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogR2FtZU9iamVjdFByb3BzKSB7XG4gICAgdGhpcy54ID0gY29uZmlnLnggPz8gMFxuICAgIHRoaXMueSA9IGNvbmZpZy55ID8/IDBcbiAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUoe1xuICAgICAgZ2FtZU9iamVjdDogdGhpcyxcbiAgICAgIHNyYzogY29uZmlnPy5zcmNcbiAgICB9KVxuICB9XG59IiwiaW1wb3J0IHsgbWFwcyB9IGZyb20gJy4vbWFwcydcbmltcG9ydCB7IE92ZXJ3b3JsZE1hcCB9IGZyb20gJy4vT3ZlcndvcmxkTWFwJ1xuXG5pbnRlcmZhY2UgT3ZlcndvcmxkUHJvcHMge1xuICBjb250YWluZXJFbGVtZW50PzogRWxlbWVudFxufVxuXG5leHBvcnQgY2xhc3MgT3ZlcndvcmxkIHtcbiAgcHVibGljIGNvbnRhaW5lckVsZW1lbnQ/OiBFbGVtZW50XG4gIHB1YmxpYyBjYW52YXM/OiBIVE1MQ2FudmFzRWxlbWVudFxuICBwdWJsaWMgY3R4PzogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gIHB1YmxpYyBtYXA/OiBPdmVyd29ybGRNYXBcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IE92ZXJ3b3JsZFByb3BzKSB7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50ID0gY29uZmlnLmNvbnRhaW5lckVsZW1lbnRcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuY29udGFpbmVyRWxlbWVudD8ucXVlcnlTZWxlY3RvcignLmdhbWUtY2FudmFzJykgPz8gbnVsbFxuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXM/LmdldENvbnRleHQoJzJkJykgPz8gbnVsbFxuICAgIHRoaXMubWFwID0gbnVsbFxuICB9XG5cbiAgc3RhcnRHYW1lTG9vcCgpIHtcbiAgICBjb25zdCBzdGVwID0gKCkgPT4ge1xuXG4gICAgICB0aGlzLm1hcC5kcmF3TG93ZXJJbWFnZSh0aGlzLmN0eClcblxuICAgICAgT2JqZWN0XG4gICAgICAgIC52YWx1ZXModGhpcy5tYXAuZ2FtZU9iamVjdHMpXG4gICAgICAgIC5mb3JFYWNoKChnYW1lT2JqZWN0KSA9PiB7XG4gICAgICAgICAgZ2FtZU9iamVjdC5zcHJpdGUuZHJhdyhcbiAgICAgICAgICAgIHRoaXMuY3R4XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuXG4gICAgICB0aGlzLm1hcC5kcmF3VXBwZXJJbWFnZSh0aGlzLmN0eClcblxuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBzdGVwKClcbiAgICB9KVxuXG4gICAgc3RlcCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMubWFwID0gbmV3IE92ZXJ3b3JsZE1hcChtYXBzLkRlbW9Sb29tKVxuICAgIHRoaXMuc3RhcnRHYW1lTG9vcCgpXG4gIH1cbn0iLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xuXG5pbnRlcmZhY2UgT3ZlcndvcmxkTWFwUHJvcHMge1xuICBnYW1lT2JqZWN0czoge1xuICAgIFtrZXk6IHN0cmluZ106IEdhbWVPYmplY3RcbiAgfVxuICBsb3dlclNyYzogc3RyaW5nXG4gIHVwcGVyU3JjOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNsYXNzIE92ZXJ3b3JsZE1hcCB7XG4gIHB1YmxpYyBnYW1lT2JqZWN0czoge1xuICAgIFtrZXk6IHN0cmluZ106IEdhbWVPYmplY3RcbiAgfVxuICBwdWJsaWMgbG93ZXJJbWFnZTogSFRNTEltYWdlRWxlbWVudFxuICBwdWJsaWMgdXBwZXJJbWFnZTogSFRNTEltYWdlRWxlbWVudFxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogT3ZlcndvcmxkTWFwUHJvcHMpIHtcbiAgICB0aGlzLmdhbWVPYmplY3RzID0gY29uZmlnLmdhbWVPYmplY3RzXG5cbiAgICB0aGlzLmxvd2VySW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgIHRoaXMubG93ZXJJbWFnZS5zcmMgPSBjb25maWcubG93ZXJTcmNcbiAgICBcbiAgICB0aGlzLnVwcGVySW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgIHRoaXMudXBwZXJJbWFnZS5zcmMgPSBjb25maWcudXBwZXJTcmNcbiAgfVxuXG4gIGRyYXdMb3dlckltYWdlKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLmxvd2VySW1hZ2UsIDAsIDApXG4gIH1cblxuICBkcmF3VXBwZXJJbWFnZShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy51cHBlckltYWdlLCAwLCAwKVxuICB9XG59IiwiaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gJy4vR2FtZU9iamVjdCdcblxuaW50ZXJmYWNlIFNwcml0ZVByb3BzIHtcbiAgc3JjPzogc3RyaW5nXG4gIGFuaW1hdGlvbnM/OiB7XG4gICAgaWRsZURvd246IGFueVxuICB9XG4gIGN1cnJlbnRBbmltYXRpb24/OiBzdHJpbmdcbiAgY3VycmVudEFuaW1hdGlvbkZyYW1lPzogbnVtYmVyXG4gIGdhbWVPYmplY3Q/OiBHYW1lT2JqZWN0XG59XG5cbmV4cG9ydCBjbGFzcyBTcHJpdGUge1xuICBwdWJsaWMgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnRcbiAgcHVibGljIGlzTG9hZGVkOiBib29sZWFuXG4gIHB1YmxpYyBzaGFkb3c6IEhUTUxJbWFnZUVsZW1lbnRcbiAgcHVibGljIGlzU2hhZG93TG9hZGVkOiBib29sZWFuXG4gIHB1YmxpYyB1c2VTaGFkb3c6IGJvb2xlYW5cbiAgcHVibGljIGFuaW1hdGlvbjoge31cbiAgcHVibGljIGN1cnJlbnRBbmltYXRpb246IHN0cmluZ1xuICBwdWJsaWMgY3VycmVudEFuaW1hdGlvbkZyYW1lOiBudW1iZXJcbiAgcHVibGljIGdhbWVPYmplY3Q6IEdhbWVPYmplY3RcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IFNwcml0ZVByb3BzKSB7XG4gICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlXG4gICAgdGhpcy5pc1NoYWRvd0xvYWRlZCA9IGZhbHNlXG5cbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKClcbiAgICB0aGlzLmltYWdlLnNyYyA9IGNvbmZpZy5zcmMgPz8gJ2Fzc2V0cy9jaGFyYWN0ZXJzL3Blb3BsZS9oZXJvLnBuZydcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgdGhpcy5zaGFkb3cgPSBuZXcgSW1hZ2UoKVxuICAgIHRoaXMudXNlU2hhZG93ID0gdHJ1ZVxuICAgIGlmICh0aGlzLnVzZVNoYWRvdykge1xuICAgICAgdGhpcy5zaGFkb3cuc3JjID0gXCJhc3NldHMvY2hhcmFjdGVycy9zaGFkb3cucG5nXCJcbiAgICB9XG4gICAgdGhpcy5zaGFkb3cub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5pc1NoYWRvd0xvYWRlZCA9IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLmFuaW1hdGlvbiA9IGNvbmZpZy5hbmltYXRpb25zID8/IHtcbiAgICAgIGlkbGVEb3duOiBbXG4gICAgICAgIFswLCAwXVxuICAgICAgXVxuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBjb25maWcuY3VycmVudEFuaW1hdGlvbiA/PyBcImlkbGVEb3duXCJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZSA9IDBcblxuICAgIHRoaXMuZ2FtZU9iamVjdCA9IGNvbmZpZy5nYW1lT2JqZWN0XG4gIH1cblxuICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY29uc3QgeCA9IHRoaXMuZ2FtZU9iamVjdC54ICogMTYgLSA4XG4gICAgY29uc3QgeSA9IHRoaXMuZ2FtZU9iamVjdC55ICogMTYgLSAxOFxuXG4gICAgdGhpcy5pc1NoYWRvd0xvYWRlZCAmJiBjdHg/LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuc2hhZG93LFxuICAgICAgeCwgeVxuICAgIClcblxuICAgIHRoaXMuaXNMb2FkZWQgJiYgY3R4Py5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgMCwgMCxcbiAgICAgIDMyLCAzMixcbiAgICAgIHgsIHksXG4gICAgICAzMiwgMzJcbiAgICApXG4gIH1cbn0iLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xuXG5leHBvcnQgY29uc3QgbWFwcyA9IHtcbiAgRGVtb1Jvb206IHtcbiAgICBsb3dlclNyYzogXCJhc3NldHMvbWFwcy9EZW1vTG93ZXIucG5nXCIsXG4gICAgdXBwZXJTcmM6IFwiYXNzZXRzL21hcHMvRGVtb1VwcGVyLnBuZ1wiLFxuICAgIGdhbWVPYmplY3RzOiB7XG4gICAgICBoZXJvOiBuZXcgR2FtZU9iamVjdCh7XG4gICAgICAgIHg6IDUsXG4gICAgICAgIHk6IDYsXG4gICAgICB9KSxcbiAgICAgIG5wYzE6IG5ldyBHYW1lT2JqZWN0KHtcbiAgICAgICAgeDogNyxcbiAgICAgICAgeTogOCxcbiAgICAgICAgc3JjOiBcImFzc2V0cy9jaGFyYWN0ZXJzL3Blb3BsZS9ucGMxLnBuZ1wiXG4gICAgICB9KVxuICAgIH1cbiAgfSxcbiAgS2l0Y2hlbjoge1xuICAgIGxvd2VyU3JjOiBcImFzc2V0cy9tYXBzL0tpdGNoZW5Mb3dlci5wbmdcIixcbiAgICB1cHBlclNyYzogXCJhc3NldHMvbWFwcy9LaXRjaGVuVXBwZXIucG5nXCIsXG4gICAgZ2FtZU9iamVjdHM6IHtcbiAgICAgIGhlcm86IG5ldyBHYW1lT2JqZWN0KHtcbiAgICAgICAgeDogMyxcbiAgICAgICAgeTogMSxcbiAgICAgIH0pLFxuICAgICAgbnBjMTogbmV3IEdhbWVPYmplY3Qoe1xuICAgICAgICB4OiA3LFxuICAgICAgICB5OiA4LFxuICAgICAgICBzcmM6IFwiYXNzZXRzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzIucG5nXCJcbiAgICAgIH0pLFxuICAgICAgbnBjMjogbmV3IEdhbWVPYmplY3Qoe1xuICAgICAgICB4OiA0LFxuICAgICAgICB5OiA1LFxuICAgICAgICBzcmM6IFwiYXNzZXRzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzMucG5nXCJcbiAgICAgIH0pXG4gICAgfVxuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBPdmVyd29ybGQgfSBmcm9tICcuL2xpYi9PdmVyd29ybGQnXG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnN0IG92ZXJ3b3JsZCA9IG5ldyBPdmVyd29ybGQoe1xuICAgIGNvbnRhaW5lckVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWNvbnRhaW5lcicpXG4gIH0pXG5cbiAgb3ZlcndvcmxkLmluaXQoKVxufVxuXG5tYWluKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=