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


/** Map every Genesys symbol to its SVG representation. */
function renderSymbol(symbol) {
    switch (symbol) {
        case "s" /* Symbols.SUCCESS */:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("polygon", { points: "5,1 9,5 5,9 1,5" });
        case "f" /* Symbols.FAILURE */:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", { x1: "1", y1: "1", x2: "9", y2: "9" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", { x1: "1", y1: "9", x2: "9", y2: "1" }));
        case "a" /* Symbols.ADVANTAGE */:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("polygon", { points: "5,1 9,9 1,9" });
        case "h" /* Symbols.THREAT */:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("polygon", { points: "1,1 9,1 5,9" });
        case "t" /* Symbols.TRIUMPH */:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", { cx: "5", cy: "5", r: "4", fill: "none" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("polygon", { points: "5,1 9,5 5,9 1,5" }));
        case "d" /* Symbols.DESPAIR */:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", { cx: "5", cy: "5", r: "4", fill: "none" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", { x1: "1", y1: "1", x2: "9", y2: "9" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", { x1: "1", y1: "9", x2: "9", y2: "1" }));
        default:
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
    }
}
/** Render Genesys dice symbols using inline SVG icons. */
const SymbolDisplay = ({ symbol }) => {
    const list = Object(lodash_es__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(symbol) ? symbol : [symbol];
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "dice-symbol" }, list.map((s, i) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { key: i, viewBox: "0 0 10 10" }, renderSymbol(s))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvZGljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvYWRqdWRpY2F0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9vcmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9kaWNlLWNvbnRyb2xzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9kaWNlLWxpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L2Rpc3BsYXkvZGljZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZGlzcGxheS9zeW1ib2wudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L21haW4tYXBwLWFyZWEudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L21lbnUudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L25hdi1idXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L3JvbGwtcmVzdWx0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL21haW4ubGVzcz85MjJkIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7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QUksQ0FBQyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyw2REFBSyxTQUFTLEVBQUMsZUFBZSxJQUFFLEtBQUssQ0FBTyxDQUFDLENBQUMsQ0FBQztJQUU1RixPQUFPLDZEQUFLLFNBQVMsRUFBRSxnQkFBZ0IsTUFBTSxFQUFFLElBQUcsUUFBUSxDQUFPLENBQUM7QUFDdEUsQ0FBQyxDQUFDO0FBQ2Esb0VBQVcsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3ZDM0IsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsdUI7Ozs7Ozs7Ozs7OztBQ0FBLDBCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZ2VuZXN5cy1kaWNlLXJvbGxlci9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwic3JjL21vZGVsL3NldHRpbmdzXCI7XG5pbXBvcnQgTWFpbkFwcEFyZWEgZnJvbSBcInNyYy92aWV3L21haW4tYXBwLWFyZWFcIjtcbmltcG9ydCBOYXZCdXR0b24gZnJvbSBcInNyYy92aWV3L25hdi1idXR0b25cIjtcbmltcG9ydCBNZW51IGZyb20gXCJzcmMvdmlldy9tZW51XCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7IHRoZW1lU2V0dGluZ3M6IHR5cGVvZiBUaGVtZSB9LCB7IG1lbnVPcGVuOiBib29sZWFuIH0+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiB7IHRoZW1lU2V0dGluZ3M6IHR5cGVvZiBUaGVtZSB9KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgbWVudU9wZW46IGZhbHNlIH07XG4gICAgICAgIHRoaXMuc3dpdGNoVGhlbWUgPSB0aGlzLnN3aXRjaFRoZW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudG9nZ2xlTWVudSA9IHRoaXMudG9nZ2xlTWVudS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHRvZ2dsZU1lbnUob3BlbjogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVudU9wZW46IG9wZW4gfSk7XG4gICAgfVxuXG4gICAgc3dpdGNoVGhlbWUoKTogdm9pZCB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxpZ2h0XCIsIFwiZGFya1wiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHRoaXMucHJvcHMudGhlbWVTZXR0aW5ncy5nZXRDbGFzcygpKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy50aGVtZVNldHRpbmdzLm9uKHRoaXMuc3dpdGNoVGhlbWUpO1xuICAgICAgICB0aGlzLnN3aXRjaFRoZW1lKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMudGhlbWVTZXR0aW5ncy5vZmYodGhpcy5zd2l0Y2hUaGVtZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPE5hdkJ1dHRvbiB0b2dnbGVDYWxsYmFjaz17dGhpcy50b2dnbGVNZW51fS8+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZW51T3BlbiAmJiA8TWVudSB0b2dnbGVDYWxsYmFjaz17dGhpcy50b2dnbGVNZW51fS8+fSBcbiAgICAgICAgICAgIDxoMSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnRoZW1lU2V0dGluZ3MudG9nZ2xlKCl9PjxzcGFuIGNsYXNzTmFtZT1cImxvZ29cIj5HZW5lc3lzPC9zcGFuPiBEaWNlIFJvbGxlcjwvaDE+XG4gICAgICAgICAgICA8TWFpbkFwcEFyZWEvPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PjtcbiAgICB9XG59XG5cbi8vIFJlbW92ZSBmYWxsYmFjayBuby1KUyBjb250ZW50IGFuZCByZW1vdmUgdGhlIGNsYXNzIGZyb20gdGhlIDxib2R5PiB0YWdcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWpzXCIpO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCB0aGVtZVNldHRpbmdzPXtUaGVtZX0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpISk7XG4iLCJpbXBvcnQgU3ltYm9scyBmcm9tIFwic3JjL21vZGVsL3N5bWJvbHNcIjtcblxuLyoqIFR5cGUgdXNlZCB0byBkZXNjcmliZSBhbGwgdGhlIGRpY2UgY3VycmVudGx5IGhhbmRsZWQgYnkgdGhlIGFwcC4gKi9cbmV4cG9ydCB0eXBlIEFsbG93ZWREaWNlID0gR2VuZXN5c0RpZSB8IFBlcmNlbnRpbGVEaWU7XG4vKiogVHlwZSB1c2VkIHRvIGRlc2NyaWJlIGFsbCB0aGUgZGljZSByZXN1bHRzIGN1cnJlbnRseSBoYW5kbGVkIGJ5IHRoZSBhcHAuICovXG5leHBvcnQgdHlwZSBBbGxvd2VkUmVzdWx0cyA9IEFsbG93ZWREaWNlW1wiY3VycmVudFJlc3VsdFwiXTtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBtb2RlbHMgcmVwcmVzZW50aW5nIGFsbCBkaWNlIHVzZWQgaW4gdGhlIGFwcC5cbiAqIFNob3VsZG4ndCBiZSB1c2VkIG9uIGl0cyBvd24sIGJ1dCBjcmVhdGVzIGJhc2UgZm9yIGFsbCBvdGhlciBkaWNlLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGllPFJlc3VsdFR5cGUgZXh0ZW5kcyBBbGxvd2VkUmVzdWx0cz4ge1xuXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoYXQgdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCByb2xsIHdhcy5cbiAgICAgKiBJZiBudWxsLCB0aGUgZGllIGhhcyBub3QgYmVlbiByb2xsZWQgeWV0LCBlbHNlIGl0J3NcbiAgICAgKiB0aGUgY29udGVudHMgb2YgdGhlIHJlc3VsdGluZyBzaWRlLlxuICAgICAqL1xuICAgIGN1cnJlbnRSZXN1bHQ6IFJlc3VsdFR5cGUgfCBudWxsID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRoYXQgY291bnRzIHRoZSBudW1iZXIgb2YgdGltZXMgdGhpcyBkaWVcbiAgICAgKiBoYXMgYmVlbiByb2xsZWQuIEl0J3MgdXNlZCBwcmltYXJpbHkgaW4gcmVuZGVyaW5nLCB0byBkZXRlcm1pbmVcbiAgICAgKiB3aGVuIHRoZSBkaWUgaGFzIGNoYW5nZWQgc3RhdGUgYnkgYmVpbmcgcm9sbGVkLCBhcyBvcHBvc2VkIHRvXG4gICAgICogYmVpbmcgc2VsZWN0ZWQsIG9yIG1vdmVkIGluIHRoZSBsaXN0LlxuICAgICAqIEluY3JlYXNlcyBieSBvbmUgb24gZXZlcnkgaW52b2NhdGlvbiBvZiBgLnJvbGwoKWAuXG4gICAgICovXG4gICAgcm9sbENvdW50OiBudW1iZXIgPSAwO1xuXG4gICAgLyoqXG4gICAgICogUm9sbHMgdGhlIGRpZSwgc2VsZWN0aW5nIHJhbmRvbSByZXN1bHQgZnJvbSB0aGUgcG9zc2libGUgb25lcyxcbiAgICAgKiBhc3NpZ25zIGl0IHRvIGN1cnJlbnQgcmVzdWx0IGFuZCByZXR1cm5zIGl0LlxuICAgICAqL1xuICAgIGFic3RyYWN0IHJvbGwoKTogUmVzdWx0VHlwZTtcblxufVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIG1vZGVscyByZXByZXNlbnRpbmcgYWxsIHRoZSBHZW5lc3lzIGRpY2UuXG4gKiBQcmltYXJ5IHNldCBvZiBkaWNlIGluIHRoZSBzeXN0ZW0sIGV4Y2x1ZGluZyB0aGUgcGVyY2VudGlsZSBkaWVcbiAqIHVzZWQgaW4gc29tZSBjb21iYXQgc2l0dWF0aW9ucy5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdlbmVzeXNEaWUgZXh0ZW5kcyBEaWU8U3ltYm9sc1tdPiB7XG5cbiAgICAvKipcbiAgICAgKiBMaXN0IG9mIGFsbCBwb3NzaWJsZSByZXN1bHRzIHRoYXQgY2FuIGNvbWUgdXAgb24gdGhlIGRpZS5cbiAgICAgKiBFYWNoIHNpZGUgaXMgcmVwcmVzZW50ZWQgc2VwYXJhdGVseSwgc28gaWYgdHdvIHNpZGVzIGFyZVxuICAgICAqIHRoZSBzYW1lLCB0aGV5IHdpbGwgYmUgbGlzdGVkIHR3aWNlIGhlcmUuXG4gICAgICovXG4gICAgYWJzdHJhY3QgcmVhZG9ubHkgcG9zc2libGVSZXN1bHRzOiBTeW1ib2xzW11bXTtcblxuICAgIC8qKlxuICAgICAqIFJvbGxzIHRoZSBkaWUsIHNlbGVjdGluZyByYW5kb20gcmVzdWx0IGZyb20gdGhlIHBvc3NpYmxlIG9uZXMsXG4gICAgICogYXNzaWducyBpdCB0byBjdXJyZW50IHJlc3VsdCBhbmQgcmV0dXJucyBpdC5cbiAgICAgKi9cbiAgICByb2xsKCk6IFN5bWJvbHNbXSB7XG4gICAgICAgIHRoaXMucm9sbENvdW50Kys7XG4gICAgICAgIHRoaXMuY3VycmVudFJlc3VsdCA9IHRoaXMucG9zc2libGVSZXN1bHRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucG9zc2libGVSZXN1bHRzLmxlbmd0aCldO1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UmVzdWx0O1xuICAgIH1cblxufVxuXG4vKipcbiAqIE1vZGVsIGZvciB0aGUgYmFzZSBwb3NpdGl2ZSBkaWUsIHRoZSBncmVlbiBlaWdodC1zaWRlZCBvbmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBBYmlsaXR5RGllIGV4dGVuZHMgR2VuZXN5c0RpZSB7XG4gICAgcG9zc2libGVSZXN1bHRzID0gW1xuICAgICAgICBbXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTU10sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1NdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTLCBTeW1ib2xzLlNVQ0NFU1NdLFxuICAgICAgICBbU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTLCBTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLkFEVkFOVEFHRSwgU3ltYm9scy5BRFZBTlRBR0VdXG4gICAgXVxufVxuXG4vKipcbiAqIE1vZGVsIGZvciB0aGUgdXBncmFkZWQgcG9zaXRpdmUgZGllLCB0aGUgeWVsbG93IHR3ZWx2ZS1zaWRlZCBvbmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9maWNpZW5jeURpZSBleHRlbmRzIEdlbmVzeXNEaWUge1xuICAgIHBvc3NpYmxlUmVzdWx0cyA9IFtcbiAgICAgICAgW10sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1NdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTUywgU3ltYm9scy5TVUNDRVNTXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTUywgU3ltYm9scy5TVUNDRVNTXSxcbiAgICAgICAgW1N5bWJvbHMuQURWQU5UQUdFXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTUywgU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTLCBTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1MsIFN5bWJvbHMuQURWQU5UQUdFXSxcbiAgICAgICAgW1N5bWJvbHMuQURWQU5UQUdFLCBTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLkFEVkFOVEFHRSwgU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5UUklVTVBIXVxuICAgIF1cbn1cblxuLyoqXG4gKiBNb2RlbCBmb3IgdGhlIGNpcmN1bXN0YW50aWFsIHBvc2l0aXZlIGRpZSwgdGhlIGJsdWUgc2l4LXNpZGVkIG9uZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEJvb3N0RGllIGV4dGVuZHMgR2VuZXN5c0RpZSB7XG4gICAgcG9zc2libGVSZXN1bHRzID0gW1xuICAgICAgICBbXSxcbiAgICAgICAgW10sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1NdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTLCBTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLkFEVkFOVEFHRSwgU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5BRFZBTlRBR0VdXG4gICAgXVxufVxuXG4vKipcbiAqIE1vZGVsIGZvciB0aGUgYmFzZSBuZWdhdGl2ZSBkaWUsIHRoZSBwdXJwbGUgZWlnaHQtc2lkZWQgb25lLlxuICovXG5leHBvcnQgY2xhc3MgRGlmZmljdWx0eURpZSBleHRlbmRzIEdlbmVzeXNEaWUge1xuICAgIHBvc3NpYmxlUmVzdWx0cyA9IFtcbiAgICAgICAgW10sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkVdLFxuICAgICAgICBbU3ltYm9scy5GQUlMVVJFLCBTeW1ib2xzLkZBSUxVUkVdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVQsIFN5bWJvbHMuVEhSRUFUXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRSwgU3ltYm9scy5USFJFQVRdXG4gICAgXVxufVxuXG4vKipcbiAqIE1vZGVsIGZvciB0aGUgdXBncmFkZWQgbmVnYXRpdmUgZGllLCB0aGUgcmVkIHR3ZWx2ZS1zaWRlZCBvbmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2VEaWUgZXh0ZW5kcyBHZW5lc3lzRGllIHtcbiAgICBwb3NzaWJsZVJlc3VsdHMgPSBbXG4gICAgICAgIFtdLFxuICAgICAgICBbU3ltYm9scy5GQUlMVVJFXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRV0sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkUsIFN5bWJvbHMuRkFJTFVSRV0sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkUsIFN5bWJvbHMuRkFJTFVSRV0sXG4gICAgICAgIFtTeW1ib2xzLlRIUkVBVF0sXG4gICAgICAgIFtTeW1ib2xzLlRIUkVBVF0sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkUsIFN5bWJvbHMuVEhSRUFUXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRSwgU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVQsIFN5bWJvbHMuVEhSRUFUXSxcbiAgICAgICAgW1N5bWJvbHMuVEhSRUFULCBTeW1ib2xzLlRIUkVBVF0sXG4gICAgICAgIFtTeW1ib2xzLkRFU1BBSVJdXG4gICAgXVxufVxuXG4vKipcbiAqIE1vZGVsIGZvciB0aGUgY2lyY3Vtc3RhbnRpYWwgbmVnYXRpdmUgZGllLCB0aGUgYmxhY2sgc2l4LXNpZGVkIG9uZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNldGJhY2tEaWUgZXh0ZW5kcyBHZW5lc3lzRGllIHtcbiAgICBwb3NzaWJsZVJlc3VsdHMgPSBbXG4gICAgICAgIFtdLFxuICAgICAgICBbXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRV0sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkVdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVRdXG4gICAgXVxufVxuXG4vKipcbiAqIE1vZGVsIGZvciB0aGUgcGVyY2VudGlsZSBkaWUsIHVzZWQgdG8gZ2VuZXJhdGUgbnVtZXJpY2FsIHJlc3VsdFxuICogYmV0d2VlbiAxIGFuZCAxMDAuIFVzZWQgdG8gZXN0YWJsaXNoIGNyaXRpY2FsIHJlc3VsdHMgaW4gY29tYmF0LlxuICovXG5leHBvcnQgY2xhc3MgUGVyY2VudGlsZURpZSBleHRlbmRzIERpZTxudW1iZXI+IHtcbiAgICByb2xsKCkge1xuICAgICAgICB0aGlzLnJvbGxDb3VudCsrO1xuICAgICAgICB0aGlzLmN1cnJlbnRSZXN1bHQgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRSZXN1bHQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcblxudHlwZSBSZWR1eDxQYXlsb2FkPiA9IHtcbiAgICBkaXNwYXRjaChhcmc6IHsgdHlwZTogXCJDSEFOR0VcIiwgdmFsdWU6IFBheWxvYWQgfSk6IHZvaWQ7XG4gICAgc3Vic2NyaWJlKGFyZzogKCkgPT4gdm9pZCk6ICgpID0+IHZvaWQ7XG4gICAgZ2V0U3RhdGUoKTogeyB2YWx1ZTogUGF5bG9hZCB9O1xufVxuXG5leHBvcnQgY2xhc3MgU2V0dGluZ3M8UGF5bG9hZD4ge1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBpbml0aWFsVmFsdWU/OiBQYXlsb2FkKSB7XG5cbiAgICAgICAgY29uc3Qgc2F2ZWRWYWx1ZTogc3RyaW5nIHwgbnVsbCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKTtcbiAgICAgICAgaWYgKHNhdmVkVmFsdWUpIHtcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IEpTT04ucGFyc2Uoc2F2ZWRWYWx1ZSkudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnN0b3JlID0gY3JlYXRlU3RvcmUodGhpcy5yZWR1Y2VyLmJpbmQodGhpcyksIHsgdmFsdWU6IGluaXRpYWxWYWx1ZSB9KTtcbiAgICB9XG5cbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIHN0b3JlOiBSZWR1eDxQYXlsb2FkPjtcblxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uczogTWFwPChwOiBQYXlsb2FkKSA9PiB2b2lkLCAoKSA9PiB2b2lkPiA9IG5ldyBNYXAoKTtcblxuICAgIHByb3RlY3RlZCByZWR1Y2VyKHN0YXRlOiB7IHZhbHVlOiBQYXlsb2FkIH0sIGFjdGlvbjogeyB0eXBlPzogXCJDSEFOR0VcIiwgdmFsdWU6IFBheWxvYWQgfSk6IHsgdmFsdWU6IFBheWxvYWQgfSB7XG4gICAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gXCJDSEFOR0VcIiAmJiBhY3Rpb24udmFsdWUgIT09IHN0YXRlLnZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7IHZhbHVlOiBhY3Rpb24udmFsdWUgfTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG4gICAgb24oY2FsbGJhY2s6IChwOiBQYXlsb2FkKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiBjYWxsYmFjayh0aGlzLmdldCgpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnNldChjYWxsYmFjaywgdGhpcy5zdG9yZS5zdWJzY3JpYmUoaGFuZGxlcikpO1xuICAgIH1cblxuICAgIG9mZihjYWxsYmFjazogKHA6IFBheWxvYWQpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSB0aGlzLnN1YnNjcmlwdGlvbnMuZ2V0KGNhbGxiYWNrKTtcbiAgICAgICAgaWYgKHVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0KCk6IFBheWxvYWQge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLnZhbHVlO1xuICAgIH1cblxuICAgIHNldCh2YWx1ZTogUGF5bG9hZCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHsgdHlwZTogXCJDSEFOR0VcIiwgdmFsdWUgfSk7XG4gICAgfVxufVxuXG50eXBlIFRoZW1lT3B0aW9ucyA9IFwibGlnaHRcIiB8IFwiZGFya1wiIHwgbnVsbDtcbmNvbnN0IHRoZW1lT3B0aW9uTGlzdDogVGhlbWVPcHRpb25zW10gPSBbXCJsaWdodFwiLCBcImRhcmtcIiwgbnVsbF07XG5cbmNsYXNzIFRoZW1lU2V0dGluZ3MgZXh0ZW5kcyBTZXR0aW5nczxUaGVtZU9wdGlvbnM+IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcInRoZW1lXCIsIG51bGwpO1xuICAgIH1cblxuICAgIGdldENsYXNzKCk6IE5vbk51bGxhYmxlPFRoZW1lT3B0aW9ucz4ge1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVGhlbWUgPSB0aGlzLmdldCgpO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZFRoZW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRUaGVtZTtcbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBcImxpZ2h0XCI7XG4gICAgICAgIH0gZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBcImRhcmtcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJsaWdodFwiO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbmV3VGhlbWVJbmRleCA9ICh0aGVtZU9wdGlvbkxpc3QuaW5kZXhPZih0aGlzLmdldCgpKSArIDEpICUgdGhlbWVPcHRpb25MaXN0Lmxlbmd0aDtcbiAgICAgICAgdGhpcy5zZXQodGhlbWVPcHRpb25MaXN0W25ld1RoZW1lSW5kZXhdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBUaGVtZSA9IG5ldyBUaGVtZVNldHRpbmdzKCk7XG5cbmV4cG9ydCBjb25zdCBXZWJob29rID0gbmV3IFNldHRpbmdzPHN0cmluZyB8IG51bGw+KFwid2ViaG9va1wiLCBudWxsKTtcbmV4cG9ydCBjb25zdCBVc2VybmFtZSA9IG5ldyBTZXR0aW5nczxzdHJpbmc+KFwidXNlcm5hbWVcIiwgXCJcIik7XG4iLCJpbXBvcnQgeyBjb3VudEJ5IH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IFJlc3VsdCBmcm9tIFwic3JjL21vZGVsL3Jlc3VsdFwiO1xuaW1wb3J0IFN5bWJvbHMgZnJvbSBcInNyYy9tb2RlbC9zeW1ib2xzXCI7XG5cbi8qKlxuICogTWV0aG9kIHVzZWQgdG8gcmVzb2x2ZSBwYXJ0IG9mIHRoZSByb2xsIHdoZXJlIHN1Y2Nlc3NlcyBhbmQgZmFpbHVyZXMgL1xuICogYWR2YW50YWdlcyBhbmQgdGhyZWF0cyBjYW5jZWwgZWFjaCBvdGhlciBvdXQuIEdpdmVuIGxpc3Qgb2Ygc3ltYm9scyxcbiAqIGNhbmNlbHMgdGhlbSBvdXQgYW5kIHJldHVybnMgdGhlIGxpc3Qgd2l0aCBvbmx5IHRoZSByZW1haW5pbmcgc3ltYm9scy5cbiAqXG4gKiBAcGFyYW0gc3ltYm9scyAgTGlzdCBvZiBzeW1ib2xzIHJvbGxlZFxuICogQHJldHVybnMgICAgICAgIExpc3Qgd2l0aCBzeW1ib2xzIHJlbWFpbmluZyBhZnRlciBjYW5jZWxsaW5nIHJlc3VsdHMgb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVPcHBvc2luZ1N5bWJvbHMoc3ltYm9sczogU3ltYm9sc1tdKTogU3ltYm9sc1tdIHtcblxuICAgIC8vIE1ha2UgdGhlIGZpcnN0IHBhc3MgYnkgY291bnRpbmcgYWxsIHRoZSBzeW1ib2xzXG4gICAgY29uc3QgcmVtb3ZlID0gY291bnRCeShzeW1ib2xzKTtcblxuICAgIC8vIERlbGV0ZSBjb3VudHMgZm9yIHRyaXVtcGhzIGFuZCBkZXNwYWlycywgYXMgdGhlc2UgbmV2ZXIgY2FuY2VsIGVhY2ggb3RoZXIgb3V0XG4gICAgZGVsZXRlIHJlbW92ZVtTeW1ib2xzLlRSSVVNUEhdO1xuICAgIGRlbGV0ZSByZW1vdmVbU3ltYm9scy5ERVNQQUlSXTtcblxuICAgIC8vIFVzZSB0aGUgY291bnRzIGFuZCBtYXJrIHRoZSBzbWFsbGVyIG51bWJlciBvZiBzeW1ib2xzIGZvciByZW1vdmFsXG4gICAgcmVtb3ZlW1N5bWJvbHMuU1VDQ0VTU10gPSByZW1vdmVbU3ltYm9scy5GQUlMVVJFXSA9IE1hdGgubWluKHJlbW92ZVtTeW1ib2xzLlNVQ0NFU1NdLCByZW1vdmVbU3ltYm9scy5GQUlMVVJFXSk7XG4gICAgcmVtb3ZlW1N5bWJvbHMuQURWQU5UQUdFXSA9IHJlbW92ZVtTeW1ib2xzLlRIUkVBVF0gPSBNYXRoLm1pbihyZW1vdmVbU3ltYm9scy5BRFZBTlRBR0VdLCByZW1vdmVbU3ltYm9scy5USFJFQVRdKTtcblxuICAgIGNvbnN0IHJlbWFpbmluZ1N5bWJvbHM6IFN5bWJvbHNbXSA9IFtdO1xuICAgIHN5bWJvbHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKHJlbW92ZVtpdGVtXSkge1xuICAgICAgICAgICAgcmVtb3ZlW2l0ZW1dLS07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1haW5pbmdTeW1ib2xzLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZW1haW5pbmdTeW1ib2xzO1xufVxuXG4vKipcbiAqIFJlc29sdmVzIHRoZSByb2xsOyBnaXZlbiB0aGUgbGlzdCBvZiByZXN1bHRzIHJvbGxlZCwgY291bnRzIHRoZW0gdXAsXG4gKiBhbmQgcmV0dXJucyB3aGV0aGVyIHRoZSByb2xsIHdhcyBzdWNjZXNzZnVsIG9yIGZhaWxlZC5cbiAqXG4gKiBAcGFyYW0gc3ltYm9scyAgTGlzZiBvZiBzeW1ib2xzIHJvbGxlZFxuICogQHJlc3VsdHMgICAgICAgIFdoZXRoZXIgdGhlIHJvbGwgd2FzIHN1Y2Nlc3NmdWwgb3IgZmFpbGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGp1ZGljYXRlUm9sbChzeW1ib2xzOiBTeW1ib2xzW10pOiBSZXN1bHQge1xuXG4gICAgY29uc3QgY291bnRzID0gY291bnRCeShzeW1ib2xzKSxcbiAgICAgICAgICBjb3VudFN1Y2Nlc3MgPSAoY291bnRzW1N5bWJvbHMuVFJJVU1QSF0gfHwgMCkgKyAoY291bnRzW1N5bWJvbHMuU1VDQ0VTU10gfHwgMCksXG4gICAgICAgICAgY291bnRGYWlsdXJlID0gKGNvdW50c1tTeW1ib2xzLkRFU1BBSVJdIHx8IDApICsgKGNvdW50c1tTeW1ib2xzLkZBSUxVUkVdIHx8IDApO1xuXG4gICAgY29uc29sZS53YXJuKFwiQ09VTlQ6IFwiLCBjb3VudHMpO1xuXG4gICAgcmV0dXJuIChjb3VudFN1Y2Nlc3MgLSBjb3VudEZhaWx1cmUgPiAwKSA/IFJlc3VsdC5TVUNDRVNTIDogUmVzdWx0LkZBSUxVUkU7XG59XG4iLCJpbXBvcnQgU3ltYm9scyBmcm9tIFwic3JjL21vZGVsL3N5bWJvbHNcIjtcbmltcG9ydCB7IEdlbmVzeXNEaWUsIEFiaWxpdHlEaWUsIFByb2ZpY2llbmN5RGllLCBCb29zdERpZSwgRGlmZmljdWx0eURpZSwgQ2hhbGxlbmdlRGllLCBTZXRiYWNrRGllLCBQZXJjZW50aWxlRGllIH0gZnJvbSBcInNyYy9tb2RlbC9kaWNlXCI7XG5cbi8qKlxuICogT3JkZXIgcmVxdWlyZWQgb2YgdGhlIHN5bWJvbHMgb24gdGhlIGRpY2UuXG4gKiBHb2luZyBwb3NpdGl2ZSBmaXJzdCwgbmVnYXRpdmUgc2Vjb25kLCBhbmQgZnJvbSBtb3N0IHRvIGxlYXN0IHBvd2VyZnVsLlxuICovXG5jb25zdCBTWU1CT0xfT1JERVJJTkcgPSBPYmplY3QuZnJlZXplKHtcbiAgICBbU3ltYm9scy5UUklVTVBIXTogICAwLFxuICAgIFtTeW1ib2xzLlNVQ0NFU1NdOiAgIDEsXG4gICAgW1N5bWJvbHMuQURWQU5UQUdFXTogMixcbiAgICBbU3ltYm9scy5ERVNQQUlSXTogICAzLFxuICAgIFtTeW1ib2xzLkZBSUxVUkVdOiAgIDQsXG4gICAgW1N5bWJvbHMuVEhSRUFUXTogICAgNVxufSk7XG5cbi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbiB0byBoZWxwIHdpdGggb3JkZXJpbmcgdGhlIHJlc3VsdHMsIGZpcnN0IGJ5IGdyb3VwaW5nIHBvc2l0aXZlIGRpY2UgZmlyc3QsXG4gKiBuZWdhdGl2ZSBzZWNvbmQsIHRoZW4gYnkgb3JkZXJpbmcgZWFjaCBncm91cCBmcm9tIG1vc3QgcG93ZXJmdWwgdG8gbGVhc3QgcG93ZXJmdWwuXG4gKiBJbnRlbmRlZCB0byBiZSB1c2VkIGFzIGNvbXBhcmUgZnVuY3Rpb24gZm9yIEFycmF5LnNvcnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcmRlclN5bWJvbHMoYTogU3ltYm9scywgYjogU3ltYm9scyk6IG51bWJlciB7XG4gICAgcmV0dXJuIFNZTUJPTF9PUkRFUklOR1thXSBhcyBudW1iZXIgLSBTWU1CT0xfT1JERVJJTkdbYl0gYXMgbnVtYmVyO1xufVxuXG4vKipcbiAqIE9yZGVyIHJlcXVpcmVkIG9mIHRoZSBkaWNlIHRoZW1zZWx2ZXMuXG4gKiBEb25lIGFzIGZ1bmN0aW9uIHJhdGhlciB0aGFuIG1hcCBiZWNhdXNlIHRoZXJlJ3Mgbm8gZWFzeSB3YXkgdG8gdXNlIGNsYXNzIG9mIGluc3RhbmNlXG4gKiBhcyB2YWx1ZSBpbiBUeXBlU2NyaXB0LiBHb2VzIHBvc2l0aXZlIGZpcnN0LCBuZWdhdGl2ZSBzZWNvbmQsIG1vc3QgdG8gbGVhc3QgcG93ZXJmdWwsXG4gKiBhbmQgcGVyY2VudGlsZSBkaWUgZ29lcyBhdCB0aGUgZW5kLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZUZvckRpZShkaWU6IEdlbmVzeXNEaWUgfCBQZXJjZW50aWxlRGllKTogbnVtYmVyIHtcblxuICAgIGlmIChkaWUgaW5zdGFuY2VvZiBQcm9maWNpZW5jeURpZSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2UgaWYgKGRpZSBpbnN0YW5jZW9mIEFiaWxpdHlEaWUpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChkaWUgaW5zdGFuY2VvZiBCb29zdERpZSkge1xuICAgICAgICByZXR1cm4gMjtcbiAgICB9IGVsc2UgaWYgKGRpZSBpbnN0YW5jZW9mIENoYWxsZW5nZURpZSkge1xuICAgICAgICByZXR1cm4gMztcbiAgICB9IGVsc2UgaWYgKGRpZSBpbnN0YW5jZW9mIERpZmZpY3VsdHlEaWUpIHtcbiAgICAgICAgcmV0dXJuIDQ7XG4gICAgfSBlbHNlIGlmIChkaWUgaW5zdGFuY2VvZiBTZXRiYWNrRGllKSB7XG4gICAgICAgIHJldHVybiA1O1xuICAgIH1cbiAgICByZXR1cm4gNjtcbn1cblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGhlbHAgd2l0aCBvcmRlcmluZyB0aGUgZGljZSB0aGVtc2VsdmVzLCBmaXJzdCBieSBncm91cGluZyBwb3NpdGl2ZSBkaWNlIGZpcnN0LFxuICogbmVnYXRpdmUgc2Vjb25kLCB0aGVuIGJ5IG9yZGVyaW5nIGVhY2ggZ3JvdXAgZnJvbSBtb3N0IHBvd2VyZnVsIHRvIGxlYXN0IHBvd2VyZnVsLlxuICogSW50ZW5kZWQgdG8gYmUgdXNlZCBhcyBjb21wYXJlIGZ1bmN0aW9uIGZvciBBcnJheS5zb3J0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJEaWNlKGE6IEdlbmVzeXNEaWUgfCBQZXJjZW50aWxlRGllLCBiOiBHZW5lc3lzRGllIHwgUGVyY2VudGlsZURpZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGdldFZhbHVlRm9yRGllKGEpIC0gZ2V0VmFsdWVGb3JEaWUoYik7XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCBTeW1ib2xzIGZyb20gXCJzcmMvbW9kZWwvc3ltYm9sc1wiO1xuaW1wb3J0IHsgQWxsb3dlZERpY2UsIEdlbmVzeXNEaWUsIEFiaWxpdHlEaWUsIFByb2ZpY2llbmN5RGllLCBCb29zdERpZSwgRGlmZmljdWx0eURpZSwgQ2hhbGxlbmdlRGllLCBTZXRiYWNrRGllLCBQZXJjZW50aWxlRGllIH0gZnJvbSBcInNyYy9tb2RlbC9kaWNlXCI7XG5pbXBvcnQgRGljZURpc3BsYXkgZnJvbSBcInNyYy92aWV3L2Rpc3BsYXkvZGljZVwiO1xuXG50eXBlIERpZUNyZWF0b3I8VCBleHRlbmRzIEFsbG93ZWREaWNlPiA9IHsgY2xzOiBuZXcgKCkgPT4gVCwgcmVzdWx0OiBUW1wiY3VycmVudFJlc3VsdFwiXSB9O1xuY29uc3QgZGljZVRvQ3JlYXRlOiBEaWVDcmVhdG9yPEFsbG93ZWREaWNlPltdID0gW1xuICAgIHsgY2xzOiBBYmlsaXR5RGllLCAgICAgcmVzdWx0OiBbU3ltYm9scy5TVUNDRVNTXSB9LFxuICAgIHsgY2xzOiBQcm9maWNpZW5jeURpZSwgcmVzdWx0OiBbU3ltYm9scy5UUklVTVBIXSB9LFxuICAgIHsgY2xzOiBCb29zdERpZSwgICAgICAgcmVzdWx0OiBbU3ltYm9scy5BRFZBTlRBR0VdIH0sXG4gICAgeyBjbHM6IERpZmZpY3VsdHlEaWUsICByZXN1bHQ6IFtTeW1ib2xzLkZBSUxVUkVdIH0sXG4gICAgeyBjbHM6IENoYWxsZW5nZURpZSwgICByZXN1bHQ6IFtTeW1ib2xzLkRFU1BBSVJdIH0sXG4gICAgeyBjbHM6IFNldGJhY2tEaWUsICAgICByZXN1bHQ6IFtTeW1ib2xzLlRIUkVBVF0gfSxcbiAgICB7IGNsczogUGVyY2VudGlsZURpZSwgIHJlc3VsdDogNDIgfVxuXTtcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBkcmF3cyB0aGUgY29sbGVjdGlvbiBvZiBidXR0b25zIHRoYXQgY2FuIGJlIHVzZWQgdG8gYWRkIG5ldyBkaWNlIHRvIHRoZSBkaWNlIHBvb2wuXG4gKiBPbmNlIHJlbmRlcmVkLCBpdCBkb2Vzbid0IHJlYWxseSBjaGFuZ2UsIHNvIGl0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCByYXRoZXIgdGhhbiBDb21wb25lbnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpY2VDb250cm9scyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8eyBjYWxsYmFjazogKGRpZTogQWxsb3dlZERpY2UpID0+IHZvaWQgfT4ge1xuXG4gICAgLyoqXG4gICAgICogSXRlcmF0ZXMgb3ZlciB0aGUgbGlzdCBvZiBhbGwgdGhlIGRpY2Ugd2UgaGFuZGxlIGluIHRoZSBkaWNlIHJvbGxlcixcbiAgICAgKiBhbG9uZyB3aXRoIGRlZmF1bHQgcmVzdWx0IHRvIHNob3cgKHNvIHRoYXQgdGhlIGRpY2UgYXJlIGVhc2lseSBpZGVudGlmaWFibGUpLFxuICAgICAqIGFuZCByZW5kZXJzIGVhY2ggb2YgdGhvc2UgaW4gYSBidXR0b24gdGhhdCBhZGRzIGEgbmV3IGRpZSBvZiB0aGF0IHR5cGUgd2hlbmV2ZXIgaXQncyBjbGlja2VkLlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBhZGRpdGlvbkJ1dHRvbnMgPSBkaWNlVG9DcmVhdGUubWFwKCh7IGNscywgcmVzdWx0IH0sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpZU5hbWUgPSBzdGFydENhc2UoY2xzLm5hbWUpLnNwbGl0KFwiIFwiKVswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPXtgYWRkLSR7ZGllTmFtZX1gfSBrZXk9e2l9IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuY2FsbGJhY2sobmV3IGNscygpKX0+XG4gICAgICAgICAgICAgICAgPERpY2VEaXNwbGF5IGRpZT17T2JqZWN0LmFzc2lnbihuZXcgY2xzKCksIHsgY3VycmVudFJlc3VsdDogcmVzdWx0IH0pfSAvPlxuICAgICAgICAgICAgPC9idXR0b24+O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkaWNlLWNvbnRyb2xzXCI+e2FkZGl0aW9uQnV0dG9uc308L2Rpdj47XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGljZURpc3BsYXkgZnJvbSBcInNyYy92aWV3L2Rpc3BsYXkvZGljZVwiO1xuaW1wb3J0IHsgQWxsb3dlZERpY2UgfSBmcm9tIFwic3JjL21vZGVsL2RpY2VcIjtcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyB1c2VkIGluIG1haW4gYXBwIGFyZWEgdG8gZHJhdyB0aGUgbGlzdCBvZiBhbGwgdGhlIGRpY2UgdG8gdGhlIHBvb2wuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpY2VMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHsgZGljZTogQWxsb3dlZERpY2VbXSwgc2VsZWN0ZWQ6IEFsbG93ZWREaWNlW10sIHNlbGVjdENhbGxiYWNrPzogKGRpZTogQWxsb3dlZERpY2UpID0+IHZvaWQgfT4ge1xuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGRpY2VMaXN0ID0gdGhpcy5wcm9wcy5kaWNlLm1hcChkaWUgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBjbGljayA9IHRoaXMucHJvcHMuc2VsZWN0Q2FsbGJhY2sgP1xuICAgICAgICAgICAgICAgICgpID0+IHRoaXMucHJvcHMuc2VsZWN0Q2FsbGJhY2shKGRpZSkgOlxuICAgICAgICAgICAgICAgIHZvaWQgMDtcblxuICAgICAgICAgICAgcmV0dXJuIDxEaWNlRGlzcGxheSBkaWU9e2RpZX0gc2VsZWN0ZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWQuaW5jbHVkZXMoZGllKX0gcm9sbENvdW50PXtkaWUucm9sbENvdW50fSBvbkNsaWNrPXtjbGlja30gLz47XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRpY2UtbGlzdFwiPntkaWNlTGlzdH08L2Rpdj47XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCB7IEFsbG93ZWREaWNlLCBBbGxvd2VkUmVzdWx0cyB9IGZyb20gXCJzcmMvbW9kZWwvZGljZVwiO1xuaW1wb3J0IFN5bWJvbERpc3BsYXkgZnJvbSBcInNyYy92aWV3L2Rpc3BsYXkvc3ltYm9sXCI7XG5cbi8qKlxuICogQ29udmVydHMgcmVzdWx0IG9mIHRoZSBkaWUgcm9sbCAob3IgdGhlIGxhY2sgb2YgdGhlcmVvZikgaW50byBzb21ldGhpbmdcbiAqIGh1bWFuLXJlYWRhYmxlOyBwZW5kaW5nIG1hcmsgZm9yIG5vIHJvbGxzLCBzeW1ib2xzIGZvciByZWd1bGFyIEdlbmVzeXMgZGljZSxcbiAqIGFuZCB0aGUgbnVtYmVyIGZvciBwZXJjZW50aWxlIGRpZS5cbiAqL1xuZnVuY3Rpb24gY29udmVydERpZVJlc3VsdChyZXN1bHQ6IEFsbG93ZWRSZXN1bHRzKTogSlNYLkVsZW1lbnRbXSB7XG4gICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gWzxzcGFuPj88L3NwYW4+XTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIFs8c3Bhbj57cmVzdWx0ICsgXCJcIn08L3NwYW4+XTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC5tYXAoKHMsIGkpID0+IDxTeW1ib2xEaXNwbGF5IHN5bWJvbD17c30ga2V5PXtpfSAvPik7XG59XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaXMgdXNlZCB0byByZW5kZXIgdGhlIGRpY2UgaW1hZ2VzIGluIHRoZSBtYWluIGFyZWEgb2YgdGhlIGFwcC5cbiAqIEdpdmVuIHRoZSBkaWUgbW9kZWwgaW5zdGFuY2UsIGNvbnZlcnRzIHRoZSByb2xsIHJlc3VsdCBpbnRvIHNvbWV0aGluZyBodW1hbi1yZWFkYWJsZSxcbiAqIGFuZCBkcmF3cyBpdCBpbiBhbiBlbGVtZW50IHN0eWxlZCB0byBsb29rIGxpa2UgYSBkaWUgb2YgcmVsZXZhbnQgc2hhcGUgYW5kIGNvbG91ci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGljZURpc3BsYXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e1xuICAgIGRpZTogQWxsb3dlZERpY2UsXG4gICAgc2VsZWN0ZWQ/OiBib29sZWFuLFxuICAgIHJvbGxDb3VudD86IG51bWJlcixcbiAgICBvbkNsaWNrPzogKGV2OiBhbnkpID0+IHZvaWRcbn0+IGltcGxlbWVudHMgRXZlbnRMaXN0ZW5lck9iamVjdCB7XG5cbiAgICBkaWVSZWZlcmVuY2U6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4gPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgY2xhc3NOYW1lOiBzdHJpbmcgPSBzdGFydENhc2UodGhpcy5wcm9wcy5kaWUuY29uc3RydWN0b3IubmFtZSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBzZWxlY3RlZFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDxkaXYgcmVmPXt0aGlzLmRpZVJlZmVyZW5jZX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30+XG4gICAgICAgICAgICB7Y29udmVydERpZVJlc3VsdCh0aGlzLnByb3BzLmRpZS5jdXJyZW50UmVzdWx0KX1cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHM6IHRoaXNbXCJwcm9wc1wiXSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5kaWUgIT09IG5leHRQcm9wcy5kaWUgfHxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWQgIT09IG5leHRQcm9wcy5zZWxlY3RlZCB8fFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yb2xsQ291bnQgIT09IG5leHRQcm9wcy5yb2xsQ291bnRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiB0aGlzW1wicHJvcHNcIl0pOiB2b2lkIHtcblxuICAgICAgICAvLyBXZSBvbmx5IGFwcGx5IHRoZSBzaGFrZSBhbmltYXRpb24gd2hlbiB0aGVyZSdzIG5vIHByZWZlcmVuY2UgZm9yIHJlZHVjZWQgbW90aW9uLFxuICAgICAgICAvLyBhbmQgd2hlbiB0aGVyZSdzIGFjdHVhbCByZXN1bHQgb24gdGhlIGRpY2UgKCdjYXVzZSB0aGF0IG1lYW5zIHRoZXJlJ3Mgc29tZXRoaW5nIHRvIHJvbGwpLlxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKVwiKS5tYXRjaGVzICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLnJvbGxDb3VudCAhPT0gcHJldlByb3BzLnJvbGxDb3VudFxuICAgICAgICApIHtcblxuICAgICAgICAgICAgY29uc3QgZGllRWxlbWVudCA9IHRoaXMuZGllUmVmZXJlbmNlLmN1cnJlbnQhO1xuICAgICAgICAgICAgZGllRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIHRoaXMsIGZhbHNlKTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGRpZSBpcyBzdGlsbCBpbiB0aGUgcHJvY2VzcyBvZiBwbGF5aW5nIHNoYWtlIGFuaW1hdGlvbixcbiAgICAgICAgICAgIC8vIHJlc3RhcnQgaXQgYnkgcmVtb3ZpbmcgdGhlIGNsYXNzIGFuZCB0b2dnbGluZyByZWZsb3cgd2l0aCBib3VuZGluZyByZWN0O1xuICAgICAgICAgICAgaWYgKGRpZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hha2VcIikpIHtcbiAgICAgICAgICAgICAgICBkaWVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzaGFrZVwiKTtcbiAgICAgICAgICAgICAgICBkaWVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaGFrZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUV2ZW50KGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJhbmltYXRpb25lbmRcIikge1xuICAgICAgICAgICAgY29uc3QgZGllRWxlbWVudCA9IHRoaXMuZGllUmVmZXJlbmNlLmN1cnJlbnQhO1xuICAgICAgICAgICAgZGllRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIHRoaXMsIGZhbHNlKTtcbiAgICAgICAgICAgIGRpZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNoYWtlXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IFN5bWJvbHMgZnJvbSBcInNyYy9tb2RlbC9zeW1ib2xzXCI7XG5cbi8qKiBNYXAgZXZlcnkgR2VuZXN5cyBzeW1ib2wgdG8gaXRzIFNWRyByZXByZXNlbnRhdGlvbi4gKi9cbmZ1bmN0aW9uIHJlbmRlclN5bWJvbChzeW1ib2w6IFN5bWJvbHMpOiBKU1guRWxlbWVudCB7XG4gICAgc3dpdGNoIChzeW1ib2wpIHtcbiAgICAgICAgY2FzZSBTeW1ib2xzLlNVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4gPHBvbHlnb24gcG9pbnRzPVwiNSwxIDksNSA1LDkgMSw1XCIgLz47XG4gICAgICAgIGNhc2UgU3ltYm9scy5GQUlMVVJFOlxuICAgICAgICAgICAgcmV0dXJuIDxnPjxsaW5lIHgxPVwiMVwiIHkxPVwiMVwiIHgyPVwiOVwiIHkyPVwiOVwiIC8+PGxpbmUgeDE9XCIxXCIgeTE9XCI5XCIgeDI9XCI5XCIgeTI9XCIxXCIgLz48L2c+O1xuICAgICAgICBjYXNlIFN5bWJvbHMuQURWQU5UQUdFOlxuICAgICAgICAgICAgcmV0dXJuIDxwb2x5Z29uIHBvaW50cz1cIjUsMSA5LDkgMSw5XCIgLz47XG4gICAgICAgIGNhc2UgU3ltYm9scy5USFJFQVQ6XG4gICAgICAgICAgICByZXR1cm4gPHBvbHlnb24gcG9pbnRzPVwiMSwxIDksMSA1LDlcIiAvPjtcbiAgICAgICAgY2FzZSBTeW1ib2xzLlRSSVVNUEg6XG4gICAgICAgICAgICByZXR1cm4gPGc+PGNpcmNsZSBjeD1cIjVcIiBjeT1cIjVcIiByPVwiNFwiIGZpbGw9XCJub25lXCIgLz48cG9seWdvbiBwb2ludHM9XCI1LDEgOSw1IDUsOSAxLDVcIiAvPjwvZz47XG4gICAgICAgIGNhc2UgU3ltYm9scy5ERVNQQUlSOlxuICAgICAgICAgICAgcmV0dXJuIDxnPjxjaXJjbGUgY3g9XCI1XCIgY3k9XCI1XCIgcj1cIjRcIiBmaWxsPVwibm9uZVwiIC8+PGxpbmUgeDE9XCIxXCIgeTE9XCIxXCIgeDI9XCI5XCIgeTI9XCI5XCIgLz48bGluZSB4MT1cIjFcIiB5MT1cIjlcIiB4Mj1cIjlcIiB5Mj1cIjFcIiAvPjwvZz47XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gPD48Lz47XG4gICAgfVxufVxuXG4vKiogUmVuZGVyIEdlbmVzeXMgZGljZSBzeW1ib2xzIHVzaW5nIGlubGluZSBTVkcgaWNvbnMuICovXG5jb25zdCBTeW1ib2xEaXNwbGF5OiBSZWFjdC5TRkM8eyBzeW1ib2w6IFN5bWJvbHMgfCBTeW1ib2xzW10gfT4gPSAoeyBzeW1ib2wgfSkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBpc0FycmF5KHN5bWJvbCkgPyBzeW1ib2wgOiBbc3ltYm9sXTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaWNlLXN5bWJvbFwiPlxuICAgICAgICAgICAge2xpc3QubWFwKChzLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPHN2ZyBrZXk9e2l9IHZpZXdCb3g9XCIwIDAgMTAgMTBcIj57cmVuZGVyU3ltYm9sKHMpfTwvc3ZnPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFN5bWJvbERpc3BsYXk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRpZmZlcmVuY2UgfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5cbmltcG9ydCB7IEFsbG93ZWREaWNlLCBBbGxvd2VkUmVzdWx0cyB9IGZyb20gXCJzcmMvbW9kZWwvZGljZVwiO1xuaW1wb3J0IHsgQWJpbGl0eURpZSwgUHJvZmljaWVuY3lEaWUsIEJvb3N0RGllLCBEaWZmaWN1bHR5RGllLCBDaGFsbGVuZ2VEaWUsIFNldGJhY2tEaWUsIFBlcmNlbnRpbGVEaWUgfSBmcm9tIFwic3JjL21vZGVsL2RpY2VcIjtcbmltcG9ydCBodG1sMmNhbnZhcyBmcm9tIFwiaHRtbDJjYW52YXNcIjtcbmltcG9ydCB7IFdlYmhvb2ssIFVzZXJuYW1lIH0gZnJvbSBcInNyYy9tb2RlbC9zZXR0aW5nc1wiO1xuaW1wb3J0IHsgcmVtb3ZlT3Bwb3NpbmdTeW1ib2xzLCBhZGp1ZGljYXRlUm9sbCB9IGZyb20gXCJzcmMvdXRpbC9hZGp1ZGljYXRlXCI7XG5pbXBvcnQgeyBvcmRlclN5bWJvbHMgfSBmcm9tIFwic3JjL3V0aWwvb3JkZXJcIjtcbmltcG9ydCBTeW1ib2xzIGZyb20gXCJzcmMvbW9kZWwvc3ltYm9sc1wiO1xuaW1wb3J0IFJlc3VsdCBmcm9tIFwic3JjL21vZGVsL3Jlc3VsdFwiO1xuXG5pbXBvcnQgRGljZUNvbnRyb2xzIGZyb20gXCJzcmMvdmlldy9kaWNlLWNvbnRyb2xzXCI7XG5pbXBvcnQgRGljZUxpc3QgZnJvbSBcInNyYy92aWV3L2RpY2UtbGlzdFwiO1xuaW1wb3J0IFJvbGxSZXN1bHRzIGZyb20gXCJzcmMvdmlldy9yb2xsLXJlc3VsdHNcIjtcbmltcG9ydCB7IG9yZGVyRGljZSB9IGZyb20gXCJzcmMvdXRpbC9vcmRlclwiO1xuXG50eXBlIGRpY2VUeXBlcyA9IFwiYWJpbGl0eVwiIHwgXCJwcm9maWNpZW5jeVwiIHwgXCJib29zdFwiIHwgXCJkaWZmaWN1bHR5XCIgfCBcImNoYWxsZW5nZVwiIHwgXCJzZXRiYWNrXCIgfCBcInBlcmNlbnRpbGVcIjtcbmNvbnN0IGRpY2VUeXBlczogUmVhZG9ubHk8ZGljZVR5cGVzW10+ID0gT2JqZWN0LmZyZWV6ZShbXCJhYmlsaXR5XCIsIFwicHJvZmljaWVuY3lcIiwgXCJib29zdFwiLCBcImRpZmZpY3VsdHlcIiwgXCJjaGFsbGVuZ2VcIiwgXCJzZXRiYWNrXCJdKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkFwcEFyZWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIHsgZGljZTogQWxsb3dlZERpY2VbXSwgc2VsZWN0ZWQ6IEFsbG93ZWREaWNlW10sIHJlc3VsdHM6IEFsbG93ZWRSZXN1bHRzW10gfT4ge1xuXG4gICAgcmVzdWx0c1JlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IHt9KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgZGljZTogW10sIHNlbGVjdGVkOiBbXSwgcmVzdWx0czogW10gfTtcblxuICAgICAgICB0aGlzLmFkZERpZSA9IHRoaXMuYWRkRGllLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2xlYXJEaWNlID0gdGhpcy5jbGVhckRpY2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24gPSB0aGlzLnRvZ2dsZVNlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJvbGwgPSB0aGlzLnJvbGwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZW5kVG9EaXNjb3JkID0gdGhpcy5zZW5kVG9EaXNjb3JkLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgYWRkRGllKG5ld0RpZTogQWxsb3dlZERpY2UpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgeyBkaWNlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgZGljZTogZGljZS5jb25jYXQoW25ld0RpZV0pLnNvcnQob3JkZXJEaWNlKSB9KTtcbiAgICB9XG5cbiAgICBjbGVhckRpY2UoKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgeyBkaWNlLCBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ0RpY2UgPSBkaWZmZXJlbmNlKGRpY2UsIHNlbGVjdGVkKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRpY2U6IHJlbWFpbmluZ0RpY2UsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IFtdLFxuICAgICAgICAgICAgICAgIHJlc3VsdHM6IHJlbWFpbmluZ0RpY2UubWFwKGRpZSA9PiBkaWUuY3VycmVudFJlc3VsdClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGljZTogW10sIHNlbGVjdGVkOiBbXSwgcmVzdWx0czogW10gfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVTZWxlY3Rpb24odG9nZ2xlZERpZTogQWxsb3dlZERpY2UpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoc2VsZWN0ZWQuaW5jbHVkZXModG9nZ2xlZERpZSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBzZWxlY3RlZDogc2VsZWN0ZWQuZmlsdGVyKGRpZSA9PiBkaWUgIT09IHRvZ2dsZWREaWUpIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHNlbGVjdGVkOiBzZWxlY3RlZC5jb25jYXQoW3RvZ2dsZWREaWVdKSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJvbGwoKSB7XG5cbiAgICAgICAgY29uc3QgeyBkaWNlLCBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIHNlbGVjdGVkLmZvckVhY2goZGllID0+IGRpZS5yb2xsKCkpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZGljZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogW10sXG4gICAgICAgICAgICAgICAgcmVzdWx0czogZGljZS5tYXAoZGllID0+IGRpZS5jdXJyZW50UmVzdWx0KVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCByZXN1bHRzOiB0aGlzLnN0YXRlLmRpY2UubWFwKGRpZSA9PiBkaWUucm9sbCgpKSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHNlbmRUb0Rpc2NvcmQoKSB7XG4gICAgICAgIGNvbnN0IHdlYmhvb2sgPSBXZWJob29rLmdldCgpO1xuICAgICAgICBpZiAoIXdlYmhvb2sgfHwgIXRoaXMucmVzdWx0c1JlZi5jdXJyZW50KSB7IHJldHVybjsgfVxuXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGF3YWl0IGh0bWwyY2FudmFzKHRoaXMucmVzdWx0c1JlZi5jdXJyZW50KTtcbiAgICAgICAgY29uc3QgYmxvYjogQmxvYiA9IGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT5cbiAgICAgICAgICAgIGNhbnZhcy50b0Jsb2IoKGI6IEJsb2IgfCBudWxsKSA9PiByZXNvbHZlKGIhKSwgXCJpbWFnZS9wbmdcIilcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm0uYXBwZW5kKFwiZmlsZVwiLCBibG9iLCBcInJvbGwucG5nXCIpO1xuICAgICAgICBmb3JtLmFwcGVuZChcInVzZXJuYW1lXCIsIFVzZXJuYW1lLmdldCgpIHx8IFwiR2VuZXN5cyBSb2xsZXJcIik7XG4gICAgICAgIGZvcm0uYXBwZW5kKFwiY29udGVudFwiLCB0aGlzLnN1bW1hcmlzZVJlc3VsdHMoKSk7XG5cbiAgICAgICAgZmV0Y2god2ViaG9vaywgeyBtZXRob2Q6IFwiUE9TVFwiLCBib2R5OiBmb3JtIH0pO1xuICAgIH1cblxuICAgIHN1bW1hcmlzZVJlc3VsdHMoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qgc3ltYm9sczogU3ltYm9sc1tdID0gW107XG4gICAgICAgIGNvbnN0IG51bWJlcnM6IG51bWJlcltdID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUucmVzdWx0cy5mb3JFYWNoKHIgPT4ge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocikpIHsgc3ltYm9scy5wdXNoKC4uLnIpOyB9IGVsc2UgaWYgKHR5cGVvZiByID09PSBcIm51bWJlclwiKSB7IG51bWJlcnMucHVzaChyKTsgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZmxhdCA9IHJlbW92ZU9wcG9zaW5nU3ltYm9scyhzeW1ib2xzKS5zb3J0KG9yZGVyU3ltYm9scyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGFkanVkaWNhdGVSb2xsKGZsYXQpO1xuICAgICAgICBjb25zdCBjb3VudHMgPSBuZXcgTWFwPFN5bWJvbHMsIG51bWJlcj4oKTtcbiAgICAgICAgZmxhdC5mb3JFYWNoKHMgPT4gY291bnRzLnNldChzLCAoY291bnRzLmdldChzKSB8fCAwKSArIDEpKTtcbiAgICAgICAgY29uc3QgbmFtZXM6IFJlY29yZDxTeW1ib2xzLCBzdHJpbmc+ID0ge1xuICAgICAgICAgICAgW1N5bWJvbHMuU1VDQ0VTU106IFwi0YPRgdC/0LXRhVwiLFxuICAgICAgICAgICAgW1N5bWJvbHMuRkFJTFVSRV06IFwi0L3QtdGD0LTQsNGH0LBcIixcbiAgICAgICAgICAgIFtTeW1ib2xzLkFEVkFOVEFHRV06IFwi0L/RgNC10LjQvNGD0YnQtdGB0YLQstC+XCIsXG4gICAgICAgICAgICBbU3ltYm9scy5USFJFQVRdOiBcItGD0LPRgNC+0LfQsFwiLFxuICAgICAgICAgICAgW1N5bWJvbHMuVFJJVU1QSF06IFwi0YLRgNC40YPQvNGEXCIsXG4gICAgICAgICAgICBbU3ltYm9scy5ERVNQQUlSXTogXCLQvtGC0YfQsNGP0L3QuNC1XCIsXG4gICAgICAgIH0gYXMgYW55O1xuICAgICAgICBsZXQgdGV4dCA9IHJlc3VsdCA9PT0gUmVzdWx0LlNVQ0NFU1MgPyBcItCY0YLQvtCzOiDRg9GB0L/QtdGFXCIgOiByZXN1bHQgPT09IFJlc3VsdC5GQUlMVVJFID8gXCLQmNGC0L7Qszog0L/RgNC+0LLQsNC7XCIgOiBcItCY0YLQvtCzOlwiO1xuICAgICAgICB0ZXh0ICs9IFwiXFxuXCIgKyBBcnJheS5mcm9tKGNvdW50cy5lbnRyaWVzKCkpLm1hcCgoW3N5bSwgY291bnRdKSA9PiBgJHtuYW1lc1tzeW1dfTogJHtjb3VudH1gKS5qb2luKFwiXFxuXCIpO1xuICAgICAgICBpZiAobnVtYmVycy5sZW5ndGgpIHRleHQgKz0gXCJcXG7Qp9C40YHQu9CwOiBcIiArIG51bWJlcnMuam9pbihcIiwgXCIpO1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRpY2UtYXJlYVwiPlxuICAgICAgICAgICAgPERpY2VDb250cm9scyBjYWxsYmFjaz17dGhpcy5hZGREaWV9Lz5cbiAgICAgICAgICAgIDxEaWNlTGlzdCBkaWNlPXt0aGlzLnN0YXRlLmRpY2V9IHNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkfSBzZWxlY3RDYWxsYmFjaz17dGhpcy50b2dnbGVTZWxlY3Rpb259IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicm9sbFwiIG9uQ2xpY2s9e3RoaXMucm9sbH0+e3RoaXMuc3RhdGUuc2VsZWN0ZWQubGVuZ3RoID8gXCJSZS1yb2xsIFNlbGVjdGVkXCIgOiBcIlJvbGxcIn08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xlYXJcIiBvbkNsaWNrPXt0aGlzLmNsZWFyRGljZX0+e3RoaXMuc3RhdGUuc2VsZWN0ZWQubGVuZ3RoID8gXCJSZW1vdmUgU2VsZWN0ZWRcIiA6IFwiQ2xlYXJcIn08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7V2ViaG9vay5nZXQoKSAmJiB0aGlzLnN0YXRlLnJlc3VsdHMubGVuZ3RoID4gMCAmJiA8YnV0dG9uIGlkPVwiZGlzY29yZFwiIG9uQ2xpY2s9e3RoaXMuc2VuZFRvRGlzY29yZH0+0J7RgtC/0YDQsNCy0LjRgtGMINCyIERpc2NvcmQ8L2J1dHRvbj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgcmVmPXt0aGlzLnJlc3VsdHNSZWZ9PlxuICAgICAgICAgICAgICAgIDxSb2xsUmVzdWx0cyByZXN1bHRzPXt0aGlzLnN0YXRlLnJlc3VsdHN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cblxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBXZWJob29rLCBVc2VybmFtZSwgVGhlbWUgfSBmcm9tIFwic3JjL21vZGVsL3NldHRpbmdzXCI7XG50eXBlIE1lbnVQcm9wcyA9IHsgdG9nZ2xlQ2FsbGJhY2s/OiAob3BlbjogYm9vbGVhbikgPT4gdm9pZCB9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxNZW51UHJvcHM+IHtcbiAgICBzdGF0ZSA9IHsgd2ViaG9vazogV2ViaG9vay5nZXQoKSB8fCBcIlwiLCB1c2VybmFtZTogVXNlcm5hbWUuZ2V0KCkgfHwgXCJcIiwgdGhlbWU6IFRoZW1lLmdldCgpIHx8IFwiXCIgfTtcblxuICAgIGhhbmRsZVdlYmhvb2sgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3Qgd2ViaG9vayA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2ViaG9vayB9KTtcbiAgICAgICAgV2ViaG9vay5zZXQod2ViaG9vayB8fCBudWxsKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlVXNlcm5hbWUgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJuYW1lIH0pO1xuICAgICAgICBVc2VybmFtZS5zZXQodXNlcm5hbWUpO1xuICAgIH07XG5cbiAgICBoYW5kbGVUaGVtZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgdGhlbWUgPSBlLnRhcmdldC52YWx1ZSBhcyBcImxpZ2h0XCIgfCBcImRhcmtcIiB8IFwiXCI7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aGVtZSB9KTtcbiAgICAgICAgVGhlbWUuc2V0KHRoZW1lIHx8IG51bGwpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICAgIDxsYWJlbD5XZWJob29rIFVSTFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidXJsXCIgdmFsdWU9e3RoaXMuc3RhdGUud2ViaG9va30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlV2ViaG9va30vPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD7QmNC80Y9cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS51c2VybmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcm5hbWV9Lz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+0KLQtdC80LBcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLnRoZW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaGVtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj7QodC40YHRgtC10LzQvdCw0Y88L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxpZ2h0XCI+0KHQstC10YLQu9Cw0Y88L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRhcmtcIj7QotGR0LzQvdCw0Y88L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy50b2dnbGVDYWxsYmFjayAmJiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMudG9nZ2xlQ2FsbGJhY2shKGZhbHNlKX0+0JfQsNC60YDRi9GC0Yw8L2J1dHRvbj59XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBOYXZCdXR0b25Qcm9wcyA9IHsgdG9nZ2xlQ2FsbGJhY2s/OiAoZXhwYW5kZWQ6IGJvb2xlYW4pID0+IHZvaWQgfTtcblxuLyoqXG4gKiBDb21wb25lbnQgdXNlZCB0byBpbmRpY2F0ZSB0aGUgY29udHJvbHMgZm9yIGJyaW5naW5nIHVwIHRoZSBtZW51IHBhbmUuXG4gKiBIYW5kbGVzIHVzZXIgY2xpY2tzLCBhbmltYXRpbmcgYXBwcm9wcmlhdGVseSB3aGVuIHRoZSBtZW51IGlzIG9wZW5lZCwgY2hhbmdpbmcgdHdvIGxpbmVzXG4gKiBvZiB0aGUgYnVyZ2VyIGludG8gYSBjcm9zcywgYW5kIGhpZGluZyB0aGUgdGhpcmQgb25lLCBvciByZXZlcnRpbmcgd2hlbiB0aGUgbWVudSBwYW5lIGlzIGhpZGRlbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2QnV0dG9uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxOYXZCdXR0b25Qcm9wcywgeyBleHBhbmRlZDogYm9vbGVhbiB9PiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogTmF2QnV0dG9uUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBleHBhbmRlZDogZmFsc2UgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIGZvciB1c2VyIGludGVyYWN0aW9uIG9mIGNsaWNraW5nIG9uIHRoZSBuYXYgYnV0dG9uO1xuICAgICAqIGl0IHRvZ2dsZXMgdGhlIGV4cGFuZGVkIHN0YXRlLCBhbmQgaWYgY2FsbGJhY2sgaGFzIGJlZW4gcHJvdmlkZWRcbiAgICAgKiBmb3IgdGhlIGNvbXBvbmVudCwgcnVucyBpdCB3aXRoIG5ldyBleHBhbnNpb24gc3RhdGUuXG4gICAgICovXG4gICAgaGFuZGxlQ2xpY2soKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gIXRoaXMuc3RhdGUuZXhwYW5kZWQ7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBleHBhbmRlZDogbmV3U3RhdGUgfSk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRvZ2dsZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZUNhbGxiYWNrKG5ld1N0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbXBvbmVudCByZW5kZXJlciwgY3JlYXRlcyBiYXNlIFNWRyBlbGVtZW50IHdpdGggdGhyZWUgaG9yaXpvbnRhbCBsaW5lcyB3aXRoaW4uXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGxpbmVzID0gWzIsIDUsIDhdLm1hcCh5ID0+IDxsaW5lIHgxPVwiMS41XCIgeTE9e3l9IHgyPVwiOC41XCIgeTI9e3l9IC8+KTtcblxuICAgICAgICByZXR1cm4gPHN2Z1xuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwIDEwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1idXR0b24gJHt0aGlzLnN0YXRlLmV4cGFuZGVkID8gXCJleHBhbmRlZFwiIDogXCJcIn1gfVxuICAgICAgICAgICAgc3R5bGU9e3sgc3Ryb2tlV2lkdGg6IDEuNSwgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiIH19XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICA+e2xpbmVzfTwvc3ZnPjtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGZsYXR0ZW4sIGlzQXJyYXkgfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgUmVzdWx0IGZyb20gXCJzcmMvbW9kZWwvcmVzdWx0XCI7XG5pbXBvcnQgU3ltYm9scyBmcm9tIFwic3JjL21vZGVsL3N5bWJvbHNcIjtcbmltcG9ydCBTeW1ib2xEaXNwbGF5IGZyb20gXCJzcmMvdmlldy9kaXNwbGF5L3N5bWJvbFwiO1xuaW1wb3J0IHsgYWRqdWRpY2F0ZVJvbGwsIHJlbW92ZU9wcG9zaW5nU3ltYm9scyB9IGZyb20gXCJzcmMvdXRpbC9hZGp1ZGljYXRlXCI7XG5pbXBvcnQgeyBvcmRlclN5bWJvbHMgfSBmcm9tIFwic3JjL3V0aWwvb3JkZXJcIjtcbmltcG9ydCB7IEFsbG93ZWRSZXN1bHRzIH0gZnJvbSBcInNyYy9tb2RlbC9kaWNlXCI7XG5cbmNvbnN0IFJvbGxSZXN1bHRzOiBSZWFjdC5TRkM8eyByZXN1bHRzOiBBbGxvd2VkUmVzdWx0c1tdIH0+ID0gKHsgcmVzdWx0cyB9KSA9PiB7XG5cbiAgICBsZXQgc3RhdHVzOiBSZXN1bHQgPSBSZXN1bHQuTkVVVFJBTDtcbiAgICBjb25zdCByZXN1bHRzU3ltYm9sczogU3ltYm9sc1tdW10gPSBbXSxcbiAgICAgICAgICByZXN1bHRzTnVtYmVyczogbnVtYmVyW10gPSBbXSxcbiAgICAgICAgICBlbGVtZW50czogSlNYLkVsZW1lbnRbXSA9IFtdO1xuXG4gICAgcmVzdWx0cy5mb3JFYWNoKHJlc3VsdCA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICByZXN1bHRzTnVtYmVycy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheShyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXN1bHRzU3ltYm9scy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIElmIHRoZXJlIGFyZSBhbnkgc3ltYm9scywgbGV0J3MgZmxhdHRlbiB0aGUgcmVzdWx0cyBhbmRcbiAgICAvLyBlbGltaW5hdGUgdGhlIG9wcG9zaW5nIG9uZXMgZm9yIGRpc3BsYXk7IGFsc28gYWRqdWRpY2F0ZVxuICAgIC8vIHRoZSByb2xsIHJlc3VsdHMuXG4gICAgaWYgKHJlc3VsdHNTeW1ib2xzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBmbGF0Um9sbCA9IHJlbW92ZU9wcG9zaW5nU3ltYm9scyhmbGF0dGVuKHJlc3VsdHNTeW1ib2xzKSkuc29ydChvcmRlclN5bWJvbHMpO1xuICAgICAgICBzdGF0dXMgPSBhZGp1ZGljYXRlUm9sbChmbGF0Um9sbCk7XG4gICAgICAgIGlmIChmbGF0Um9sbC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goPGRpdiBjbGFzc05hbWU9e2Bncm91cCBzeW1ib2xpYyAke2ZsYXRSb2xsLmxlbmd0aCA+IDggPyBcImxhcmdlXCIgOiBcIlwifWB9PntmbGF0Um9sbC5tYXAocyA9PiA8U3ltYm9sRGlzcGxheSBzeW1ib2w9e3N9Lz4pfTwvZGl2Pik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbGVtZW50cy5wdXNoKC4uLnJlc3VsdHNOdW1iZXJzLm1hcChzY29yZSA9PiA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIG51bWVyaWNcIj57c2NvcmV9PC9kaXY+KSk7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2Byb2xsLXJlc3VsdHMgJHtzdGF0dXN9YH0+e2VsZW1lbnRzfTwvZGl2Pjtcbn07XG5leHBvcnQgZGVmYXVsdCBSb2xsUmVzdWx0cztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTsiXSwic291cmNlUm9vdCI6IiJ9