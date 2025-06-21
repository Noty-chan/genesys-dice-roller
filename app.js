/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/genesys-dice-roller/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_model_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/model/settings */ "./src/model/settings.ts");
/* harmony import */ var src_view_main_app_area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/view/main-app-area */ "./src/view/main-app-area.tsx");
/* harmony import */ var src_view_nav_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/view/nav-button */ "./src/view/nav-button.tsx");
/* harmony import */ var src_view_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/view/menu */ "./src/view/menu.tsx");






class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.state = { menuOpen: false };
        this.switchTheme = this.switchTheme.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu(open) {
        this.setState({ menuOpen: open });
    }
    switchTheme() {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(this.props.themeSettings.getClass());
    }
    componentDidMount() {
        this.props.themeSettings.on(this.switchTheme);
        this.switchTheme();
    }
    componentWillUnmount() {
        this.props.themeSettings.off(this.switchTheme);
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_view_nav_button__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], { toggleCallback: this.toggleMenu }),
            this.state.menuOpen && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_view_menu__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], { toggleCallback: this.toggleMenu }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", { onClick: () => this.props.themeSettings.toggle() },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "logo" }, "Genesys"),
                " Dice Roller"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_view_main_app_area__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null));
    }
}
// Remove fallback no-JS content and remove the class from the <body> tag
document.body.classList.remove("no-js");
react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](App, { themeSettings: src_model_settings__WEBPACK_IMPORTED_MODULE_2__[/* Theme */ "a"] }), document.getElementById("app"));


/***/ }),

/***/ "./src/model/dice.ts":
/*!***************************!*\
  !*** ./src/model/dice.ts ***!
  \***************************/
/*! exports provided: Die, GenesysDie, AbilityDie, ProficiencyDie, BoostDie, DifficultyDie, ChallengeDie, SetbackDie, PercentileDie */
/*! exports used: AbilityDie, BoostDie, ChallengeDie, DifficultyDie, PercentileDie, ProficiencyDie, SetbackDie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Die */
/* unused harmony export GenesysDie */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbilityDie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ProficiencyDie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BoostDie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DifficultyDie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ChallengeDie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SetbackDie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PercentileDie; });
/**
 * Base class for models representing all dice used in the app.
 * Shouldn't be used on its own, but creates base for all other dice.
 */
class Die {
    constructor() {
        /**
         * Indicates what the result of the last roll was.
         * If null, the die has not been rolled yet, else it's
         * the contents of the resulting side.
         */
        this.currentResult = null;
        /**
         * Property that counts the number of times this die
         * has been rolled. It's used primarily in rendering, to determine
         * when the die has changed state by being rolled, as opposed to
         * being selected, or moved in the list.
         * Increases by one on every invocation of `.roll()`.
         */
        this.rollCount = 0;
    }
}
/**
 * Base class for models representing all the Genesys dice.
 * Primary set of dice in the system, excluding the percentile die
 * used in some combat situations.
 */
class GenesysDie extends Die {
    /**
     * Rolls the die, selecting random result from the possible ones,
     * assigns it to current result and returns it.
     */
    roll() {
        this.rollCount++;
        this.currentResult = this.possibleResults[Math.floor(Math.random() * this.possibleResults.length)];
        return this.currentResult;
    }
}
/**
 * Model for the base positive die, the green eight-sided one.
 */
class AbilityDie extends GenesysDie {
    constructor() {
        super(...arguments);
        this.possibleResults = [
            [],
            ["s" /* Symbols.SUCCESS */],
            ["s" /* Symbols.SUCCESS */],
            ["s" /* Symbols.SUCCESS */, "s" /* Symbols.SUCCESS */],
            ["a" /* Symbols.ADVANTAGE */],
            ["a" /* Symbols.ADVANTAGE */],
            ["s" /* Symbols.SUCCESS */, "a" /* Symbols.ADVANTAGE */],
            ["a" /* Symbols.ADVANTAGE */, "a" /* Symbols.ADVANTAGE */]
        ];
    }
}
/**
 * Model for the upgraded positive die, the yellow twelve-sided one.
 */
class ProficiencyDie extends GenesysDie {
    constructor() {
        super(...arguments);
        this.possibleResults = [
            [],
            ["s" /* Symbols.SUCCESS */],
            ["s" /* Symbols.SUCCESS */],
            ["s" /* Symbols.SUCCESS */, "s" /* Symbols.SUCCESS */],
            ["s" /* Symbols.SUCCESS */, "s" /* Symbols.SUCCESS */],
            ["a" /* Symbols.ADVANTAGE */],
            ["s" /* Symbols.SUCCESS */, "a" /* Symbols.ADVANTAGE */],
            ["s" /* Symbols.SUCCESS */, "a" /* Symbols.ADVANTAGE */],
            ["s" /* Symbols.SUCCESS */, "a" /* Symbols.ADVANTAGE */],
            ["a" /* Symbols.ADVANTAGE */, "a" /* Symbols.ADVANTAGE */],
            ["a" /* Symbols.ADVANTAGE */, "a" /* Symbols.ADVANTAGE */],
            ["t" /* Symbols.TRIUMPH */]
        ];
    }
}
/**
 * Model for the circumstantial positive die, the blue six-sided one.
 */
class BoostDie extends GenesysDie {
    constructor() {
        super(...arguments);
        this.possibleResults = [
            [],
            [],
            ["s" /* Symbols.SUCCESS */],
            ["s" /* Symbols.SUCCESS */, "a" /* Symbols.ADVANTAGE */],
            ["a" /* Symbols.ADVANTAGE */, "a" /* Symbols.ADVANTAGE */],
            ["a" /* Symbols.ADVANTAGE */]
        ];
    }
}
/**
 * Model for the base negative die, the purple eight-sided one.
 */
class DifficultyDie extends GenesysDie {
    constructor() {
        super(...arguments);
        this.possibleResults = [
            [],
            ["f" /* Symbols.FAILURE */],
            ["f" /* Symbols.FAILURE */, "f" /* Symbols.FAILURE */],
            ["h" /* Symbols.THREAT */],
            ["h" /* Symbols.THREAT */],
            ["h" /* Symbols.THREAT */],
            ["h" /* Symbols.THREAT */, "h" /* Symbols.THREAT */],
            ["f" /* Symbols.FAILURE */, "h" /* Symbols.THREAT */]
        ];
    }
}
/**
 * Model for the upgraded negative die, the red twelve-sided one.
 */
class ChallengeDie extends GenesysDie {
    constructor() {
        super(...arguments);
        this.possibleResults = [
            [],
            ["f" /* Symbols.FAILURE */],
            ["f" /* Symbols.FAILURE */],
            ["f" /* Symbols.FAILURE */, "f" /* Symbols.FAILURE */],
            ["f" /* Symbols.FAILURE */, "f" /* Symbols.FAILURE */],
            ["h" /* Symbols.THREAT */],
            ["h" /* Symbols.THREAT */],
            ["f" /* Symbols.FAILURE */, "h" /* Symbols.THREAT */],
            ["f" /* Symbols.FAILURE */, "h" /* Symbols.THREAT */],
            ["h" /* Symbols.THREAT */, "h" /* Symbols.THREAT */],
            ["h" /* Symbols.THREAT */, "h" /* Symbols.THREAT */],
            ["d" /* Symbols.DESPAIR */]
        ];
    }
}
/**
 * Model for the circumstantial negative die, the black six-sided one.
 */
class SetbackDie extends GenesysDie {
    constructor() {
        super(...arguments);
        this.possibleResults = [
            [],
            [],
            ["f" /* Symbols.FAILURE */],
            ["f" /* Symbols.FAILURE */],
            ["h" /* Symbols.THREAT */],
            ["h" /* Symbols.THREAT */]
        ];
    }
}
/**
 * Model for the percentile die, used to generate numerical result
 * between 1 and 100. Used to establish critical results in combat.
 */
class PercentileDie extends Die {
    roll() {
        this.rollCount++;
        this.currentResult = Math.ceil(Math.random() * 100);
        return this.currentResult;
    }
}


/***/ }),

/***/ "./src/model/settings.ts":
/*!*******************************!*\
  !*** ./src/model/settings.ts ***!
  \*******************************/
/*! exports provided: Settings, Theme, Webhook, Username */
/*! exports used: Theme, Username, Webhook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Settings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Webhook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Username; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/.pnpm/redux@4.2.1/node_modules/redux/es/redux.js");

class Settings {
    constructor(name, initialValue) {
        this.subscriptions = new Map();
        const savedValue = window.localStorage.getItem(name);
        if (savedValue) {
            initialValue = JSON.parse(savedValue).value;
        }
        this.name = name;
        this.store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[/* createStore */ "a"])(this.reducer.bind(this), { value: initialValue });
    }
    reducer(state, action) {
        if (action.type === "CHANGE" && action.value !== state.value) {
            const result = { value: action.value };
            window.localStorage.setItem(this.name, JSON.stringify(result));
            return result;
        }
        return state;
    }
    on(callback) {
        const handler = () => callback(this.get());
        this.subscriptions.set(callback, this.store.subscribe(handler));
    }
    off(callback) {
        const unsubscribe = this.subscriptions.get(callback);
        if (unsubscribe) {
            unsubscribe();
        }
    }
    get() {
        return this.store.getState().value;
    }
    set(value) {
        this.store.dispatch({ type: "CHANGE", value });
    }
}
const themeOptionList = ["light", "dark", null];
class ThemeSettings extends Settings {
    constructor() {
        super("theme", null);
    }
    getClass() {
        const selectedTheme = this.get();
        if (selectedTheme) {
            return selectedTheme;
        }
        else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            return "light";
        }
        else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }
        return "light";
    }
    toggle() {
        const newThemeIndex = (themeOptionList.indexOf(this.get()) + 1) % themeOptionList.length;
        this.set(themeOptionList[newThemeIndex]);
    }
}
const Theme = new ThemeSettings();
const Webhook = new Settings("webhook", null);
const Username = new Settings("username", "");


/***/ }),

/***/ "./src/util/adjudicate.ts":
/*!********************************!*\
  !*** ./src/util/adjudicate.ts ***!
  \********************************/
/*! exports provided: removeOpposingSymbols, adjudicateRoll */
/*! exports used: adjudicateRoll, removeOpposingSymbols */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeOpposingSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adjudicateRoll; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/countBy.js");

/**
 * Method used to resolve part of the roll where successes and failures /
 * advantages and threats cancel each other out. Given list of symbols,
 * cancels them out and returns the list with only the remaining symbols.
 *
 * @param symbols  List of symbols rolled
 * @returns        List with symbols remaining after cancelling results out
 */
function removeOpposingSymbols(symbols) {
    // Make the first pass by counting all the symbols
    const remove = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(symbols);
    // Delete counts for triumphs and despairs, as these never cancel each other out
    delete remove["t" /* Symbols.TRIUMPH */];
    delete remove["d" /* Symbols.DESPAIR */];
    // Use the counts and mark the smaller number of symbols for removal
    remove["s" /* Symbols.SUCCESS */] = remove["f" /* Symbols.FAILURE */] = Math.min(remove["s" /* Symbols.SUCCESS */], remove["f" /* Symbols.FAILURE */]);
    remove["a" /* Symbols.ADVANTAGE */] = remove["h" /* Symbols.THREAT */] = Math.min(remove["a" /* Symbols.ADVANTAGE */], remove["h" /* Symbols.THREAT */]);
    const remainingSymbols = [];
    symbols.forEach(item => {
        if (remove[item]) {
            remove[item]--;
        }
        else {
            remainingSymbols.push(item);
        }
    });
    return remainingSymbols;
}
/**
 * Resolves the roll; given the list of results rolled, counts them up,
 * and returns whether the roll was successful or failed.
 *
 * @param symbols  Lisf of symbols rolled
 * @results        Whether the roll was successful or failed
 */
function adjudicateRoll(symbols) {
    const counts = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(symbols), countSuccess = (counts["t" /* Symbols.TRIUMPH */] || 0) + (counts["s" /* Symbols.SUCCESS */] || 0), countFailure = (counts["d" /* Symbols.DESPAIR */] || 0) + (counts["f" /* Symbols.FAILURE */] || 0);
    console.warn("COUNT: ", counts);
    return (countSuccess - countFailure > 0) ? "success" /* Result.SUCCESS */ : "failure" /* Result.FAILURE */;
}


/***/ }),

/***/ "./src/util/order.ts":
/*!***************************!*\
  !*** ./src/util/order.ts ***!
  \***************************/
/*! exports provided: orderSymbols, orderDice */
/*! exports used: orderDice, orderSymbols */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return orderSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orderDice; });
/* harmony import */ var src_model_dice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/model/dice */ "./src/model/dice.ts");

/**
 * Order required of the symbols on the dice.
 * Going positive first, negative second, and from most to least powerful.
 */
const SYMBOL_ORDERING = Object.freeze({
    ["t" /* Symbols.TRIUMPH */]: 0,
    ["s" /* Symbols.SUCCESS */]: 1,
    ["a" /* Symbols.ADVANTAGE */]: 2,
    ["d" /* Symbols.DESPAIR */]: 3,
    ["f" /* Symbols.FAILURE */]: 4,
    ["h" /* Symbols.THREAT */]: 5
});
/**
 * Utility function to help with ordering the results, first by grouping positive dice first,
 * negative second, then by ordering each group from most powerful to least powerful.
 * Intended to be used as compare function for Array.sort.
 */
function orderSymbols(a, b) {
    return SYMBOL_ORDERING[a] - SYMBOL_ORDERING[b];
}
/**
 * Order required of the dice themselves.
 * Done as function rather than map because there's no easy way to use class of instance
 * as value in TypeScript. Goes positive first, negative second, most to least powerful,
 * and percentile die goes at the end.
 */
function getValueForDie(die) {
    if (die instanceof src_model_dice__WEBPACK_IMPORTED_MODULE_0__[/* ProficiencyDie */ "f"]) {
        return 0;
    }
    else if (die instanceof src_model_dice__WEBPACK_IMPORTED_MODULE_0__[/* AbilityDie */ "a"]) {
        return 1;
    }
    else if (die instanceof src_model_dice__WEBPACK_IMPORTED_MODULE_0__[/* BoostDie */ "b"]) {
        return 2;
    }
    else if (die instanceof src_model_dice__WEBPACK_IMPORTED_MODULE_0__[/* ChallengeDie */ "c"]) {
        return 3;
    }
    else if (die instanceof src_model_dice__WEBPACK_IMPORTED_MODULE_0__[/* DifficultyDie */ "d"]) {
        return 4;
    }
    else if (die instanceof src_model_dice__WEBPACK_IMPORTED_MODULE_0__[/* SetbackDie */ "g"]) {
        return 5;
    }
    return 6;
}
/**
 * Utility function to help with ordering the dice themselves, first by grouping positive dice first,
 * negative second, then by ordering each group from most powerful to least powerful.
 * Intended to be used as compare function for Array.sort.
 */
function orderDice(a, b) {
    return getValueForDie(a) - getValueForDie(b);
}


/***/ }),

/***/ "./src/view/dice-controls.tsx":
/*!************************************!*\
  !*** ./src/view/dice-controls.tsx ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiceControls; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/startCase.js");
/* harmony import */ var src_model_dice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/model/dice */ "./src/model/dice.ts");
/* harmony import */ var src_view_display_dice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/view/display/dice */ "./src/view/display/dice.tsx");




const diceToCreate = [
    { cls: src_model_dice__WEBPACK_IMPORTED_MODULE_2__[/* AbilityDie */ "a"], result: ["s" /* Symbols.SUCCESS */] },
    { cls: src_model_dice__WEBPACK_IMPORTED_MODULE_2__[/* ProficiencyDie */ "f"], result: ["t" /* Symbols.TRIUMPH */] },
    { cls: src_model_dice__WEBPACK_IMPORTED_MODULE_2__[/* BoostDie */ "b"], result: ["a" /* Symbols.ADVANTAGE */] },
    { cls: src_model_dice__WEBPACK_IMPORTED_MODULE_2__[/* DifficultyDie */ "d"], result: ["f" /* Symbols.FAILURE */] },
    { cls: src_model_dice__WEBPACK_IMPORTED_MODULE_2__[/* ChallengeDie */ "c"], result: ["d" /* Symbols.DESPAIR */] },
    { cls: src_model_dice__WEBPACK_IMPORTED_MODULE_2__[/* SetbackDie */ "g"], result: ["h" /* Symbols.THREAT */] },
    { cls: src_model_dice__WEBPACK_IMPORTED_MODULE_2__[/* PercentileDie */ "e"], result: 42 }
];
/**
 * This component draws the collection of buttons that can be used to add new dice to the dice pool.
 * Once rendered, it doesn't really change, so it extends PureComponent rather than Component.
 */
class DiceControls extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    /**
     * Iterates over the list of all the dice we handle in the dice roller,
     * along with default result to show (so that the dice are easily identifiable),
     * and renders each of those in a button that adds a new die of that type whenever it's clicked.
     */
    render() {
        const additionButtons = diceToCreate.map(({ cls, result }, i) => {
            const dieName = Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(cls.name).split(" ")[0].toLowerCase();
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", id: `add-${dieName}`, key: i, onClick: () => this.props.callback(new cls()) },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_view_display_dice__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], { die: Object.assign(new cls(), { currentResult: result }) }));
        });
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dice-controls" }, additionButtons);
    }
}


/***/ }),

/***/ "./src/view/dice-list.tsx":
/*!********************************!*\
  !*** ./src/view/dice-list.tsx ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiceList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_view_display_dice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/view/display/dice */ "./src/view/display/dice.tsx");


/**
 * This component is used in main app area to draw the list of all the dice to the pool.
 */
class DiceList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
        const diceList = this.props.dice.map(die => {
            const click = this.props.selectCallback ?
                () => this.props.selectCallback(die) :
                void 0;
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_view_display_dice__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], { die: die, selected: this.props.selected.includes(die), rollCount: die.rollCount, onClick: click });
        });
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dice-list" }, diceList);
    }
}


/***/ }),

/***/ "./src/view/display/dice.tsx":
/*!***********************************!*\
  !*** ./src/view/display/dice.tsx ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiceDisplay; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/startCase.js");
/* harmony import */ var src_view_display_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/view/display/symbol */ "./src/view/display/symbol.tsx");



/**
 * Converts result of the die roll (or the lack of thereof) into something
 * human-readable; pending mark for no rolls, symbols for regular Genesys dice,
 * and the number for percentile die.
 */
function convertDieResult(result) {
    if (result === null) {
        return [react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "?")];
    }
    else if (typeof result === "number") {
        return [react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, result + "")];
    }
    return result.map((s, i) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_view_display_symbol__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], { symbol: s, key: i }));
}
/**
 * This component is used to render the dice images in the main area of the app.
 * Given the die model instance, converts the roll result into something human-readable,
 * and draws it in an element styled to look like a die of relevant shape and colour.
 */
class DiceDisplay extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor() {
        super(...arguments);
        this.dieReference = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
    }
    render() {
        let className = Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this.props.die.constructor.name).toLowerCase();
        if (this.props.selected) {
            className += " selected";
        }
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { ref: this.dieReference, className: className, onClick: this.props.onClick }, convertDieResult(this.props.die.currentResult));
    }
    shouldComponentUpdate(nextProps) {
        return (this.props.die !== nextProps.die ||
            this.props.selected !== nextProps.selected ||
            this.props.rollCount !== nextProps.rollCount);
    }
    componentDidUpdate(prevProps) {
        // We only apply the shake animation when there's no preference for reduced motion,
        // and when there's actual result on the dice ('cause that means there's something to roll).
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
            this.props.rollCount !== prevProps.rollCount) {
            const dieElement = this.dieReference.current;
            dieElement.addEventListener("animationend", this, false);
            // If the die is still in the process of playing shake animation,
            // restart it by removing the class and toggling reflow with bounding rect;
            if (dieElement.classList.contains("shake")) {
                dieElement.classList.remove("shake");
                dieElement.getBoundingClientRect();
            }
            dieElement.classList.add("shake");
        }
    }
    handleEvent(event) {
        if (event.type === "animationend") {
            const dieElement = this.dieReference.current;
            dieElement.removeEventListener("animationend", this, false);
            dieElement.classList.remove("shake");
        }
    }
}


/***/ }),

/***/ "./src/view/display/symbol.tsx":
/*!*************************************!*\
  !*** ./src/view/display/symbol.tsx ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js");


/** Render Genesys dice symbols using the dedicated font. */
const SymbolDisplay = ({ symbol }) => {
    const list = Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(symbol) ? symbol : [symbol];
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "dice-symbol" }, list.join(""));
};
/* harmony default export */ __webpack_exports__["a"] = (SymbolDisplay);


/***/ }),

/***/ "./src/view/main-app-area.tsx":
/*!************************************!*\
  !*** ./src/view/main-app-area.tsx ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainAppArea; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/difference.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ "./node_modules/.pnpm/html2canvas@1.4.1/node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_model_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/model/settings */ "./src/model/settings.ts");
/* harmony import */ var src_util_adjudicate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/util/adjudicate */ "./src/util/adjudicate.ts");
/* harmony import */ var src_util_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/util/order */ "./src/util/order.ts");
/* harmony import */ var src_view_dice_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/view/dice-controls */ "./src/view/dice-controls.tsx");
/* harmony import */ var src_view_dice_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/view/dice-list */ "./src/view/dice-list.tsx");
/* harmony import */ var src_view_roll_results__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/view/roll-results */ "./src/view/roll-results.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










const diceTypes = Object.freeze(["ability", "proficiency", "boost", "difficulty", "challenge", "setback"]);
class MainAppArea extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.resultsRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
        this.state = { dice: [], selected: [], results: [] };
        this.addDie = this.addDie.bind(this);
        this.clearDice = this.clearDice.bind(this);
        this.toggleSelection = this.toggleSelection.bind(this);
        this.roll = this.roll.bind(this);
        this.sendToDiscord = this.sendToDiscord.bind(this);
    }
    addDie(newDie) {
        const { dice } = this.state;
        this.setState(Object.assign(Object.assign({}, this.state), { dice: dice.concat([newDie]).sort(src_util_order__WEBPACK_IMPORTED_MODULE_5__[/* orderDice */ "a"]) }));
    }
    clearDice() {
        const { dice, selected } = this.state;
        if (selected.length) {
            const remainingDice = Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(dice, selected);
            this.setState({
                dice: remainingDice,
                selected: [],
                results: remainingDice.map(die => die.currentResult)
            });
        }
        else {
            this.setState({ dice: [], selected: [], results: [] });
        }
    }
    toggleSelection(toggledDie) {
        const { selected } = this.state;
        if (selected.includes(toggledDie)) {
            this.setState(Object.assign(Object.assign({}, this.state), { selected: selected.filter(die => die !== toggledDie) }));
        }
        else {
            this.setState(Object.assign(Object.assign({}, this.state), { selected: selected.concat([toggledDie]) }));
        }
    }
    roll() {
        const { dice, selected } = this.state;
        if (selected.length) {
            selected.forEach(die => die.roll());
            this.setState({
                dice,
                selected: [],
                results: dice.map(die => die.currentResult)
            });
        }
        else {
            this.setState(Object.assign(Object.assign({}, this.state), { results: this.state.dice.map(die => die.roll()) }));
        }
    }
    sendToDiscord() {
        return __awaiter(this, void 0, void 0, function* () {
            const webhook = src_model_settings__WEBPACK_IMPORTED_MODULE_3__[/* Webhook */ "c"].get();
            if (!webhook || !this.resultsRef.current) {
                return;
            }
            const canvas = yield html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(this.resultsRef.current);
            const blob = yield new Promise(resolve => canvas.toBlob((b) => resolve(b), "image/png"));
            const form = new FormData();
            form.append("file", blob, "roll.png");
            form.append("username", src_model_settings__WEBPACK_IMPORTED_MODULE_3__[/* Username */ "b"].get() || "Genesys Roller");
            form.append("content", this.summariseResults());
            fetch(webhook, { method: "POST", body: form });
        });
    }
    summariseResults() {
        const symbols = [];
        const numbers = [];
        this.state.results.forEach(r => {
            if (Array.isArray(r)) {
                symbols.push(...r);
            }
            else if (typeof r === "number") {
                numbers.push(r);
            }
        });
        const flat = Object(src_util_adjudicate__WEBPACK_IMPORTED_MODULE_4__[/* removeOpposingSymbols */ "b"])(symbols).sort(src_util_order__WEBPACK_IMPORTED_MODULE_5__[/* orderSymbols */ "b"]);
        const result = Object(src_util_adjudicate__WEBPACK_IMPORTED_MODULE_4__[/* adjudicateRoll */ "a"])(flat);
        const counts = new Map();
        flat.forEach(s => counts.set(s, (counts.get(s) || 0) + 1));
        const names = {
            ["s" /* Symbols.SUCCESS */]: "успех",
            ["f" /* Symbols.FAILURE */]: "неудача",
            ["a" /* Symbols.ADVANTAGE */]: "преимущество",
            ["h" /* Symbols.THREAT */]: "угроза",
            ["t" /* Symbols.TRIUMPH */]: "триумф",
            ["d" /* Symbols.DESPAIR */]: "отчаяние",
        };
        let text = result === "success" /* Result.SUCCESS */ ? "Итог: успех" : result === "failure" /* Result.FAILURE */ ? "Итог: провал" : "Итог:";
        text += "\n" + Array.from(counts.entries()).map(([sym, count]) => `${names[sym]}: ${count}`).join("\n");
        if (numbers.length)
            text += "\nЧисла: " + numbers.join(", ");
        return text;
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "dice-area" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_view_dice_controls__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], { callback: this.addDie }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_view_dice_list__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], { dice: this.state.dice, selected: this.state.selected, selectCallback: this.toggleSelection }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "actions" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { id: "roll", onClick: this.roll }, this.state.selected.length ? "Re-roll Selected" : "Roll"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { id: "clear", onClick: this.clearDice }, this.state.selected.length ? "Remove Selected" : "Clear"),
                src_model_settings__WEBPACK_IMPORTED_MODULE_3__[/* Webhook */ "c"].get() && this.state.results.length > 0 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { id: "discord", onClick: this.sendToDiscord }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432 Discord")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { ref: this.resultsRef },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_view_roll_results__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], { results: this.state.results })));
    }
}


/***/ }),

/***/ "./src/view/menu.tsx":
/*!***************************!*\
  !*** ./src/view/menu.tsx ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Menu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_model_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/model/settings */ "./src/model/settings.ts");


class Menu extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = { webhook: src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Webhook */ "c"].get() || "", username: src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Username */ "b"].get() || "", theme: src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].get() || "" };
        this.handleWebhook = (e) => {
            const webhook = e.target.value;
            this.setState({ webhook });
            src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Webhook */ "c"].set(webhook || null);
        };
        this.handleUsername = (e) => {
            const username = e.target.value;
            this.setState({ username });
            src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Username */ "b"].set(username);
        };
        this.handleTheme = (e) => {
            const theme = e.target.value;
            this.setState({ theme });
            src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "a"].set(theme || null);
        };
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "menu" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                "Webhook URL",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "url", value: this.state.webhook, onChange: this.handleWebhook })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                "\u0418\u043C\u044F",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "text", value: this.state.username, onChange: this.handleUsername })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                "\u0422\u0435\u043C\u0430",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { value: this.state.theme, onChange: this.handleTheme },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: "" }, "\u0421\u0438\u0441\u0442\u0435\u043C\u043D\u0430\u044F"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: "light" }, "\u0421\u0432\u0435\u0442\u043B\u0430\u044F"),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: "dark" }, "\u0422\u0451\u043C\u043D\u0430\u044F"))),
            this.props.toggleCallback && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { onClick: () => this.props.toggleCallback(false) }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"));
    }
}


/***/ }),

/***/ "./src/view/nav-button.tsx":
/*!*********************************!*\
  !*** ./src/view/nav-button.tsx ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Component used to indicate the controls for bringing up the menu pane.
 * Handles user clicks, animating appropriately when the menu is opened, changing two lines
 * of the burger into a cross, and hiding the third one, or reverting when the menu pane is hidden.
 */
class NavButton extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor(props) {
        super(props);
        this.state = { expanded: false };
        this.handleClick = this.handleClick.bind(this);
    }
    /**
     * Handler for user interaction of clicking on the nav button;
     * it toggles the expanded state, and if callback has been provided
     * for the component, runs it with new expansion state.
     */
    handleClick() {
        const newState = !this.state.expanded;
        this.setState({ expanded: newState });
        if (this.props.toggleCallback) {
            this.props.toggleCallback(newState);
        }
    }
    /**
     * Component renderer, creates base SVG element with three horizontal lines within.
     */
    render() {
        const lines = [2, 5, 8].map(y => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", { x1: "1.5", y1: y, x2: "8.5", y2: y }));
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 10 10", className: `nav-button ${this.state.expanded ? "expanded" : ""}`, style: { strokeWidth: 1.5, strokeLinecap: "round" }, onClick: this.handleClick }, lines);
    }
}


/***/ }),

/***/ "./src/view/roll-results.tsx":
/*!***********************************!*\
  !*** ./src/view/roll-results.tsx ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es */ "./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatten.js");
/* harmony import */ var src_view_display_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/view/display/symbol */ "./src/view/display/symbol.tsx");
/* harmony import */ var src_util_adjudicate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/util/adjudicate */ "./src/util/adjudicate.ts");
/* harmony import */ var src_util_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/util/order */ "./src/util/order.ts");





const RollResults = ({ results }) => {
    let status = "neutral" /* Result.NEUTRAL */;
    const resultsSymbols = [], resultsNumbers = [], elements = [];
    results.forEach(result => {
        if (typeof result === "number") {
            resultsNumbers.push(result);
        }
        else if (Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(result)) {
            resultsSymbols.push(result);
        }
    });
    // If there are any symbols, let's flatten the results and
    // eliminate the opposing ones for display; also adjudicate
    // the roll results.
    if (resultsSymbols.length) {
        const flatRoll = Object(src_util_adjudicate__WEBPACK_IMPORTED_MODULE_4__[/* removeOpposingSymbols */ "b"])(Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(resultsSymbols)).sort(src_util_order__WEBPACK_IMPORTED_MODULE_5__[/* orderSymbols */ "b"]);
        status = Object(src_util_adjudicate__WEBPACK_IMPORTED_MODULE_4__[/* adjudicateRoll */ "a"])(flatRoll);
        if (flatRoll.length) {
            elements.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: `group symbolic ${flatRoll.length > 8 ? "large" : ""}` }, flatRoll.map(s => react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_view_display_symbol__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], { symbol: s }))));
        }
    }
    elements.push(...resultsNumbers.map(score => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "group numeric" }, score)));
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: `roll-results ${status}` }, elements);
};
/* harmony default export */ __webpack_exports__["a"] = (RollResults);


/***/ }),

/***/ "./styles/main.less":
/*!**************************!*\
  !*** ./styles/main.less ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi ./styles/main.less ./src/index.tsx ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./styles/main.less */"./styles/main.less");
module.exports = __webpack_require__(/*! ./src/index.tsx */"./src/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/*! exports used: Component, Fragment, PureComponent, createElement, createRef */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/*! exports used: render */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvZGljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvYWRqdWRpY2F0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9vcmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9kaWNlLWNvbnRyb2xzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9kaWNlLWxpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L2Rpc3BsYXkvZGljZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZGlzcGxheS9zeW1ib2wudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L21haW4tYXBwLWFyZWEudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L21lbnUudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L25hdi1idXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L3JvbGwtcmVzdWx0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL21haW4ubGVzcz85MjJkIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7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LEVBQUUsSUFBRyxRQUFRLENBQU8sQ0FBQztBQUN0RSxDQUFDLENBQUM7QUFDYSxvRUFBVyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDdkMzQix1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSx1Qjs7Ozs7Ozs7Ozs7O0FDQUEsMEIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9nZW5lc3lzLWRpY2Utcm9sbGVyL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCJzcmMvbW9kZWwvc2V0dGluZ3NcIjtcbmltcG9ydCBNYWluQXBwQXJlYSBmcm9tIFwic3JjL3ZpZXcvbWFpbi1hcHAtYXJlYVwiO1xuaW1wb3J0IE5hdkJ1dHRvbiBmcm9tIFwic3JjL3ZpZXcvbmF2LWJ1dHRvblwiO1xuaW1wb3J0IE1lbnUgZnJvbSBcInNyYy92aWV3L21lbnVcIjtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHsgdGhlbWVTZXR0aW5nczogdHlwZW9mIFRoZW1lIH0sIHsgbWVudU9wZW46IGJvb2xlYW4gfT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IHsgdGhlbWVTZXR0aW5nczogdHlwZW9mIFRoZW1lIH0pIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBtZW51T3BlbjogZmFsc2UgfTtcbiAgICAgICAgdGhpcy5zd2l0Y2hUaGVtZSA9IHRoaXMuc3dpdGNoVGhlbWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b2dnbGVNZW51ID0gdGhpcy50b2dnbGVNZW51LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudShvcGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZW51T3Blbjogb3BlbiB9KTtcbiAgICB9XG5cbiAgICBzd2l0Y2hUaGVtZSgpOiB2b2lkIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibGlnaHRcIiwgXCJkYXJrXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQodGhpcy5wcm9wcy50aGVtZVNldHRpbmdzLmdldENsYXNzKCkpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLnRoZW1lU2V0dGluZ3Mub24odGhpcy5zd2l0Y2hUaGVtZSk7XG4gICAgICAgIHRoaXMuc3dpdGNoVGhlbWUoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy50aGVtZVNldHRpbmdzLm9mZih0aGlzLnN3aXRjaFRoZW1lKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8TmF2QnV0dG9uIHRvZ2dsZUNhbGxiYWNrPXt0aGlzLnRvZ2dsZU1lbnV9Lz5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lbnVPcGVuICYmIDxNZW51IHRvZ2dsZUNhbGxiYWNrPXt0aGlzLnRvZ2dsZU1lbnV9Lz59IFxuICAgICAgICAgICAgPGgxIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMudGhlbWVTZXR0aW5ncy50b2dnbGUoKX0+PHNwYW4gY2xhc3NOYW1lPVwibG9nb1wiPkdlbmVzeXM8L3NwYW4+IERpY2UgUm9sbGVyPC9oMT5cbiAgICAgICAgICAgIDxNYWluQXBwQXJlYS8+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+O1xuICAgIH1cbn1cblxuLy8gUmVtb3ZlIGZhbGxiYWNrIG5vLUpTIGNvbnRlbnQgYW5kIHJlbW92ZSB0aGUgY2xhc3MgZnJvbSB0aGUgPGJvZHk+IHRhZ1xuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tanNcIik7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIHRoZW1lU2V0dGluZ3M9e1RoZW1lfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikhKTtcbiIsImltcG9ydCBTeW1ib2xzIGZyb20gXCJzcmMvbW9kZWwvc3ltYm9sc1wiO1xuXG4vKiogVHlwZSB1c2VkIHRvIGRlc2NyaWJlIGFsbCB0aGUgZGljZSBjdXJyZW50bHkgaGFuZGxlZCBieSB0aGUgYXBwLiAqL1xuZXhwb3J0IHR5cGUgQWxsb3dlZERpY2UgPSBHZW5lc3lzRGllIHwgUGVyY2VudGlsZURpZTtcbi8qKiBUeXBlIHVzZWQgdG8gZGVzY3JpYmUgYWxsIHRoZSBkaWNlIHJlc3VsdHMgY3VycmVudGx5IGhhbmRsZWQgYnkgdGhlIGFwcC4gKi9cbmV4cG9ydCB0eXBlIEFsbG93ZWRSZXN1bHRzID0gQWxsb3dlZERpY2VbXCJjdXJyZW50UmVzdWx0XCJdO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIG1vZGVscyByZXByZXNlbnRpbmcgYWxsIGRpY2UgdXNlZCBpbiB0aGUgYXBwLlxuICogU2hvdWxkbid0IGJlIHVzZWQgb24gaXRzIG93biwgYnV0IGNyZWF0ZXMgYmFzZSBmb3IgYWxsIG90aGVyIGRpY2UuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEaWU8UmVzdWx0VHlwZSBleHRlbmRzIEFsbG93ZWRSZXN1bHRzPiB7XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hhdCB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IHJvbGwgd2FzLlxuICAgICAqIElmIG51bGwsIHRoZSBkaWUgaGFzIG5vdCBiZWVuIHJvbGxlZCB5ZXQsIGVsc2UgaXQnc1xuICAgICAqIHRoZSBjb250ZW50cyBvZiB0aGUgcmVzdWx0aW5nIHNpZGUuXG4gICAgICovXG4gICAgY3VycmVudFJlc3VsdDogUmVzdWx0VHlwZSB8IG51bGwgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGhhdCBjb3VudHMgdGhlIG51bWJlciBvZiB0aW1lcyB0aGlzIGRpZVxuICAgICAqIGhhcyBiZWVuIHJvbGxlZC4gSXQncyB1c2VkIHByaW1hcmlseSBpbiByZW5kZXJpbmcsIHRvIGRldGVybWluZVxuICAgICAqIHdoZW4gdGhlIGRpZSBoYXMgY2hhbmdlZCBzdGF0ZSBieSBiZWluZyByb2xsZWQsIGFzIG9wcG9zZWQgdG9cbiAgICAgKiBiZWluZyBzZWxlY3RlZCwgb3IgbW92ZWQgaW4gdGhlIGxpc3QuXG4gICAgICogSW5jcmVhc2VzIGJ5IG9uZSBvbiBldmVyeSBpbnZvY2F0aW9uIG9mIGAucm9sbCgpYC5cbiAgICAgKi9cbiAgICByb2xsQ291bnQ6IG51bWJlciA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBSb2xscyB0aGUgZGllLCBzZWxlY3RpbmcgcmFuZG9tIHJlc3VsdCBmcm9tIHRoZSBwb3NzaWJsZSBvbmVzLFxuICAgICAqIGFzc2lnbnMgaXQgdG8gY3VycmVudCByZXN1bHQgYW5kIHJldHVybnMgaXQuXG4gICAgICovXG4gICAgYWJzdHJhY3Qgcm9sbCgpOiBSZXN1bHRUeXBlO1xuXG59XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgbW9kZWxzIHJlcHJlc2VudGluZyBhbGwgdGhlIEdlbmVzeXMgZGljZS5cbiAqIFByaW1hcnkgc2V0IG9mIGRpY2UgaW4gdGhlIHN5c3RlbSwgZXhjbHVkaW5nIHRoZSBwZXJjZW50aWxlIGRpZVxuICogdXNlZCBpbiBzb21lIGNvbWJhdCBzaXR1YXRpb25zLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR2VuZXN5c0RpZSBleHRlbmRzIERpZTxTeW1ib2xzW10+IHtcblxuICAgIC8qKlxuICAgICAqIExpc3Qgb2YgYWxsIHBvc3NpYmxlIHJlc3VsdHMgdGhhdCBjYW4gY29tZSB1cCBvbiB0aGUgZGllLlxuICAgICAqIEVhY2ggc2lkZSBpcyByZXByZXNlbnRlZCBzZXBhcmF0ZWx5LCBzbyBpZiB0d28gc2lkZXMgYXJlXG4gICAgICogdGhlIHNhbWUsIHRoZXkgd2lsbCBiZSBsaXN0ZWQgdHdpY2UgaGVyZS5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCByZWFkb25seSBwb3NzaWJsZVJlc3VsdHM6IFN5bWJvbHNbXVtdO1xuXG4gICAgLyoqXG4gICAgICogUm9sbHMgdGhlIGRpZSwgc2VsZWN0aW5nIHJhbmRvbSByZXN1bHQgZnJvbSB0aGUgcG9zc2libGUgb25lcyxcbiAgICAgKiBhc3NpZ25zIGl0IHRvIGN1cnJlbnQgcmVzdWx0IGFuZCByZXR1cm5zIGl0LlxuICAgICAqL1xuICAgIHJvbGwoKTogU3ltYm9sc1tdIHtcbiAgICAgICAgdGhpcy5yb2xsQ291bnQrKztcbiAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0ID0gdGhpcy5wb3NzaWJsZVJlc3VsdHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5wb3NzaWJsZVJlc3VsdHMubGVuZ3RoKV07XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRSZXN1bHQ7XG4gICAgfVxuXG59XG5cbi8qKlxuICogTW9kZWwgZm9yIHRoZSBiYXNlIHBvc2l0aXZlIGRpZSwgdGhlIGdyZWVuIGVpZ2h0LXNpZGVkIG9uZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEFiaWxpdHlEaWUgZXh0ZW5kcyBHZW5lc3lzRGllIHtcbiAgICBwb3NzaWJsZVJlc3VsdHMgPSBbXG4gICAgICAgIFtdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTU10sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1MsIFN5bWJvbHMuU1VDQ0VTU10sXG4gICAgICAgIFtTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1MsIFN5bWJvbHMuQURWQU5UQUdFXSxcbiAgICAgICAgW1N5bWJvbHMuQURWQU5UQUdFLCBTeW1ib2xzLkFEVkFOVEFHRV1cbiAgICBdXG59XG5cbi8qKlxuICogTW9kZWwgZm9yIHRoZSB1cGdyYWRlZCBwb3NpdGl2ZSBkaWUsIHRoZSB5ZWxsb3cgdHdlbHZlLXNpZGVkIG9uZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb2ZpY2llbmN5RGllIGV4dGVuZHMgR2VuZXN5c0RpZSB7XG4gICAgcG9zc2libGVSZXN1bHRzID0gW1xuICAgICAgICBbXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTU10sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1NdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTLCBTeW1ib2xzLlNVQ0NFU1NdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTLCBTeW1ib2xzLlNVQ0NFU1NdLFxuICAgICAgICBbU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTLCBTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1MsIFN5bWJvbHMuQURWQU5UQUdFXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTUywgU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5BRFZBTlRBR0UsIFN5bWJvbHMuQURWQU5UQUdFXSxcbiAgICAgICAgW1N5bWJvbHMuQURWQU5UQUdFLCBTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLlRSSVVNUEhdXG4gICAgXVxufVxuXG4vKipcbiAqIE1vZGVsIGZvciB0aGUgY2lyY3Vtc3RhbnRpYWwgcG9zaXRpdmUgZGllLCB0aGUgYmx1ZSBzaXgtc2lkZWQgb25lLlxuICovXG5leHBvcnQgY2xhc3MgQm9vc3REaWUgZXh0ZW5kcyBHZW5lc3lzRGllIHtcbiAgICBwb3NzaWJsZVJlc3VsdHMgPSBbXG4gICAgICAgIFtdLFxuICAgICAgICBbXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTU10sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1MsIFN5bWJvbHMuQURWQU5UQUdFXSxcbiAgICAgICAgW1N5bWJvbHMuQURWQU5UQUdFLCBTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLkFEVkFOVEFHRV1cbiAgICBdXG59XG5cbi8qKlxuICogTW9kZWwgZm9yIHRoZSBiYXNlIG5lZ2F0aXZlIGRpZSwgdGhlIHB1cnBsZSBlaWdodC1zaWRlZCBvbmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBEaWZmaWN1bHR5RGllIGV4dGVuZHMgR2VuZXN5c0RpZSB7XG4gICAgcG9zc2libGVSZXN1bHRzID0gW1xuICAgICAgICBbXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRV0sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkUsIFN5bWJvbHMuRkFJTFVSRV0sXG4gICAgICAgIFtTeW1ib2xzLlRIUkVBVF0sXG4gICAgICAgIFtTeW1ib2xzLlRIUkVBVF0sXG4gICAgICAgIFtTeW1ib2xzLlRIUkVBVF0sXG4gICAgICAgIFtTeW1ib2xzLlRIUkVBVCwgU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5GQUlMVVJFLCBTeW1ib2xzLlRIUkVBVF1cbiAgICBdXG59XG5cbi8qKlxuICogTW9kZWwgZm9yIHRoZSB1cGdyYWRlZCBuZWdhdGl2ZSBkaWUsIHRoZSByZWQgdHdlbHZlLXNpZGVkIG9uZS5cbiAqL1xuZXhwb3J0IGNsYXNzIENoYWxsZW5nZURpZSBleHRlbmRzIEdlbmVzeXNEaWUge1xuICAgIHBvc3NpYmxlUmVzdWx0cyA9IFtcbiAgICAgICAgW10sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkVdLFxuICAgICAgICBbU3ltYm9scy5GQUlMVVJFXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRSwgU3ltYm9scy5GQUlMVVJFXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRSwgU3ltYm9scy5GQUlMVVJFXSxcbiAgICAgICAgW1N5bWJvbHMuVEhSRUFUXSxcbiAgICAgICAgW1N5bWJvbHMuVEhSRUFUXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRSwgU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5GQUlMVVJFLCBTeW1ib2xzLlRIUkVBVF0sXG4gICAgICAgIFtTeW1ib2xzLlRIUkVBVCwgU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVQsIFN5bWJvbHMuVEhSRUFUXSxcbiAgICAgICAgW1N5bWJvbHMuREVTUEFJUl1cbiAgICBdXG59XG5cbi8qKlxuICogTW9kZWwgZm9yIHRoZSBjaXJjdW1zdGFudGlhbCBuZWdhdGl2ZSBkaWUsIHRoZSBibGFjayBzaXgtc2lkZWQgb25lLlxuICovXG5leHBvcnQgY2xhc3MgU2V0YmFja0RpZSBleHRlbmRzIEdlbmVzeXNEaWUge1xuICAgIHBvc3NpYmxlUmVzdWx0cyA9IFtcbiAgICAgICAgW10sXG4gICAgICAgIFtdLFxuICAgICAgICBbU3ltYm9scy5GQUlMVVJFXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRV0sXG4gICAgICAgIFtTeW1ib2xzLlRIUkVBVF0sXG4gICAgICAgIFtTeW1ib2xzLlRIUkVBVF1cbiAgICBdXG59XG5cbi8qKlxuICogTW9kZWwgZm9yIHRoZSBwZXJjZW50aWxlIGRpZSwgdXNlZCB0byBnZW5lcmF0ZSBudW1lcmljYWwgcmVzdWx0XG4gKiBiZXR3ZWVuIDEgYW5kIDEwMC4gVXNlZCB0byBlc3RhYmxpc2ggY3JpdGljYWwgcmVzdWx0cyBpbiBjb21iYXQuXG4gKi9cbmV4cG9ydCBjbGFzcyBQZXJjZW50aWxlRGllIGV4dGVuZHMgRGllPG51bWJlcj4ge1xuICAgIHJvbGwoKSB7XG4gICAgICAgIHRoaXMucm9sbENvdW50Kys7XG4gICAgICAgIHRoaXMuY3VycmVudFJlc3VsdCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFJlc3VsdDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuXG50eXBlIFJlZHV4PFBheWxvYWQ+ID0ge1xuICAgIGRpc3BhdGNoKGFyZzogeyB0eXBlOiBcIkNIQU5HRVwiLCB2YWx1ZTogUGF5bG9hZCB9KTogdm9pZDtcbiAgICBzdWJzY3JpYmUoYXJnOiAoKSA9PiB2b2lkKTogKCkgPT4gdm9pZDtcbiAgICBnZXRTdGF0ZSgpOiB7IHZhbHVlOiBQYXlsb2FkIH07XG59XG5cbmV4cG9ydCBjbGFzcyBTZXR0aW5nczxQYXlsb2FkPiB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGluaXRpYWxWYWx1ZT86IFBheWxvYWQpIHtcblxuICAgICAgICBjb25zdCBzYXZlZFZhbHVlOiBzdHJpbmcgfCBudWxsID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpO1xuICAgICAgICBpZiAoc2F2ZWRWYWx1ZSkge1xuICAgICAgICAgICAgaW5pdGlhbFZhbHVlID0gSlNPTi5wYXJzZShzYXZlZFZhbHVlKS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBjcmVhdGVTdG9yZSh0aGlzLnJlZHVjZXIuYmluZCh0aGlzKSwgeyB2YWx1ZTogaW5pdGlhbFZhbHVlIH0pO1xuICAgIH1cblxuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuICAgIHByaXZhdGUgc3RvcmU6IFJlZHV4PFBheWxvYWQ+O1xuXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBNYXA8KHA6IFBheWxvYWQpID0+IHZvaWQsICgpID0+IHZvaWQ+ID0gbmV3IE1hcCgpO1xuXG4gICAgcHJvdGVjdGVkIHJlZHVjZXIoc3RhdGU6IHsgdmFsdWU6IFBheWxvYWQgfSwgYWN0aW9uOiB7IHR5cGU/OiBcIkNIQU5HRVwiLCB2YWx1ZTogUGF5bG9hZCB9KTogeyB2YWx1ZTogUGF5bG9hZCB9IHtcbiAgICAgICAgaWYgKGFjdGlvbi50eXBlID09PSBcIkNIQU5HRVwiICYmIGFjdGlvbi52YWx1ZSAhPT0gc3RhdGUudmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgdmFsdWU6IGFjdGlvbi52YWx1ZSB9O1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZSwgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBvbihjYWxsYmFjazogKHA6IFBheWxvYWQpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9ICgpID0+IGNhbGxiYWNrKHRoaXMuZ2V0KCkpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuc2V0KGNhbGxiYWNrLCB0aGlzLnN0b3JlLnN1YnNjcmliZShoYW5kbGVyKSk7XG4gICAgfVxuXG4gICAgb2ZmKGNhbGxiYWNrOiAocDogUGF5bG9hZCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICBjb25zdCB1bnN1YnNjcmliZSA9IHRoaXMuc3Vic2NyaXB0aW9ucy5nZXQoY2FsbGJhY2spO1xuICAgICAgICBpZiAodW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQoKTogUGF5bG9hZCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0KHZhbHVlOiBQYXlsb2FkKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBcIkNIQU5HRVwiLCB2YWx1ZSB9KTtcbiAgICB9XG59XG5cbnR5cGUgVGhlbWVPcHRpb25zID0gXCJsaWdodFwiIHwgXCJkYXJrXCIgfCBudWxsO1xuY29uc3QgdGhlbWVPcHRpb25MaXN0OiBUaGVtZU9wdGlvbnNbXSA9IFtcImxpZ2h0XCIsIFwiZGFya1wiLCBudWxsXTtcblxuY2xhc3MgVGhlbWVTZXR0aW5ncyBleHRlbmRzIFNldHRpbmdzPFRoZW1lT3B0aW9ucz4ge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFwidGhlbWVcIiwgbnVsbCk7XG4gICAgfVxuXG4gICAgZ2V0Q2xhc3MoKTogTm9uTnVsbGFibGU8VGhlbWVPcHRpb25zPiB7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUaGVtZSA9IHRoaXMuZ2V0KCk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkVGhlbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZFRoZW1lO1xuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodClcIikubWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIFwibGlnaHRcIjtcbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIFwiZGFya1wiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcImxpZ2h0XCI7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBuZXdUaGVtZUluZGV4ID0gKHRoZW1lT3B0aW9uTGlzdC5pbmRleE9mKHRoaXMuZ2V0KCkpICsgMSkgJSB0aGVtZU9wdGlvbkxpc3QubGVuZ3RoO1xuICAgICAgICB0aGlzLnNldCh0aGVtZU9wdGlvbkxpc3RbbmV3VGhlbWVJbmRleF0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFRoZW1lID0gbmV3IFRoZW1lU2V0dGluZ3MoKTtcblxuZXhwb3J0IGNvbnN0IFdlYmhvb2sgPSBuZXcgU2V0dGluZ3M8c3RyaW5nIHwgbnVsbD4oXCJ3ZWJob29rXCIsIG51bGwpO1xuZXhwb3J0IGNvbnN0IFVzZXJuYW1lID0gbmV3IFNldHRpbmdzPHN0cmluZz4oXCJ1c2VybmFtZVwiLCBcIlwiKTtcbiIsImltcG9ydCB7IGNvdW50QnkgfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgUmVzdWx0IGZyb20gXCJzcmMvbW9kZWwvcmVzdWx0XCI7XG5pbXBvcnQgU3ltYm9scyBmcm9tIFwic3JjL21vZGVsL3N5bWJvbHNcIjtcblxuLyoqXG4gKiBNZXRob2QgdXNlZCB0byByZXNvbHZlIHBhcnQgb2YgdGhlIHJvbGwgd2hlcmUgc3VjY2Vzc2VzIGFuZCBmYWlsdXJlcyAvXG4gKiBhZHZhbnRhZ2VzIGFuZCB0aHJlYXRzIGNhbmNlbCBlYWNoIG90aGVyIG91dC4gR2l2ZW4gbGlzdCBvZiBzeW1ib2xzLFxuICogY2FuY2VscyB0aGVtIG91dCBhbmQgcmV0dXJucyB0aGUgbGlzdCB3aXRoIG9ubHkgdGhlIHJlbWFpbmluZyBzeW1ib2xzLlxuICpcbiAqIEBwYXJhbSBzeW1ib2xzICBMaXN0IG9mIHN5bWJvbHMgcm9sbGVkXG4gKiBAcmV0dXJucyAgICAgICAgTGlzdCB3aXRoIHN5bWJvbHMgcmVtYWluaW5nIGFmdGVyIGNhbmNlbGxpbmcgcmVzdWx0cyBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU9wcG9zaW5nU3ltYm9scyhzeW1ib2xzOiBTeW1ib2xzW10pOiBTeW1ib2xzW10ge1xuXG4gICAgLy8gTWFrZSB0aGUgZmlyc3QgcGFzcyBieSBjb3VudGluZyBhbGwgdGhlIHN5bWJvbHNcbiAgICBjb25zdCByZW1vdmUgPSBjb3VudEJ5KHN5bWJvbHMpO1xuXG4gICAgLy8gRGVsZXRlIGNvdW50cyBmb3IgdHJpdW1waHMgYW5kIGRlc3BhaXJzLCBhcyB0aGVzZSBuZXZlciBjYW5jZWwgZWFjaCBvdGhlciBvdXRcbiAgICBkZWxldGUgcmVtb3ZlW1N5bWJvbHMuVFJJVU1QSF07XG4gICAgZGVsZXRlIHJlbW92ZVtTeW1ib2xzLkRFU1BBSVJdO1xuXG4gICAgLy8gVXNlIHRoZSBjb3VudHMgYW5kIG1hcmsgdGhlIHNtYWxsZXIgbnVtYmVyIG9mIHN5bWJvbHMgZm9yIHJlbW92YWxcbiAgICByZW1vdmVbU3ltYm9scy5TVUNDRVNTXSA9IHJlbW92ZVtTeW1ib2xzLkZBSUxVUkVdID0gTWF0aC5taW4ocmVtb3ZlW1N5bWJvbHMuU1VDQ0VTU10sIHJlbW92ZVtTeW1ib2xzLkZBSUxVUkVdKTtcbiAgICByZW1vdmVbU3ltYm9scy5BRFZBTlRBR0VdID0gcmVtb3ZlW1N5bWJvbHMuVEhSRUFUXSA9IE1hdGgubWluKHJlbW92ZVtTeW1ib2xzLkFEVkFOVEFHRV0sIHJlbW92ZVtTeW1ib2xzLlRIUkVBVF0pO1xuXG4gICAgY29uc3QgcmVtYWluaW5nU3ltYm9sczogU3ltYm9sc1tdID0gW107XG4gICAgc3ltYm9scy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAocmVtb3ZlW2l0ZW1dKSB7XG4gICAgICAgICAgICByZW1vdmVbaXRlbV0tLTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbWFpbmluZ1N5bWJvbHMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlbWFpbmluZ1N5bWJvbHM7XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHJvbGw7IGdpdmVuIHRoZSBsaXN0IG9mIHJlc3VsdHMgcm9sbGVkLCBjb3VudHMgdGhlbSB1cCxcbiAqIGFuZCByZXR1cm5zIHdoZXRoZXIgdGhlIHJvbGwgd2FzIHN1Y2Nlc3NmdWwgb3IgZmFpbGVkLlxuICpcbiAqIEBwYXJhbSBzeW1ib2xzICBMaXNmIG9mIHN5bWJvbHMgcm9sbGVkXG4gKiBAcmVzdWx0cyAgICAgICAgV2hldGhlciB0aGUgcm9sbCB3YXMgc3VjY2Vzc2Z1bCBvciBmYWlsZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkanVkaWNhdGVSb2xsKHN5bWJvbHM6IFN5bWJvbHNbXSk6IFJlc3VsdCB7XG5cbiAgICBjb25zdCBjb3VudHMgPSBjb3VudEJ5KHN5bWJvbHMpLFxuICAgICAgICAgIGNvdW50U3VjY2VzcyA9IChjb3VudHNbU3ltYm9scy5UUklVTVBIXSB8fCAwKSArIChjb3VudHNbU3ltYm9scy5TVUNDRVNTXSB8fCAwKSxcbiAgICAgICAgICBjb3VudEZhaWx1cmUgPSAoY291bnRzW1N5bWJvbHMuREVTUEFJUl0gfHwgMCkgKyAoY291bnRzW1N5bWJvbHMuRkFJTFVSRV0gfHwgMCk7XG5cbiAgICBjb25zb2xlLndhcm4oXCJDT1VOVDogXCIsIGNvdW50cyk7XG5cbiAgICByZXR1cm4gKGNvdW50U3VjY2VzcyAtIGNvdW50RmFpbHVyZSA+IDApID8gUmVzdWx0LlNVQ0NFU1MgOiBSZXN1bHQuRkFJTFVSRTtcbn1cbiIsImltcG9ydCBTeW1ib2xzIGZyb20gXCJzcmMvbW9kZWwvc3ltYm9sc1wiO1xuaW1wb3J0IHsgR2VuZXN5c0RpZSwgQWJpbGl0eURpZSwgUHJvZmljaWVuY3lEaWUsIEJvb3N0RGllLCBEaWZmaWN1bHR5RGllLCBDaGFsbGVuZ2VEaWUsIFNldGJhY2tEaWUsIFBlcmNlbnRpbGVEaWUgfSBmcm9tIFwic3JjL21vZGVsL2RpY2VcIjtcblxuLyoqXG4gKiBPcmRlciByZXF1aXJlZCBvZiB0aGUgc3ltYm9scyBvbiB0aGUgZGljZS5cbiAqIEdvaW5nIHBvc2l0aXZlIGZpcnN0LCBuZWdhdGl2ZSBzZWNvbmQsIGFuZCBmcm9tIG1vc3QgdG8gbGVhc3QgcG93ZXJmdWwuXG4gKi9cbmNvbnN0IFNZTUJPTF9PUkRFUklORyA9IE9iamVjdC5mcmVlemUoe1xuICAgIFtTeW1ib2xzLlRSSVVNUEhdOiAgIDAsXG4gICAgW1N5bWJvbHMuU1VDQ0VTU106ICAgMSxcbiAgICBbU3ltYm9scy5BRFZBTlRBR0VdOiAyLFxuICAgIFtTeW1ib2xzLkRFU1BBSVJdOiAgIDMsXG4gICAgW1N5bWJvbHMuRkFJTFVSRV06ICAgNCxcbiAgICBbU3ltYm9scy5USFJFQVRdOiAgICA1XG59KTtcblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGhlbHAgd2l0aCBvcmRlcmluZyB0aGUgcmVzdWx0cywgZmlyc3QgYnkgZ3JvdXBpbmcgcG9zaXRpdmUgZGljZSBmaXJzdCxcbiAqIG5lZ2F0aXZlIHNlY29uZCwgdGhlbiBieSBvcmRlcmluZyBlYWNoIGdyb3VwIGZyb20gbW9zdCBwb3dlcmZ1bCB0byBsZWFzdCBwb3dlcmZ1bC5cbiAqIEludGVuZGVkIHRvIGJlIHVzZWQgYXMgY29tcGFyZSBmdW5jdGlvbiBmb3IgQXJyYXkuc29ydC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9yZGVyU3ltYm9scyhhOiBTeW1ib2xzLCBiOiBTeW1ib2xzKTogbnVtYmVyIHtcbiAgICByZXR1cm4gU1lNQk9MX09SREVSSU5HW2FdIGFzIG51bWJlciAtIFNZTUJPTF9PUkRFUklOR1tiXSBhcyBudW1iZXI7XG59XG5cbi8qKlxuICogT3JkZXIgcmVxdWlyZWQgb2YgdGhlIGRpY2UgdGhlbXNlbHZlcy5cbiAqIERvbmUgYXMgZnVuY3Rpb24gcmF0aGVyIHRoYW4gbWFwIGJlY2F1c2UgdGhlcmUncyBubyBlYXN5IHdheSB0byB1c2UgY2xhc3Mgb2YgaW5zdGFuY2VcbiAqIGFzIHZhbHVlIGluIFR5cGVTY3JpcHQuIEdvZXMgcG9zaXRpdmUgZmlyc3QsIG5lZ2F0aXZlIHNlY29uZCwgbW9zdCB0byBsZWFzdCBwb3dlcmZ1bCxcbiAqIGFuZCBwZXJjZW50aWxlIGRpZSBnb2VzIGF0IHRoZSBlbmQuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlRm9yRGllKGRpZTogR2VuZXN5c0RpZSB8IFBlcmNlbnRpbGVEaWUpOiBudW1iZXIge1xuXG4gICAgaWYgKGRpZSBpbnN0YW5jZW9mIFByb2ZpY2llbmN5RGllKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSBpZiAoZGllIGluc3RhbmNlb2YgQWJpbGl0eURpZSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGRpZSBpbnN0YW5jZW9mIEJvb3N0RGllKSB7XG4gICAgICAgIHJldHVybiAyO1xuICAgIH0gZWxzZSBpZiAoZGllIGluc3RhbmNlb2YgQ2hhbGxlbmdlRGllKSB7XG4gICAgICAgIHJldHVybiAzO1xuICAgIH0gZWxzZSBpZiAoZGllIGluc3RhbmNlb2YgRGlmZmljdWx0eURpZSkge1xuICAgICAgICByZXR1cm4gNDtcbiAgICB9IGVsc2UgaWYgKGRpZSBpbnN0YW5jZW9mIFNldGJhY2tEaWUpIHtcbiAgICAgICAgcmV0dXJuIDU7XG4gICAgfVxuICAgIHJldHVybiA2O1xufVxuXG4vKipcbiAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gaGVscCB3aXRoIG9yZGVyaW5nIHRoZSBkaWNlIHRoZW1zZWx2ZXMsIGZpcnN0IGJ5IGdyb3VwaW5nIHBvc2l0aXZlIGRpY2UgZmlyc3QsXG4gKiBuZWdhdGl2ZSBzZWNvbmQsIHRoZW4gYnkgb3JkZXJpbmcgZWFjaCBncm91cCBmcm9tIG1vc3QgcG93ZXJmdWwgdG8gbGVhc3QgcG93ZXJmdWwuXG4gKiBJbnRlbmRlZCB0byBiZSB1c2VkIGFzIGNvbXBhcmUgZnVuY3Rpb24gZm9yIEFycmF5LnNvcnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcmRlckRpY2UoYTogR2VuZXN5c0RpZSB8IFBlcmNlbnRpbGVEaWUsIGI6IEdlbmVzeXNEaWUgfCBQZXJjZW50aWxlRGllKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZ2V0VmFsdWVGb3JEaWUoYSkgLSBnZXRWYWx1ZUZvckRpZShiKTtcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IFN5bWJvbHMgZnJvbSBcInNyYy9tb2RlbC9zeW1ib2xzXCI7XG5pbXBvcnQgeyBBbGxvd2VkRGljZSwgR2VuZXN5c0RpZSwgQWJpbGl0eURpZSwgUHJvZmljaWVuY3lEaWUsIEJvb3N0RGllLCBEaWZmaWN1bHR5RGllLCBDaGFsbGVuZ2VEaWUsIFNldGJhY2tEaWUsIFBlcmNlbnRpbGVEaWUgfSBmcm9tIFwic3JjL21vZGVsL2RpY2VcIjtcbmltcG9ydCBEaWNlRGlzcGxheSBmcm9tIFwic3JjL3ZpZXcvZGlzcGxheS9kaWNlXCI7XG5cbnR5cGUgRGllQ3JlYXRvcjxUIGV4dGVuZHMgQWxsb3dlZERpY2U+ID0geyBjbHM6IG5ldyAoKSA9PiBULCByZXN1bHQ6IFRbXCJjdXJyZW50UmVzdWx0XCJdIH07XG5jb25zdCBkaWNlVG9DcmVhdGU6IERpZUNyZWF0b3I8QWxsb3dlZERpY2U+W10gPSBbXG4gICAgeyBjbHM6IEFiaWxpdHlEaWUsICAgICByZXN1bHQ6IFtTeW1ib2xzLlNVQ0NFU1NdIH0sXG4gICAgeyBjbHM6IFByb2ZpY2llbmN5RGllLCByZXN1bHQ6IFtTeW1ib2xzLlRSSVVNUEhdIH0sXG4gICAgeyBjbHM6IEJvb3N0RGllLCAgICAgICByZXN1bHQ6IFtTeW1ib2xzLkFEVkFOVEFHRV0gfSxcbiAgICB7IGNsczogRGlmZmljdWx0eURpZSwgIHJlc3VsdDogW1N5bWJvbHMuRkFJTFVSRV0gfSxcbiAgICB7IGNsczogQ2hhbGxlbmdlRGllLCAgIHJlc3VsdDogW1N5bWJvbHMuREVTUEFJUl0gfSxcbiAgICB7IGNsczogU2V0YmFja0RpZSwgICAgIHJlc3VsdDogW1N5bWJvbHMuVEhSRUFUXSB9LFxuICAgIHsgY2xzOiBQZXJjZW50aWxlRGllLCAgcmVzdWx0OiA0MiB9XG5dO1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGRyYXdzIHRoZSBjb2xsZWN0aW9uIG9mIGJ1dHRvbnMgdGhhdCBjYW4gYmUgdXNlZCB0byBhZGQgbmV3IGRpY2UgdG8gdGhlIGRpY2UgcG9vbC5cbiAqIE9uY2UgcmVuZGVyZWQsIGl0IGRvZXNuJ3QgcmVhbGx5IGNoYW5nZSwgc28gaXQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHJhdGhlciB0aGFuIENvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGljZUNvbnRyb2xzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDx7IGNhbGxiYWNrOiAoZGllOiBBbGxvd2VkRGljZSkgPT4gdm9pZCB9PiB7XG5cbiAgICAvKipcbiAgICAgKiBJdGVyYXRlcyBvdmVyIHRoZSBsaXN0IG9mIGFsbCB0aGUgZGljZSB3ZSBoYW5kbGUgaW4gdGhlIGRpY2Ugcm9sbGVyLFxuICAgICAqIGFsb25nIHdpdGggZGVmYXVsdCByZXN1bHQgdG8gc2hvdyAoc28gdGhhdCB0aGUgZGljZSBhcmUgZWFzaWx5IGlkZW50aWZpYWJsZSksXG4gICAgICogYW5kIHJlbmRlcnMgZWFjaCBvZiB0aG9zZSBpbiBhIGJ1dHRvbiB0aGF0IGFkZHMgYSBuZXcgZGllIG9mIHRoYXQgdHlwZSB3aGVuZXZlciBpdCdzIGNsaWNrZWQuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uQnV0dG9ucyA9IGRpY2VUb0NyZWF0ZS5tYXAoKHsgY2xzLCByZXN1bHQgfSwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGllTmFtZSA9IHN0YXJ0Q2FzZShjbHMubmFtZSkuc3BsaXQoXCIgXCIpWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9e2BhZGQtJHtkaWVOYW1lfWB9IGtleT17aX0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5jYWxsYmFjayhuZXcgY2xzKCkpfT5cbiAgICAgICAgICAgICAgICA8RGljZURpc3BsYXkgZGllPXtPYmplY3QuYXNzaWduKG5ldyBjbHMoKSwgeyBjdXJyZW50UmVzdWx0OiByZXN1bHQgfSl9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj47XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRpY2UtY29udHJvbHNcIj57YWRkaXRpb25CdXR0b25zfTwvZGl2PjtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEaWNlRGlzcGxheSBmcm9tIFwic3JjL3ZpZXcvZGlzcGxheS9kaWNlXCI7XG5pbXBvcnQgeyBBbGxvd2VkRGljZSB9IGZyb20gXCJzcmMvbW9kZWwvZGljZVwiO1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGlzIHVzZWQgaW4gbWFpbiBhcHAgYXJlYSB0byBkcmF3IHRoZSBsaXN0IG9mIGFsbCB0aGUgZGljZSB0byB0aGUgcG9vbC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGljZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8eyBkaWNlOiBBbGxvd2VkRGljZVtdLCBzZWxlY3RlZDogQWxsb3dlZERpY2VbXSwgc2VsZWN0Q2FsbGJhY2s/OiAoZGllOiBBbGxvd2VkRGljZSkgPT4gdm9pZCB9PiB7XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgZGljZUxpc3QgPSB0aGlzLnByb3BzLmRpY2UubWFwKGRpZSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNsaWNrID0gdGhpcy5wcm9wcy5zZWxlY3RDYWxsYmFjayA/XG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5wcm9wcy5zZWxlY3RDYWxsYmFjayEoZGllKSA6XG4gICAgICAgICAgICAgICAgdm9pZCAwO1xuXG4gICAgICAgICAgICByZXR1cm4gPERpY2VEaXNwbGF5IGRpZT17ZGllfSBzZWxlY3RlZD17dGhpcy5wcm9wcy5zZWxlY3RlZC5pbmNsdWRlcyhkaWUpfSByb2xsQ291bnQ9e2RpZS5yb2xsQ291bnR9IG9uQ2xpY2s9e2NsaWNrfSAvPjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGljZS1saXN0XCI+e2RpY2VMaXN0fTwvZGl2PjtcbiAgICB9XG5cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHsgQWxsb3dlZERpY2UsIEFsbG93ZWRSZXN1bHRzIH0gZnJvbSBcInNyYy9tb2RlbC9kaWNlXCI7XG5pbXBvcnQgU3ltYm9sRGlzcGxheSBmcm9tIFwic3JjL3ZpZXcvZGlzcGxheS9zeW1ib2xcIjtcblxuLyoqXG4gKiBDb252ZXJ0cyByZXN1bHQgb2YgdGhlIGRpZSByb2xsIChvciB0aGUgbGFjayBvZiB0aGVyZW9mKSBpbnRvIHNvbWV0aGluZ1xuICogaHVtYW4tcmVhZGFibGU7IHBlbmRpbmcgbWFyayBmb3Igbm8gcm9sbHMsIHN5bWJvbHMgZm9yIHJlZ3VsYXIgR2VuZXN5cyBkaWNlLFxuICogYW5kIHRoZSBudW1iZXIgZm9yIHBlcmNlbnRpbGUgZGllLlxuICovXG5mdW5jdGlvbiBjb252ZXJ0RGllUmVzdWx0KHJlc3VsdDogQWxsb3dlZFJlc3VsdHMpOiBKU1guRWxlbWVudFtdIHtcbiAgICBpZiAocmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBbPHNwYW4+Pzwvc3Bhbj5dO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gWzxzcGFuPntyZXN1bHQgKyBcIlwifTwvc3Bhbj5dO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0Lm1hcCgocywgaSkgPT4gPFN5bWJvbERpc3BsYXkgc3ltYm9sPXtzfSBrZXk9e2l9IC8+KTtcbn1cblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyB1c2VkIHRvIHJlbmRlciB0aGUgZGljZSBpbWFnZXMgaW4gdGhlIG1haW4gYXJlYSBvZiB0aGUgYXBwLlxuICogR2l2ZW4gdGhlIGRpZSBtb2RlbCBpbnN0YW5jZSwgY29udmVydHMgdGhlIHJvbGwgcmVzdWx0IGludG8gc29tZXRoaW5nIGh1bWFuLXJlYWRhYmxlLFxuICogYW5kIGRyYXdzIGl0IGluIGFuIGVsZW1lbnQgc3R5bGVkIHRvIGxvb2sgbGlrZSBhIGRpZSBvZiByZWxldmFudCBzaGFwZSBhbmQgY29sb3VyLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWNlRGlzcGxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7XG4gICAgZGllOiBBbGxvd2VkRGljZSxcbiAgICBzZWxlY3RlZD86IGJvb2xlYW4sXG4gICAgcm9sbENvdW50PzogbnVtYmVyLFxuICAgIG9uQ2xpY2s/OiAoZXY6IGFueSkgPT4gdm9pZFxufT4gaW1wbGVtZW50cyBFdmVudExpc3RlbmVyT2JqZWN0IHtcblxuICAgIGRpZVJlZmVyZW5jZTogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBjbGFzc05hbWU6IHN0cmluZyA9IHN0YXJ0Q2FzZSh0aGlzLnByb3BzLmRpZS5jb25zdHJ1Y3Rvci5uYW1lKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZCkge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIHNlbGVjdGVkXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gPGRpdiByZWY9e3RoaXMuZGllUmVmZXJlbmNlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfT5cbiAgICAgICAgICAgIHtjb252ZXJ0RGllUmVzdWx0KHRoaXMucHJvcHMuZGllLmN1cnJlbnRSZXN1bHQpfVxuICAgICAgICA8L2Rpdj47XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wczogdGhpc1tcInByb3BzXCJdKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRpZSAhPT0gbmV4dFByb3BzLmRpZSB8fFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZCAhPT0gbmV4dFByb3BzLnNlbGVjdGVkIHx8XG4gICAgICAgICAgICB0aGlzLnByb3BzLnJvbGxDb3VudCAhPT0gbmV4dFByb3BzLnJvbGxDb3VudFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IHRoaXNbXCJwcm9wc1wiXSk6IHZvaWQge1xuXG4gICAgICAgIC8vIFdlIG9ubHkgYXBwbHkgdGhlIHNoYWtlIGFuaW1hdGlvbiB3aGVuIHRoZXJlJ3Mgbm8gcHJlZmVyZW5jZSBmb3IgcmVkdWNlZCBtb3Rpb24sXG4gICAgICAgIC8vIGFuZCB3aGVuIHRoZXJlJ3MgYWN0dWFsIHJlc3VsdCBvbiB0aGUgZGljZSAoJ2NhdXNlIHRoYXQgbWVhbnMgdGhlcmUncyBzb21ldGhpbmcgdG8gcm9sbCkuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpXCIpLm1hdGNoZXMgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMucm9sbENvdW50ICE9PSBwcmV2UHJvcHMucm9sbENvdW50XG4gICAgICAgICkge1xuXG4gICAgICAgICAgICBjb25zdCBkaWVFbGVtZW50ID0gdGhpcy5kaWVSZWZlcmVuY2UuY3VycmVudCE7XG4gICAgICAgICAgICBkaWVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgdGhpcywgZmFsc2UpO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZGllIGlzIHN0aWxsIGluIHRoZSBwcm9jZXNzIG9mIHBsYXlpbmcgc2hha2UgYW5pbWF0aW9uLFxuICAgICAgICAgICAgLy8gcmVzdGFydCBpdCBieSByZW1vdmluZyB0aGUgY2xhc3MgYW5kIHRvZ2dsaW5nIHJlZmxvdyB3aXRoIGJvdW5kaW5nIHJlY3Q7XG4gICAgICAgICAgICBpZiAoZGllRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGFrZVwiKSkge1xuICAgICAgICAgICAgICAgIGRpZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNoYWtlXCIpO1xuICAgICAgICAgICAgICAgIGRpZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNoYWtlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlRXZlbnQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBcImFuaW1hdGlvbmVuZFwiKSB7XG4gICAgICAgICAgICBjb25zdCBkaWVFbGVtZW50ID0gdGhpcy5kaWVSZWZlcmVuY2UuY3VycmVudCE7XG4gICAgICAgICAgICBkaWVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgdGhpcywgZmFsc2UpO1xuICAgICAgICAgICAgZGllRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2hha2VcIik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgU3ltYm9scyBmcm9tIFwic3JjL21vZGVsL3N5bWJvbHNcIjtcblxuLyoqIFJlbmRlciBHZW5lc3lzIGRpY2Ugc3ltYm9scyB1c2luZyB0aGUgZGVkaWNhdGVkIGZvbnQuICovXG5jb25zdCBTeW1ib2xEaXNwbGF5OiBSZWFjdC5TRkM8eyBzeW1ib2w6IFN5bWJvbHMgfCBTeW1ib2xzW10gfT4gPSAoeyBzeW1ib2wgfSkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBpc0FycmF5KHN5bWJvbCkgPyBzeW1ib2wgOiBbc3ltYm9sXTtcbiAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwiZGljZS1zeW1ib2xcIj57bGlzdC5qb2luKFwiXCIpfTwvc3Bhbj47XG59O1xuZXhwb3J0IGRlZmF1bHQgU3ltYm9sRGlzcGxheTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGlmZmVyZW5jZSB9IGZyb20gXCJsb2Rhc2gtZXNcIjtcblxuaW1wb3J0IHsgQWxsb3dlZERpY2UsIEFsbG93ZWRSZXN1bHRzIH0gZnJvbSBcInNyYy9tb2RlbC9kaWNlXCI7XG5pbXBvcnQgeyBBYmlsaXR5RGllLCBQcm9maWNpZW5jeURpZSwgQm9vc3REaWUsIERpZmZpY3VsdHlEaWUsIENoYWxsZW5nZURpZSwgU2V0YmFja0RpZSwgUGVyY2VudGlsZURpZSB9IGZyb20gXCJzcmMvbW9kZWwvZGljZVwiO1xuaW1wb3J0IGh0bWwyY2FudmFzIGZyb20gXCJodG1sMmNhbnZhc1wiO1xuaW1wb3J0IHsgV2ViaG9vaywgVXNlcm5hbWUgfSBmcm9tIFwic3JjL21vZGVsL3NldHRpbmdzXCI7XG5pbXBvcnQgeyByZW1vdmVPcHBvc2luZ1N5bWJvbHMsIGFkanVkaWNhdGVSb2xsIH0gZnJvbSBcInNyYy91dGlsL2FkanVkaWNhdGVcIjtcbmltcG9ydCB7IG9yZGVyU3ltYm9scyB9IGZyb20gXCJzcmMvdXRpbC9vcmRlclwiO1xuaW1wb3J0IFN5bWJvbHMgZnJvbSBcInNyYy9tb2RlbC9zeW1ib2xzXCI7XG5pbXBvcnQgUmVzdWx0IGZyb20gXCJzcmMvbW9kZWwvcmVzdWx0XCI7XG5cbmltcG9ydCBEaWNlQ29udHJvbHMgZnJvbSBcInNyYy92aWV3L2RpY2UtY29udHJvbHNcIjtcbmltcG9ydCBEaWNlTGlzdCBmcm9tIFwic3JjL3ZpZXcvZGljZS1saXN0XCI7XG5pbXBvcnQgUm9sbFJlc3VsdHMgZnJvbSBcInNyYy92aWV3L3JvbGwtcmVzdWx0c1wiO1xuaW1wb3J0IHsgb3JkZXJEaWNlIH0gZnJvbSBcInNyYy91dGlsL29yZGVyXCI7XG5cbnR5cGUgZGljZVR5cGVzID0gXCJhYmlsaXR5XCIgfCBcInByb2ZpY2llbmN5XCIgfCBcImJvb3N0XCIgfCBcImRpZmZpY3VsdHlcIiB8IFwiY2hhbGxlbmdlXCIgfCBcInNldGJhY2tcIiB8IFwicGVyY2VudGlsZVwiO1xuY29uc3QgZGljZVR5cGVzOiBSZWFkb25seTxkaWNlVHlwZXNbXT4gPSBPYmplY3QuZnJlZXplKFtcImFiaWxpdHlcIiwgXCJwcm9maWNpZW5jeVwiLCBcImJvb3N0XCIsIFwiZGlmZmljdWx0eVwiLCBcImNoYWxsZW5nZVwiLCBcInNldGJhY2tcIl0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluQXBwQXJlYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgeyBkaWNlOiBBbGxvd2VkRGljZVtdLCBzZWxlY3RlZDogQWxsb3dlZERpY2VbXSwgcmVzdWx0czogQWxsb3dlZFJlc3VsdHNbXSB9PiB7XG5cbiAgICByZXN1bHRzUmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+ID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczoge30pIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBkaWNlOiBbXSwgc2VsZWN0ZWQ6IFtdLCByZXN1bHRzOiBbXSB9O1xuXG4gICAgICAgIHRoaXMuYWRkRGllID0gdGhpcy5hZGREaWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbGVhckRpY2UgPSB0aGlzLmNsZWFyRGljZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbiA9IHRoaXMudG9nZ2xlU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucm9sbCA9IHRoaXMucm9sbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNlbmRUb0Rpc2NvcmQgPSB0aGlzLnNlbmRUb0Rpc2NvcmQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBhZGREaWUobmV3RGllOiBBbGxvd2VkRGljZSk6IHZvaWQge1xuICAgICAgICBjb25zdCB7IGRpY2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBkaWNlOiBkaWNlLmNvbmNhdChbbmV3RGllXSkuc29ydChvcmRlckRpY2UpIH0pO1xuICAgIH1cblxuICAgIGNsZWFyRGljZSgpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCB7IGRpY2UsIHNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGgpIHtcblxuICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nRGljZSA9IGRpZmZlcmVuY2UoZGljZSwgc2VsZWN0ZWQpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZGljZTogcmVtYWluaW5nRGljZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogW10sXG4gICAgICAgICAgICAgICAgcmVzdWx0czogcmVtYWluaW5nRGljZS5tYXAoZGllID0+IGRpZS5jdXJyZW50UmVzdWx0KVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaWNlOiBbXSwgc2VsZWN0ZWQ6IFtdLCByZXN1bHRzOiBbXSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZVNlbGVjdGlvbih0b2dnbGVkRGllOiBBbGxvd2VkRGljZSk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmIChzZWxlY3RlZC5pbmNsdWRlcyh0b2dnbGVkRGllKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHNlbGVjdGVkOiBzZWxlY3RlZC5maWx0ZXIoZGllID0+IGRpZSAhPT0gdG9nZ2xlZERpZSkgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgc2VsZWN0ZWQ6IHNlbGVjdGVkLmNvbmNhdChbdG9nZ2xlZERpZV0pIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcm9sbCgpIHtcblxuICAgICAgICBjb25zdCB7IGRpY2UsIHNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGgpIHtcblxuICAgICAgICAgICAgc2VsZWN0ZWQuZm9yRWFjaChkaWUgPT4gZGllLnJvbGwoKSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBkaWNlLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBbXSxcbiAgICAgICAgICAgICAgICByZXN1bHRzOiBkaWNlLm1hcChkaWUgPT4gZGllLmN1cnJlbnRSZXN1bHQpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHJlc3VsdHM6IHRoaXMuc3RhdGUuZGljZS5tYXAoZGllID0+IGRpZS5yb2xsKCkpIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgc2VuZFRvRGlzY29yZCgpIHtcbiAgICAgICAgY29uc3Qgd2ViaG9vayA9IFdlYmhvb2suZ2V0KCk7XG4gICAgICAgIGlmICghd2ViaG9vayB8fCAhdGhpcy5yZXN1bHRzUmVmLmN1cnJlbnQpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgY29uc3QgY2FudmFzID0gYXdhaXQgaHRtbDJjYW52YXModGhpcy5yZXN1bHRzUmVmLmN1cnJlbnQpO1xuICAgICAgICBjb25zdCBibG9iOiBCbG9iID0gYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PlxuICAgICAgICAgICAgY2FudmFzLnRvQmxvYigoYjogQmxvYiB8IG51bGwpID0+IHJlc29sdmUoYiEpLCBcImltYWdlL3BuZ1wiKVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybS5hcHBlbmQoXCJmaWxlXCIsIGJsb2IsIFwicm9sbC5wbmdcIik7XG4gICAgICAgIGZvcm0uYXBwZW5kKFwidXNlcm5hbWVcIiwgVXNlcm5hbWUuZ2V0KCkgfHwgXCJHZW5lc3lzIFJvbGxlclwiKTtcbiAgICAgICAgZm9ybS5hcHBlbmQoXCJjb250ZW50XCIsIHRoaXMuc3VtbWFyaXNlUmVzdWx0cygpKTtcblxuICAgICAgICBmZXRjaCh3ZWJob29rLCB7IG1ldGhvZDogXCJQT1NUXCIsIGJvZHk6IGZvcm0gfSk7XG4gICAgfVxuXG4gICAgc3VtbWFyaXNlUmVzdWx0cygpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBzeW1ib2xzOiBTeW1ib2xzW10gPSBbXTtcbiAgICAgICAgY29uc3QgbnVtYmVyczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0ZS5yZXN1bHRzLmZvckVhY2gociA9PiB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyKSkgeyBzeW1ib2xzLnB1c2goLi4ucik7IH0gZWxzZSBpZiAodHlwZW9mIHIgPT09IFwibnVtYmVyXCIpIHsgbnVtYmVycy5wdXNoKHIpOyB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBmbGF0ID0gcmVtb3ZlT3Bwb3NpbmdTeW1ib2xzKHN5bWJvbHMpLnNvcnQob3JkZXJTeW1ib2xzKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYWRqdWRpY2F0ZVJvbGwoZmxhdCk7XG4gICAgICAgIGNvbnN0IGNvdW50cyA9IG5ldyBNYXA8U3ltYm9scywgbnVtYmVyPigpO1xuICAgICAgICBmbGF0LmZvckVhY2gocyA9PiBjb3VudHMuc2V0KHMsIChjb3VudHMuZ2V0KHMpIHx8IDApICsgMSkpO1xuICAgICAgICBjb25zdCBuYW1lczogUmVjb3JkPFN5bWJvbHMsIHN0cmluZz4gPSB7XG4gICAgICAgICAgICBbU3ltYm9scy5TVUNDRVNTXTogXCLRg9GB0L/QtdGFXCIsXG4gICAgICAgICAgICBbU3ltYm9scy5GQUlMVVJFXTogXCLQvdC10YPQtNCw0YfQsFwiLFxuICAgICAgICAgICAgW1N5bWJvbHMuQURWQU5UQUdFXTogXCLQv9GA0LXQuNC80YPRidC10YHRgtCy0L5cIixcbiAgICAgICAgICAgIFtTeW1ib2xzLlRIUkVBVF06IFwi0YPQs9GA0L7Qt9CwXCIsXG4gICAgICAgICAgICBbU3ltYm9scy5UUklVTVBIXTogXCLRgtGA0LjRg9C80YRcIixcbiAgICAgICAgICAgIFtTeW1ib2xzLkRFU1BBSVJdOiBcItC+0YLRh9Cw0Y/QvdC40LVcIixcbiAgICAgICAgfSBhcyBhbnk7XG4gICAgICAgIGxldCB0ZXh0ID0gcmVzdWx0ID09PSBSZXN1bHQuU1VDQ0VTUyA/IFwi0JjRgtC+0LM6INGD0YHQv9C10YVcIiA6IHJlc3VsdCA9PT0gUmVzdWx0LkZBSUxVUkUgPyBcItCY0YLQvtCzOiDQv9GA0L7QstCw0LtcIiA6IFwi0JjRgtC+0LM6XCI7XG4gICAgICAgIHRleHQgKz0gXCJcXG5cIiArIEFycmF5LmZyb20oY291bnRzLmVudHJpZXMoKSkubWFwKChbc3ltLCBjb3VudF0pID0+IGAke25hbWVzW3N5bV19OiAke2NvdW50fWApLmpvaW4oXCJcXG5cIik7XG4gICAgICAgIGlmIChudW1iZXJzLmxlbmd0aCkgdGV4dCArPSBcIlxcbtCn0LjRgdC70LA6IFwiICsgbnVtYmVycy5qb2luKFwiLCBcIik7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGljZS1hcmVhXCI+XG4gICAgICAgICAgICA8RGljZUNvbnRyb2xzIGNhbGxiYWNrPXt0aGlzLmFkZERpZX0vPlxuICAgICAgICAgICAgPERpY2VMaXN0IGRpY2U9e3RoaXMuc3RhdGUuZGljZX0gc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWR9IHNlbGVjdENhbGxiYWNrPXt0aGlzLnRvZ2dsZVNlbGVjdGlvbn0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJyb2xsXCIgb25DbGljaz17dGhpcy5yb2xsfT57dGhpcy5zdGF0ZS5zZWxlY3RlZC5sZW5ndGggPyBcIlJlLXJvbGwgU2VsZWN0ZWRcIiA6IFwiUm9sbFwifTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjbGVhclwiIG9uQ2xpY2s9e3RoaXMuY2xlYXJEaWNlfT57dGhpcy5zdGF0ZS5zZWxlY3RlZC5sZW5ndGggPyBcIlJlbW92ZSBTZWxlY3RlZFwiIDogXCJDbGVhclwifTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHtXZWJob29rLmdldCgpICYmIHRoaXMuc3RhdGUucmVzdWx0cy5sZW5ndGggPiAwICYmIDxidXR0b24gaWQ9XCJkaXNjb3JkXCIgb25DbGljaz17dGhpcy5zZW5kVG9EaXNjb3JkfT7QntGC0L/RgNCw0LLQuNGC0Ywg0LIgRGlzY29yZDwvYnV0dG9uPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiByZWY9e3RoaXMucmVzdWx0c1JlZn0+XG4gICAgICAgICAgICAgICAgPFJvbGxSZXN1bHRzIHJlc3VsdHM9e3RoaXMuc3RhdGUucmVzdWx0c30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj47XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFdlYmhvb2ssIFVzZXJuYW1lLCBUaGVtZSB9IGZyb20gXCJzcmMvbW9kZWwvc2V0dGluZ3NcIjtcbnR5cGUgTWVudVByb3BzID0geyB0b2dnbGVDYWxsYmFjaz86IChvcGVuOiBib29sZWFuKSA9PiB2b2lkIH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PE1lbnVQcm9wcz4ge1xuICAgIHN0YXRlID0geyB3ZWJob29rOiBXZWJob29rLmdldCgpIHx8IFwiXCIsIHVzZXJuYW1lOiBVc2VybmFtZS5nZXQoKSB8fCBcIlwiLCB0aGVtZTogVGhlbWUuZ2V0KCkgfHwgXCJcIiB9O1xuXG4gICAgaGFuZGxlV2ViaG9vayA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCB3ZWJob29rID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWJob29rIH0pO1xuICAgICAgICBXZWJob29rLnNldCh3ZWJob29rIHx8IG51bGwpO1xuICAgIH07XG5cbiAgICBoYW5kbGVVc2VybmFtZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcm5hbWUgfSk7XG4gICAgICAgIFVzZXJuYW1lLnNldCh1c2VybmFtZSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVRoZW1lID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCB0aGVtZSA9IGUudGFyZ2V0LnZhbHVlIGFzIFwibGlnaHRcIiB8IFwiZGFya1wiIHwgXCJcIjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRoZW1lIH0pO1xuICAgICAgICBUaGVtZS5zZXQodGhlbWUgfHwgbnVsbCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgICAgPGxhYmVsPldlYmhvb2sgVVJMXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ1cmxcIiB2YWx1ZT17dGhpcy5zdGF0ZS53ZWJob29rfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVXZWJob29rfS8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPtCY0LzRj1xuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VybmFtZX0vPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD7QotC10LzQsFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3RoaXMuc3RhdGUudGhlbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRoZW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPtCh0LjRgdGC0LXQvNC90LDRjzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGlnaHRcIj7QodCy0LXRgtC70LDRjzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGFya1wiPtCi0ZHQvNC90LDRjzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRvZ2dsZUNhbGxiYWNrICYmIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy50b2dnbGVDYWxsYmFjayEoZmFsc2UpfT7Ql9Cw0LrRgNGL0YLRjDwvYnV0dG9uPn1cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIE5hdkJ1dHRvblByb3BzID0geyB0b2dnbGVDYWxsYmFjaz86IChleHBhbmRlZDogYm9vbGVhbikgPT4gdm9pZCB9O1xuXG4vKipcbiAqIENvbXBvbmVudCB1c2VkIHRvIGluZGljYXRlIHRoZSBjb250cm9scyBmb3IgYnJpbmdpbmcgdXAgdGhlIG1lbnUgcGFuZS5cbiAqIEhhbmRsZXMgdXNlciBjbGlja3MsIGFuaW1hdGluZyBhcHByb3ByaWF0ZWx5IHdoZW4gdGhlIG1lbnUgaXMgb3BlbmVkLCBjaGFuZ2luZyB0d28gbGluZXNcbiAqIG9mIHRoZSBidXJnZXIgaW50byBhIGNyb3NzLCBhbmQgaGlkaW5nIHRoZSB0aGlyZCBvbmUsIG9yIHJldmVydGluZyB3aGVuIHRoZSBtZW51IHBhbmUgaXMgaGlkZGVuLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZCdXR0b24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PE5hdkJ1dHRvblByb3BzLCB7IGV4cGFuZGVkOiBib29sZWFuIH0+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBOYXZCdXR0b25Qcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGV4cGFuZGVkOiBmYWxzZSB9O1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgZm9yIHVzZXIgaW50ZXJhY3Rpb24gb2YgY2xpY2tpbmcgb24gdGhlIG5hdiBidXR0b247XG4gICAgICogaXQgdG9nZ2xlcyB0aGUgZXhwYW5kZWQgc3RhdGUsIGFuZCBpZiBjYWxsYmFjayBoYXMgYmVlbiBwcm92aWRlZFxuICAgICAqIGZvciB0aGUgY29tcG9uZW50LCBydW5zIGl0IHdpdGggbmV3IGV4cGFuc2lvbiBzdGF0ZS5cbiAgICAgKi9cbiAgICBoYW5kbGVDbGljaygpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSAhdGhpcy5zdGF0ZS5leHBhbmRlZDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV4cGFuZGVkOiBuZXdTdGF0ZSB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudG9nZ2xlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlQ2FsbGJhY2sobmV3U3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcG9uZW50IHJlbmRlcmVyLCBjcmVhdGVzIGJhc2UgU1ZHIGVsZW1lbnQgd2l0aCB0aHJlZSBob3Jpem9udGFsIGxpbmVzIHdpdGhpbi5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgbGluZXMgPSBbMiwgNSwgOF0ubWFwKHkgPT4gPGxpbmUgeDE9XCIxLjVcIiB5MT17eX0geDI9XCI4LjVcIiB5Mj17eX0gLz4pO1xuXG4gICAgICAgIHJldHVybiA8c3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAgMTBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWJ1dHRvbiAke3RoaXMuc3RhdGUuZXhwYW5kZWQgPyBcImV4cGFuZGVkXCIgOiBcIlwifWB9XG4gICAgICAgICAgICBzdHlsZT17eyBzdHJva2VXaWR0aDogMS41LCBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgID57bGluZXN9PC9zdmc+O1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZmxhdHRlbiwgaXNBcnJheSB9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCBSZXN1bHQgZnJvbSBcInNyYy9tb2RlbC9yZXN1bHRcIjtcbmltcG9ydCBTeW1ib2xzIGZyb20gXCJzcmMvbW9kZWwvc3ltYm9sc1wiO1xuaW1wb3J0IFN5bWJvbERpc3BsYXkgZnJvbSBcInNyYy92aWV3L2Rpc3BsYXkvc3ltYm9sXCI7XG5pbXBvcnQgeyBhZGp1ZGljYXRlUm9sbCwgcmVtb3ZlT3Bwb3NpbmdTeW1ib2xzIH0gZnJvbSBcInNyYy91dGlsL2FkanVkaWNhdGVcIjtcbmltcG9ydCB7IG9yZGVyU3ltYm9scyB9IGZyb20gXCJzcmMvdXRpbC9vcmRlclwiO1xuaW1wb3J0IHsgQWxsb3dlZFJlc3VsdHMgfSBmcm9tIFwic3JjL21vZGVsL2RpY2VcIjtcblxuY29uc3QgUm9sbFJlc3VsdHM6IFJlYWN0LlNGQzx7IHJlc3VsdHM6IEFsbG93ZWRSZXN1bHRzW10gfT4gPSAoeyByZXN1bHRzIH0pID0+IHtcblxuICAgIGxldCBzdGF0dXM6IFJlc3VsdCA9IFJlc3VsdC5ORVVUUkFMO1xuICAgIGNvbnN0IHJlc3VsdHNTeW1ib2xzOiBTeW1ib2xzW11bXSA9IFtdLFxuICAgICAgICAgIHJlc3VsdHNOdW1iZXJzOiBudW1iZXJbXSA9IFtdLFxuICAgICAgICAgIGVsZW1lbnRzOiBKU1guRWxlbWVudFtdID0gW107XG5cbiAgICByZXN1bHRzLmZvckVhY2gocmVzdWx0ID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHJlc3VsdHNOdW1iZXJzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJlc3VsdHNTeW1ib2xzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSWYgdGhlcmUgYXJlIGFueSBzeW1ib2xzLCBsZXQncyBmbGF0dGVuIHRoZSByZXN1bHRzIGFuZFxuICAgIC8vIGVsaW1pbmF0ZSB0aGUgb3Bwb3Npbmcgb25lcyBmb3IgZGlzcGxheTsgYWxzbyBhZGp1ZGljYXRlXG4gICAgLy8gdGhlIHJvbGwgcmVzdWx0cy5cbiAgICBpZiAocmVzdWx0c1N5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGZsYXRSb2xsID0gcmVtb3ZlT3Bwb3NpbmdTeW1ib2xzKGZsYXR0ZW4ocmVzdWx0c1N5bWJvbHMpKS5zb3J0KG9yZGVyU3ltYm9scyk7XG4gICAgICAgIHN0YXR1cyA9IGFkanVkaWNhdGVSb2xsKGZsYXRSb2xsKTtcbiAgICAgICAgaWYgKGZsYXRSb2xsLmxlbmd0aCkge1xuICAgICAgICAgICAgZWxlbWVudHMucHVzaCg8ZGl2IGNsYXNzTmFtZT17YGdyb3VwIHN5bWJvbGljICR7ZmxhdFJvbGwubGVuZ3RoID4gOCA/IFwibGFyZ2VcIiA6IFwiXCJ9YH0+e2ZsYXRSb2xsLm1hcChzID0+IDxTeW1ib2xEaXNwbGF5IHN5bWJvbD17c30vPil9PC9kaXY+KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVsZW1lbnRzLnB1c2goLi4ucmVzdWx0c051bWJlcnMubWFwKHNjb3JlID0+IDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAgbnVtZXJpY1wiPntzY29yZX08L2Rpdj4pKTtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YHJvbGwtcmVzdWx0cyAke3N0YXR1c31gfT57ZWxlbWVudHN9PC9kaXY+O1xufTtcbmV4cG9ydCBkZWZhdWx0IFJvbGxSZXN1bHRzO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyJdLCJzb3VyY2VSb290IjoiIn0=