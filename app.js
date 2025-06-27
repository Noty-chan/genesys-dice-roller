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
/*! exports provided: Settings, Theme, Webhooks, WebhookPriority, getWebhook, Username, AutoDiscord */
/*! exports used: AutoDiscord, Theme, Username, WebhookPriority, Webhooks, getWebhook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Settings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Webhooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return WebhookPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getWebhook; });
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
const Webhooks = new Settings("webhooks", []);
const WebhookPriority = new Settings("webhook_priority", 0);
function getWebhook() {
    const hooks = Webhooks.get();
    const index = WebhookPriority.get();
    return hooks[index] || null;
}
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
            const webhook = Object(src_model_settings__WEBPACK_IMPORTED_MODULE_3__[/* getWebhook */ "f"])();
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
        const result = symbols.length ? Object(src_util_adjudicate__WEBPACK_IMPORTED_MODULE_4__[/* adjudicateRoll */ "a"])(flat) : "neutral" /* Result.NEUTRAL */;
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
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { ref: this.resultsRef },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_view_dice_list__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], { dice: this.state.dice, selected: this.state.selected, selectCallback: this.toggleSelection }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_view_roll_results__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], { results: this.state.results })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "actions" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { id: "roll", onClick: this.roll }, this.state.selected.length ? "Re-roll Selected" : "Roll"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { id: "clear", onClick: this.clearDice }, this.state.selected.length ? "Remove Selected" : "Clear"),
                Object(src_model_settings__WEBPACK_IMPORTED_MODULE_3__[/* getWebhook */ "f"])() && !src_model_settings__WEBPACK_IMPORTED_MODULE_3__[/* AutoDiscord */ "a"].get() && this.state.results.length > 0 &&
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { id: "discord", onClick: this.sendToDiscord }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432 Discord")));
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
        this.state = { webhooks: src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Webhooks */ "e"].get().length ? src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Webhooks */ "e"].get() : [""], priority: src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* WebhookPriority */ "d"].get(), username: src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Username */ "c"].get() || "", theme: src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "b"].get() || "", autoDiscord: src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* AutoDiscord */ "a"].get() || false };
        this.handleWebhook = (idx, e) => {
            const webhooks = this.state.webhooks.slice();
            webhooks[idx] = e.target.value;
            this.setState({ webhooks });
            src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Webhooks */ "e"].set(webhooks.filter(w => w));
        };
        this.addWebhookField = () => {
            if (this.state.webhooks.length < 5) {
                this.setState({ webhooks: this.state.webhooks.concat([""]) });
            }
        };
        this.removeWebhookField = (idx) => {
            if (this.state.webhooks.length > 1) {
                const webhooks = this.state.webhooks.slice();
                webhooks.splice(idx, 1);
                const priority = Math.min(this.state.priority, webhooks.length - 1);
                this.setState({ webhooks, priority });
                src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Webhooks */ "e"].set(webhooks.filter(w => w));
                src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* WebhookPriority */ "d"].set(priority);
            }
        };
        this.handlePriority = (e) => {
            const priority = parseInt(e.target.value, 10);
            this.setState({ priority });
            src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* WebhookPriority */ "d"].set(priority);
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
            this.state.webhooks.map((hook, i) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { key: i },
                "\u0412\u0435\u0431\u0445\u0443\u043A #",
                i + 1,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "field" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "url", value: hook, onChange: e => this.handleWebhook(i, e) }),
                    this.state.webhooks.length > 1 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "remove", onClick: () => this.removeWebhookField(i) }, "\u00D7")))),
            this.state.webhooks.length < 5 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { onClick: this.addWebhookField }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0435\u0431\u0445\u0443\u043A"),
            this.state.webhooks.length > 1 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u044B\u0439 \u043A\u0430\u043D\u0430\u043B",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { value: this.state.priority, onChange: this.handlePriority }, this.state.webhooks.map((_, i) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: i, key: "p" + i },
                    "\u0412\u0435\u0431\u0445\u0443\u043A #",
                    i + 1)))),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvZGljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvYWRqdWRpY2F0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9vcmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9kaWNlLWNvbnRyb2xzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9kaWNlLWxpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L2Rpc3BsYXkvZGljZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZGlzcGxheS9zeW1ib2wudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L21haW4tYXBwLWFyZWEudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L21lbnUudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L25hdi1idXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L3JvbGwtcmVzdWx0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL21haW4ubGVzcz85MjJkIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7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UyxFQUFFLGtCQUFrQixRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsb0RBQUMsdUVBQWEsSUFBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBTyxDQUFDLENBQUM7UUFDbEosQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLDZEQUFLLFNBQVMsRUFBQyxlQUFlLElBQUUsS0FBSyxDQUFPLENBQUMsQ0FBQyxDQUFDO0lBRTVGLE9BQU8sNkRBQUssU0FBUyxFQUFFLGdCQUFnQixNQUFNLEVBQUUsSUFBRyxRQUFRLENBQU8sQ0FBQztBQUN0RSxDQUFDLENBQUM7QUFDYSxvRUFBVyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDdkMzQix1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSx1Qjs7Ozs7Ozs7Ozs7O0FDQUEsMEIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9nZW5lc3lzLWRpY2Utcm9sbGVyL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCJzcmMvbW9kZWwvc2V0dGluZ3NcIjtcbmltcG9ydCBNYWluQXBwQXJlYSBmcm9tIFwic3JjL3ZpZXcvbWFpbi1hcHAtYXJlYVwiO1xuaW1wb3J0IE5hdkJ1dHRvbiBmcm9tIFwic3JjL3ZpZXcvbmF2LWJ1dHRvblwiO1xuaW1wb3J0IE1lbnUgZnJvbSBcInNyYy92aWV3L21lbnVcIjtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHsgdGhlbWVTZXR0aW5nczogdHlwZW9mIFRoZW1lIH0sIHsgbWVudU9wZW46IGJvb2xlYW4gfT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IHsgdGhlbWVTZXR0aW5nczogdHlwZW9mIFRoZW1lIH0pIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBtZW51T3BlbjogZmFsc2UgfTtcbiAgICAgICAgdGhpcy5zd2l0Y2hUaGVtZSA9IHRoaXMuc3dpdGNoVGhlbWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b2dnbGVNZW51ID0gdGhpcy50b2dnbGVNZW51LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudShvcGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZW51T3Blbjogb3BlbiB9KTtcbiAgICB9XG5cbiAgICBzd2l0Y2hUaGVtZSgpOiB2b2lkIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibGlnaHRcIiwgXCJkYXJrXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQodGhpcy5wcm9wcy50aGVtZVNldHRpbmdzLmdldENsYXNzKCkpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLnRoZW1lU2V0dGluZ3Mub24odGhpcy5zd2l0Y2hUaGVtZSk7XG4gICAgICAgIHRoaXMuc3dpdGNoVGhlbWUoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy50aGVtZVNldHRpbmdzLm9mZih0aGlzLnN3aXRjaFRoZW1lKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8TmF2QnV0dG9uIHRvZ2dsZUNhbGxiYWNrPXt0aGlzLnRvZ2dsZU1lbnV9Lz5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lbnVPcGVuICYmIDxNZW51IHRvZ2dsZUNhbGxiYWNrPXt0aGlzLnRvZ2dsZU1lbnV9Lz59IFxuICAgICAgICAgICAgPGgxIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMudGhlbWVTZXR0aW5ncy50b2dnbGUoKX0+PHNwYW4gY2xhc3NOYW1lPVwibG9nb1wiPkdlbmVzeXM8L3NwYW4+IERpY2UgUm9sbGVyPC9oMT5cbiAgICAgICAgICAgIDxNYWluQXBwQXJlYS8+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+O1xuICAgIH1cbn1cblxuLy8gUmVtb3ZlIGZhbGxiYWNrIG5vLUpTIGNvbnRlbnQgYW5kIHJlbW92ZSB0aGUgY2xhc3MgZnJvbSB0aGUgPGJvZHk+IHRhZ1xuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tanNcIik7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIHRoZW1lU2V0dGluZ3M9e1RoZW1lfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikhKTtcbiIsImltcG9ydCBTeW1ib2xzIGZyb20gXCJzcmMvbW9kZWwvc3ltYm9sc1wiO1xuXG4vKiogVHlwZSB1c2VkIHRvIGRlc2NyaWJlIGFsbCB0aGUgZGljZSBjdXJyZW50bHkgaGFuZGxlZCBieSB0aGUgYXBwLiAqL1xuZXhwb3J0IHR5cGUgQWxsb3dlZERpY2UgPSBHZW5lc3lzRGllIHwgUGVyY2VudGlsZURpZTtcbi8qKiBUeXBlIHVzZWQgdG8gZGVzY3JpYmUgYWxsIHRoZSBkaWNlIHJlc3VsdHMgY3VycmVudGx5IGhhbmRsZWQgYnkgdGhlIGFwcC4gKi9cbmV4cG9ydCB0eXBlIEFsbG93ZWRSZXN1bHRzID0gQWxsb3dlZERpY2VbXCJjdXJyZW50UmVzdWx0XCJdO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIG1vZGVscyByZXByZXNlbnRpbmcgYWxsIGRpY2UgdXNlZCBpbiB0aGUgYXBwLlxuICogU2hvdWxkbid0IGJlIHVzZWQgb24gaXRzIG93biwgYnV0IGNyZWF0ZXMgYmFzZSBmb3IgYWxsIG90aGVyIGRpY2UuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEaWU8UmVzdWx0VHlwZSBleHRlbmRzIEFsbG93ZWRSZXN1bHRzPiB7XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hhdCB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IHJvbGwgd2FzLlxuICAgICAqIElmIG51bGwsIHRoZSBkaWUgaGFzIG5vdCBiZWVuIHJvbGxlZCB5ZXQsIGVsc2UgaXQnc1xuICAgICAqIHRoZSBjb250ZW50cyBvZiB0aGUgcmVzdWx0aW5nIHNpZGUuXG4gICAgICovXG4gICAgY3VycmVudFJlc3VsdDogUmVzdWx0VHlwZSB8IG51bGwgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGhhdCBjb3VudHMgdGhlIG51bWJlciBvZiB0aW1lcyB0aGlzIGRpZVxuICAgICAqIGhhcyBiZWVuIHJvbGxlZC4gSXQncyB1c2VkIHByaW1hcmlseSBpbiByZW5kZXJpbmcsIHRvIGRldGVybWluZVxuICAgICAqIHdoZW4gdGhlIGRpZSBoYXMgY2hhbmdlZCBzdGF0ZSBieSBiZWluZyByb2xsZWQsIGFzIG9wcG9zZWQgdG9cbiAgICAgKiBiZWluZyBzZWxlY3RlZCwgb3IgbW92ZWQgaW4gdGhlIGxpc3QuXG4gICAgICogSW5jcmVhc2VzIGJ5IG9uZSBvbiBldmVyeSBpbnZvY2F0aW9uIG9mIGAucm9sbCgpYC5cbiAgICAgKi9cbiAgICByb2xsQ291bnQ6IG51bWJlciA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBSb2xscyB0aGUgZGllLCBzZWxlY3RpbmcgcmFuZG9tIHJlc3VsdCBmcm9tIHRoZSBwb3NzaWJsZSBvbmVzLFxuICAgICAqIGFzc2lnbnMgaXQgdG8gY3VycmVudCByZXN1bHQgYW5kIHJldHVybnMgaXQuXG4gICAgICovXG4gICAgYWJzdHJhY3Qgcm9sbCgpOiBSZXN1bHRUeXBlO1xuXG59XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgbW9kZWxzIHJlcHJlc2VudGluZyBhbGwgdGhlIEdlbmVzeXMgZGljZS5cbiAqIFByaW1hcnkgc2V0IG9mIGRpY2UgaW4gdGhlIHN5c3RlbSwgZXhjbHVkaW5nIHRoZSBwZXJjZW50aWxlIGRpZVxuICogdXNlZCBpbiBzb21lIGNvbWJhdCBzaXR1YXRpb25zLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR2VuZXN5c0RpZSBleHRlbmRzIERpZTxTeW1ib2xzW10+IHtcblxuICAgIC8qKlxuICAgICAqIExpc3Qgb2YgYWxsIHBvc3NpYmxlIHJlc3VsdHMgdGhhdCBjYW4gY29tZSB1cCBvbiB0aGUgZGllLlxuICAgICAqIEVhY2ggc2lkZSBpcyByZXByZXNlbnRlZCBzZXBhcmF0ZWx5LCBzbyBpZiB0d28gc2lkZXMgYXJlXG4gICAgICogdGhlIHNhbWUsIHRoZXkgd2lsbCBiZSBsaXN0ZWQgdHdpY2UgaGVyZS5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCByZWFkb25seSBwb3NzaWJsZVJlc3VsdHM6IFN5bWJvbHNbXVtdO1xuXG4gICAgLyoqXG4gICAgICogUm9sbHMgdGhlIGRpZSwgc2VsZWN0aW5nIHJhbmRvbSByZXN1bHQgZnJvbSB0aGUgcG9zc2libGUgb25lcyxcbiAgICAgKiBhc3NpZ25zIGl0IHRvIGN1cnJlbnQgcmVzdWx0IGFuZCByZXR1cm5zIGl0LlxuICAgICAqL1xuICAgIHJvbGwoKTogU3ltYm9sc1tdIHtcbiAgICAgICAgdGhpcy5yb2xsQ291bnQrKztcbiAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0ID0gdGhpcy5wb3NzaWJsZVJlc3VsdHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5wb3NzaWJsZVJlc3VsdHMubGVuZ3RoKV07XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRSZXN1bHQ7XG4gICAgfVxuXG59XG5cbi8qKlxuICogTW9kZWwgZm9yIHRoZSBiYXNlIHBvc2l0aXZlIGRpZSwgdGhlIGdyZWVuIGVpZ2h0LXNpZGVkIG9uZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEFiaWxpdHlEaWUgZXh0ZW5kcyBHZW5lc3lzRGllIHtcbiAgICBwb3NzaWJsZVJlc3VsdHMgPSBbXG4gICAgICAgIFtdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTU10sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1MsIFN5bWJvbHMuU1VDQ0VTU10sXG4gICAgICAgIFtTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1MsIFN5bWJvbHMuQURWQU5UQUdFXSxcbiAgICAgICAgW1N5bWJvbHMuQURWQU5UQUdFLCBTeW1ib2xzLkFEVkFOVEFHRV1cbiAgICBdXG59XG5cbi8qKlxuICogTW9kZWwgZm9yIHRoZSB1cGdyYWRlZCBwb3NpdGl2ZSBkaWUsIHRoZSB5ZWxsb3cgdHdlbHZlLXNpZGVkIG9uZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb2ZpY2llbmN5RGllIGV4dGVuZHMgR2VuZXN5c0RpZSB7XG4gICAgcG9zc2libGVSZXN1bHRzID0gW1xuICAgICAgICBbXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTU10sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1NdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTLCBTeW1ib2xzLlNVQ0NFU1NdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTLCBTeW1ib2xzLlNVQ0NFU1NdLFxuICAgICAgICBbU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTLCBTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1MsIFN5bWJvbHMuQURWQU5UQUdFXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTUywgU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5BRFZBTlRBR0UsIFN5bWJvbHMuQURWQU5UQUdFXSxcbiAgICAgICAgW1N5bWJvbHMuQURWQU5UQUdFLCBTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLlRSSVVNUEhdXG4gICAgXVxufVxuXG4vKipcbiAqIE1vZGVsIGZvciB0aGUgY2lyY3Vtc3RhbnRpYWwgcG9zaXRpdmUgZGllLCB0aGUgYmx1ZSBzaXgtc2lkZWQgb25lLlxuICovXG5leHBvcnQgY2xhc3MgQm9vc3REaWUgZXh0ZW5kcyBHZW5lc3lzRGllIHtcbiAgICBwb3NzaWJsZVJlc3VsdHMgPSBbXG4gICAgICAgIFtdLFxuICAgICAgICBbXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTU10sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1MsIFN5bWJvbHMuQURWQU5UQUdFXSxcbiAgICAgICAgW1N5bWJvbHMuQURWQU5UQUdFLCBTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLkFEVkFOVEFHRV1cbiAgICBdXG59XG5cbi8qKlxuICogTW9kZWwgZm9yIHRoZSBiYXNlIG5lZ2F0aXZlIGRpZSwgdGhlIHB1cnBsZSBlaWdodC1zaWRlZCBvbmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBEaWZmaWN1bHR5RGllIGV4dGVuZHMgR2VuZXN5c0RpZSB7XG4gICAgcG9zc2libGVSZXN1bHRzID0gW1xuICAgICAgICBbXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRV0sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkUsIFN5bWJvbHMuRkFJTFVSRV0sXG4gICAgICAgIFtTeW1ib2xzLlRIUkVBVF0sXG4gICAgICAgIFtTeW1ib2xzLlRIUkVBVF0sXG4gICAgICAgIFtTeW1ib2xzLlRIUkVBVF0sXG4gICAgICAgIFtTeW1ib2xzLlRIUkVBVCwgU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5GQUlMVVJFLCBTeW1ib2xzLlRIUkVBVF1cbiAgICBdXG59XG5cbi8qKlxuICogTW9kZWwgZm9yIHRoZSB1cGdyYWRlZCBuZWdhdGl2ZSBkaWUsIHRoZSByZWQgdHdlbHZlLXNpZGVkIG9uZS5cbiAqL1xuZXhwb3J0IGNsYXNzIENoYWxsZW5nZURpZSBleHRlbmRzIEdlbmVzeXNEaWUge1xuICAgIHBvc3NpYmxlUmVzdWx0cyA9IFtcbiAgICAgICAgW10sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkVdLFxuICAgICAgICBbU3ltYm9scy5GQUlMVVJFXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRSwgU3ltYm9scy5GQUlMVVJFXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRSwgU3ltYm9scy5GQUlMVVJFXSxcbiAgICAgICAgW1N5bWJvbHMuVEhSRUFUXSxcbiAgICAgICAgW1N5bWJvbHMuVEhSRUFUXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRSwgU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5GQUlMVVJFLCBTeW1ib2xzLlRIUkVBVF0sXG4gICAgICAgIFtTeW1ib2xzLlRIUkVBVCwgU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVQsIFN5bWJvbHMuVEhSRUFUXSxcbiAgICAgICAgW1N5bWJvbHMuREVTUEFJUl1cbiAgICBdXG59XG5cbi8qKlxuICogTW9kZWwgZm9yIHRoZSBjaXJjdW1zdGFudGlhbCBuZWdhdGl2ZSBkaWUsIHRoZSBibGFjayBzaXgtc2lkZWQgb25lLlxuICovXG5leHBvcnQgY2xhc3MgU2V0YmFja0RpZSBleHRlbmRzIEdlbmVzeXNEaWUge1xuICAgIHBvc3NpYmxlUmVzdWx0cyA9IFtcbiAgICAgICAgW10sXG4gICAgICAgIFtdLFxuICAgICAgICBbU3ltYm9scy5GQUlMVVJFXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRV0sXG4gICAgICAgIFtTeW1ib2xzLlRIUkVBVF0sXG4gICAgICAgIFtTeW1ib2xzLlRIUkVBVF1cbiAgICBdXG59XG5cbi8qKlxuICogTW9kZWwgZm9yIHRoZSBwZXJjZW50aWxlIGRpZSwgdXNlZCB0byBnZW5lcmF0ZSBudW1lcmljYWwgcmVzdWx0XG4gKiBiZXR3ZWVuIDEgYW5kIDEwMC4gVXNlZCB0byBlc3RhYmxpc2ggY3JpdGljYWwgcmVzdWx0cyBpbiBjb21iYXQuXG4gKi9cbmV4cG9ydCBjbGFzcyBQZXJjZW50aWxlRGllIGV4dGVuZHMgRGllPG51bWJlcj4ge1xuICAgIHJvbGwoKSB7XG4gICAgICAgIHRoaXMucm9sbENvdW50Kys7XG4gICAgICAgIHRoaXMuY3VycmVudFJlc3VsdCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFJlc3VsdDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuXG50eXBlIFJlZHV4PFBheWxvYWQ+ID0ge1xuICAgIGRpc3BhdGNoKGFyZzogeyB0eXBlOiBcIkNIQU5HRVwiLCB2YWx1ZTogUGF5bG9hZCB9KTogdm9pZDtcbiAgICBzdWJzY3JpYmUoYXJnOiAoKSA9PiB2b2lkKTogKCkgPT4gdm9pZDtcbiAgICBnZXRTdGF0ZSgpOiB7IHZhbHVlOiBQYXlsb2FkIH07XG59XG5cbmV4cG9ydCBjbGFzcyBTZXR0aW5nczxQYXlsb2FkPiB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGluaXRpYWxWYWx1ZT86IFBheWxvYWQpIHtcblxuICAgICAgICBjb25zdCBzYXZlZFZhbHVlOiBzdHJpbmcgfCBudWxsID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpO1xuICAgICAgICBpZiAoc2F2ZWRWYWx1ZSkge1xuICAgICAgICAgICAgaW5pdGlhbFZhbHVlID0gSlNPTi5wYXJzZShzYXZlZFZhbHVlKS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBjcmVhdGVTdG9yZSh0aGlzLnJlZHVjZXIuYmluZCh0aGlzKSwgeyB2YWx1ZTogaW5pdGlhbFZhbHVlIH0pO1xuICAgIH1cblxuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuICAgIHByaXZhdGUgc3RvcmU6IFJlZHV4PFBheWxvYWQ+O1xuXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBNYXA8KHA6IFBheWxvYWQpID0+IHZvaWQsICgpID0+IHZvaWQ+ID0gbmV3IE1hcCgpO1xuXG4gICAgcHJvdGVjdGVkIHJlZHVjZXIoc3RhdGU6IHsgdmFsdWU6IFBheWxvYWQgfSwgYWN0aW9uOiB7IHR5cGU/OiBcIkNIQU5HRVwiLCB2YWx1ZTogUGF5bG9hZCB9KTogeyB2YWx1ZTogUGF5bG9hZCB9IHtcbiAgICAgICAgaWYgKGFjdGlvbi50eXBlID09PSBcIkNIQU5HRVwiICYmIGFjdGlvbi52YWx1ZSAhPT0gc3RhdGUudmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgdmFsdWU6IGFjdGlvbi52YWx1ZSB9O1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZSwgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBvbihjYWxsYmFjazogKHA6IFBheWxvYWQpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9ICgpID0+IGNhbGxiYWNrKHRoaXMuZ2V0KCkpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuc2V0KGNhbGxiYWNrLCB0aGlzLnN0b3JlLnN1YnNjcmliZShoYW5kbGVyKSk7XG4gICAgfVxuXG4gICAgb2ZmKGNhbGxiYWNrOiAocDogUGF5bG9hZCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICBjb25zdCB1bnN1YnNjcmliZSA9IHRoaXMuc3Vic2NyaXB0aW9ucy5nZXQoY2FsbGJhY2spO1xuICAgICAgICBpZiAodW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQoKTogUGF5bG9hZCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKCkudmFsdWU7XG4gICAgfVxuXG4gICAgc2V0KHZhbHVlOiBQYXlsb2FkKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBcIkNIQU5HRVwiLCB2YWx1ZSB9KTtcbiAgICB9XG59XG5cbnR5cGUgVGhlbWVPcHRpb25zID0gXCJsaWdodFwiIHwgXCJkYXJrXCIgfCBudWxsO1xuY29uc3QgdGhlbWVPcHRpb25MaXN0OiBUaGVtZU9wdGlvbnNbXSA9IFtcImxpZ2h0XCIsIFwiZGFya1wiLCBudWxsXTtcblxuY2xhc3MgVGhlbWVTZXR0aW5ncyBleHRlbmRzIFNldHRpbmdzPFRoZW1lT3B0aW9ucz4ge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFwidGhlbWVcIiwgbnVsbCk7XG4gICAgfVxuXG4gICAgZ2V0Q2xhc3MoKTogTm9uTnVsbGFibGU8VGhlbWVPcHRpb25zPiB7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUaGVtZSA9IHRoaXMuZ2V0KCk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkVGhlbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZFRoZW1lO1xuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodClcIikubWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIFwibGlnaHRcIjtcbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlcykge1xuICAgICAgICAgICAgcmV0dXJuIFwiZGFya1wiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcImxpZ2h0XCI7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBuZXdUaGVtZUluZGV4ID0gKHRoZW1lT3B0aW9uTGlzdC5pbmRleE9mKHRoaXMuZ2V0KCkpICsgMSkgJSB0aGVtZU9wdGlvbkxpc3QubGVuZ3RoO1xuICAgICAgICB0aGlzLnNldCh0aGVtZU9wdGlvbkxpc3RbbmV3VGhlbWVJbmRleF0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFRoZW1lID0gbmV3IFRoZW1lU2V0dGluZ3MoKTtcblxuZXhwb3J0IGNvbnN0IFdlYmhvb2tzID0gbmV3IFNldHRpbmdzPHN0cmluZ1tdPihcIndlYmhvb2tzXCIsIFtdKTtcbmV4cG9ydCBjb25zdCBXZWJob29rUHJpb3JpdHkgPSBuZXcgU2V0dGluZ3M8bnVtYmVyPihcIndlYmhvb2tfcHJpb3JpdHlcIiwgMCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWJob29rKCk6IHN0cmluZyB8IG51bGwge1xuICAgIGNvbnN0IGhvb2tzID0gV2ViaG9va3MuZ2V0KCk7XG4gICAgY29uc3QgaW5kZXggPSBXZWJob29rUHJpb3JpdHkuZ2V0KCk7XG4gICAgcmV0dXJuIGhvb2tzW2luZGV4XSB8fCBudWxsO1xufVxuZXhwb3J0IGNvbnN0IFVzZXJuYW1lID0gbmV3IFNldHRpbmdzPHN0cmluZz4oXCJ1c2VybmFtZVwiLCBcIlwiKTtcbmV4cG9ydCBjb25zdCBBdXRvRGlzY29yZCA9IG5ldyBTZXR0aW5nczxib29sZWFuPihcImF1dG9fZGlzY29yZFwiLCBmYWxzZSk7XG4iLCJpbXBvcnQgeyBjb3VudEJ5IH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IFJlc3VsdCBmcm9tIFwic3JjL21vZGVsL3Jlc3VsdFwiO1xuaW1wb3J0IFN5bWJvbHMgZnJvbSBcInNyYy9tb2RlbC9zeW1ib2xzXCI7XG5cbi8qKlxuICogTWV0aG9kIHVzZWQgdG8gcmVzb2x2ZSBwYXJ0IG9mIHRoZSByb2xsIHdoZXJlIHN1Y2Nlc3NlcyBhbmQgZmFpbHVyZXMgL1xuICogYWR2YW50YWdlcyBhbmQgdGhyZWF0cyBjYW5jZWwgZWFjaCBvdGhlciBvdXQuIEdpdmVuIGxpc3Qgb2Ygc3ltYm9scyxcbiAqIGNhbmNlbHMgdGhlbSBvdXQgYW5kIHJldHVybnMgdGhlIGxpc3Qgd2l0aCBvbmx5IHRoZSByZW1haW5pbmcgc3ltYm9scy5cbiAqXG4gKiBAcGFyYW0gc3ltYm9scyAgTGlzdCBvZiBzeW1ib2xzIHJvbGxlZFxuICogQHJldHVybnMgICAgICAgIExpc3Qgd2l0aCBzeW1ib2xzIHJlbWFpbmluZyBhZnRlciBjYW5jZWxsaW5nIHJlc3VsdHMgb3V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVPcHBvc2luZ1N5bWJvbHMoc3ltYm9sczogU3ltYm9sc1tdKTogU3ltYm9sc1tdIHtcblxuICAgIC8vIE1ha2UgdGhlIGZpcnN0IHBhc3MgYnkgY291bnRpbmcgYWxsIHRoZSBzeW1ib2xzXG4gICAgY29uc3QgcmVtb3ZlID0gY291bnRCeShzeW1ib2xzKTtcblxuICAgIC8vIERlbGV0ZSBjb3VudHMgZm9yIHRyaXVtcGhzIGFuZCBkZXNwYWlycywgYXMgdGhlc2UgbmV2ZXIgY2FuY2VsIGVhY2ggb3RoZXIgb3V0XG4gICAgZGVsZXRlIHJlbW92ZVtTeW1ib2xzLlRSSVVNUEhdO1xuICAgIGRlbGV0ZSByZW1vdmVbU3ltYm9scy5ERVNQQUlSXTtcblxuICAgIC8vIFVzZSB0aGUgY291bnRzIGFuZCBtYXJrIHRoZSBzbWFsbGVyIG51bWJlciBvZiBzeW1ib2xzIGZvciByZW1vdmFsXG4gICAgcmVtb3ZlW1N5bWJvbHMuU1VDQ0VTU10gPSByZW1vdmVbU3ltYm9scy5GQUlMVVJFXSA9IE1hdGgubWluKHJlbW92ZVtTeW1ib2xzLlNVQ0NFU1NdLCByZW1vdmVbU3ltYm9scy5GQUlMVVJFXSk7XG4gICAgcmVtb3ZlW1N5bWJvbHMuQURWQU5UQUdFXSA9IHJlbW92ZVtTeW1ib2xzLlRIUkVBVF0gPSBNYXRoLm1pbihyZW1vdmVbU3ltYm9scy5BRFZBTlRBR0VdLCByZW1vdmVbU3ltYm9scy5USFJFQVRdKTtcblxuICAgIGNvbnN0IHJlbWFpbmluZ1N5bWJvbHM6IFN5bWJvbHNbXSA9IFtdO1xuICAgIHN5bWJvbHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKHJlbW92ZVtpdGVtXSkge1xuICAgICAgICAgICAgcmVtb3ZlW2l0ZW1dLS07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1haW5pbmdTeW1ib2xzLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZW1haW5pbmdTeW1ib2xzO1xufVxuXG4vKipcbiAqIFJlc29sdmVzIHRoZSByb2xsOyBnaXZlbiB0aGUgbGlzdCBvZiByZXN1bHRzIHJvbGxlZCwgY291bnRzIHRoZW0gdXAsXG4gKiBhbmQgcmV0dXJucyB3aGV0aGVyIHRoZSByb2xsIHdhcyBzdWNjZXNzZnVsIG9yIGZhaWxlZC5cbiAqXG4gKiBAcGFyYW0gc3ltYm9scyAgTGlzZiBvZiBzeW1ib2xzIHJvbGxlZFxuICogQHJlc3VsdHMgICAgICAgIFdoZXRoZXIgdGhlIHJvbGwgd2FzIHN1Y2Nlc3NmdWwgb3IgZmFpbGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGp1ZGljYXRlUm9sbChzeW1ib2xzOiBTeW1ib2xzW10pOiBSZXN1bHQge1xuXG4gICAgY29uc3QgY291bnRzID0gY291bnRCeShzeW1ib2xzKSxcbiAgICAgICAgICBjb3VudFN1Y2Nlc3MgPSAoY291bnRzW1N5bWJvbHMuVFJJVU1QSF0gfHwgMCkgKyAoY291bnRzW1N5bWJvbHMuU1VDQ0VTU10gfHwgMCksXG4gICAgICAgICAgY291bnRGYWlsdXJlID0gKGNvdW50c1tTeW1ib2xzLkRFU1BBSVJdIHx8IDApICsgKGNvdW50c1tTeW1ib2xzLkZBSUxVUkVdIHx8IDApO1xuXG4gICAgcmV0dXJuIChjb3VudFN1Y2Nlc3MgLSBjb3VudEZhaWx1cmUgPiAwKSA/IFJlc3VsdC5TVUNDRVNTIDogUmVzdWx0LkZBSUxVUkU7XG59XG4iLCJpbXBvcnQgU3ltYm9scyBmcm9tIFwic3JjL21vZGVsL3N5bWJvbHNcIjtcbmltcG9ydCB7IEdlbmVzeXNEaWUsIEFiaWxpdHlEaWUsIFByb2ZpY2llbmN5RGllLCBCb29zdERpZSwgRGlmZmljdWx0eURpZSwgQ2hhbGxlbmdlRGllLCBTZXRiYWNrRGllLCBQZXJjZW50aWxlRGllIH0gZnJvbSBcInNyYy9tb2RlbC9kaWNlXCI7XG5cbi8qKlxuICogT3JkZXIgcmVxdWlyZWQgb2YgdGhlIHN5bWJvbHMgb24gdGhlIGRpY2UuXG4gKiBHb2luZyBwb3NpdGl2ZSBmaXJzdCwgbmVnYXRpdmUgc2Vjb25kLCBhbmQgZnJvbSBtb3N0IHRvIGxlYXN0IHBvd2VyZnVsLlxuICovXG5jb25zdCBTWU1CT0xfT1JERVJJTkcgPSBPYmplY3QuZnJlZXplKHtcbiAgICBbU3ltYm9scy5UUklVTVBIXTogICAwLFxuICAgIFtTeW1ib2xzLlNVQ0NFU1NdOiAgIDEsXG4gICAgW1N5bWJvbHMuQURWQU5UQUdFXTogMixcbiAgICBbU3ltYm9scy5ERVNQQUlSXTogICAzLFxuICAgIFtTeW1ib2xzLkZBSUxVUkVdOiAgIDQsXG4gICAgW1N5bWJvbHMuVEhSRUFUXTogICAgNVxufSk7XG5cbi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbiB0byBoZWxwIHdpdGggb3JkZXJpbmcgdGhlIHJlc3VsdHMsIGZpcnN0IGJ5IGdyb3VwaW5nIHBvc2l0aXZlIGRpY2UgZmlyc3QsXG4gKiBuZWdhdGl2ZSBzZWNvbmQsIHRoZW4gYnkgb3JkZXJpbmcgZWFjaCBncm91cCBmcm9tIG1vc3QgcG93ZXJmdWwgdG8gbGVhc3QgcG93ZXJmdWwuXG4gKiBJbnRlbmRlZCB0byBiZSB1c2VkIGFzIGNvbXBhcmUgZnVuY3Rpb24gZm9yIEFycmF5LnNvcnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcmRlclN5bWJvbHMoYTogU3ltYm9scywgYjogU3ltYm9scyk6IG51bWJlciB7XG4gICAgcmV0dXJuIFNZTUJPTF9PUkRFUklOR1thXSBhcyBudW1iZXIgLSBTWU1CT0xfT1JERVJJTkdbYl0gYXMgbnVtYmVyO1xufVxuXG4vKipcbiAqIE9yZGVyIHJlcXVpcmVkIG9mIHRoZSBkaWNlIHRoZW1zZWx2ZXMuXG4gKiBEb25lIGFzIGZ1bmN0aW9uIHJhdGhlciB0aGFuIG1hcCBiZWNhdXNlIHRoZXJlJ3Mgbm8gZWFzeSB3YXkgdG8gdXNlIGNsYXNzIG9mIGluc3RhbmNlXG4gKiBhcyB2YWx1ZSBpbiBUeXBlU2NyaXB0LiBHb2VzIHBvc2l0aXZlIGZpcnN0LCBuZWdhdGl2ZSBzZWNvbmQsIG1vc3QgdG8gbGVhc3QgcG93ZXJmdWwsXG4gKiBhbmQgcGVyY2VudGlsZSBkaWUgZ29lcyBhdCB0aGUgZW5kLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZUZvckRpZShkaWU6IEdlbmVzeXNEaWUgfCBQZXJjZW50aWxlRGllKTogbnVtYmVyIHtcblxuICAgIGlmIChkaWUgaW5zdGFuY2VvZiBQcm9maWNpZW5jeURpZSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2UgaWYgKGRpZSBpbnN0YW5jZW9mIEFiaWxpdHlEaWUpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChkaWUgaW5zdGFuY2VvZiBCb29zdERpZSkge1xuICAgICAgICByZXR1cm4gMjtcbiAgICB9IGVsc2UgaWYgKGRpZSBpbnN0YW5jZW9mIENoYWxsZW5nZURpZSkge1xuICAgICAgICByZXR1cm4gMztcbiAgICB9IGVsc2UgaWYgKGRpZSBpbnN0YW5jZW9mIERpZmZpY3VsdHlEaWUpIHtcbiAgICAgICAgcmV0dXJuIDQ7XG4gICAgfSBlbHNlIGlmIChkaWUgaW5zdGFuY2VvZiBTZXRiYWNrRGllKSB7XG4gICAgICAgIHJldHVybiA1O1xuICAgIH1cbiAgICByZXR1cm4gNjtcbn1cblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGhlbHAgd2l0aCBvcmRlcmluZyB0aGUgZGljZSB0aGVtc2VsdmVzLCBmaXJzdCBieSBncm91cGluZyBwb3NpdGl2ZSBkaWNlIGZpcnN0LFxuICogbmVnYXRpdmUgc2Vjb25kLCB0aGVuIGJ5IG9yZGVyaW5nIGVhY2ggZ3JvdXAgZnJvbSBtb3N0IHBvd2VyZnVsIHRvIGxlYXN0IHBvd2VyZnVsLlxuICogSW50ZW5kZWQgdG8gYmUgdXNlZCBhcyBjb21wYXJlIGZ1bmN0aW9uIGZvciBBcnJheS5zb3J0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gb3JkZXJEaWNlKGE6IEdlbmVzeXNEaWUgfCBQZXJjZW50aWxlRGllLCBiOiBHZW5lc3lzRGllIHwgUGVyY2VudGlsZURpZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGdldFZhbHVlRm9yRGllKGEpIC0gZ2V0VmFsdWVGb3JEaWUoYik7XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCBTeW1ib2xzIGZyb20gXCJzcmMvbW9kZWwvc3ltYm9sc1wiO1xuaW1wb3J0IHsgQWxsb3dlZERpY2UsIEdlbmVzeXNEaWUsIEFiaWxpdHlEaWUsIFByb2ZpY2llbmN5RGllLCBCb29zdERpZSwgRGlmZmljdWx0eURpZSwgQ2hhbGxlbmdlRGllLCBTZXRiYWNrRGllLCBQZXJjZW50aWxlRGllIH0gZnJvbSBcInNyYy9tb2RlbC9kaWNlXCI7XG5pbXBvcnQgRGljZURpc3BsYXkgZnJvbSBcInNyYy92aWV3L2Rpc3BsYXkvZGljZVwiO1xuXG50eXBlIERpZUNyZWF0b3I8VCBleHRlbmRzIEFsbG93ZWREaWNlPiA9IHsgY2xzOiBuZXcgKCkgPT4gVCwgcmVzdWx0OiBUW1wiY3VycmVudFJlc3VsdFwiXSB9O1xuY29uc3QgZGljZVRvQ3JlYXRlOiBEaWVDcmVhdG9yPEFsbG93ZWREaWNlPltdID0gW1xuICAgIHsgY2xzOiBBYmlsaXR5RGllLCAgICAgcmVzdWx0OiBbU3ltYm9scy5TVUNDRVNTXSB9LFxuICAgIHsgY2xzOiBQcm9maWNpZW5jeURpZSwgcmVzdWx0OiBbU3ltYm9scy5UUklVTVBIXSB9LFxuICAgIHsgY2xzOiBCb29zdERpZSwgICAgICAgcmVzdWx0OiBbU3ltYm9scy5BRFZBTlRBR0VdIH0sXG4gICAgeyBjbHM6IERpZmZpY3VsdHlEaWUsICByZXN1bHQ6IFtTeW1ib2xzLkZBSUxVUkVdIH0sXG4gICAgeyBjbHM6IENoYWxsZW5nZURpZSwgICByZXN1bHQ6IFtTeW1ib2xzLkRFU1BBSVJdIH0sXG4gICAgeyBjbHM6IFNldGJhY2tEaWUsICAgICByZXN1bHQ6IFtTeW1ib2xzLlRIUkVBVF0gfSxcbiAgICB7IGNsczogUGVyY2VudGlsZURpZSwgIHJlc3VsdDogNDIgfVxuXTtcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBkcmF3cyB0aGUgY29sbGVjdGlvbiBvZiBidXR0b25zIHRoYXQgY2FuIGJlIHVzZWQgdG8gYWRkIG5ldyBkaWNlIHRvIHRoZSBkaWNlIHBvb2wuXG4gKiBPbmNlIHJlbmRlcmVkLCBpdCBkb2Vzbid0IHJlYWxseSBjaGFuZ2UsIHNvIGl0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCByYXRoZXIgdGhhbiBDb21wb25lbnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpY2VDb250cm9scyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8eyBjYWxsYmFjazogKGRpZTogQWxsb3dlZERpY2UpID0+IHZvaWQgfT4ge1xuXG4gICAgLyoqXG4gICAgICogSXRlcmF0ZXMgb3ZlciB0aGUgbGlzdCBvZiBhbGwgdGhlIGRpY2Ugd2UgaGFuZGxlIGluIHRoZSBkaWNlIHJvbGxlcixcbiAgICAgKiBhbG9uZyB3aXRoIGRlZmF1bHQgcmVzdWx0IHRvIHNob3cgKHNvIHRoYXQgdGhlIGRpY2UgYXJlIGVhc2lseSBpZGVudGlmaWFibGUpLFxuICAgICAqIGFuZCByZW5kZXJzIGVhY2ggb2YgdGhvc2UgaW4gYSBidXR0b24gdGhhdCBhZGRzIGEgbmV3IGRpZSBvZiB0aGF0IHR5cGUgd2hlbmV2ZXIgaXQncyBjbGlja2VkLlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBhZGRpdGlvbkJ1dHRvbnMgPSBkaWNlVG9DcmVhdGUubWFwKCh7IGNscywgcmVzdWx0IH0sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpZU5hbWUgPSBzdGFydENhc2UoY2xzLm5hbWUpLnNwbGl0KFwiIFwiKVswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPXtgYWRkLSR7ZGllTmFtZX1gfSBrZXk9e2l9IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuY2FsbGJhY2sobmV3IGNscygpKX0+XG4gICAgICAgICAgICAgICAgPERpY2VEaXNwbGF5IGRpZT17T2JqZWN0LmFzc2lnbihuZXcgY2xzKCksIHsgY3VycmVudFJlc3VsdDogcmVzdWx0IH0pfSAvPlxuICAgICAgICAgICAgPC9idXR0b24+O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkaWNlLWNvbnRyb2xzXCI+e2FkZGl0aW9uQnV0dG9uc308L2Rpdj47XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGljZURpc3BsYXkgZnJvbSBcInNyYy92aWV3L2Rpc3BsYXkvZGljZVwiO1xuaW1wb3J0IHsgQWxsb3dlZERpY2UgfSBmcm9tIFwic3JjL21vZGVsL2RpY2VcIjtcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyB1c2VkIGluIG1haW4gYXBwIGFyZWEgdG8gZHJhdyB0aGUgbGlzdCBvZiBhbGwgdGhlIGRpY2UgdG8gdGhlIHBvb2wuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpY2VMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHsgZGljZTogQWxsb3dlZERpY2VbXSwgc2VsZWN0ZWQ6IEFsbG93ZWREaWNlW10sIHNlbGVjdENhbGxiYWNrPzogKGRpZTogQWxsb3dlZERpY2UpID0+IHZvaWQgfT4ge1xuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGRpY2VMaXN0ID0gdGhpcy5wcm9wcy5kaWNlLm1hcChkaWUgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBjbGljayA9IHRoaXMucHJvcHMuc2VsZWN0Q2FsbGJhY2sgP1xuICAgICAgICAgICAgICAgICgpID0+IHRoaXMucHJvcHMuc2VsZWN0Q2FsbGJhY2shKGRpZSkgOlxuICAgICAgICAgICAgICAgIHZvaWQgMDtcblxuICAgICAgICAgICAgcmV0dXJuIDxEaWNlRGlzcGxheSBkaWU9e2RpZX0gc2VsZWN0ZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWQuaW5jbHVkZXMoZGllKX0gcm9sbENvdW50PXtkaWUucm9sbENvdW50fSBvbkNsaWNrPXtjbGlja30gLz47XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRpY2UtbGlzdFwiPntkaWNlTGlzdH08L2Rpdj47XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0YXJ0Q2FzZSB9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCB7IEFsbG93ZWREaWNlLCBBbGxvd2VkUmVzdWx0cyB9IGZyb20gXCJzcmMvbW9kZWwvZGljZVwiO1xuaW1wb3J0IFN5bWJvbERpc3BsYXkgZnJvbSBcInNyYy92aWV3L2Rpc3BsYXkvc3ltYm9sXCI7XG5cbi8qKlxuICogQ29udmVydHMgcmVzdWx0IG9mIHRoZSBkaWUgcm9sbCAob3IgdGhlIGxhY2sgb2YgdGhlcmVvZikgaW50byBzb21ldGhpbmdcbiAqIGh1bWFuLXJlYWRhYmxlOyBwZW5kaW5nIG1hcmsgZm9yIG5vIHJvbGxzLCBzeW1ib2xzIGZvciByZWd1bGFyIEdlbmVzeXMgZGljZSxcbiAqIGFuZCB0aGUgbnVtYmVyIGZvciBwZXJjZW50aWxlIGRpZS5cbiAqL1xuZnVuY3Rpb24gY29udmVydERpZVJlc3VsdChyZXN1bHQ6IEFsbG93ZWRSZXN1bHRzKTogSlNYLkVsZW1lbnRbXSB7XG4gICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gWzxzcGFuPj88L3NwYW4+XTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIFs8c3Bhbj57cmVzdWx0ICsgXCJcIn08L3NwYW4+XTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC5tYXAoKHMsIGkpID0+IDxTeW1ib2xEaXNwbGF5IHN5bWJvbD17c30ga2V5PXtpfSAvPik7XG59XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaXMgdXNlZCB0byByZW5kZXIgdGhlIGRpY2UgaW1hZ2VzIGluIHRoZSBtYWluIGFyZWEgb2YgdGhlIGFwcC5cbiAqIEdpdmVuIHRoZSBkaWUgbW9kZWwgaW5zdGFuY2UsIGNvbnZlcnRzIHRoZSByb2xsIHJlc3VsdCBpbnRvIHNvbWV0aGluZyBodW1hbi1yZWFkYWJsZSxcbiAqIGFuZCBkcmF3cyBpdCBpbiBhbiBlbGVtZW50IHN0eWxlZCB0byBsb29rIGxpa2UgYSBkaWUgb2YgcmVsZXZhbnQgc2hhcGUgYW5kIGNvbG91ci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGljZURpc3BsYXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e1xuICAgIGRpZTogQWxsb3dlZERpY2UsXG4gICAgc2VsZWN0ZWQ/OiBib29sZWFuLFxuICAgIHJvbGxDb3VudD86IG51bWJlcixcbiAgICBvbkNsaWNrPzogKGV2OiBhbnkpID0+IHZvaWRcbn0+IGltcGxlbWVudHMgRXZlbnRMaXN0ZW5lck9iamVjdCB7XG5cbiAgICBkaWVSZWZlcmVuY2U6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4gPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgY2xhc3NOYW1lOiBzdHJpbmcgPSBzdGFydENhc2UodGhpcy5wcm9wcy5kaWUuY29uc3RydWN0b3IubmFtZSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBzZWxlY3RlZFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDxkaXYgcmVmPXt0aGlzLmRpZVJlZmVyZW5jZX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30+XG4gICAgICAgICAgICB7Y29udmVydERpZVJlc3VsdCh0aGlzLnByb3BzLmRpZS5jdXJyZW50UmVzdWx0KX1cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHM6IHRoaXNbXCJwcm9wc1wiXSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5kaWUgIT09IG5leHRQcm9wcy5kaWUgfHxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWQgIT09IG5leHRQcm9wcy5zZWxlY3RlZCB8fFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5yb2xsQ291bnQgIT09IG5leHRQcm9wcy5yb2xsQ291bnRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiB0aGlzW1wicHJvcHNcIl0pOiB2b2lkIHtcblxuICAgICAgICAvLyBXZSBvbmx5IGFwcGx5IHRoZSBzaGFrZSBhbmltYXRpb24gd2hlbiB0aGVyZSdzIG5vIHByZWZlcmVuY2UgZm9yIHJlZHVjZWQgbW90aW9uLFxuICAgICAgICAvLyBhbmQgd2hlbiB0aGVyZSdzIGFjdHVhbCByZXN1bHQgb24gdGhlIGRpY2UgKCdjYXVzZSB0aGF0IG1lYW5zIHRoZXJlJ3Mgc29tZXRoaW5nIHRvIHJvbGwpLlxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKVwiKS5tYXRjaGVzICYmXG4gICAgICAgICAgICB0aGlzLnByb3BzLnJvbGxDb3VudCAhPT0gcHJldlByb3BzLnJvbGxDb3VudFxuICAgICAgICApIHtcblxuICAgICAgICAgICAgY29uc3QgZGllRWxlbWVudCA9IHRoaXMuZGllUmVmZXJlbmNlLmN1cnJlbnQhO1xuICAgICAgICAgICAgZGllRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIHRoaXMsIGZhbHNlKTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGRpZSBpcyBzdGlsbCBpbiB0aGUgcHJvY2VzcyBvZiBwbGF5aW5nIHNoYWtlIGFuaW1hdGlvbixcbiAgICAgICAgICAgIC8vIHJlc3RhcnQgaXQgYnkgcmVtb3ZpbmcgdGhlIGNsYXNzIGFuZCB0b2dnbGluZyByZWZsb3cgd2l0aCBib3VuZGluZyByZWN0O1xuICAgICAgICAgICAgaWYgKGRpZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hha2VcIikpIHtcbiAgICAgICAgICAgICAgICBkaWVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzaGFrZVwiKTtcbiAgICAgICAgICAgICAgICBkaWVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaGFrZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUV2ZW50KGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJhbmltYXRpb25lbmRcIikge1xuICAgICAgICAgICAgY29uc3QgZGllRWxlbWVudCA9IHRoaXMuZGllUmVmZXJlbmNlLmN1cnJlbnQhO1xuICAgICAgICAgICAgZGllRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIHRoaXMsIGZhbHNlKTtcbiAgICAgICAgICAgIGRpZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNoYWtlXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IFN5bWJvbHMgZnJvbSBcInNyYy9tb2RlbC9zeW1ib2xzXCI7XG5cbi8qKiBSZW5kZXIgR2VuZXN5cyBkaWNlIHN5bWJvbHMgdXNpbmcgdGhlIGRlZGljYXRlZCBmb250LiAqL1xuY29uc3QgU3ltYm9sRGlzcGxheTogUmVhY3QuU0ZDPHsgc3ltYm9sOiBTeW1ib2xzIHwgU3ltYm9sc1tdIH0+ID0gKHsgc3ltYm9sIH0pID0+IHtcbiAgICBjb25zdCBsaXN0ID0gaXNBcnJheShzeW1ib2wpID8gc3ltYm9sIDogW3N5bWJvbF07XG4gICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImRpY2Utc3ltYm9sXCI+e2xpc3Quam9pbihcIlwiKX08L3NwYW4+O1xufTtcbmV4cG9ydCBkZWZhdWx0IFN5bWJvbERpc3BsYXk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRpZmZlcmVuY2UgfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5cbmltcG9ydCB7IEFsbG93ZWREaWNlLCBBbGxvd2VkUmVzdWx0cyB9IGZyb20gXCJzcmMvbW9kZWwvZGljZVwiO1xuaW1wb3J0IHsgQWJpbGl0eURpZSwgUHJvZmljaWVuY3lEaWUsIEJvb3N0RGllLCBEaWZmaWN1bHR5RGllLCBDaGFsbGVuZ2VEaWUsIFNldGJhY2tEaWUsIFBlcmNlbnRpbGVEaWUgfSBmcm9tIFwic3JjL21vZGVsL2RpY2VcIjtcbmltcG9ydCBodG1sMmNhbnZhcyBmcm9tIFwiaHRtbDJjYW52YXNcIjtcbmltcG9ydCB7IGdldFdlYmhvb2ssIFVzZXJuYW1lLCBBdXRvRGlzY29yZCB9IGZyb20gXCJzcmMvbW9kZWwvc2V0dGluZ3NcIjtcbmltcG9ydCB7IHJlbW92ZU9wcG9zaW5nU3ltYm9scywgYWRqdWRpY2F0ZVJvbGwgfSBmcm9tIFwic3JjL3V0aWwvYWRqdWRpY2F0ZVwiO1xuaW1wb3J0IHsgb3JkZXJTeW1ib2xzIH0gZnJvbSBcInNyYy91dGlsL29yZGVyXCI7XG5pbXBvcnQgU3ltYm9scyBmcm9tIFwic3JjL21vZGVsL3N5bWJvbHNcIjtcbmltcG9ydCBSZXN1bHQgZnJvbSBcInNyYy9tb2RlbC9yZXN1bHRcIjtcblxuaW1wb3J0IERpY2VDb250cm9scyBmcm9tIFwic3JjL3ZpZXcvZGljZS1jb250cm9sc1wiO1xuaW1wb3J0IERpY2VMaXN0IGZyb20gXCJzcmMvdmlldy9kaWNlLWxpc3RcIjtcbmltcG9ydCBSb2xsUmVzdWx0cyBmcm9tIFwic3JjL3ZpZXcvcm9sbC1yZXN1bHRzXCI7XG5pbXBvcnQgeyBvcmRlckRpY2UgfSBmcm9tIFwic3JjL3V0aWwvb3JkZXJcIjtcblxudHlwZSBkaWNlVHlwZXMgPSBcImFiaWxpdHlcIiB8IFwicHJvZmljaWVuY3lcIiB8IFwiYm9vc3RcIiB8IFwiZGlmZmljdWx0eVwiIHwgXCJjaGFsbGVuZ2VcIiB8IFwic2V0YmFja1wiIHwgXCJwZXJjZW50aWxlXCI7XG5jb25zdCBkaWNlVHlwZXM6IFJlYWRvbmx5PGRpY2VUeXBlc1tdPiA9IE9iamVjdC5mcmVlemUoW1wiYWJpbGl0eVwiLCBcInByb2ZpY2llbmN5XCIsIFwiYm9vc3RcIiwgXCJkaWZmaWN1bHR5XCIsIFwiY2hhbGxlbmdlXCIsIFwic2V0YmFja1wiXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5BcHBBcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7IGRpY2U6IEFsbG93ZWREaWNlW10sIHNlbGVjdGVkOiBBbGxvd2VkRGljZVtdLCByZXN1bHRzOiBBbGxvd2VkUmVzdWx0c1tdIH0+IHtcblxuICAgIHJlc3VsdHNSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4gPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICBwcml2YXRlIHVwZGF0ZUF1dG9EaXNjb3JkID0gKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IHt9KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgZGljZTogW10sIHNlbGVjdGVkOiBbXSwgcmVzdWx0czogW10gfTtcblxuICAgICAgICB0aGlzLmFkZERpZSA9IHRoaXMuYWRkRGllLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2xlYXJEaWNlID0gdGhpcy5jbGVhckRpY2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24gPSB0aGlzLnRvZ2dsZVNlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJvbGwgPSB0aGlzLnJvbGwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZW5kVG9EaXNjb3JkID0gdGhpcy5zZW5kVG9EaXNjb3JkLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIEF1dG9EaXNjb3JkLm9uKHRoaXMudXBkYXRlQXV0b0Rpc2NvcmQpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBBdXRvRGlzY29yZC5vZmYodGhpcy51cGRhdGVBdXRvRGlzY29yZCk7XG4gICAgfVxuXG4gICAgYWRkRGllKG5ld0RpZTogQWxsb3dlZERpY2UpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgeyBkaWNlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgZGljZTogZGljZS5jb25jYXQoW25ld0RpZV0pLnNvcnQob3JkZXJEaWNlKSB9KTtcbiAgICB9XG5cbiAgICBjbGVhckRpY2UoKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgeyBkaWNlLCBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ0RpY2UgPSBkaWZmZXJlbmNlKGRpY2UsIHNlbGVjdGVkKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRpY2U6IHJlbWFpbmluZ0RpY2UsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IFtdLFxuICAgICAgICAgICAgICAgIHJlc3VsdHM6IHJlbWFpbmluZ0RpY2UubWFwKGRpZSA9PiBkaWUuY3VycmVudFJlc3VsdClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGljZTogW10sIHNlbGVjdGVkOiBbXSwgcmVzdWx0czogW10gfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVTZWxlY3Rpb24odG9nZ2xlZERpZTogQWxsb3dlZERpY2UpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoc2VsZWN0ZWQuaW5jbHVkZXModG9nZ2xlZERpZSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBzZWxlY3RlZDogc2VsZWN0ZWQuZmlsdGVyKGRpZSA9PiBkaWUgIT09IHRvZ2dsZWREaWUpIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHNlbGVjdGVkOiBzZWxlY3RlZC5jb25jYXQoW3RvZ2dsZWREaWVdKSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJvbGwoKSB7XG5cbiAgICAgICAgY29uc3QgeyBkaWNlLCBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIHNlbGVjdGVkLmZvckVhY2goZGllID0+IGRpZS5yb2xsKCkpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZGljZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogW10sXG4gICAgICAgICAgICAgICAgcmVzdWx0czogZGljZS5tYXAoZGllID0+IGRpZS5jdXJyZW50UmVzdWx0KVxuICAgICAgICAgICAgfSwgKCkgPT4geyBpZiAoQXV0b0Rpc2NvcmQuZ2V0KCkpIHRoaXMuc2VuZFRvRGlzY29yZCgpOyB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHJlc3VsdHM6IHRoaXMuc3RhdGUuZGljZS5tYXAoZGllID0+IGRpZS5yb2xsKCkpIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4geyBpZiAoQXV0b0Rpc2NvcmQuZ2V0KCkpIHRoaXMuc2VuZFRvRGlzY29yZCgpOyB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHNlbmRUb0Rpc2NvcmQoKSB7XG4gICAgICAgIGNvbnN0IHdlYmhvb2sgPSBnZXRXZWJob29rKCk7XG4gICAgICAgIGlmICghd2ViaG9vayB8fCAhdGhpcy5yZXN1bHRzUmVmLmN1cnJlbnQpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgY29uc3QgY2FudmFzID0gYXdhaXQgaHRtbDJjYW52YXModGhpcy5yZXN1bHRzUmVmLmN1cnJlbnQpO1xuICAgICAgICBjb25zdCBibG9iOiBCbG9iID0gYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PlxuICAgICAgICAgICAgY2FudmFzLnRvQmxvYigoYjogQmxvYiB8IG51bGwpID0+IHJlc29sdmUoYiEpLCBcImltYWdlL3BuZ1wiKVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybS5hcHBlbmQoXCJmaWxlXCIsIGJsb2IsIFwicm9sbC5wbmdcIik7XG4gICAgICAgIGZvcm0uYXBwZW5kKFwidXNlcm5hbWVcIiwgVXNlcm5hbWUuZ2V0KCkgfHwgXCJHZW5lc3lzIFJvbGxlclwiKTtcbiAgICAgICAgZm9ybS5hcHBlbmQoXCJjb250ZW50XCIsIHRoaXMuc3VtbWFyaXNlUmVzdWx0cygpKTtcblxuICAgICAgICBmZXRjaCh3ZWJob29rLCB7IG1ldGhvZDogXCJQT1NUXCIsIGJvZHk6IGZvcm0gfSk7XG4gICAgfVxuXG4gICAgc3VtbWFyaXNlUmVzdWx0cygpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBzeW1ib2xzOiBTeW1ib2xzW10gPSBbXTtcbiAgICAgICAgY29uc3QgbnVtYmVyczogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0ZS5yZXN1bHRzLmZvckVhY2gociA9PiB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyKSkgeyBzeW1ib2xzLnB1c2goLi4ucik7IH0gZWxzZSBpZiAodHlwZW9mIHIgPT09IFwibnVtYmVyXCIpIHsgbnVtYmVycy5wdXNoKHIpOyB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBmbGF0ID0gcmVtb3ZlT3Bwb3NpbmdTeW1ib2xzKHN5bWJvbHMpLnNvcnQob3JkZXJTeW1ib2xzKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3ltYm9scy5sZW5ndGggPyBhZGp1ZGljYXRlUm9sbChmbGF0KSA6IFJlc3VsdC5ORVVUUkFMO1xuICAgICAgICBjb25zdCBjb3VudHMgPSBuZXcgTWFwPFN5bWJvbHMsIG51bWJlcj4oKTtcbiAgICAgICAgZmxhdC5mb3JFYWNoKHMgPT4gY291bnRzLnNldChzLCAoY291bnRzLmdldChzKSB8fCAwKSArIDEpKTtcbiAgICAgICAgY29uc3QgbmFtZXM6IFJlY29yZDxTeW1ib2xzLCBzdHJpbmc+ID0ge1xuICAgICAgICAgICAgW1N5bWJvbHMuU1VDQ0VTU106IFwi0YPRgdC/0LXRhVwiLFxuICAgICAgICAgICAgW1N5bWJvbHMuRkFJTFVSRV06IFwi0L3QtdGD0LTQsNGH0LBcIixcbiAgICAgICAgICAgIFtTeW1ib2xzLkFEVkFOVEFHRV06IFwi0L/RgNC10LjQvNGD0YnQtdGB0YLQstC+XCIsXG4gICAgICAgICAgICBbU3ltYm9scy5USFJFQVRdOiBcItGD0LPRgNC+0LfQsFwiLFxuICAgICAgICAgICAgW1N5bWJvbHMuVFJJVU1QSF06IFwi0YLRgNC40YPQvNGEXCIsXG4gICAgICAgICAgICBbU3ltYm9scy5ERVNQQUlSXTogXCLQvtGC0YfQsNGP0L3QuNC1XCIsXG4gICAgICAgIH0gYXMgYW55O1xuICAgICAgICBsZXQgdGV4dCA9IHJlc3VsdCA9PT0gUmVzdWx0LlNVQ0NFU1MgPyBcItCY0YLQvtCzOiDRg9GB0L/QtdGFXCIgOiByZXN1bHQgPT09IFJlc3VsdC5GQUlMVVJFID8gXCLQmNGC0L7Qszog0L/RgNC+0LLQsNC7XCIgOiBcItCY0YLQvtCzOlwiO1xuICAgICAgICB0ZXh0ICs9IFwiXFxuXCIgKyBBcnJheS5mcm9tKGNvdW50cy5lbnRyaWVzKCkpLm1hcCgoW3N5bSwgY291bnRdKSA9PiBgJHtuYW1lc1tzeW1dfTogJHtjb3VudH1gKS5qb2luKFwiXFxuXCIpO1xuICAgICAgICBpZiAobnVtYmVycy5sZW5ndGgpIHRleHQgKz0gXCJcXG7Qp9C40YHQu9CwOiBcIiArIG51bWJlcnMuam9pbihcIiwgXCIpO1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRpY2UtYXJlYVwiPlxuICAgICAgICAgICAgPERpY2VDb250cm9scyBjYWxsYmFjaz17dGhpcy5hZGREaWV9Lz5cbiAgICAgICAgICAgIDxkaXYgcmVmPXt0aGlzLnJlc3VsdHNSZWZ9PlxuICAgICAgICAgICAgICAgIDxEaWNlTGlzdCBkaWNlPXt0aGlzLnN0YXRlLmRpY2V9IHNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkfSBzZWxlY3RDYWxsYmFjaz17dGhpcy50b2dnbGVTZWxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgPFJvbGxSZXN1bHRzIHJlc3VsdHM9e3RoaXMuc3RhdGUucmVzdWx0c30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJvbGxcIiBvbkNsaWNrPXt0aGlzLnJvbGx9Pnt0aGlzLnN0YXRlLnNlbGVjdGVkLmxlbmd0aCA/IFwiUmUtcm9sbCBTZWxlY3RlZFwiIDogXCJSb2xsXCJ9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsZWFyXCIgb25DbGljaz17dGhpcy5jbGVhckRpY2V9Pnt0aGlzLnN0YXRlLnNlbGVjdGVkLmxlbmd0aCA/IFwiUmVtb3ZlIFNlbGVjdGVkXCIgOiBcIkNsZWFyXCJ9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICB7Z2V0V2ViaG9vaygpICYmICFBdXRvRGlzY29yZC5nZXQoKSAmJiB0aGlzLnN0YXRlLnJlc3VsdHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZGlzY29yZFwiIG9uQ2xpY2s9e3RoaXMuc2VuZFRvRGlzY29yZH0+0J7RgtC/0YDQsNCy0LjRgtGMINCyIERpc2NvcmQ8L2J1dHRvbj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cblxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBXZWJob29rcywgV2ViaG9va1ByaW9yaXR5LCBVc2VybmFtZSwgVGhlbWUsIEF1dG9EaXNjb3JkIH0gZnJvbSBcInNyYy9tb2RlbC9zZXR0aW5nc1wiO1xudHlwZSBNZW51UHJvcHMgPSB7IHRvZ2dsZUNhbGxiYWNrPzogKG9wZW46IGJvb2xlYW4pID0+IHZvaWQgfTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8TWVudVByb3BzPiB7XG4gICAgc3RhdGUgPSB7IHdlYmhvb2tzOiBXZWJob29rcy5nZXQoKS5sZW5ndGggPyBXZWJob29rcy5nZXQoKSA6IFtcIlwiXSwgcHJpb3JpdHk6IFdlYmhvb2tQcmlvcml0eS5nZXQoKSwgdXNlcm5hbWU6IFVzZXJuYW1lLmdldCgpIHx8IFwiXCIsIHRoZW1lOiBUaGVtZS5nZXQoKSB8fCBcIlwiLCBhdXRvRGlzY29yZDogQXV0b0Rpc2NvcmQuZ2V0KCkgfHwgZmFsc2UgfTtcblxuICAgIGhhbmRsZVdlYmhvb2sgPSAoaWR4OiBudW1iZXIsIGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IHdlYmhvb2tzID0gdGhpcy5zdGF0ZS53ZWJob29rcy5zbGljZSgpO1xuICAgICAgICB3ZWJob29rc1tpZHhdID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWJob29rcyB9KTtcbiAgICAgICAgV2ViaG9va3Muc2V0KHdlYmhvb2tzLmZpbHRlcih3ID0+IHcpKTtcbiAgICB9O1xuXG4gICAgYWRkV2ViaG9va0ZpZWxkID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS53ZWJob29rcy5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2ViaG9va3M6IHRoaXMuc3RhdGUud2ViaG9va3MuY29uY2F0KFtcIlwiXSkgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVtb3ZlV2ViaG9va0ZpZWxkID0gKGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLndlYmhvb2tzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHdlYmhvb2tzID0gdGhpcy5zdGF0ZS53ZWJob29rcy5zbGljZSgpO1xuICAgICAgICAgICAgd2ViaG9va3Muc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IE1hdGgubWluKHRoaXMuc3RhdGUucHJpb3JpdHksIHdlYmhvb2tzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdlYmhvb2tzLCBwcmlvcml0eSB9KTtcbiAgICAgICAgICAgIFdlYmhvb2tzLnNldCh3ZWJob29rcy5maWx0ZXIodyA9PiB3KSk7XG4gICAgICAgICAgICBXZWJob29rUHJpb3JpdHkuc2V0KHByaW9yaXR5KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBoYW5kbGVQcmlvcml0eSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJpb3JpdHkgfSk7XG4gICAgICAgIFdlYmhvb2tQcmlvcml0eS5zZXQocHJpb3JpdHkpO1xuICAgIH07XG5cbiAgICBoYW5kbGVVc2VybmFtZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcm5hbWUgfSk7XG4gICAgICAgIFVzZXJuYW1lLnNldCh1c2VybmFtZSk7XG4gICAgfTtcblxuICAgIGhhbmRsZVRoZW1lID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCB0aGVtZSA9IGUudGFyZ2V0LnZhbHVlIGFzIFwibGlnaHRcIiB8IFwiZGFya1wiIHwgXCJcIjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRoZW1lIH0pO1xuICAgICAgICBUaGVtZS5zZXQodGhlbWUgfHwgbnVsbCk7XG4gICAgfTtcblxuICAgIGhhbmRsZUF1dG9EaXNjb3JkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IGF1dG8gPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYXV0b0Rpc2NvcmQ6IGF1dG8gfSk7XG4gICAgICAgIEF1dG9EaXNjb3JkLnNldChhdXRvKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS53ZWJob29rcy5tYXAoKGhvb2ssIGkpID0+IDxsYWJlbCBrZXk9e2l9PtCS0LXQsdGF0YPQuiAje2kgKyAxfVxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInVybFwiIHZhbHVlPXtob29rfSBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZVdlYmhvb2soaSwgZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLndlYmhvb2tzLmxlbmd0aCA+IDEgJiYgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwicmVtb3ZlXCIgb25DbGljaz17KCkgPT4gdGhpcy5yZW1vdmVXZWJob29rRmllbGQoaSl9PsOXPC9idXR0b24+fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+KX1cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLndlYmhvb2tzLmxlbmd0aCA8IDUgJiYgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZFdlYmhvb2tGaWVsZH0+0JTQvtCx0LDQstC40YLRjCDQstC10LHRhdGD0Lo8L2J1dHRvbj59XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS53ZWJob29rcy5sZW5ndGggPiAxICYmIDxsYWJlbD7Qn9GA0LjQvtGA0LjRgtC10YLQvdGL0Lkg0LrQsNC90LDQu1xuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3RoaXMuc3RhdGUucHJpb3JpdHl9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVByaW9yaXR5fT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUud2ViaG9va3MubWFwKChfLCBpKSA9PiA8b3B0aW9uIHZhbHVlPXtpfSBrZXk9e1wicFwiICsgaX0+0JLQtdCx0YXRg9C6ICN7aSArIDF9PC9vcHRpb24+KX1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvbGFiZWw+fVxuICAgICAgICAgICAgPGxhYmVsPtCY0LzRj1xuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VybmFtZX0vPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveFwiPtCQ0LLRgtC+0L7RgtC/0YDQsNCy0LrQsCDQsiBEaXNjb3JkXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuYXV0b0Rpc2NvcmR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUF1dG9EaXNjb3JkfS8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPtCi0LXQvNCwXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGhpcy5zdGF0ZS50aGVtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGhlbWV9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+0KHQuNGB0YLQtdC80L3QsNGPPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsaWdodFwiPtCh0LLQtdGC0LvQsNGPPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkYXJrXCI+0KLRkdC80L3QsNGPPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAge3RoaXMucHJvcHMudG9nZ2xlQ2FsbGJhY2sgJiYgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnRvZ2dsZUNhbGxiYWNrIShmYWxzZSl9PtCX0LDQutGA0YvRgtGMPC9idXR0b24+fVxuICAgICAgICA8L2Rpdj47XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgTmF2QnV0dG9uUHJvcHMgPSB7IHRvZ2dsZUNhbGxiYWNrPzogKGV4cGFuZGVkOiBib29sZWFuKSA9PiB2b2lkIH07XG5cbi8qKlxuICogQ29tcG9uZW50IHVzZWQgdG8gaW5kaWNhdGUgdGhlIGNvbnRyb2xzIGZvciBicmluZ2luZyB1cCB0aGUgbWVudSBwYW5lLlxuICogSGFuZGxlcyB1c2VyIGNsaWNrcywgYW5pbWF0aW5nIGFwcHJvcHJpYXRlbHkgd2hlbiB0aGUgbWVudSBpcyBvcGVuZWQsIGNoYW5naW5nIHR3byBsaW5lc1xuICogb2YgdGhlIGJ1cmdlciBpbnRvIGEgY3Jvc3MsIGFuZCBoaWRpbmcgdGhlIHRoaXJkIG9uZSwgb3IgcmV2ZXJ0aW5nIHdoZW4gdGhlIG1lbnUgcGFuZSBpcyBoaWRkZW4uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdkJ1dHRvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8TmF2QnV0dG9uUHJvcHMsIHsgZXhwYW5kZWQ6IGJvb2xlYW4gfT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IE5hdkJ1dHRvblByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgZXhwYW5kZWQ6IGZhbHNlIH07XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgdXNlciBpbnRlcmFjdGlvbiBvZiBjbGlja2luZyBvbiB0aGUgbmF2IGJ1dHRvbjtcbiAgICAgKiBpdCB0b2dnbGVzIHRoZSBleHBhbmRlZCBzdGF0ZSwgYW5kIGlmIGNhbGxiYWNrIGhhcyBiZWVuIHByb3ZpZGVkXG4gICAgICogZm9yIHRoZSBjb21wb25lbnQsIHJ1bnMgaXQgd2l0aCBuZXcgZXhwYW5zaW9uIHN0YXRlLlxuICAgICAqL1xuICAgIGhhbmRsZUNsaWNrKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9ICF0aGlzLnN0YXRlLmV4cGFuZGVkO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXhwYW5kZWQ6IG5ld1N0YXRlIH0pO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy50b2dnbGVDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVDYWxsYmFjayhuZXdTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wb25lbnQgcmVuZGVyZXIsIGNyZWF0ZXMgYmFzZSBTVkcgZWxlbWVudCB3aXRoIHRocmVlIGhvcml6b250YWwgbGluZXMgd2l0aGluLlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IFsyLCA1LCA4XS5tYXAoeSA9PiA8bGluZSB4MT1cIjEuNVwiIHkxPXt5fSB4Mj1cIjguNVwiIHkyPXt5fSAvPik7XG5cbiAgICAgICAgcmV0dXJuIDxzdmdcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMCAxMFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtYnV0dG9uICR7dGhpcy5zdGF0ZS5leHBhbmRlZCA/IFwiZXhwYW5kZWRcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgIHN0eWxlPXt7IHN0cm9rZVdpZHRoOiAxLjUsIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIiB9fVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgPntsaW5lc308L3N2Zz47XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBmbGF0dGVuLCBpc0FycmF5IH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IFJlc3VsdCBmcm9tIFwic3JjL21vZGVsL3Jlc3VsdFwiO1xuaW1wb3J0IFN5bWJvbHMgZnJvbSBcInNyYy9tb2RlbC9zeW1ib2xzXCI7XG5pbXBvcnQgU3ltYm9sRGlzcGxheSBmcm9tIFwic3JjL3ZpZXcvZGlzcGxheS9zeW1ib2xcIjtcbmltcG9ydCB7IGFkanVkaWNhdGVSb2xsLCByZW1vdmVPcHBvc2luZ1N5bWJvbHMgfSBmcm9tIFwic3JjL3V0aWwvYWRqdWRpY2F0ZVwiO1xuaW1wb3J0IHsgb3JkZXJTeW1ib2xzIH0gZnJvbSBcInNyYy91dGlsL29yZGVyXCI7XG5pbXBvcnQgeyBBbGxvd2VkUmVzdWx0cyB9IGZyb20gXCJzcmMvbW9kZWwvZGljZVwiO1xuXG5jb25zdCBSb2xsUmVzdWx0czogUmVhY3QuU0ZDPHsgcmVzdWx0czogQWxsb3dlZFJlc3VsdHNbXSB9PiA9ICh7IHJlc3VsdHMgfSkgPT4ge1xuXG4gICAgbGV0IHN0YXR1czogUmVzdWx0ID0gUmVzdWx0Lk5FVVRSQUw7XG4gICAgY29uc3QgcmVzdWx0c1N5bWJvbHM6IFN5bWJvbHNbXVtdID0gW10sXG4gICAgICAgICAgcmVzdWx0c051bWJlcnM6IG51bWJlcltdID0gW10sXG4gICAgICAgICAgZWxlbWVudHM6IEpTWC5FbGVtZW50W10gPSBbXTtcblxuICAgIHJlc3VsdHMuZm9yRWFjaChyZXN1bHQgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgcmVzdWx0c051bWJlcnMucHVzaChyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICAgICAgcmVzdWx0c1N5bWJvbHMucHVzaChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgYW55IHN5bWJvbHMsIGxldCdzIGZsYXR0ZW4gdGhlIHJlc3VsdHMgYW5kXG4gICAgLy8gZWxpbWluYXRlIHRoZSBvcHBvc2luZyBvbmVzIGZvciBkaXNwbGF5OyBhbHNvIGFkanVkaWNhdGVcbiAgICAvLyB0aGUgcm9sbCByZXN1bHRzLlxuICAgIGlmIChyZXN1bHRzU3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgZmxhdFJvbGwgPSByZW1vdmVPcHBvc2luZ1N5bWJvbHMoZmxhdHRlbihyZXN1bHRzU3ltYm9scykpLnNvcnQob3JkZXJTeW1ib2xzKTtcbiAgICAgICAgc3RhdHVzID0gYWRqdWRpY2F0ZVJvbGwoZmxhdFJvbGwpO1xuICAgICAgICBpZiAoZmxhdFJvbGwubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbGVtZW50cy5wdXNoKDxkaXYgY2xhc3NOYW1lPXtgZ3JvdXAgc3ltYm9saWMgJHtmbGF0Um9sbC5sZW5ndGggPiA4ID8gXCJsYXJnZVwiIDogXCJcIn1gfT57ZmxhdFJvbGwubWFwKHMgPT4gPFN5bWJvbERpc3BsYXkgc3ltYm9sPXtzfS8+KX08L2Rpdj4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWxlbWVudHMucHVzaCguLi5yZXN1bHRzTnVtYmVycy5tYXAoc2NvcmUgPT4gPGRpdiBjbGFzc05hbWU9XCJncm91cCBudW1lcmljXCI+e3Njb3JlfTwvZGl2PikpO1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgcm9sbC1yZXN1bHRzICR7c3RhdHVzfWB9PntlbGVtZW50c308L2Rpdj47XG59O1xuZXhwb3J0IGRlZmF1bHQgUm9sbFJlc3VsdHM7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007Il0sInNvdXJjZVJvb3QiOiIifQ==