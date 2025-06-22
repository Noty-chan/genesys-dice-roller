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
react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](App, { themeSettings: src_model_settings__WEBPACK_IMPORTED_MODULE_2__[/* Theme */ "b"] }), document.getElementById("app"));


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
/*! exports provided: Settings, Theme, Webhook, Username, AutoDiscord */
/*! exports used: AutoDiscord, Theme, Username, Webhook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Settings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Webhook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Username; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoDiscord; });
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
const AutoDiscord = new Settings("auto_discord", false);


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
        this.updateAutoDiscord = () => this.forceUpdate();
        this.state = { dice: [], selected: [], results: [] };
        this.addDie = this.addDie.bind(this);
        this.clearDice = this.clearDice.bind(this);
        this.toggleSelection = this.toggleSelection.bind(this);
        this.roll = this.roll.bind(this);
        this.sendToDiscord = this.sendToDiscord.bind(this);
    }
    componentDidMount() {
        src_model_settings__WEBPACK_IMPORTED_MODULE_3__[/* AutoDiscord */ "a"].on(this.updateAutoDiscord);
    }
    componentWillUnmount() {
        src_model_settings__WEBPACK_IMPORTED_MODULE_3__[/* AutoDiscord */ "a"].off(this.updateAutoDiscord);
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
            }, () => { if (src_model_settings__WEBPACK_IMPORTED_MODULE_3__[/* AutoDiscord */ "a"].get())
                this.sendToDiscord(); });
        }
        else {
            this.setState(Object.assign(Object.assign({}, this.state), { results: this.state.dice.map(die => die.roll()) }), () => { if (src_model_settings__WEBPACK_IMPORTED_MODULE_3__[/* AutoDiscord */ "a"].get())
                this.sendToDiscord(); });
        }
    }
    sendToDiscord() {
        return __awaiter(this, void 0, void 0, function* () {
            const webhook = src_model_settings__WEBPACK_IMPORTED_MODULE_3__[/* Webhook */ "d"].get();
            if (!webhook || !this.resultsRef.current) {
                return;
            }
            const canvas = yield html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(this.resultsRef.current);
            const blob = yield new Promise(resolve => canvas.toBlob((b) => resolve(b), "image/png"));
            const form = new FormData();
            form.append("file", blob, "roll.png");
            form.append("username", src_model_settings__WEBPACK_IMPORTED_MODULE_3__[/* Username */ "c"].get() || "Genesys Roller");
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
                src_model_settings__WEBPACK_IMPORTED_MODULE_3__[/* Webhook */ "d"].get() && !src_model_settings__WEBPACK_IMPORTED_MODULE_3__[/* AutoDiscord */ "a"].get() && this.state.results.length > 0 &&
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { id: "discord", onClick: this.sendToDiscord }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432 Discord")),
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
        this.state = { webhook: src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Webhook */ "d"].get() || "", username: src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Username */ "c"].get() || "", theme: src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "b"].get() || "", autoDiscord: src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* AutoDiscord */ "a"].get() || false };
        this.handleWebhook = (e) => {
            const webhook = e.target.value;
            this.setState({ webhook });
            src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Webhook */ "d"].set(webhook || null);
        };
        this.handleUsername = (e) => {
            const username = e.target.value;
            this.setState({ username });
            src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Username */ "c"].set(username);
        };
        this.handleTheme = (e) => {
            const theme = e.target.value;
            this.setState({ theme });
            src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "b"].set(theme || null);
        };
        this.handleAutoDiscord = (e) => {
            const auto = e.target.checked;
            this.setState({ autoDiscord: auto });
            src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* AutoDiscord */ "a"].set(auto);
        };
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "menu" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                "\u0410\u0434\u0440\u0435\u0441 \u0432\u0435\u0431\u0445\u0443\u043A\u0430",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "url", value: this.state.webhook, onChange: this.handleWebhook })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                "\u0418\u043C\u044F",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "text", value: this.state.username, onChange: this.handleUsername })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "checkbox" },
                "\u0410\u0432\u0442\u043E\u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0432 Discord",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "checkbox", checked: this.state.autoDiscord, onChange: this.handleAutoDiscord })),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvZGljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvYWRqdWRpY2F0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9vcmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9kaWNlLWNvbnRyb2xzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9kaWNlLWxpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L2Rpc3BsYXkvZGljZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZGlzcGxheS9zeW1ib2wudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L21haW4tYXBwLWFyZWEudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L21lbnUudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L25hdi1idXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L3JvbGwtcmVzdWx0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL21haW4ubGVzcz85MjJkIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7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QUM7QUFDdEUsQ0FBQyxDQUFDO0FBQ2Esb0VBQVcsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3ZDM0IsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsdUI7Ozs7Ozs7Ozs7OztBQ0FBLDBCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZ2VuZXN5cy1kaWNlLXJvbGxlci9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwic3JjL21vZGVsL3NldHRpbmdzXCI7XG5pbXBvcnQgTWFpbkFwcEFyZWEgZnJvbSBcInNyYy92aWV3L21haW4tYXBwLWFyZWFcIjtcbmltcG9ydCBOYXZCdXR0b24gZnJvbSBcInNyYy92aWV3L25hdi1idXR0b25cIjtcbmltcG9ydCBNZW51IGZyb20gXCJzcmMvdmlldy9tZW51XCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7IHRoZW1lU2V0dGluZ3M6IHR5cGVvZiBUaGVtZSB9LCB7IG1lbnVPcGVuOiBib29sZWFuIH0+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiB7IHRoZW1lU2V0dGluZ3M6IHR5cGVvZiBUaGVtZSB9KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgbWVudU9wZW46IGZhbHNlIH07XG4gICAgICAgIHRoaXMuc3dpdGNoVGhlbWUgPSB0aGlzLnN3aXRjaFRoZW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudG9nZ2xlTWVudSA9IHRoaXMudG9nZ2xlTWVudS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHRvZ2dsZU1lbnUob3BlbjogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVudU9wZW46IG9wZW4gfSk7XG4gICAgfVxuXG4gICAgc3dpdGNoVGhlbWUoKTogdm9pZCB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxpZ2h0XCIsIFwiZGFya1wiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHRoaXMucHJvcHMudGhlbWVTZXR0aW5ncy5nZXRDbGFzcygpKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy50aGVtZVNldHRpbmdzLm9uKHRoaXMuc3dpdGNoVGhlbWUpO1xuICAgICAgICB0aGlzLnN3aXRjaFRoZW1lKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMudGhlbWVTZXR0aW5ncy5vZmYodGhpcy5zd2l0Y2hUaGVtZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPE5hdkJ1dHRvbiB0b2dnbGVDYWxsYmFjaz17dGhpcy50b2dnbGVNZW51fS8+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZW51T3BlbiAmJiA8TWVudSB0b2dnbGVDYWxsYmFjaz17dGhpcy50b2dnbGVNZW51fS8+fSBcbiAgICAgICAgICAgIDxoMSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnRoZW1lU2V0dGluZ3MudG9nZ2xlKCl9PjxzcGFuIGNsYXNzTmFtZT1cImxvZ29cIj5HZW5lc3lzPC9zcGFuPiBEaWNlIFJvbGxlcjwvaDE+XG4gICAgICAgICAgICA8TWFpbkFwcEFyZWEvPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PjtcbiAgICB9XG59XG5cbi8vIFJlbW92ZSBmYWxsYmFjayBuby1KUyBjb250ZW50IGFuZCByZW1vdmUgdGhlIGNsYXNzIGZyb20gdGhlIDxib2R5PiB0YWdcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWpzXCIpO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCB0aGVtZVNldHRpbmdzPXtUaGVtZX0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpISk7XG4iLCJpbXBvcnQgU3ltYm9scyBmcm9tIFwic3JjL21vZGVsL3N5bWJvbHNcIjtcblxuLyoqIFR5cGUgdXNlZCB0byBkZXNjcmliZSBhbGwgdGhlIGRpY2UgY3VycmVudGx5IGhhbmRsZWQgYnkgdGhlIGFwcC4gKi9cbmV4cG9ydCB0eXBlIEFsbG93ZWREaWNlID0gR2VuZXN5c0RpZSB8IFBlcmNlbnRpbGVEaWU7XG4vKiogVHlwZSB1c2VkIHRvIGRlc2NyaWJlIGFsbCB0aGUgZGljZSByZXN1bHRzIGN1cnJlbnRseSBoYW5kbGVkIGJ5IHRoZSBhcHAuICovXG5leHBvcnQgdHlwZSBBbGxvd2VkUmVzdWx0cyA9IEFsbG93ZWREaWNlW1wiY3VycmVudFJlc3VsdFwiXTtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBtb2RlbHMgcmVwcmVzZW50aW5nIGFsbCBkaWNlIHVzZWQgaW4gdGhlIGFwcC5cbiAqIFNob3VsZG4ndCBiZSB1c2VkIG9uIGl0cyBvd24sIGJ1dCBjcmVhdGVzIGJhc2UgZm9yIGFsbCBvdGhlciBkaWNlLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGllPFJlc3VsdFR5cGUgZXh0ZW5kcyBBbGxvd2VkUmVzdWx0cz4ge1xuXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoYXQgdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCByb2xsIHdhcy5cbiAgICAgKiBJZiBudWxsLCB0aGUgZGllIGhhcyBub3QgYmVlbiByb2xsZWQgeWV0LCBlbHNlIGl0J3NcbiAgICAgKiB0aGUgY29udGVudHMgb2YgdGhlIHJlc3VsdGluZyBzaWRlLlxuICAgICAqL1xuICAgIGN1cnJlbnRSZXN1bHQ6IFJlc3VsdFR5cGUgfCBudWxsID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRoYXQgY291bnRzIHRoZSBudW1iZXIgb2YgdGltZXMgdGhpcyBkaWVcbiAgICAgKiBoYXMgYmVlbiByb2xsZWQuIEl0J3MgdXNlZCBwcmltYXJpbHkgaW4gcmVuZGVyaW5nLCB0byBkZXRlcm1pbmVcbiAgICAgKiB3aGVuIHRoZSBkaWUgaGFzIGNoYW5nZWQgc3RhdGUgYnkgYmVpbmcgcm9sbGVkLCBhcyBvcHBvc2VkIHRvXG4gICAgICogYmVpbmcgc2VsZWN0ZWQsIG9yIG1vdmVkIGluIHRoZSBsaXN0LlxuICAgICAqIEluY3JlYXNlcyBieSBvbmUgb24gZXZlcnkgaW52b2NhdGlvbiBvZiBgLnJvbGwoKWAuXG4gICAgICovXG4gICAgcm9sbENvdW50OiBudW1iZXIgPSAwO1xuXG4gICAgLyoqXG4gICAgICogUm9sbHMgdGhlIGRpZSwgc2VsZWN0aW5nIHJhbmRvbSByZXN1bHQgZnJvbSB0aGUgcG9zc2libGUgb25lcyxcbiAgICAgKiBhc3NpZ25zIGl0IHRvIGN1cnJlbnQgcmVzdWx0IGFuZCByZXR1cm5zIGl0LlxuICAgICAqL1xuICAgIGFic3RyYWN0IHJvbGwoKTogUmVzdWx0VHlwZTtcblxufVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIG1vZGVscyByZXByZXNlbnRpbmcgYWxsIHRoZSBHZW5lc3lzIGRpY2UuXG4gKiBQcmltYXJ5IHNldCBvZiBkaWNlIGluIHRoZSBzeXN0ZW0sIGV4Y2x1ZGluZyB0aGUgcGVyY2VudGlsZSBkaWVcbiAqIHVzZWQgaW4gc29tZSBjb21iYXQgc2l0dWF0aW9ucy5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdlbmVzeXNEaWUgZXh0ZW5kcyBEaWU8U3ltYm9sc1tdPiB7XG5cbiAgICAvKipcbiAgICAgKiBMaXN0IG9mIGFsbCBwb3NzaWJsZSByZXN1bHRzIHRoYXQgY2FuIGNvbWUgdXAgb24gdGhlIGRpZS5cbiAgICAgKiBFYWNoIHNpZGUgaXMgcmVwcmVzZW50ZWQgc2VwYXJhdGVseSwgc28gaWYgdHdvIHNpZGVzIGFyZVxuICAgICAqIHRoZSBzYW1lLCB0aGV5IHdpbGwgYmUgbGlzdGVkIHR3aWNlIGhlcmUuXG4gICAgICovXG4gICAgYWJzdHJhY3QgcmVhZG9ubHkgcG9zc2libGVSZXN1bHRzOiBTeW1ib2xzW11bXTtcblxuICAgIC8qKlxuICAgICAqIFJvbGxzIHRoZSBkaWUsIHNlbGVjdGluZyByYW5kb20gcmVzdWx0IGZyb20gdGhlIHBvc3NpYmxlIG9uZXMsXG4gICAgICogYXNzaWducyBpdCB0byBjdXJyZW50IHJlc3VsdCBhbmQgcmV0dXJucyBpdC5cbiAgICAgKi9cbiAgICByb2xsKCk6IFN5bWJvbHNbXSB7XG4gICAgICAgIHRoaXMucm9sbENvdW50Kys7XG4gICAgICAgIHRoaXMuY3VycmVudFJlc3VsdCA9IHRoaXMucG9zc2libGVSZXN1bHRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucG9zc2libGVSZXN1bHRzLmxlbmd0aCldO1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UmVzdWx0O1xuICAgIH1cblxufVxuXG4vKipcbiAqIE1vZGVsIGZvciB0aGUgYmFzZSBwb3NpdGl2ZSBkaWUsIHRoZSBncmVlbiBlaWdodC1zaWRlZCBvbmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBBYmlsaXR5RGllIGV4dGVuZHMgR2VuZXN5c0RpZSB7XG4gICAgcG9zc2libGVSZXN1bHRzID0gW1xuICAgICAgICBbXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTU10sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1NdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTLCBTeW1ib2xzLlNVQ0NFU1NdLFxuICAgICAgICBbU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTLCBTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLkFEVkFOVEFHRSwgU3ltYm9scy5BRFZBTlRBR0VdXG4gICAgXVxufVxuXG4vKipcbiAqIE1vZGVsIGZvciB0aGUgdXBncmFkZWQgcG9zaXRpdmUgZGllLCB0aGUgeWVsbG93IHR3ZWx2ZS1zaWRlZCBvbmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9maWNpZW5jeURpZSBleHRlbmRzIEdlbmVzeXNEaWUge1xuICAgIHBvc3NpYmxlUmVzdWx0cyA9IFtcbiAgICAgICAgW10sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1NdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTUywgU3ltYm9scy5TVUNDRVNTXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTUywgU3ltYm9scy5TVUNDRVNTXSxcbiAgICAgICAgW1N5bWJvbHMuQURWQU5UQUdFXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTUywgU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTLCBTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1MsIFN5bWJvbHMuQURWQU5UQUdFXSxcbiAgICAgICAgW1N5bWJvbHMuQURWQU5UQUdFLCBTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLkFEVkFOVEFHRSwgU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5UUklVTVBIXVxuICAgIF1cbn1cblxuLyoqXG4gKiBNb2RlbCBmb3IgdGhlIGNpcmN1bXN0YW50aWFsIHBvc2l0aXZlIGRpZSwgdGhlIGJsdWUgc2l4LXNpZGVkIG9uZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEJvb3N0RGllIGV4dGVuZHMgR2VuZXN5c0RpZSB7XG4gICAgcG9zc2libGVSZXN1bHRzID0gW1xuICAgICAgICBbXSxcbiAgICAgICAgW10sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1NdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTLCBTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLkFEVkFOVEFHRSwgU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5BRFZBTlRBR0VdXG4gICAgXVxufVxuXG4vKipcbiAqIE1vZGVsIGZvciB0aGUgYmFzZSBuZWdhdGl2ZSBkaWUsIHRoZSBwdXJwbGUgZWlnaHQtc2lkZWQgb25lLlxuICovXG5leHBvcnQgY2xhc3MgRGlmZmljdWx0eURpZSBleHRlbmRzIEdlbmVzeXNEaWUge1xuICAgIHBvc3NpYmxlUmVzdWx0cyA9IFtcbiAgICAgICAgW10sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkVdLFxuICAgICAgICBbU3ltYm9scy5GQUlMVVJFLCBTeW1ib2xzLkZBSUxVUkVdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVQsIFN5bWJvbHMuVEhSRUFUXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRSwgU3ltYm9scy5USFJFQVRdXG4gICAgXVxufVxuXG4vKipcbiAqIE1vZGVsIGZvciB0aGUgdXBncmFkZWQgbmVnYXRpdmUgZGllLCB0aGUgcmVkIHR3ZWx2ZS1zaWRlZCBvbmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2VEaWUgZXh0ZW5kcyBHZW5lc3lzRGllIHtcbiAgICBwb3NzaWJsZVJlc3VsdHMgPSBbXG4gICAgICAgIFtdLFxuICAgICAgICBbU3ltYm9scy5GQUlMVVJFXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRV0sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkUsIFN5bWJvbHMuRkFJTFVSRV0sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkUsIFN5bWJvbHMuRkFJTFVSRV0sXG4gICAgICAgIFtTeW1ib2xzLlRIUkVBVF0sXG4gICAgICAgIFtTeW1ib2xzLlRIUkVBVF0sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkUsIFN5bWJvbHMuVEhSRUFUXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRSwgU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVQsIFN5bWJvbHMuVEhSRUFUXSxcbiAgICAgICAgW1N5bWJvbHMuVEhSRUFULCBTeW1ib2xzLlRIUkVBVF0sXG4gICAgICAgIFtTeW1ib2xzLkRFU1BBSVJdXG4gICAgXVxufVxuXG4vKipcbiAqIE1vZGVsIGZvciB0aGUgY2lyY3Vtc3RhbnRpYWwgbmVnYXRpdmUgZGllLCB0aGUgYmxhY2sgc2l4LXNpZGVkIG9uZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNldGJhY2tEaWUgZXh0ZW5kcyBHZW5lc3lzRGllIHtcbiAgICBwb3NzaWJsZVJlc3VsdHMgPSBbXG4gICAgICAgIFtdLFxuICAgICAgICBbXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRV0sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkVdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVRdXG4gICAgXVxufVxuXG4vKipcbiAqIE1vZGVsIGZvciB0aGUgcGVyY2VudGlsZSBkaWUsIHVzZWQgdG8gZ2VuZXJhdGUgbnVtZXJpY2FsIHJlc3VsdFxuICogYmV0d2VlbiAxIGFuZCAxMDAuIFVzZWQgdG8gZXN0YWJsaXNoIGNyaXRpY2FsIHJlc3VsdHMgaW4gY29tYmF0LlxuICovXG5leHBvcnQgY2xhc3MgUGVyY2VudGlsZURpZSBleHRlbmRzIERpZTxudW1iZXI+IHtcbiAgICByb2xsKCkge1xuICAgICAgICB0aGlzLnJvbGxDb3VudCsrO1xuICAgICAgICB0aGlzLmN1cnJlbnRSZXN1bHQgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRSZXN1bHQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcblxudHlwZSBSZWR1eDxQYXlsb2FkPiA9IHtcbiAgICBkaXNwYXRjaChhcmc6IHsgdHlwZTogXCJDSEFOR0VcIiwgdmFsdWU6IFBheWxvYWQgfSk6IHZvaWQ7XG4gICAgc3Vic2NyaWJlKGFyZzogKCkgPT4gdm9pZCk6ICgpID0+IHZvaWQ7XG4gICAgZ2V0U3RhdGUoKTogeyB2YWx1ZTogUGF5bG9hZCB9O1xufVxuXG5leHBvcnQgY2xhc3MgU2V0dGluZ3M8UGF5bG9hZD4ge1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBpbml0aWFsVmFsdWU/OiBQYXlsb2FkKSB7XG5cbiAgICAgICAgY29uc3Qgc2F2ZWRWYWx1ZTogc3RyaW5nIHwgbnVsbCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKTtcbiAgICAgICAgaWYgKHNhdmVkVmFsdWUpIHtcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IEpTT04ucGFyc2Uoc2F2ZWRWYWx1ZSkudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnN0b3JlID0gY3JlYXRlU3RvcmUodGhpcy5yZWR1Y2VyLmJpbmQodGhpcyksIHsgdmFsdWU6IGluaXRpYWxWYWx1ZSB9KTtcbiAgICB9XG5cbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIHN0b3JlOiBSZWR1eDxQYXlsb2FkPjtcblxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uczogTWFwPChwOiBQYXlsb2FkKSA9PiB2b2lkLCAoKSA9PiB2b2lkPiA9IG5ldyBNYXAoKTtcblxuICAgIHByb3RlY3RlZCByZWR1Y2VyKHN0YXRlOiB7IHZhbHVlOiBQYXlsb2FkIH0sIGFjdGlvbjogeyB0eXBlPzogXCJDSEFOR0VcIiwgdmFsdWU6IFBheWxvYWQgfSk6IHsgdmFsdWU6IFBheWxvYWQgfSB7XG4gICAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gXCJDSEFOR0VcIiAmJiBhY3Rpb24udmFsdWUgIT09IHN0YXRlLnZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7IHZhbHVlOiBhY3Rpb24udmFsdWUgfTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG4gICAgb24oY2FsbGJhY2s6IChwOiBQYXlsb2FkKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiBjYWxsYmFjayh0aGlzLmdldCgpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnNldChjYWxsYmFjaywgdGhpcy5zdG9yZS5zdWJzY3JpYmUoaGFuZGxlcikpO1xuICAgIH1cblxuICAgIG9mZihjYWxsYmFjazogKHA6IFBheWxvYWQpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSB0aGlzLnN1YnNjcmlwdGlvbnMuZ2V0KGNhbGxiYWNrKTtcbiAgICAgICAgaWYgKHVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0KCk6IFBheWxvYWQge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLnZhbHVlO1xuICAgIH1cblxuICAgIHNldCh2YWx1ZTogUGF5bG9hZCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHsgdHlwZTogXCJDSEFOR0VcIiwgdmFsdWUgfSk7XG4gICAgfVxufVxuXG50eXBlIFRoZW1lT3B0aW9ucyA9IFwibGlnaHRcIiB8IFwiZGFya1wiIHwgbnVsbDtcbmNvbnN0IHRoZW1lT3B0aW9uTGlzdDogVGhlbWVPcHRpb25zW10gPSBbXCJsaWdodFwiLCBcImRhcmtcIiwgbnVsbF07XG5cbmNsYXNzIFRoZW1lU2V0dGluZ3MgZXh0ZW5kcyBTZXR0aW5nczxUaGVtZU9wdGlvbnM+IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcInRoZW1lXCIsIG51bGwpO1xuICAgIH1cblxuICAgIGdldENsYXNzKCk6IE5vbk51bGxhYmxlPFRoZW1lT3B0aW9ucz4ge1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVGhlbWUgPSB0aGlzLmdldCgpO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZFRoZW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRUaGVtZTtcbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBcImxpZ2h0XCI7XG4gICAgICAgIH0gZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBcImRhcmtcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJsaWdodFwiO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbmV3VGhlbWVJbmRleCA9ICh0aGVtZU9wdGlvbkxpc3QuaW5kZXhPZih0aGlzLmdldCgpKSArIDEpICUgdGhlbWVPcHRpb25MaXN0Lmxlbmd0aDtcbiAgICAgICAgdGhpcy5zZXQodGhlbWVPcHRpb25MaXN0W25ld1RoZW1lSW5kZXhdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBUaGVtZSA9IG5ldyBUaGVtZVNldHRpbmdzKCk7XG5cbmV4cG9ydCBjb25zdCBXZWJob29rID0gbmV3IFNldHRpbmdzPHN0cmluZyB8IG51bGw+KFwid2ViaG9va1wiLCBudWxsKTtcbmV4cG9ydCBjb25zdCBVc2VybmFtZSA9IG5ldyBTZXR0aW5nczxzdHJpbmc+KFwidXNlcm5hbWVcIiwgXCJcIik7XG5leHBvcnQgY29uc3QgQXV0b0Rpc2NvcmQgPSBuZXcgU2V0dGluZ3M8Ym9vbGVhbj4oXCJhdXRvX2Rpc2NvcmRcIiwgZmFsc2UpO1xuIiwiaW1wb3J0IHsgY291bnRCeSB9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCBSZXN1bHQgZnJvbSBcInNyYy9tb2RlbC9yZXN1bHRcIjtcbmltcG9ydCBTeW1ib2xzIGZyb20gXCJzcmMvbW9kZWwvc3ltYm9sc1wiO1xuXG4vKipcbiAqIE1ldGhvZCB1c2VkIHRvIHJlc29sdmUgcGFydCBvZiB0aGUgcm9sbCB3aGVyZSBzdWNjZXNzZXMgYW5kIGZhaWx1cmVzIC9cbiAqIGFkdmFudGFnZXMgYW5kIHRocmVhdHMgY2FuY2VsIGVhY2ggb3RoZXIgb3V0LiBHaXZlbiBsaXN0IG9mIHN5bWJvbHMsXG4gKiBjYW5jZWxzIHRoZW0gb3V0IGFuZCByZXR1cm5zIHRoZSBsaXN0IHdpdGggb25seSB0aGUgcmVtYWluaW5nIHN5bWJvbHMuXG4gKlxuICogQHBhcmFtIHN5bWJvbHMgIExpc3Qgb2Ygc3ltYm9scyByb2xsZWRcbiAqIEByZXR1cm5zICAgICAgICBMaXN0IHdpdGggc3ltYm9scyByZW1haW5pbmcgYWZ0ZXIgY2FuY2VsbGluZyByZXN1bHRzIG91dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlT3Bwb3NpbmdTeW1ib2xzKHN5bWJvbHM6IFN5bWJvbHNbXSk6IFN5bWJvbHNbXSB7XG5cbiAgICAvLyBNYWtlIHRoZSBmaXJzdCBwYXNzIGJ5IGNvdW50aW5nIGFsbCB0aGUgc3ltYm9sc1xuICAgIGNvbnN0IHJlbW92ZSA9IGNvdW50Qnkoc3ltYm9scyk7XG5cbiAgICAvLyBEZWxldGUgY291bnRzIGZvciB0cml1bXBocyBhbmQgZGVzcGFpcnMsIGFzIHRoZXNlIG5ldmVyIGNhbmNlbCBlYWNoIG90aGVyIG91dFxuICAgIGRlbGV0ZSByZW1vdmVbU3ltYm9scy5UUklVTVBIXTtcbiAgICBkZWxldGUgcmVtb3ZlW1N5bWJvbHMuREVTUEFJUl07XG5cbiAgICAvLyBVc2UgdGhlIGNvdW50cyBhbmQgbWFyayB0aGUgc21hbGxlciBudW1iZXIgb2Ygc3ltYm9scyBmb3IgcmVtb3ZhbFxuICAgIHJlbW92ZVtTeW1ib2xzLlNVQ0NFU1NdID0gcmVtb3ZlW1N5bWJvbHMuRkFJTFVSRV0gPSBNYXRoLm1pbihyZW1vdmVbU3ltYm9scy5TVUNDRVNTXSwgcmVtb3ZlW1N5bWJvbHMuRkFJTFVSRV0pO1xuICAgIHJlbW92ZVtTeW1ib2xzLkFEVkFOVEFHRV0gPSByZW1vdmVbU3ltYm9scy5USFJFQVRdID0gTWF0aC5taW4ocmVtb3ZlW1N5bWJvbHMuQURWQU5UQUdFXSwgcmVtb3ZlW1N5bWJvbHMuVEhSRUFUXSk7XG5cbiAgICBjb25zdCByZW1haW5pbmdTeW1ib2xzOiBTeW1ib2xzW10gPSBbXTtcbiAgICBzeW1ib2xzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChyZW1vdmVbaXRlbV0pIHtcbiAgICAgICAgICAgIHJlbW92ZVtpdGVtXS0tO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtYWluaW5nU3ltYm9scy5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVtYWluaW5nU3ltYm9scztcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcm9sbDsgZ2l2ZW4gdGhlIGxpc3Qgb2YgcmVzdWx0cyByb2xsZWQsIGNvdW50cyB0aGVtIHVwLFxuICogYW5kIHJldHVybnMgd2hldGhlciB0aGUgcm9sbCB3YXMgc3VjY2Vzc2Z1bCBvciBmYWlsZWQuXG4gKlxuICogQHBhcmFtIHN5bWJvbHMgIExpc2Ygb2Ygc3ltYm9scyByb2xsZWRcbiAqIEByZXN1bHRzICAgICAgICBXaGV0aGVyIHRoZSByb2xsIHdhcyBzdWNjZXNzZnVsIG9yIGZhaWxlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRqdWRpY2F0ZVJvbGwoc3ltYm9sczogU3ltYm9sc1tdKTogUmVzdWx0IHtcblxuICAgIGNvbnN0IGNvdW50cyA9IGNvdW50Qnkoc3ltYm9scyksXG4gICAgICAgICAgY291bnRTdWNjZXNzID0gKGNvdW50c1tTeW1ib2xzLlRSSVVNUEhdIHx8IDApICsgKGNvdW50c1tTeW1ib2xzLlNVQ0NFU1NdIHx8IDApLFxuICAgICAgICAgIGNvdW50RmFpbHVyZSA9IChjb3VudHNbU3ltYm9scy5ERVNQQUlSXSB8fCAwKSArIChjb3VudHNbU3ltYm9scy5GQUlMVVJFXSB8fCAwKTtcblxuICAgIGNvbnNvbGUud2FybihcIkNPVU5UOiBcIiwgY291bnRzKTtcblxuICAgIHJldHVybiAoY291bnRTdWNjZXNzIC0gY291bnRGYWlsdXJlID4gMCkgPyBSZXN1bHQuU1VDQ0VTUyA6IFJlc3VsdC5GQUlMVVJFO1xufVxuIiwiaW1wb3J0IFN5bWJvbHMgZnJvbSBcInNyYy9tb2RlbC9zeW1ib2xzXCI7XG5pbXBvcnQgeyBHZW5lc3lzRGllLCBBYmlsaXR5RGllLCBQcm9maWNpZW5jeURpZSwgQm9vc3REaWUsIERpZmZpY3VsdHlEaWUsIENoYWxsZW5nZURpZSwgU2V0YmFja0RpZSwgUGVyY2VudGlsZURpZSB9IGZyb20gXCJzcmMvbW9kZWwvZGljZVwiO1xuXG4vKipcbiAqIE9yZGVyIHJlcXVpcmVkIG9mIHRoZSBzeW1ib2xzIG9uIHRoZSBkaWNlLlxuICogR29pbmcgcG9zaXRpdmUgZmlyc3QsIG5lZ2F0aXZlIHNlY29uZCwgYW5kIGZyb20gbW9zdCB0byBsZWFzdCBwb3dlcmZ1bC5cbiAqL1xuY29uc3QgU1lNQk9MX09SREVSSU5HID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgW1N5bWJvbHMuVFJJVU1QSF06ICAgMCxcbiAgICBbU3ltYm9scy5TVUNDRVNTXTogICAxLFxuICAgIFtTeW1ib2xzLkFEVkFOVEFHRV06IDIsXG4gICAgW1N5bWJvbHMuREVTUEFJUl06ICAgMyxcbiAgICBbU3ltYm9scy5GQUlMVVJFXTogICA0LFxuICAgIFtTeW1ib2xzLlRIUkVBVF06ICAgIDVcbn0pO1xuXG4vKipcbiAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gaGVscCB3aXRoIG9yZGVyaW5nIHRoZSByZXN1bHRzLCBmaXJzdCBieSBncm91cGluZyBwb3NpdGl2ZSBkaWNlIGZpcnN0LFxuICogbmVnYXRpdmUgc2Vjb25kLCB0aGVuIGJ5IG9yZGVyaW5nIGVhY2ggZ3JvdXAgZnJvbSBtb3N0IHBvd2VyZnVsIHRvIGxlYXN0IHBvd2VyZnVsLlxuICogSW50ZW5kZWQgdG8gYmUgdXNlZCBhcyBjb21wYXJlIGZ1bmN0aW9uIGZvciBBcnJheS5zb3J0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJTeW1ib2xzKGE6IFN5bWJvbHMsIGI6IFN5bWJvbHMpOiBudW1iZXIge1xuICAgIHJldHVybiBTWU1CT0xfT1JERVJJTkdbYV0gYXMgbnVtYmVyIC0gU1lNQk9MX09SREVSSU5HW2JdIGFzIG51bWJlcjtcbn1cblxuLyoqXG4gKiBPcmRlciByZXF1aXJlZCBvZiB0aGUgZGljZSB0aGVtc2VsdmVzLlxuICogRG9uZSBhcyBmdW5jdGlvbiByYXRoZXIgdGhhbiBtYXAgYmVjYXVzZSB0aGVyZSdzIG5vIGVhc3kgd2F5IHRvIHVzZSBjbGFzcyBvZiBpbnN0YW5jZVxuICogYXMgdmFsdWUgaW4gVHlwZVNjcmlwdC4gR29lcyBwb3NpdGl2ZSBmaXJzdCwgbmVnYXRpdmUgc2Vjb25kLCBtb3N0IHRvIGxlYXN0IHBvd2VyZnVsLFxuICogYW5kIHBlcmNlbnRpbGUgZGllIGdvZXMgYXQgdGhlIGVuZC5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWVGb3JEaWUoZGllOiBHZW5lc3lzRGllIHwgUGVyY2VudGlsZURpZSk6IG51bWJlciB7XG5cbiAgICBpZiAoZGllIGluc3RhbmNlb2YgUHJvZmljaWVuY3lEaWUpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIGlmIChkaWUgaW5zdGFuY2VvZiBBYmlsaXR5RGllKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZGllIGluc3RhbmNlb2YgQm9vc3REaWUpIHtcbiAgICAgICAgcmV0dXJuIDI7XG4gICAgfSBlbHNlIGlmIChkaWUgaW5zdGFuY2VvZiBDaGFsbGVuZ2VEaWUpIHtcbiAgICAgICAgcmV0dXJuIDM7XG4gICAgfSBlbHNlIGlmIChkaWUgaW5zdGFuY2VvZiBEaWZmaWN1bHR5RGllKSB7XG4gICAgICAgIHJldHVybiA0O1xuICAgIH0gZWxzZSBpZiAoZGllIGluc3RhbmNlb2YgU2V0YmFja0RpZSkge1xuICAgICAgICByZXR1cm4gNTtcbiAgICB9XG4gICAgcmV0dXJuIDY7XG59XG5cbi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbiB0byBoZWxwIHdpdGggb3JkZXJpbmcgdGhlIGRpY2UgdGhlbXNlbHZlcywgZmlyc3QgYnkgZ3JvdXBpbmcgcG9zaXRpdmUgZGljZSBmaXJzdCxcbiAqIG5lZ2F0aXZlIHNlY29uZCwgdGhlbiBieSBvcmRlcmluZyBlYWNoIGdyb3VwIGZyb20gbW9zdCBwb3dlcmZ1bCB0byBsZWFzdCBwb3dlcmZ1bC5cbiAqIEludGVuZGVkIHRvIGJlIHVzZWQgYXMgY29tcGFyZSBmdW5jdGlvbiBmb3IgQXJyYXkuc29ydC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9yZGVyRGljZShhOiBHZW5lc3lzRGllIHwgUGVyY2VudGlsZURpZSwgYjogR2VuZXN5c0RpZSB8IFBlcmNlbnRpbGVEaWUpOiBudW1iZXIge1xuICAgIHJldHVybiBnZXRWYWx1ZUZvckRpZShhKSAtIGdldFZhbHVlRm9yRGllKGIpO1xufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgU3ltYm9scyBmcm9tIFwic3JjL21vZGVsL3N5bWJvbHNcIjtcbmltcG9ydCB7IEFsbG93ZWREaWNlLCBHZW5lc3lzRGllLCBBYmlsaXR5RGllLCBQcm9maWNpZW5jeURpZSwgQm9vc3REaWUsIERpZmZpY3VsdHlEaWUsIENoYWxsZW5nZURpZSwgU2V0YmFja0RpZSwgUGVyY2VudGlsZURpZSB9IGZyb20gXCJzcmMvbW9kZWwvZGljZVwiO1xuaW1wb3J0IERpY2VEaXNwbGF5IGZyb20gXCJzcmMvdmlldy9kaXNwbGF5L2RpY2VcIjtcblxudHlwZSBEaWVDcmVhdG9yPFQgZXh0ZW5kcyBBbGxvd2VkRGljZT4gPSB7IGNsczogbmV3ICgpID0+IFQsIHJlc3VsdDogVFtcImN1cnJlbnRSZXN1bHRcIl0gfTtcbmNvbnN0IGRpY2VUb0NyZWF0ZTogRGllQ3JlYXRvcjxBbGxvd2VkRGljZT5bXSA9IFtcbiAgICB7IGNsczogQWJpbGl0eURpZSwgICAgIHJlc3VsdDogW1N5bWJvbHMuU1VDQ0VTU10gfSxcbiAgICB7IGNsczogUHJvZmljaWVuY3lEaWUsIHJlc3VsdDogW1N5bWJvbHMuVFJJVU1QSF0gfSxcbiAgICB7IGNsczogQm9vc3REaWUsICAgICAgIHJlc3VsdDogW1N5bWJvbHMuQURWQU5UQUdFXSB9LFxuICAgIHsgY2xzOiBEaWZmaWN1bHR5RGllLCAgcmVzdWx0OiBbU3ltYm9scy5GQUlMVVJFXSB9LFxuICAgIHsgY2xzOiBDaGFsbGVuZ2VEaWUsICAgcmVzdWx0OiBbU3ltYm9scy5ERVNQQUlSXSB9LFxuICAgIHsgY2xzOiBTZXRiYWNrRGllLCAgICAgcmVzdWx0OiBbU3ltYm9scy5USFJFQVRdIH0sXG4gICAgeyBjbHM6IFBlcmNlbnRpbGVEaWUsICByZXN1bHQ6IDQyIH1cbl07XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgZHJhd3MgdGhlIGNvbGxlY3Rpb24gb2YgYnV0dG9ucyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFkZCBuZXcgZGljZSB0byB0aGUgZGljZSBwb29sLlxuICogT25jZSByZW5kZXJlZCwgaXQgZG9lc24ndCByZWFsbHkgY2hhbmdlLCBzbyBpdCBleHRlbmRzIFB1cmVDb21wb25lbnQgcmF0aGVyIHRoYW4gQ29tcG9uZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWNlQ29udHJvbHMgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PHsgY2FsbGJhY2s6IChkaWU6IEFsbG93ZWREaWNlKSA9PiB2b2lkIH0+IHtcblxuICAgIC8qKlxuICAgICAqIEl0ZXJhdGVzIG92ZXIgdGhlIGxpc3Qgb2YgYWxsIHRoZSBkaWNlIHdlIGhhbmRsZSBpbiB0aGUgZGljZSByb2xsZXIsXG4gICAgICogYWxvbmcgd2l0aCBkZWZhdWx0IHJlc3VsdCB0byBzaG93IChzbyB0aGF0IHRoZSBkaWNlIGFyZSBlYXNpbHkgaWRlbnRpZmlhYmxlKSxcbiAgICAgKiBhbmQgcmVuZGVycyBlYWNoIG9mIHRob3NlIGluIGEgYnV0dG9uIHRoYXQgYWRkcyBhIG5ldyBkaWUgb2YgdGhhdCB0eXBlIHdoZW5ldmVyIGl0J3MgY2xpY2tlZC5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgYWRkaXRpb25CdXR0b25zID0gZGljZVRvQ3JlYXRlLm1hcCgoeyBjbHMsIHJlc3VsdCB9LCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaWVOYW1lID0gc3RhcnRDYXNlKGNscy5uYW1lKS5zcGxpdChcIiBcIilbMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHJldHVybiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD17YGFkZC0ke2RpZU5hbWV9YH0ga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmNhbGxiYWNrKG5ldyBjbHMoKSl9PlxuICAgICAgICAgICAgICAgIDxEaWNlRGlzcGxheSBkaWU9e09iamVjdC5hc3NpZ24obmV3IGNscygpLCB7IGN1cnJlbnRSZXN1bHQ6IHJlc3VsdCB9KX0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGljZS1jb250cm9sc1wiPnthZGRpdGlvbkJ1dHRvbnN9PC9kaXY+O1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERpY2VEaXNwbGF5IGZyb20gXCJzcmMvdmlldy9kaXNwbGF5L2RpY2VcIjtcbmltcG9ydCB7IEFsbG93ZWREaWNlIH0gZnJvbSBcInNyYy9tb2RlbC9kaWNlXCI7XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaXMgdXNlZCBpbiBtYWluIGFwcCBhcmVhIHRvIGRyYXcgdGhlIGxpc3Qgb2YgYWxsIHRoZSBkaWNlIHRvIHRoZSBwb29sLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWNlTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7IGRpY2U6IEFsbG93ZWREaWNlW10sIHNlbGVjdGVkOiBBbGxvd2VkRGljZVtdLCBzZWxlY3RDYWxsYmFjaz86IChkaWU6IEFsbG93ZWREaWNlKSA9PiB2b2lkIH0+IHtcblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBkaWNlTGlzdCA9IHRoaXMucHJvcHMuZGljZS5tYXAoZGllID0+IHtcblxuICAgICAgICAgICAgY29uc3QgY2xpY2sgPSB0aGlzLnByb3BzLnNlbGVjdENhbGxiYWNrID9cbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLnByb3BzLnNlbGVjdENhbGxiYWNrIShkaWUpIDpcbiAgICAgICAgICAgICAgICB2b2lkIDA7XG5cbiAgICAgICAgICAgIHJldHVybiA8RGljZURpc3BsYXkgZGllPXtkaWV9IHNlbGVjdGVkPXt0aGlzLnByb3BzLnNlbGVjdGVkLmluY2x1ZGVzKGRpZSl9IHJvbGxDb3VudD17ZGllLnJvbGxDb3VudH0gb25DbGljaz17Y2xpY2t9IC8+O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkaWNlLWxpc3RcIj57ZGljZUxpc3R9PC9kaXY+O1xuICAgIH1cblxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdGFydENhc2UgfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgeyBBbGxvd2VkRGljZSwgQWxsb3dlZFJlc3VsdHMgfSBmcm9tIFwic3JjL21vZGVsL2RpY2VcIjtcbmltcG9ydCBTeW1ib2xEaXNwbGF5IGZyb20gXCJzcmMvdmlldy9kaXNwbGF5L3N5bWJvbFwiO1xuXG4vKipcbiAqIENvbnZlcnRzIHJlc3VsdCBvZiB0aGUgZGllIHJvbGwgKG9yIHRoZSBsYWNrIG9mIHRoZXJlb2YpIGludG8gc29tZXRoaW5nXG4gKiBodW1hbi1yZWFkYWJsZTsgcGVuZGluZyBtYXJrIGZvciBubyByb2xscywgc3ltYm9scyBmb3IgcmVndWxhciBHZW5lc3lzIGRpY2UsXG4gKiBhbmQgdGhlIG51bWJlciBmb3IgcGVyY2VudGlsZSBkaWUuXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnREaWVSZXN1bHQocmVzdWx0OiBBbGxvd2VkUmVzdWx0cyk6IEpTWC5FbGVtZW50W10ge1xuICAgIGlmIChyZXN1bHQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFs8c3Bhbj4/PC9zcGFuPl07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBbPHNwYW4+e3Jlc3VsdCArIFwiXCJ9PC9zcGFuPl07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQubWFwKChzLCBpKSA9PiA8U3ltYm9sRGlzcGxheSBzeW1ib2w9e3N9IGtleT17aX0gLz4pO1xufVxuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGlzIHVzZWQgdG8gcmVuZGVyIHRoZSBkaWNlIGltYWdlcyBpbiB0aGUgbWFpbiBhcmVhIG9mIHRoZSBhcHAuXG4gKiBHaXZlbiB0aGUgZGllIG1vZGVsIGluc3RhbmNlLCBjb252ZXJ0cyB0aGUgcm9sbCByZXN1bHQgaW50byBzb21ldGhpbmcgaHVtYW4tcmVhZGFibGUsXG4gKiBhbmQgZHJhd3MgaXQgaW4gYW4gZWxlbWVudCBzdHlsZWQgdG8gbG9vayBsaWtlIGEgZGllIG9mIHJlbGV2YW50IHNoYXBlIGFuZCBjb2xvdXIuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpY2VEaXNwbGF5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHtcbiAgICBkaWU6IEFsbG93ZWREaWNlLFxuICAgIHNlbGVjdGVkPzogYm9vbGVhbixcbiAgICByb2xsQ291bnQ/OiBudW1iZXIsXG4gICAgb25DbGljaz86IChldjogYW55KSA9PiB2b2lkXG59PiBpbXBsZW1lbnRzIEV2ZW50TGlzdGVuZXJPYmplY3Qge1xuXG4gICAgZGllUmVmZXJlbmNlOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+ID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IGNsYXNzTmFtZTogc3RyaW5nID0gc3RhcnRDYXNlKHRoaXMucHJvcHMuZGllLmNvbnN0cnVjdG9yLm5hbWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgc2VsZWN0ZWRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiA8ZGl2IHJlZj17dGhpcy5kaWVSZWZlcmVuY2V9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9PlxuICAgICAgICAgICAge2NvbnZlcnREaWVSZXN1bHQodGhpcy5wcm9wcy5kaWUuY3VycmVudFJlc3VsdCl9XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzOiB0aGlzW1wicHJvcHNcIl0pOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGllICE9PSBuZXh0UHJvcHMuZGllIHx8XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkICE9PSBuZXh0UHJvcHMuc2VsZWN0ZWQgfHxcbiAgICAgICAgICAgIHRoaXMucHJvcHMucm9sbENvdW50ICE9PSBuZXh0UHJvcHMucm9sbENvdW50XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogdGhpc1tcInByb3BzXCJdKTogdm9pZCB7XG5cbiAgICAgICAgLy8gV2Ugb25seSBhcHBseSB0aGUgc2hha2UgYW5pbWF0aW9uIHdoZW4gdGhlcmUncyBubyBwcmVmZXJlbmNlIGZvciByZWR1Y2VkIG1vdGlvbixcbiAgICAgICAgLy8gYW5kIHdoZW4gdGhlcmUncyBhY3R1YWwgcmVzdWx0IG9uIHRoZSBkaWNlICgnY2F1c2UgdGhhdCBtZWFucyB0aGVyZSdzIHNvbWV0aGluZyB0byByb2xsKS5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSlcIikubWF0Y2hlcyAmJlxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yb2xsQ291bnQgIT09IHByZXZQcm9wcy5yb2xsQ291bnRcbiAgICAgICAgKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpZUVsZW1lbnQgPSB0aGlzLmRpZVJlZmVyZW5jZS5jdXJyZW50ITtcbiAgICAgICAgICAgIGRpZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCB0aGlzLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBkaWUgaXMgc3RpbGwgaW4gdGhlIHByb2Nlc3Mgb2YgcGxheWluZyBzaGFrZSBhbmltYXRpb24sXG4gICAgICAgICAgICAvLyByZXN0YXJ0IGl0IGJ5IHJlbW92aW5nIHRoZSBjbGFzcyBhbmQgdG9nZ2xpbmcgcmVmbG93IHdpdGggYm91bmRpbmcgcmVjdDtcbiAgICAgICAgICAgIGlmIChkaWVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInNoYWtlXCIpKSB7XG4gICAgICAgICAgICAgICAgZGllRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2hha2VcIik7XG4gICAgICAgICAgICAgICAgZGllRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGllRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2hha2VcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVFdmVudChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiYW5pbWF0aW9uZW5kXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpZUVsZW1lbnQgPSB0aGlzLmRpZVJlZmVyZW5jZS5jdXJyZW50ITtcbiAgICAgICAgICAgIGRpZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCB0aGlzLCBmYWxzZSk7XG4gICAgICAgICAgICBkaWVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzaGFrZVwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCBTeW1ib2xzIGZyb20gXCJzcmMvbW9kZWwvc3ltYm9sc1wiO1xuXG4vKiogUmVuZGVyIEdlbmVzeXMgZGljZSBzeW1ib2xzIHVzaW5nIHRoZSBkZWRpY2F0ZWQgZm9udC4gKi9cbmNvbnN0IFN5bWJvbERpc3BsYXk6IFJlYWN0LlNGQzx7IHN5bWJvbDogU3ltYm9scyB8IFN5bWJvbHNbXSB9PiA9ICh7IHN5bWJvbCB9KSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGlzQXJyYXkoc3ltYm9sKSA/IHN5bWJvbCA6IFtzeW1ib2xdO1xuICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJkaWNlLXN5bWJvbFwiPntsaXN0LmpvaW4oXCJcIil9PC9zcGFuPjtcbn07XG5leHBvcnQgZGVmYXVsdCBTeW1ib2xEaXNwbGF5O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkaWZmZXJlbmNlIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuXG5pbXBvcnQgeyBBbGxvd2VkRGljZSwgQWxsb3dlZFJlc3VsdHMgfSBmcm9tIFwic3JjL21vZGVsL2RpY2VcIjtcbmltcG9ydCB7IEFiaWxpdHlEaWUsIFByb2ZpY2llbmN5RGllLCBCb29zdERpZSwgRGlmZmljdWx0eURpZSwgQ2hhbGxlbmdlRGllLCBTZXRiYWNrRGllLCBQZXJjZW50aWxlRGllIH0gZnJvbSBcInNyYy9tb2RlbC9kaWNlXCI7XG5pbXBvcnQgaHRtbDJjYW52YXMgZnJvbSBcImh0bWwyY2FudmFzXCI7XG5pbXBvcnQgeyBXZWJob29rLCBVc2VybmFtZSwgQXV0b0Rpc2NvcmQgfSBmcm9tIFwic3JjL21vZGVsL3NldHRpbmdzXCI7XG5pbXBvcnQgeyByZW1vdmVPcHBvc2luZ1N5bWJvbHMsIGFkanVkaWNhdGVSb2xsIH0gZnJvbSBcInNyYy91dGlsL2FkanVkaWNhdGVcIjtcbmltcG9ydCB7IG9yZGVyU3ltYm9scyB9IGZyb20gXCJzcmMvdXRpbC9vcmRlclwiO1xuaW1wb3J0IFN5bWJvbHMgZnJvbSBcInNyYy9tb2RlbC9zeW1ib2xzXCI7XG5pbXBvcnQgUmVzdWx0IGZyb20gXCJzcmMvbW9kZWwvcmVzdWx0XCI7XG5cbmltcG9ydCBEaWNlQ29udHJvbHMgZnJvbSBcInNyYy92aWV3L2RpY2UtY29udHJvbHNcIjtcbmltcG9ydCBEaWNlTGlzdCBmcm9tIFwic3JjL3ZpZXcvZGljZS1saXN0XCI7XG5pbXBvcnQgUm9sbFJlc3VsdHMgZnJvbSBcInNyYy92aWV3L3JvbGwtcmVzdWx0c1wiO1xuaW1wb3J0IHsgb3JkZXJEaWNlIH0gZnJvbSBcInNyYy91dGlsL29yZGVyXCI7XG5cbnR5cGUgZGljZVR5cGVzID0gXCJhYmlsaXR5XCIgfCBcInByb2ZpY2llbmN5XCIgfCBcImJvb3N0XCIgfCBcImRpZmZpY3VsdHlcIiB8IFwiY2hhbGxlbmdlXCIgfCBcInNldGJhY2tcIiB8IFwicGVyY2VudGlsZVwiO1xuY29uc3QgZGljZVR5cGVzOiBSZWFkb25seTxkaWNlVHlwZXNbXT4gPSBPYmplY3QuZnJlZXplKFtcImFiaWxpdHlcIiwgXCJwcm9maWNpZW5jeVwiLCBcImJvb3N0XCIsIFwiZGlmZmljdWx0eVwiLCBcImNoYWxsZW5nZVwiLCBcInNldGJhY2tcIl0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluQXBwQXJlYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgeyBkaWNlOiBBbGxvd2VkRGljZVtdLCBzZWxlY3RlZDogQWxsb3dlZERpY2VbXSwgcmVzdWx0czogQWxsb3dlZFJlc3VsdHNbXSB9PiB7XG5cbiAgICByZXN1bHRzUmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+ID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgcHJpdmF0ZSB1cGRhdGVBdXRvRGlzY29yZCA9ICgpID0+IHRoaXMuZm9yY2VVcGRhdGUoKTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiB7fSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGRpY2U6IFtdLCBzZWxlY3RlZDogW10sIHJlc3VsdHM6IFtdIH07XG5cbiAgICAgICAgdGhpcy5hZGREaWUgPSB0aGlzLmFkZERpZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNsZWFyRGljZSA9IHRoaXMuY2xlYXJEaWNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uID0gdGhpcy50b2dnbGVTZWxlY3Rpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yb2xsID0gdGhpcy5yb2xsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2VuZFRvRGlzY29yZCA9IHRoaXMuc2VuZFRvRGlzY29yZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBBdXRvRGlzY29yZC5vbih0aGlzLnVwZGF0ZUF1dG9EaXNjb3JkKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgQXV0b0Rpc2NvcmQub2ZmKHRoaXMudXBkYXRlQXV0b0Rpc2NvcmQpO1xuICAgIH1cblxuICAgIGFkZERpZShuZXdEaWU6IEFsbG93ZWREaWNlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHsgZGljZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIGRpY2U6IGRpY2UuY29uY2F0KFtuZXdEaWVdKS5zb3J0KG9yZGVyRGljZSkgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJEaWNlKCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IHsgZGljZSwgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCkge1xuXG4gICAgICAgICAgICBjb25zdCByZW1haW5pbmdEaWNlID0gZGlmZmVyZW5jZShkaWNlLCBzZWxlY3RlZCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBkaWNlOiByZW1haW5pbmdEaWNlLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBbXSxcbiAgICAgICAgICAgICAgICByZXN1bHRzOiByZW1haW5pbmdEaWNlLm1hcChkaWUgPT4gZGllLmN1cnJlbnRSZXN1bHQpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpY2U6IFtdLCBzZWxlY3RlZDogW10sIHJlc3VsdHM6IFtdIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlU2VsZWN0aW9uKHRvZ2dsZWREaWU6IEFsbG93ZWREaWNlKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgaWYgKHNlbGVjdGVkLmluY2x1ZGVzKHRvZ2dsZWREaWUpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgc2VsZWN0ZWQ6IHNlbGVjdGVkLmZpbHRlcihkaWUgPT4gZGllICE9PSB0b2dnbGVkRGllKSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBzZWxlY3RlZDogc2VsZWN0ZWQuY29uY2F0KFt0b2dnbGVkRGllXSkgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByb2xsKCkge1xuXG4gICAgICAgIGNvbnN0IHsgZGljZSwgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCkge1xuXG4gICAgICAgICAgICBzZWxlY3RlZC5mb3JFYWNoKGRpZSA9PiBkaWUucm9sbCgpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRpY2UsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IFtdLFxuICAgICAgICAgICAgICAgIHJlc3VsdHM6IGRpY2UubWFwKGRpZSA9PiBkaWUuY3VycmVudFJlc3VsdClcbiAgICAgICAgICAgIH0sICgpID0+IHsgaWYgKEF1dG9EaXNjb3JkLmdldCgpKSB0aGlzLnNlbmRUb0Rpc2NvcmQoKTsgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCByZXN1bHRzOiB0aGlzLnN0YXRlLmRpY2UubWFwKGRpZSA9PiBkaWUucm9sbCgpKSB9LFxuICAgICAgICAgICAgICAgICgpID0+IHsgaWYgKEF1dG9EaXNjb3JkLmdldCgpKSB0aGlzLnNlbmRUb0Rpc2NvcmQoKTsgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBzZW5kVG9EaXNjb3JkKCkge1xuICAgICAgICBjb25zdCB3ZWJob29rID0gV2ViaG9vay5nZXQoKTtcbiAgICAgICAgaWYgKCF3ZWJob29rIHx8ICF0aGlzLnJlc3VsdHNSZWYuY3VycmVudCkgeyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCBjYW52YXMgPSBhd2FpdCBodG1sMmNhbnZhcyh0aGlzLnJlc3VsdHNSZWYuY3VycmVudCk7XG4gICAgICAgIGNvbnN0IGJsb2I6IEJsb2IgPSBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+XG4gICAgICAgICAgICBjYW52YXMudG9CbG9iKChiOiBCbG9iIHwgbnVsbCkgPT4gcmVzb2x2ZShiISksIFwiaW1hZ2UvcG5nXCIpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtLmFwcGVuZChcImZpbGVcIiwgYmxvYiwgXCJyb2xsLnBuZ1wiKTtcbiAgICAgICAgZm9ybS5hcHBlbmQoXCJ1c2VybmFtZVwiLCBVc2VybmFtZS5nZXQoKSB8fCBcIkdlbmVzeXMgUm9sbGVyXCIpO1xuICAgICAgICBmb3JtLmFwcGVuZChcImNvbnRlbnRcIiwgdGhpcy5zdW1tYXJpc2VSZXN1bHRzKCkpO1xuXG4gICAgICAgIGZldGNoKHdlYmhvb2ssIHsgbWV0aG9kOiBcIlBPU1RcIiwgYm9keTogZm9ybSB9KTtcbiAgICB9XG5cbiAgICBzdW1tYXJpc2VSZXN1bHRzKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHN5bWJvbHM6IFN5bWJvbHNbXSA9IFtdO1xuICAgICAgICBjb25zdCBudW1iZXJzOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLnJlc3VsdHMuZm9yRWFjaChyID0+IHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHIpKSB7IHN5bWJvbHMucHVzaCguLi5yKTsgfSBlbHNlIGlmICh0eXBlb2YgciA9PT0gXCJudW1iZXJcIikgeyBudW1iZXJzLnB1c2gocik7IH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGZsYXQgPSByZW1vdmVPcHBvc2luZ1N5bWJvbHMoc3ltYm9scykuc29ydChvcmRlclN5bWJvbHMpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhZGp1ZGljYXRlUm9sbChmbGF0KTtcbiAgICAgICAgY29uc3QgY291bnRzID0gbmV3IE1hcDxTeW1ib2xzLCBudW1iZXI+KCk7XG4gICAgICAgIGZsYXQuZm9yRWFjaChzID0+IGNvdW50cy5zZXQocywgKGNvdW50cy5nZXQocykgfHwgMCkgKyAxKSk7XG4gICAgICAgIGNvbnN0IG5hbWVzOiBSZWNvcmQ8U3ltYm9scywgc3RyaW5nPiA9IHtcbiAgICAgICAgICAgIFtTeW1ib2xzLlNVQ0NFU1NdOiBcItGD0YHQv9C10YVcIixcbiAgICAgICAgICAgIFtTeW1ib2xzLkZBSUxVUkVdOiBcItC90LXRg9C00LDRh9CwXCIsXG4gICAgICAgICAgICBbU3ltYm9scy5BRFZBTlRBR0VdOiBcItC/0YDQtdC40LzRg9GJ0LXRgdGC0LLQvlwiLFxuICAgICAgICAgICAgW1N5bWJvbHMuVEhSRUFUXTogXCLRg9Cz0YDQvtC30LBcIixcbiAgICAgICAgICAgIFtTeW1ib2xzLlRSSVVNUEhdOiBcItGC0YDQuNGD0LzRhFwiLFxuICAgICAgICAgICAgW1N5bWJvbHMuREVTUEFJUl06IFwi0L7RgtGH0LDRj9C90LjQtVwiLFxuICAgICAgICB9IGFzIGFueTtcbiAgICAgICAgbGV0IHRleHQgPSByZXN1bHQgPT09IFJlc3VsdC5TVUNDRVNTID8gXCLQmNGC0L7Qszog0YPRgdC/0LXRhVwiIDogcmVzdWx0ID09PSBSZXN1bHQuRkFJTFVSRSA/IFwi0JjRgtC+0LM6INC/0YDQvtCy0LDQu1wiIDogXCLQmNGC0L7QszpcIjtcbiAgICAgICAgdGV4dCArPSBcIlxcblwiICsgQXJyYXkuZnJvbShjb3VudHMuZW50cmllcygpKS5tYXAoKFtzeW0sIGNvdW50XSkgPT4gYCR7bmFtZXNbc3ltXX06ICR7Y291bnR9YCkuam9pbihcIlxcblwiKTtcbiAgICAgICAgaWYgKG51bWJlcnMubGVuZ3RoKSB0ZXh0ICs9IFwiXFxu0KfQuNGB0LvQsDogXCIgKyBudW1iZXJzLmpvaW4oXCIsIFwiKTtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkaWNlLWFyZWFcIj5cbiAgICAgICAgICAgIDxEaWNlQ29udHJvbHMgY2FsbGJhY2s9e3RoaXMuYWRkRGllfS8+XG4gICAgICAgICAgICA8RGljZUxpc3QgZGljZT17dGhpcy5zdGF0ZS5kaWNlfSBzZWxlY3RlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZH0gc2VsZWN0Q2FsbGJhY2s9e3RoaXMudG9nZ2xlU2VsZWN0aW9ufSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJvbGxcIiBvbkNsaWNrPXt0aGlzLnJvbGx9Pnt0aGlzLnN0YXRlLnNlbGVjdGVkLmxlbmd0aCA/IFwiUmUtcm9sbCBTZWxlY3RlZFwiIDogXCJSb2xsXCJ9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsZWFyXCIgb25DbGljaz17dGhpcy5jbGVhckRpY2V9Pnt0aGlzLnN0YXRlLnNlbGVjdGVkLmxlbmd0aCA/IFwiUmVtb3ZlIFNlbGVjdGVkXCIgOiBcIkNsZWFyXCJ9PC9idXR0b24+XG4gICAgICAgICAgICAgICAge1dlYmhvb2suZ2V0KCkgJiYgIUF1dG9EaXNjb3JkLmdldCgpICYmIHRoaXMuc3RhdGUucmVzdWx0cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJkaXNjb3JkXCIgb25DbGljaz17dGhpcy5zZW5kVG9EaXNjb3JkfT7QntGC0L/RgNCw0LLQuNGC0Ywg0LIgRGlzY29yZDwvYnV0dG9uPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiByZWY9e3RoaXMucmVzdWx0c1JlZn0+XG4gICAgICAgICAgICAgICAgPFJvbGxSZXN1bHRzIHJlc3VsdHM9e3RoaXMuc3RhdGUucmVzdWx0c30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj47XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFdlYmhvb2ssIFVzZXJuYW1lLCBUaGVtZSwgQXV0b0Rpc2NvcmQgfSBmcm9tIFwic3JjL21vZGVsL3NldHRpbmdzXCI7XG50eXBlIE1lbnVQcm9wcyA9IHsgdG9nZ2xlQ2FsbGJhY2s/OiAob3BlbjogYm9vbGVhbikgPT4gdm9pZCB9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxNZW51UHJvcHM+IHtcbiAgICBzdGF0ZSA9IHsgd2ViaG9vazogV2ViaG9vay5nZXQoKSB8fCBcIlwiLCB1c2VybmFtZTogVXNlcm5hbWUuZ2V0KCkgfHwgXCJcIiwgdGhlbWU6IFRoZW1lLmdldCgpIHx8IFwiXCIsIGF1dG9EaXNjb3JkOiBBdXRvRGlzY29yZC5nZXQoKSB8fCBmYWxzZSB9O1xuXG4gICAgaGFuZGxlV2ViaG9vayA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCB3ZWJob29rID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWJob29rIH0pO1xuICAgICAgICBXZWJob29rLnNldCh3ZWJob29rIHx8IG51bGwpO1xuICAgIH07XG5cbiAgICBoYW5kbGVVc2VybmFtZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcm5hbWUgfSk7XG4gICAgICAgIFVzZXJuYW1lLnNldCh1c2VybmFtZSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVRoZW1lID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCB0aGVtZSA9IGUudGFyZ2V0LnZhbHVlIGFzIFwibGlnaHRcIiB8IFwiZGFya1wiIHwgXCJcIjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRoZW1lIH0pO1xuICAgICAgICBUaGVtZS5zZXQodGhlbWUgfHwgbnVsbCk7XG4gICAgfTtcblxuICAgIGhhbmRsZUF1dG9EaXNjb3JkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IGF1dG8gPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYXV0b0Rpc2NvcmQ6IGF1dG8gfSk7XG4gICAgICAgIEF1dG9EaXNjb3JkLnNldChhdXRvKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAgICA8bGFiZWw+0JDQtNGA0LXRgSDQstC10LHRhdGD0LrQsFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidXJsXCIgdmFsdWU9e3RoaXMuc3RhdGUud2ViaG9va30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlV2ViaG9va30vPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD7QmNC80Y9cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS51c2VybmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcm5hbWV9Lz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3hcIj7QkNCy0YLQvtC+0YLQv9GA0LDQstC60LAg0LIgRGlzY29yZFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmF1dG9EaXNjb3JkfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVBdXRvRGlzY29yZH0vPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD7QotC10LzQsFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3RoaXMuc3RhdGUudGhlbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRoZW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPtCh0LjRgdGC0LXQvNC90LDRjzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGlnaHRcIj7QodCy0LXRgtC70LDRjzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGFya1wiPtCi0ZHQvNC90LDRjzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRvZ2dsZUNhbGxiYWNrICYmIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy50b2dnbGVDYWxsYmFjayEoZmFsc2UpfT7Ql9Cw0LrRgNGL0YLRjDwvYnV0dG9uPn1cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIE5hdkJ1dHRvblByb3BzID0geyB0b2dnbGVDYWxsYmFjaz86IChleHBhbmRlZDogYm9vbGVhbikgPT4gdm9pZCB9O1xuXG4vKipcbiAqIENvbXBvbmVudCB1c2VkIHRvIGluZGljYXRlIHRoZSBjb250cm9scyBmb3IgYnJpbmdpbmcgdXAgdGhlIG1lbnUgcGFuZS5cbiAqIEhhbmRsZXMgdXNlciBjbGlja3MsIGFuaW1hdGluZyBhcHByb3ByaWF0ZWx5IHdoZW4gdGhlIG1lbnUgaXMgb3BlbmVkLCBjaGFuZ2luZyB0d28gbGluZXNcbiAqIG9mIHRoZSBidXJnZXIgaW50byBhIGNyb3NzLCBhbmQgaGlkaW5nIHRoZSB0aGlyZCBvbmUsIG9yIHJldmVydGluZyB3aGVuIHRoZSBtZW51IHBhbmUgaXMgaGlkZGVuLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZCdXR0b24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PE5hdkJ1dHRvblByb3BzLCB7IGV4cGFuZGVkOiBib29sZWFuIH0+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBOYXZCdXR0b25Qcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGV4cGFuZGVkOiBmYWxzZSB9O1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgZm9yIHVzZXIgaW50ZXJhY3Rpb24gb2YgY2xpY2tpbmcgb24gdGhlIG5hdiBidXR0b247XG4gICAgICogaXQgdG9nZ2xlcyB0aGUgZXhwYW5kZWQgc3RhdGUsIGFuZCBpZiBjYWxsYmFjayBoYXMgYmVlbiBwcm92aWRlZFxuICAgICAqIGZvciB0aGUgY29tcG9uZW50LCBydW5zIGl0IHdpdGggbmV3IGV4cGFuc2lvbiBzdGF0ZS5cbiAgICAgKi9cbiAgICBoYW5kbGVDbGljaygpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSAhdGhpcy5zdGF0ZS5leHBhbmRlZDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV4cGFuZGVkOiBuZXdTdGF0ZSB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudG9nZ2xlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlQ2FsbGJhY2sobmV3U3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcG9uZW50IHJlbmRlcmVyLCBjcmVhdGVzIGJhc2UgU1ZHIGVsZW1lbnQgd2l0aCB0aHJlZSBob3Jpem9udGFsIGxpbmVzIHdpdGhpbi5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgbGluZXMgPSBbMiwgNSwgOF0ubWFwKHkgPT4gPGxpbmUgeDE9XCIxLjVcIiB5MT17eX0geDI9XCI4LjVcIiB5Mj17eX0gLz4pO1xuXG4gICAgICAgIHJldHVybiA8c3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAgMTBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWJ1dHRvbiAke3RoaXMuc3RhdGUuZXhwYW5kZWQgPyBcImV4cGFuZGVkXCIgOiBcIlwifWB9XG4gICAgICAgICAgICBzdHlsZT17eyBzdHJva2VXaWR0aDogMS41LCBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgID57bGluZXN9PC9zdmc+O1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZmxhdHRlbiwgaXNBcnJheSB9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCBSZXN1bHQgZnJvbSBcInNyYy9tb2RlbC9yZXN1bHRcIjtcbmltcG9ydCBTeW1ib2xzIGZyb20gXCJzcmMvbW9kZWwvc3ltYm9sc1wiO1xuaW1wb3J0IFN5bWJvbERpc3BsYXkgZnJvbSBcInNyYy92aWV3L2Rpc3BsYXkvc3ltYm9sXCI7XG5pbXBvcnQgeyBhZGp1ZGljYXRlUm9sbCwgcmVtb3ZlT3Bwb3NpbmdTeW1ib2xzIH0gZnJvbSBcInNyYy91dGlsL2FkanVkaWNhdGVcIjtcbmltcG9ydCB7IG9yZGVyU3ltYm9scyB9IGZyb20gXCJzcmMvdXRpbC9vcmRlclwiO1xuaW1wb3J0IHsgQWxsb3dlZFJlc3VsdHMgfSBmcm9tIFwic3JjL21vZGVsL2RpY2VcIjtcblxuY29uc3QgUm9sbFJlc3VsdHM6IFJlYWN0LlNGQzx7IHJlc3VsdHM6IEFsbG93ZWRSZXN1bHRzW10gfT4gPSAoeyByZXN1bHRzIH0pID0+IHtcblxuICAgIGxldCBzdGF0dXM6IFJlc3VsdCA9IFJlc3VsdC5ORVVUUkFMO1xuICAgIGNvbnN0IHJlc3VsdHNTeW1ib2xzOiBTeW1ib2xzW11bXSA9IFtdLFxuICAgICAgICAgIHJlc3VsdHNOdW1iZXJzOiBudW1iZXJbXSA9IFtdLFxuICAgICAgICAgIGVsZW1lbnRzOiBKU1guRWxlbWVudFtdID0gW107XG5cbiAgICByZXN1bHRzLmZvckVhY2gocmVzdWx0ID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHJlc3VsdHNOdW1iZXJzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJlc3VsdHNTeW1ib2xzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSWYgdGhlcmUgYXJlIGFueSBzeW1ib2xzLCBsZXQncyBmbGF0dGVuIHRoZSByZXN1bHRzIGFuZFxuICAgIC8vIGVsaW1pbmF0ZSB0aGUgb3Bwb3Npbmcgb25lcyBmb3IgZGlzcGxheTsgYWxzbyBhZGp1ZGljYXRlXG4gICAgLy8gdGhlIHJvbGwgcmVzdWx0cy5cbiAgICBpZiAocmVzdWx0c1N5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGZsYXRSb2xsID0gcmVtb3ZlT3Bwb3NpbmdTeW1ib2xzKGZsYXR0ZW4ocmVzdWx0c1N5bWJvbHMpKS5zb3J0KG9yZGVyU3ltYm9scyk7XG4gICAgICAgIHN0YXR1cyA9IGFkanVkaWNhdGVSb2xsKGZsYXRSb2xsKTtcbiAgICAgICAgaWYgKGZsYXRSb2xsLmxlbmd0aCkge1xuICAgICAgICAgICAgZWxlbWVudHMucHVzaCg8ZGl2IGNsYXNzTmFtZT17YGdyb3VwIHN5bWJvbGljICR7ZmxhdFJvbGwubGVuZ3RoID4gOCA/IFwibGFyZ2VcIiA6IFwiXCJ9YH0+e2ZsYXRSb2xsLm1hcChzID0+IDxTeW1ib2xEaXNwbGF5IHN5bWJvbD17c30vPil9PC9kaXY+KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVsZW1lbnRzLnB1c2goLi4ucmVzdWx0c051bWJlcnMubWFwKHNjb3JlID0+IDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAgbnVtZXJpY1wiPntzY29yZX08L2Rpdj4pKTtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YHJvbGwtcmVzdWx0cyAke3N0YXR1c31gfT57ZWxlbWVudHN9PC9kaXY+O1xufTtcbmV4cG9ydCBkZWZhdWx0IFJvbGxSZXN1bHRzO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyJdLCJzb3VyY2VSb290IjoiIn0=