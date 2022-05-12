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

class GameObject {
    constructor(config) {
        this.x = 0;
        this.y = 0;
        this.x = config.x;
        this.y = config.y;
        this.sprite = new _Sprite__WEBPACK_IMPORTED_MODULE_0__.Sprite({
            gameObject: this,
            src: config === null || config === void 0 ? void 0 : config.src
        });
    }
}


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


class Overworld {
    constructor(config) {
        this.containerElement = config.containerElement;
        this.canvas = this.containerElement.querySelector('.game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.map = null;
    }
    startGameLoop() {
        const step = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.map.drawLowerImage(this.ctx);
            Object
                .values(this.map.gameObjects)
                .forEach((gameObject) => {
                gameObject.sprite.draw(this.ctx);
            });
            this.map.drawUpperImage(this.ctx);
        };
        requestAnimationFrame(() => {
            step();
        });
        step();
    }
    init() {
        this.map = new _OverworldMap__WEBPACK_IMPORTED_MODULE_1__.OverworldMap(_maps__WEBPACK_IMPORTED_MODULE_0__.maps.DemoRoom);
        this.startGameLoop();
    }
}


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
class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;
        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
    }
    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage, 0, 0);
    }
    drawUpperImage(ctx) {
        ctx.drawImage(this.upperImage, 0, 0);
    }
}


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
class Sprite {
    constructor(config) {
        var _a, _b, _c;
        this.isLoaded = false;
        this.isShadowLoaded = false;
        this.image = new Image();
        this.image.src = (_a = config.src) !== null && _a !== void 0 ? _a : 'assets/characters/people/hero.png';
        this.image.onload = () => {
            this.isLoaded = true;
        };
        this.shadow = new Image();
        this.useShadow = true;
        if (this.useShadow) {
            this.shadow.src = "assets/characters/shadow.png";
        }
        this.shadow.onload = () => {
            this.isShadowLoaded = true;
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
    draw(ctx) {
        const x = this.gameObject.x * 16 - 8;
        const y = this.gameObject.y * 16 - 18;
        this.isShadowLoaded && (ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(this.shadow, x, y));
        this.isLoaded && (ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(this.image, 0, 0, 32, 32, x, y, 32, 32));
    }
}


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

const maps = {
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
    const overworld = new _lib_Overworld__WEBPACK_IMPORTED_MODULE_0__.Overworld({
        containerElement: document.querySelector('.game-container')
    });
    overworld.init();
}
main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLENBQUM7Z0JBQ25CLENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxDQUFDO2dCQUNKLEdBQUcsRUFBRSxtQ0FBbUM7YUFDekMsQ0FBQztTQUNIO0tBQ0Y7Q0FDRjs7Ozs7OztVQ3RDRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjJDO0FBRTNDLFNBQVMsSUFBSTtJQUNYLE1BQU0sU0FBUyxHQUFHLElBQUkscURBQVMsQ0FBQztRQUM5QixnQkFBZ0IsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFFO0tBQzdELENBQUM7SUFFRixTQUFTLENBQUMsSUFBSSxFQUFFO0FBQ2xCLENBQUM7QUFFRCxJQUFJLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ycGctanMtcGl6emEtbGVnZW5kcy8uL3NyYy9saWIvR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly9ycGctanMtcGl6emEtbGVnZW5kcy8uL3NyYy9saWIvT3ZlcndvcmxkLnRzIiwid2VicGFjazovL3JwZy1qcy1waXp6YS1sZWdlbmRzLy4vc3JjL2xpYi9PdmVyd29ybGRNYXAudHMiLCJ3ZWJwYWNrOi8vcnBnLWpzLXBpenphLWxlZ2VuZHMvLi9zcmMvbGliL1Nwcml0ZS50cyIsIndlYnBhY2s6Ly9ycGctanMtcGl6emEtbGVnZW5kcy8uL3NyYy9saWIvbWFwcy50cyIsIndlYnBhY2s6Ly9ycGctanMtcGl6emEtbGVnZW5kcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ycGctanMtcGl6emEtbGVnZW5kcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnBnLWpzLXBpenphLWxlZ2VuZHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ycGctanMtcGl6emEtbGVnZW5kcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JwZy1qcy1waXp6YS1sZWdlbmRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vU3ByaXRlJ1xuXG5pbnRlcmZhY2UgR2FtZU9iamVjdFByb3BzIHtcbiAgeDogbnVtYmVyXG4gIHk6IG51bWJlclxuICBzcmM/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNsYXNzIEdhbWVPYmplY3Qge1xuICBwdWJsaWMgeDogbnVtYmVyID0gMFxuICBwdWJsaWMgeTogbnVtYmVyID0gMFxuICBwdWJsaWMgc3ByaXRlOiBTcHJpdGVcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IEdhbWVPYmplY3RQcm9wcykge1xuICAgIHRoaXMueCA9IGNvbmZpZy54XG4gICAgdGhpcy55ID0gY29uZmlnLnlcbiAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUoe1xuICAgICAgZ2FtZU9iamVjdDogdGhpcyxcbiAgICAgIHNyYzogY29uZmlnPy5zcmNcbiAgICB9KVxuICB9XG59IiwiaW1wb3J0IHsgbWFwcyB9IGZyb20gJy4vbWFwcydcbmltcG9ydCB7IE92ZXJ3b3JsZE1hcCB9IGZyb20gJy4vT3ZlcndvcmxkTWFwJ1xuXG5pbnRlcmZhY2UgT3ZlcndvcmxkUHJvcHMge1xuICBjb250YWluZXJFbGVtZW50OiBFbGVtZW50XG59XG5cbmV4cG9ydCBjbGFzcyBPdmVyd29ybGQge1xuICBwdWJsaWMgY29udGFpbmVyRWxlbWVudDogRWxlbWVudFxuICBwdWJsaWMgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxuICBwdWJsaWMgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgcHVibGljIG1hcDogT3ZlcndvcmxkTWFwXG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBPdmVyd29ybGRQcm9wcykge1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudCA9IGNvbmZpZy5jb250YWluZXJFbGVtZW50XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtY2FudmFzJylcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICB0aGlzLm1hcCA9IG51bGxcbiAgfVxuXG4gIHN0YXJ0R2FtZUxvb3AoKSB7XG4gICAgY29uc3Qgc3RlcCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KVxuXG4gICAgICB0aGlzLm1hcC5kcmF3TG93ZXJJbWFnZSh0aGlzLmN0eClcblxuICAgICAgT2JqZWN0XG4gICAgICAgIC52YWx1ZXModGhpcy5tYXAuZ2FtZU9iamVjdHMpXG4gICAgICAgIC5mb3JFYWNoKChnYW1lT2JqZWN0KSA9PiB7XG4gICAgICAgICAgZ2FtZU9iamVjdC5zcHJpdGUuZHJhdyhcbiAgICAgICAgICAgIHRoaXMuY3R4XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuXG4gICAgICB0aGlzLm1hcC5kcmF3VXBwZXJJbWFnZSh0aGlzLmN0eClcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgc3RlcCgpXG4gICAgfSlcblxuICAgIHN0ZXAoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLm1hcCA9IG5ldyBPdmVyd29ybGRNYXAobWFwcy5EZW1vUm9vbSlcbiAgICB0aGlzLnN0YXJ0R2FtZUxvb3AoKVxuICB9XG59IiwiaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcblxuaW50ZXJmYWNlIE92ZXJ3b3JsZE1hcFByb3BzIHtcbiAgZ2FtZU9iamVjdHM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBHYW1lT2JqZWN0XG4gIH1cbiAgbG93ZXJTcmM6IHN0cmluZ1xuICB1cHBlclNyYzogc3RyaW5nXG59XG5cbmV4cG9ydCBjbGFzcyBPdmVyd29ybGRNYXAge1xuICBwdWJsaWMgZ2FtZU9iamVjdHM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBHYW1lT2JqZWN0XG4gIH1cbiAgcHVibGljIGxvd2VySW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnRcbiAgcHVibGljIHVwcGVySW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnRcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IE92ZXJ3b3JsZE1hcFByb3BzKSB7XG4gICAgdGhpcy5nYW1lT2JqZWN0cyA9IGNvbmZpZy5nYW1lT2JqZWN0c1xuXG4gICAgdGhpcy5sb3dlckltYWdlID0gbmV3IEltYWdlKClcbiAgICB0aGlzLmxvd2VySW1hZ2Uuc3JjID0gY29uZmlnLmxvd2VyU3JjXG4gICAgXG4gICAgdGhpcy51cHBlckltYWdlID0gbmV3IEltYWdlKClcbiAgICB0aGlzLnVwcGVySW1hZ2Uuc3JjID0gY29uZmlnLnVwcGVyU3JjXG4gIH1cblxuICBkcmF3TG93ZXJJbWFnZShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5sb3dlckltYWdlLCAwLCAwKVxuICB9XG5cbiAgZHJhd1VwcGVySW1hZ2UoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMudXBwZXJJbWFnZSwgMCwgMClcbiAgfVxufSIsImltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tICcuL0dhbWVPYmplY3QnXG5cbmludGVyZmFjZSBTcHJpdGVQcm9wcyB7XG4gIHNyYz86IHN0cmluZ1xuICBhbmltYXRpb25zPzoge1xuICAgIGlkbGVEb3duOiBhbnlcbiAgfVxuICBjdXJyZW50QW5pbWF0aW9uPzogc3RyaW5nXG4gIGN1cnJlbnRBbmltYXRpb25GcmFtZT86IG51bWJlclxuICBnYW1lT2JqZWN0OiBHYW1lT2JqZWN0XG59XG5cbmV4cG9ydCBjbGFzcyBTcHJpdGUge1xuICBwdWJsaWMgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnRcbiAgcHVibGljIGlzTG9hZGVkOiBib29sZWFuXG4gIHB1YmxpYyBzaGFkb3c6IEhUTUxJbWFnZUVsZW1lbnRcbiAgcHVibGljIGlzU2hhZG93TG9hZGVkOiBib29sZWFuXG4gIHB1YmxpYyB1c2VTaGFkb3c6IGJvb2xlYW5cbiAgcHVibGljIGFuaW1hdGlvbjoge31cbiAgcHVibGljIGN1cnJlbnRBbmltYXRpb246IHN0cmluZ1xuICBwdWJsaWMgY3VycmVudEFuaW1hdGlvbkZyYW1lOiBudW1iZXJcbiAgcHVibGljIGdhbWVPYmplY3Q6IEdhbWVPYmplY3RcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IFNwcml0ZVByb3BzKSB7XG4gICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlXG4gICAgdGhpcy5pc1NoYWRvd0xvYWRlZCA9IGZhbHNlXG5cbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKClcbiAgICB0aGlzLmltYWdlLnNyYyA9IGNvbmZpZy5zcmMgPz8gJ2Fzc2V0cy9jaGFyYWN0ZXJzL3Blb3BsZS9oZXJvLnBuZydcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgdGhpcy5zaGFkb3cgPSBuZXcgSW1hZ2UoKVxuICAgIHRoaXMudXNlU2hhZG93ID0gdHJ1ZVxuICAgIGlmICh0aGlzLnVzZVNoYWRvdykge1xuICAgICAgdGhpcy5zaGFkb3cuc3JjID0gXCJhc3NldHMvY2hhcmFjdGVycy9zaGFkb3cucG5nXCJcbiAgICB9XG4gICAgdGhpcy5zaGFkb3cub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5pc1NoYWRvd0xvYWRlZCA9IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLmFuaW1hdGlvbiA9IGNvbmZpZy5hbmltYXRpb25zID8/IHtcbiAgICAgIGlkbGVEb3duOiBbXG4gICAgICAgIFswLCAwXVxuICAgICAgXVxuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBjb25maWcuY3VycmVudEFuaW1hdGlvbiA/PyBcImlkbGVEb3duXCJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZSA9IDBcblxuICAgIHRoaXMuZ2FtZU9iamVjdCA9IGNvbmZpZy5nYW1lT2JqZWN0XG4gIH1cblxuICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY29uc3QgeCA9IHRoaXMuZ2FtZU9iamVjdC54ICogMTYgLSA4XG4gICAgY29uc3QgeSA9IHRoaXMuZ2FtZU9iamVjdC55ICogMTYgLSAxOFxuXG4gICAgdGhpcy5pc1NoYWRvd0xvYWRlZCAmJiBjdHg/LmRyYXdJbWFnZShcbiAgICAgIHRoaXMuc2hhZG93LFxuICAgICAgeCwgeVxuICAgIClcblxuICAgIHRoaXMuaXNMb2FkZWQgJiYgY3R4Py5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmltYWdlLFxuICAgICAgMCwgMCxcbiAgICAgIDMyLCAzMixcbiAgICAgIHgsIHksXG4gICAgICAzMiwgMzJcbiAgICApXG4gIH1cbn0iLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xuXG5leHBvcnQgY29uc3QgbWFwcyA9IHtcbiAgRGVtb1Jvb206IHtcbiAgICBsb3dlclNyYzogXCJhc3NldHMvbWFwcy9EZW1vTG93ZXIucG5nXCIsXG4gICAgdXBwZXJTcmM6IFwiYXNzZXRzL21hcHMvRGVtb1VwcGVyLnBuZ1wiLFxuICAgIGdhbWVPYmplY3RzOiB7XG4gICAgICBoZXJvOiBuZXcgR2FtZU9iamVjdCh7XG4gICAgICAgIHg6IDUsXG4gICAgICAgIHk6IDYsXG4gICAgICB9KSxcbiAgICAgIG5wYzE6IG5ldyBHYW1lT2JqZWN0KHtcbiAgICAgICAgeDogNyxcbiAgICAgICAgeTogOCxcbiAgICAgICAgc3JjOiBcImFzc2V0cy9jaGFyYWN0ZXJzL3Blb3BsZS9ucGMxLnBuZ1wiXG4gICAgICB9KVxuICAgIH1cbiAgfSxcbiAgS2l0Y2hlbjoge1xuICAgIGxvd2VyU3JjOiBcImFzc2V0cy9tYXBzL0tpdGNoZW5Mb3dlci5wbmdcIixcbiAgICB1cHBlclNyYzogXCJhc3NldHMvbWFwcy9LaXRjaGVuVXBwZXIucG5nXCIsXG4gICAgZ2FtZU9iamVjdHM6IHtcbiAgICAgIGhlcm86IG5ldyBHYW1lT2JqZWN0KHtcbiAgICAgICAgeDogMyxcbiAgICAgICAgeTogMSxcbiAgICAgIH0pLFxuICAgICAgbnBjMTogbmV3IEdhbWVPYmplY3Qoe1xuICAgICAgICB4OiA3LFxuICAgICAgICB5OiA4LFxuICAgICAgICBzcmM6IFwiYXNzZXRzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzIucG5nXCJcbiAgICAgIH0pLFxuICAgICAgbnBjMjogbmV3IEdhbWVPYmplY3Qoe1xuICAgICAgICB4OiA0LFxuICAgICAgICB5OiA1LFxuICAgICAgICBzcmM6IFwiYXNzZXRzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzMucG5nXCJcbiAgICAgIH0pXG4gICAgfVxuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBPdmVyd29ybGQgfSBmcm9tICcuL2xpYi9PdmVyd29ybGQnXG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnN0IG92ZXJ3b3JsZCA9IG5ldyBPdmVyd29ybGQoe1xuICAgIGNvbnRhaW5lckVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWNvbnRhaW5lcicpIVxuICB9KVxuXG4gIG92ZXJ3b3JsZC5pbml0KClcbn1cblxubWFpbigpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9