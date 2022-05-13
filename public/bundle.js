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
    step() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.map.drawLowerImage(this.ctx);
        Object
            .values(this.map.gameObjects)
            .forEach((gameObject) => {
            gameObject.sprite.draw(this.ctx);
        });
        this.map.drawUpperImage(this.ctx);
    }
    startGameLoop() {
        requestAnimationFrame(() => {
            this.step();
        });
        this.step();
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
        this.lowerImage.onload = () => {
            ctx.drawImage(this.lowerImage, 0, 0);
        };
    }
    drawUpperImage(ctx) {
        this.upperImage.onload = () => {
            ctx.drawImage(this.upperImage, 0, 0);
        };
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
        this.isCharacterLoaded = false;
        this.isShadowLoaded = false;
        this.character = new Image();
        this.character.src = config.src || '/images/characters/people/hero.png';
        this.character.onload = () => {
            this.isCharacterLoaded = true;
        };
        this.shadow = new Image();
        this.shadow.src = "/images/characters/shadow.png";
        this.shadow.onload = () => {
            this.isShadowLoaded = true;
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
    draw(ctx) {
        const x = this.gameObject.x * 16 - 8;
        const y = this.gameObject.y * 16 - 18;
        this.isShadowLoaded &&
            ctx.drawImage(this.shadow, x, y);
        this.isCharacterLoaded &&
            ctx.drawImage(this.character, 0, 0, 32, 32, x, y, 32, 32);
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
        lowerSrc: "/images/maps/DemoLower.png",
        upperSrc: "/images/maps/DemoUpper.png",
        gameObjects: {
            hero: new _GameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject({
                x: 5,
                y: 6,
            }),
            npc1: new _GameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject({
                x: 7,
                y: 8,
                src: "/images/characters/people/npc1.png"
            })
        }
    },
    Kitchen: {
        lowerSrc: "/images/maps/KitchenLower.png",
        upperSrc: "/images/maps/KitchenUpper.png",
        gameObjects: {
            hero: new _GameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject({
                x: 3,
                y: 1,
            }),
            npc1: new _GameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject({
                x: 7,
                y: 8,
                src: "/images/characters/people/npc2.png"
            }),
            npc2: new _GameObject__WEBPACK_IMPORTED_MODULE_0__.GameObject({
                x: 4,
                y: 5,
                src: "/images/characters/people/npc3.png"
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

(function () {
    const overworld = new _lib_Overworld__WEBPACK_IMPORTED_MODULE_0__.Overworld({
        containerElement: document.querySelector('.game-container')
    });
    overworld.init();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBVSxDQUFDO2dCQUNuQixDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQztnQkFDSixHQUFHLEVBQUUsb0NBQW9DO2FBQzFDLENBQUM7U0FDSDtLQUNGO0NBQ0Y7Ozs7Ozs7VUN0Q0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04yQztBQUUzQyxDQUFDO0lBQ0MsTUFBTSxTQUFTLEdBQUcsSUFBSSxxREFBUyxDQUFDO1FBQzlCLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUU7S0FDN0QsQ0FBQztJQUVGLFNBQVMsQ0FBQyxJQUFJLEVBQUU7QUFDbEIsQ0FBQyxDQUFDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ycGctanMtcGl6emEtbGVnZW5kcy8uL3NyYy9saWIvR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly9ycGctanMtcGl6emEtbGVnZW5kcy8uL3NyYy9saWIvT3ZlcndvcmxkLnRzIiwid2VicGFjazovL3JwZy1qcy1waXp6YS1sZWdlbmRzLy4vc3JjL2xpYi9PdmVyd29ybGRNYXAudHMiLCJ3ZWJwYWNrOi8vcnBnLWpzLXBpenphLWxlZ2VuZHMvLi9zcmMvbGliL1Nwcml0ZS50cyIsIndlYnBhY2s6Ly9ycGctanMtcGl6emEtbGVnZW5kcy8uL3NyYy9saWIvbWFwcy50cyIsIndlYnBhY2s6Ly9ycGctanMtcGl6emEtbGVnZW5kcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ycGctanMtcGl6emEtbGVnZW5kcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcnBnLWpzLXBpenphLWxlZ2VuZHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ycGctanMtcGl6emEtbGVnZW5kcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JwZy1qcy1waXp6YS1sZWdlbmRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vU3ByaXRlJ1xuXG5pbnRlcmZhY2UgR2FtZU9iamVjdFByb3BzIHtcbiAgeDogbnVtYmVyXG4gIHk6IG51bWJlclxuICBzcmM/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNsYXNzIEdhbWVPYmplY3Qge1xuICBwdWJsaWMgeDogbnVtYmVyID0gMFxuICBwdWJsaWMgeTogbnVtYmVyID0gMFxuICBwdWJsaWMgc3ByaXRlOiBTcHJpdGVcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IEdhbWVPYmplY3RQcm9wcykge1xuICAgIHRoaXMueCA9IGNvbmZpZy54XG4gICAgdGhpcy55ID0gY29uZmlnLnlcbiAgICB0aGlzLnNwcml0ZSA9IG5ldyBTcHJpdGUoe1xuICAgICAgZ2FtZU9iamVjdDogdGhpcyxcbiAgICAgIHNyYzogY29uZmlnPy5zcmNcbiAgICB9KVxuICB9XG59IiwiaW1wb3J0IHsgbWFwcyB9IGZyb20gJy4vbWFwcydcbmltcG9ydCB7IE92ZXJ3b3JsZE1hcCB9IGZyb20gJy4vT3ZlcndvcmxkTWFwJ1xuXG5pbnRlcmZhY2UgT3ZlcndvcmxkUHJvcHMge1xuICBjb250YWluZXJFbGVtZW50OiBFbGVtZW50LFxufVxuXG5leHBvcnQgY2xhc3MgT3ZlcndvcmxkIHtcbiAgcHVibGljIGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRcbiAgcHVibGljIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcbiAgcHVibGljIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG4gIHB1YmxpYyBtYXA6IE92ZXJ3b3JsZE1hcCB8IG51bGxcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IE92ZXJ3b3JsZFByb3BzKSB7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50ID0gY29uZmlnLmNvbnRhaW5lckVsZW1lbnRcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuY29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jYW52YXMnKVxuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIHRoaXMubWFwID0gbnVsbFxuICB9XG5cbiAgc3RlcCgpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodClcblxuICAgIHRoaXMubWFwLmRyYXdMb3dlckltYWdlKHRoaXMuY3R4KVxuXG4gICAgT2JqZWN0XG4gICAgICAudmFsdWVzKHRoaXMubWFwLmdhbWVPYmplY3RzKVxuICAgICAgLmZvckVhY2goKGdhbWVPYmplY3QpID0+IHtcbiAgICAgICAgZ2FtZU9iamVjdC5zcHJpdGUuZHJhdyhcbiAgICAgICAgICB0aGlzLmN0eFxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgdGhpcy5tYXAuZHJhd1VwcGVySW1hZ2UodGhpcy5jdHgpXG4gIH1cblxuICBzdGFydEdhbWVMb29wKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLnN0ZXAoKVxuICAgIH0pXG4gICAgdGhpcy5zdGVwKClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5tYXAgPSBuZXcgT3ZlcndvcmxkTWFwKG1hcHMuRGVtb1Jvb20pXG4gICAgdGhpcy5zdGFydEdhbWVMb29wKClcbiAgfVxufSIsImltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XG5cbmludGVyZmFjZSBPdmVyd29ybGRNYXBQcm9wcyB7XG4gIGdhbWVPYmplY3RzOiB7XG4gICAgW2tleTogc3RyaW5nXTogR2FtZU9iamVjdFxuICB9XG4gIGxvd2VyU3JjOiBzdHJpbmdcbiAgdXBwZXJTcmM6IHN0cmluZ1xufVxuXG5leHBvcnQgY2xhc3MgT3ZlcndvcmxkTWFwIHtcbiAgcHVibGljIGdhbWVPYmplY3RzOiB7XG4gICAgW2tleTogc3RyaW5nXTogR2FtZU9iamVjdFxuICB9XG4gIHB1YmxpYyBsb3dlckltYWdlOiBIVE1MSW1hZ2VFbGVtZW50XG4gIHB1YmxpYyB1cHBlckltYWdlOiBIVE1MSW1hZ2VFbGVtZW50XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBPdmVyd29ybGRNYXBQcm9wcykge1xuICAgIHRoaXMuZ2FtZU9iamVjdHMgPSBjb25maWcuZ2FtZU9iamVjdHNcblxuICAgIHRoaXMubG93ZXJJbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgdGhpcy5sb3dlckltYWdlLnNyYyA9IGNvbmZpZy5sb3dlclNyY1xuXG4gICAgdGhpcy51cHBlckltYWdlID0gbmV3IEltYWdlKClcbiAgICB0aGlzLnVwcGVySW1hZ2Uuc3JjID0gY29uZmlnLnVwcGVyU3JjXG4gIH1cblxuICBkcmF3TG93ZXJJbWFnZShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHRoaXMubG93ZXJJbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBjdHguZHJhd0ltYWdlKHRoaXMubG93ZXJJbWFnZSwgMCwgMClcbiAgICB9XG4gIH1cblxuICBkcmF3VXBwZXJJbWFnZShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIHRoaXMudXBwZXJJbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBjdHguZHJhd0ltYWdlKHRoaXMudXBwZXJJbWFnZSwgMCwgMClcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi9HYW1lT2JqZWN0J1xuXG5pbnRlcmZhY2UgU3ByaXRlUHJvcHMge1xuICBzcmM/OiBzdHJpbmdcbiAgYW5pbWF0aW9ucz86IHtcbiAgICBpZGxlRG93bjogYW55XG4gIH1cbiAgY3VycmVudEFuaW1hdGlvbj86IHN0cmluZ1xuICBjdXJyZW50QW5pbWF0aW9uRnJhbWU/OiBudW1iZXJcbiAgZ2FtZU9iamVjdDogR2FtZU9iamVjdFxufVxuXG5leHBvcnQgY2xhc3MgU3ByaXRlIHtcbiAgcHVibGljIGNoYXJhY3RlcjogSFRNTEltYWdlRWxlbWVudFxuICBwdWJsaWMgaXNDaGFyYWN0ZXJMb2FkZWQ6IGJvb2xlYW5cbiAgcHVibGljIHNoYWRvdzogSFRNTEltYWdlRWxlbWVudFxuICBwdWJsaWMgaXNTaGFkb3dMb2FkZWQ6IGJvb2xlYW5cbiAgcHVibGljIHVzZVNoYWRvdzogYm9vbGVhblxuICBwdWJsaWMgYW5pbWF0aW9uOiB7fVxuICBwdWJsaWMgY3VycmVudEFuaW1hdGlvbjogc3RyaW5nXG4gIHB1YmxpYyBjdXJyZW50QW5pbWF0aW9uRnJhbWU6IG51bWJlclxuICBwdWJsaWMgZ2FtZU9iamVjdDogR2FtZU9iamVjdFxuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogU3ByaXRlUHJvcHMpIHtcbiAgICB0aGlzLmlzQ2hhcmFjdGVyTG9hZGVkID0gZmFsc2VcbiAgICB0aGlzLmlzU2hhZG93TG9hZGVkID0gZmFsc2VcblxuICAgIHRoaXMuY2hhcmFjdGVyID0gbmV3IEltYWdlKClcbiAgICB0aGlzLmNoYXJhY3Rlci5zcmMgPSBjb25maWcuc3JjIHx8ICcvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL2hlcm8ucG5nJ1xuICAgIHRoaXMuY2hhcmFjdGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuaXNDaGFyYWN0ZXJMb2FkZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgdGhpcy5zaGFkb3cgPSBuZXcgSW1hZ2UoKVxuICAgIHRoaXMuc2hhZG93LnNyYyA9IFwiL2ltYWdlcy9jaGFyYWN0ZXJzL3NoYWRvdy5wbmdcIlxuICAgIHRoaXMuc2hhZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuaXNTaGFkb3dMb2FkZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgdGhpcy5hbmltYXRpb24gPSBjb25maWcuYW5pbWF0aW9ucyB8fCB7XG4gICAgICBpZGxlRG93bjogW1xuICAgICAgICBbMCwgMF1cbiAgICAgIF1cbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBjb25maWcuY3VycmVudEFuaW1hdGlvbiB8fCBcImlkbGVEb3duXCJcbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb25GcmFtZSA9IDBcblxuICAgIHRoaXMuZ2FtZU9iamVjdCA9IGNvbmZpZy5nYW1lT2JqZWN0XG4gIH1cblxuICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY29uc3QgeCA9IHRoaXMuZ2FtZU9iamVjdC54ICogMTYgLSA4XG4gICAgY29uc3QgeSA9IHRoaXMuZ2FtZU9iamVjdC55ICogMTYgLSAxOFxuXG5cbiAgICB0aGlzLmlzU2hhZG93TG9hZGVkICYmXG4gICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICB0aGlzLnNoYWRvdyxcbiAgICAgICAgeCwgeVxuICAgICAgKVxuXG4gICAgdGhpcy5pc0NoYXJhY3RlckxvYWRlZCAmJlxuICAgICAgY3R4LmRyYXdJbWFnZShcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIsXG4gICAgICAgIDAsIDAsXG4gICAgICAgIDMyLCAzMixcbiAgICAgICAgeCwgeSxcbiAgICAgICAgMzIsIDMyXG4gICAgICApXG4gIH1cblxufSIsImltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XG5cbmV4cG9ydCBjb25zdCBtYXBzID0ge1xuICBEZW1vUm9vbToge1xuICAgIGxvd2VyU3JjOiBcIi9pbWFnZXMvbWFwcy9EZW1vTG93ZXIucG5nXCIsXG4gICAgdXBwZXJTcmM6IFwiL2ltYWdlcy9tYXBzL0RlbW9VcHBlci5wbmdcIixcbiAgICBnYW1lT2JqZWN0czoge1xuICAgICAgaGVybzogbmV3IEdhbWVPYmplY3Qoe1xuICAgICAgICB4OiA1LFxuICAgICAgICB5OiA2LFxuICAgICAgfSksXG4gICAgICBucGMxOiBuZXcgR2FtZU9iamVjdCh7XG4gICAgICAgIHg6IDcsXG4gICAgICAgIHk6IDgsXG4gICAgICAgIHNyYzogXCIvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzEucG5nXCJcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuICBLaXRjaGVuOiB7XG4gICAgbG93ZXJTcmM6IFwiL2ltYWdlcy9tYXBzL0tpdGNoZW5Mb3dlci5wbmdcIixcbiAgICB1cHBlclNyYzogXCIvaW1hZ2VzL21hcHMvS2l0Y2hlblVwcGVyLnBuZ1wiLFxuICAgIGdhbWVPYmplY3RzOiB7XG4gICAgICBoZXJvOiBuZXcgR2FtZU9iamVjdCh7XG4gICAgICAgIHg6IDMsXG4gICAgICAgIHk6IDEsXG4gICAgICB9KSxcbiAgICAgIG5wYzE6IG5ldyBHYW1lT2JqZWN0KHtcbiAgICAgICAgeDogNyxcbiAgICAgICAgeTogOCxcbiAgICAgICAgc3JjOiBcIi9pbWFnZXMvY2hhcmFjdGVycy9wZW9wbGUvbnBjMi5wbmdcIlxuICAgICAgfSksXG4gICAgICBucGMyOiBuZXcgR2FtZU9iamVjdCh7XG4gICAgICAgIHg6IDQsXG4gICAgICAgIHk6IDUsXG4gICAgICAgIHNyYzogXCIvaW1hZ2VzL2NoYXJhY3RlcnMvcGVvcGxlL25wYzMucG5nXCJcbiAgICAgIH0pXG4gICAgfVxuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBPdmVyd29ybGQgfSBmcm9tICcuL2xpYi9PdmVyd29ybGQnXG5cbihmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG92ZXJ3b3JsZCA9IG5ldyBPdmVyd29ybGQoe1xuICAgIGNvbnRhaW5lckVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWNvbnRhaW5lcicpIVxuICB9KVxuXG4gIG92ZXJ3b3JsZC5pbml0KClcbn0pKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=