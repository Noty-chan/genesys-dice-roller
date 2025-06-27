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
/*! exports provided: Settings, Theme, Webhooks, WebhookNames, WebhookPriority, getWebhook, Username, AutoDiscord */
/*! exports used: AutoDiscord, Theme, Username, WebhookNames, WebhookPriority, Webhooks, getWebhook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Settings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Webhooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return WebhookNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return WebhookPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getWebhook; });
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
const WebhookNames = new Settings("webhook_names", []);
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
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-to-image */ "./node_modules/.pnpm/html-to-image@1.11.13/node_modules/html-to-image/es/index.js");
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
            const webhook = Object(src_model_settings__WEBPACK_IMPORTED_MODULE_3__[/* getWebhook */ "g"])();
            if (!webhook || !this.resultsRef.current) {
                return;
            }
            yield new Promise(res => setTimeout(res, 500));
            const blob = yield Object(html_to_image__WEBPACK_IMPORTED_MODULE_2__[/* toBlob */ "a"])(this.resultsRef.current, { pixelRatio: 2 });
            if (!blob) {
                return;
            }
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
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { ref: this.resultsRef, className: "results-container" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_view_dice_list__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], { dice: this.state.dice, selected: this.state.selected, selectCallback: this.toggleSelection }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](src_view_roll_results__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], { results: this.state.results })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "actions" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { id: "roll", onClick: this.roll }, this.state.selected.length ? "Re-roll Selected" : "Roll"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { id: "clear", onClick: this.clearDice }, this.state.selected.length ? "Remove Selected" : "Clear"),
                Object(src_model_settings__WEBPACK_IMPORTED_MODULE_3__[/* getWebhook */ "g"])() && !src_model_settings__WEBPACK_IMPORTED_MODULE_3__[/* AutoDiscord */ "a"].get() && this.state.results.length > 0 &&
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class Menu extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            webhooks: src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Webhooks */ "f"].get().length ? src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Webhooks */ "f"].get() : [""],
            names: src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* WebhookNames */ "d"].get().slice(),
            priority: src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* WebhookPriority */ "e"].get(),
            username: src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Username */ "c"].get() || "",
            theme: src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Theme */ "b"].get() || "",
            autoDiscord: src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* AutoDiscord */ "a"].get() || false
        };
        this.handleWebhook = (idx, e) => {
            const webhooks = this.state.webhooks.slice();
            const names = this.state.names.slice();
            webhooks[idx] = e.target.value;
            names[idx] = names[idx] || "";
            this.setState({ webhooks, names });
            src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Webhooks */ "f"].set(webhooks.filter(w => w));
            src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* WebhookNames */ "d"].set(names);
            if (webhooks[idx]) {
                this.updateName(idx, webhooks[idx]);
            }
        };
        this.addWebhookField = () => {
            if (this.state.webhooks.length < 5) {
                this.setState({
                    webhooks: this.state.webhooks.concat([""]),
                    names: this.state.names.concat([""])
                });
            }
        };
        this.removeWebhookField = (idx) => {
            if (this.state.webhooks.length > 1) {
                const webhooks = this.state.webhooks.slice();
                const names = this.state.names.slice();
                webhooks.splice(idx, 1);
                names.splice(idx, 1);
                const priority = Math.min(this.state.priority, webhooks.length - 1);
                this.setState({ webhooks, names, priority });
                src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* Webhooks */ "f"].set(webhooks.filter(w => w));
                src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* WebhookNames */ "d"].set(names);
                src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* WebhookPriority */ "e"].set(priority);
            }
        };
        this.handlePriority = (e) => {
            const priority = parseInt(e.target.value, 10);
            this.setState({ priority });
            src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* WebhookPriority */ "e"].set(priority);
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
    webhookApi(url) {
        const match = url.match(/\/api\/webhooks\/(\d+)\/([^/]+)/);
        return match ? `https://discord.com/api/webhooks/${match[1]}/${match[2]}` : null;
    }
    updateName(idx, url) {
        return __awaiter(this, void 0, void 0, function* () {
            const api = this.webhookApi(url);
            if (!api) {
                return;
            }
            try {
                const res = yield fetch(api);
                if (!res.ok) {
                    return;
                }
                const data = yield res.json();
                const names = this.state.names.slice();
                names[idx] = data.name || `Вебхук #${idx + 1}`;
                this.setState({ names });
                src_model_settings__WEBPACK_IMPORTED_MODULE_1__[/* WebhookNames */ "d"].set(names);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    componentDidMount() {
        this.state.webhooks.forEach((hook, i) => {
            if (hook && !this.state.names[i]) {
                this.updateName(i, hook);
            }
        });
    }
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "menu" },
            this.state.webhooks.map((hook, i) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { key: i },
                this.state.names[i] || `Вебхук #${i + 1}`,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "field" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "url", value: hook, onChange: e => this.handleWebhook(i, e) }),
                    this.state.webhooks.length > 1 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { type: "button", className: "remove", onClick: () => this.removeWebhookField(i) }, "\u00D7")))),
            this.state.webhooks.length < 5 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { onClick: this.addWebhookField }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0435\u0431\u0445\u0443\u043A"),
            this.state.webhooks.length > 1 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null,
                "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u044B\u0439 \u043A\u0430\u043D\u0430\u043B",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { value: this.state.priority, onChange: this.handlePriority }, this.state.webhooks.map((_, i) => react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: i, key: "p" + i }, this.state.names[i] || `Вебхук #${i + 1}`)))),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvZGljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvYWRqdWRpY2F0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9vcmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9kaWNlLWNvbnRyb2xzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9kaWNlLWxpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L2Rpc3BsYXkvZGljZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZGlzcGxheS9zeW1ib2wudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L21haW4tYXBwLWFyZWEudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L21lbnUudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L25hdi1idXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L3JvbGwtcmVzdWx0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL21haW4ubGVzcz85MjJkIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2SkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ087QUFFSztBQUNNO0FBQ0w7QUFDWDtBQUVqQyxNQUFNLEdBQUksU0FBUSwrQ0FBdUU7SUFFckYsWUFBWSxLQUFzQztRQUM5QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQWE7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxXQUFXO1FBQ1AsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsaUJBQWlCO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELG9CQUFvQjtRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxNQUFNO1FBQ0YsT0FBTyxvREFBQyw4Q0FBYztZQUNsQixvREFBQyxtRUFBUyxJQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLG9EQUFDLDZEQUFJLElBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDaEUsNERBQUksT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtnQkFBRSw4REFBTSxTQUFTLEVBQUMsTUFBTSxjQUFlOytCQUFpQjtZQUM1RyxvREFBQyxzRUFBVyxPQUFFLENBQ0QsQ0FBQztJQUN0QixDQUFDO0NBQ0o7QUFFRCx5RUFBeUU7QUFDekUsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRXhDLGdEQUFlLENBQUMsb0RBQUMsR0FBRyxJQUFDLGFBQWEsRUFBRSxnRUFBSyxHQUFJLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3pDaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztHQUdHO0FBQ0ksTUFBZSxHQUFHO0lBQXpCO1FBRUk7Ozs7V0FJRztRQUNILGtCQUFhLEdBQXNCLElBQUksQ0FBQztRQUV4Qzs7Ozs7O1dBTUc7UUFDSCxjQUFTLEdBQVcsQ0FBQyxDQUFDO0lBUTFCLENBQUM7Q0FBQTtBQUVEOzs7O0dBSUc7QUFDSSxNQUFlLFVBQVcsU0FBUSxHQUFjO0lBU25EOzs7T0FHRztJQUNILElBQUk7UUFDQSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNuRyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQztDQUVKO0FBRUQ7O0dBRUc7QUFDSSxNQUFNLFVBQVcsU0FBUSxVQUFVO0lBQTFDOztRQUNJLG9CQUFlLEdBQUc7WUFDZCxFQUFFO1lBQ0YsMkJBQWlCO1lBQ2pCLDJCQUFpQjtZQUNqQixzREFBa0M7WUFDbEMsNkJBQW1CO1lBQ25CLDZCQUFtQjtZQUNuQix3REFBb0M7WUFDcEMsMERBQXNDO1NBQ3pDO0lBQ0wsQ0FBQztDQUFBO0FBRUQ7O0dBRUc7QUFDSSxNQUFNLGNBQWUsU0FBUSxVQUFVO0lBQTlDOztRQUNJLG9CQUFlLEdBQUc7WUFDZCxFQUFFO1lBQ0YsMkJBQWlCO1lBQ2pCLDJCQUFpQjtZQUNqQixzREFBa0M7WUFDbEMsc0RBQWtDO1lBQ2xDLDZCQUFtQjtZQUNuQix3REFBb0M7WUFDcEMsd0RBQW9DO1lBQ3BDLHdEQUFvQztZQUNwQywwREFBc0M7WUFDdEMsMERBQXNDO1lBQ3RDLDJCQUFpQjtTQUNwQjtJQUNMLENBQUM7Q0FBQTtBQUVEOztHQUVHO0FBQ0ksTUFBTSxRQUFTLFNBQVEsVUFBVTtJQUF4Qzs7UUFDSSxvQkFBZSxHQUFHO1lBQ2QsRUFBRTtZQUNGLEVBQUU7WUFDRiwyQkFBaUI7WUFDakIsd0RBQW9DO1lBQ3BDLDBEQUFzQztZQUN0Qyw2QkFBbUI7U0FDdEI7SUFDTCxDQUFDO0NBQUE7QUFFRDs7R0FFRztBQUNJLE1BQU0sYUFBYyxTQUFRLFVBQVU7SUFBN0M7O1FBQ0ksb0JBQWUsR0FBRztZQUNkLEVBQUU7WUFDRiwyQkFBaUI7WUFDakIsc0RBQWtDO1lBQ2xDLDBCQUFnQjtZQUNoQiwwQkFBZ0I7WUFDaEIsMEJBQWdCO1lBQ2hCLG9EQUFnQztZQUNoQyxxREFBaUM7U0FDcEM7SUFDTCxDQUFDO0NBQUE7QUFFRDs7R0FFRztBQUNJLE1BQU0sWUFBYSxTQUFRLFVBQVU7SUFBNUM7O1FBQ0ksb0JBQWUsR0FBRztZQUNkLEVBQUU7WUFDRiwyQkFBaUI7WUFDakIsMkJBQWlCO1lBQ2pCLHNEQUFrQztZQUNsQyxzREFBa0M7WUFDbEMsMEJBQWdCO1lBQ2hCLDBCQUFnQjtZQUNoQixxREFBaUM7WUFDakMscURBQWlDO1lBQ2pDLG9EQUFnQztZQUNoQyxvREFBZ0M7WUFDaEMsMkJBQWlCO1NBQ3BCO0lBQ0wsQ0FBQztDQUFBO0FBRUQ7O0dBRUc7QUFDSSxNQUFNLFVBQVcsU0FBUSxVQUFVO0lBQTFDOztRQUNJLG9CQUFlLEdBQUc7WUFDZCxFQUFFO1lBQ0YsRUFBRTtZQUNGLDJCQUFpQjtZQUNqQiwyQkFBaUI7WUFDakIsMEJBQWdCO1lBQ2hCLDBCQUFnQjtTQUNuQjtJQUNMLENBQUM7Q0FBQTtBQUVEOzs7R0FHRztBQUNJLE1BQU0sYUFBYyxTQUFRLEdBQVc7SUFDMUMsSUFBSTtRQUNBLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7O0FDN0tEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvQztBQVE3QixNQUFNLFFBQVE7SUFFakIsWUFBWSxJQUFZLEVBQUUsWUFBc0I7UUFleEMsa0JBQWEsR0FBMEMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQWJyRSxNQUFNLFVBQVUsR0FBa0IsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUNiLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNoRCxDQUFDO1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxpRUFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQVFTLE9BQU8sQ0FBQyxLQUF5QixFQUFFLE1BQTJDO1FBQ3BGLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDM0QsTUFBTSxNQUFNLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsRUFBRSxDQUFDLFFBQThCO1FBQzdCLE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsR0FBRyxDQUFDLFFBQThCO1FBQzlCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELElBQUksV0FBVyxFQUFFLENBQUM7WUFDZCxXQUFXLEVBQUUsQ0FBQztRQUNsQixDQUFDO0lBQ0wsQ0FBQztJQUVELEdBQUc7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxHQUFHLENBQUMsS0FBYztRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDSjtBQUdELE1BQU0sZUFBZSxHQUFtQixDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFaEUsTUFBTSxhQUFjLFNBQVEsUUFBc0I7SUFFOUM7UUFDSSxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxRQUFRO1FBRUosTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRWpDLElBQUksYUFBYSxFQUFFLENBQUM7WUFDaEIsT0FBTyxhQUFhLENBQUM7UUFDekIsQ0FBQzthQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BFLE9BQU8sT0FBTyxDQUFDO1FBQ25CLENBQUM7YUFBTSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNuRSxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELE1BQU07UUFDRixNQUFNLGFBQWEsR0FBRyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQztRQUN6RixJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDSjtBQUVNLE1BQU0sS0FBSyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7QUFFbEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQVcsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3hELE1BQU0sWUFBWSxHQUFHLElBQUksUUFBUSxDQUFXLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNqRSxNQUFNLGVBQWUsR0FBRyxJQUFJLFFBQVEsQ0FBUyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUVwRSxTQUFTLFVBQVU7SUFDdEIsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzdCLE1BQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNwQyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUM7QUFDaEMsQ0FBQztBQUNNLE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxDQUFTLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN0RCxNQUFNLFdBQVcsR0FBRyxJQUFJLFFBQVEsQ0FBVSxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDbEd4RTtBQUFBO0FBQUE7QUFBb0M7QUFJcEM7Ozs7Ozs7R0FPRztBQUNJLFNBQVMscUJBQXFCLENBQUMsT0FBa0I7SUFFcEQsa0RBQWtEO0lBQ2xELE1BQU0sTUFBTSxHQUFHLGlFQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFaEMsZ0ZBQWdGO0lBQ2hGLE9BQU8sTUFBTSwyQkFBaUIsQ0FBQztJQUMvQixPQUFPLE1BQU0sMkJBQWlCLENBQUM7SUFFL0Isb0VBQW9FO0lBQ3BFLE1BQU0sMkJBQWlCLEdBQUcsTUFBTSwyQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sMkJBQWlCLEVBQUUsTUFBTSwyQkFBaUIsQ0FBQyxDQUFDO0lBQy9HLE1BQU0sNkJBQW1CLEdBQUcsTUFBTSwwQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sNkJBQW1CLEVBQUUsTUFBTSwwQkFBZ0IsQ0FBQyxDQUFDO0lBRWpILE1BQU0sZ0JBQWdCLEdBQWMsRUFBRSxDQUFDO0lBQ3ZDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDbkIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ25CLENBQUM7YUFBTSxDQUFDO1lBQ0osZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sZ0JBQWdCLENBQUM7QUFDNUIsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNJLFNBQVMsY0FBYyxDQUFDLE9BQWtCO0lBRTdDLE1BQU0sTUFBTSxHQUFHLGlFQUFPLENBQUMsT0FBTyxDQUFDLEVBQ3pCLFlBQVksR0FBRyxDQUFDLE1BQU0sMkJBQWlCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLDJCQUFpQixJQUFJLENBQUMsQ0FBQyxFQUM5RSxZQUFZLEdBQUcsQ0FBQyxNQUFNLDJCQUFpQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSwyQkFBaUIsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVyRixPQUFPLENBQUMsWUFBWSxHQUFHLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdDQUFnQixDQUFDLCtCQUFlLENBQUM7QUFDL0UsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNsREQ7QUFBQTtBQUFBO0FBQTBJO0FBRTFJOzs7R0FHRztBQUNILE1BQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEMsMkJBQWlCLEVBQUksQ0FBQztJQUN0QiwyQkFBaUIsRUFBSSxDQUFDO0lBQ3RCLDZCQUFtQixFQUFFLENBQUM7SUFDdEIsMkJBQWlCLEVBQUksQ0FBQztJQUN0QiwyQkFBaUIsRUFBSSxDQUFDO0lBQ3RCLDBCQUFnQixFQUFLLENBQUM7Q0FDekIsQ0FBQyxDQUFDO0FBRUg7Ozs7R0FJRztBQUNJLFNBQVMsWUFBWSxDQUFDLENBQVUsRUFBRSxDQUFVO0lBQy9DLE9BQU8sZUFBZSxDQUFDLENBQUMsQ0FBVyxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQVcsQ0FBQztBQUN2RSxDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFTLGNBQWMsQ0FBQyxHQUErQjtJQUVuRCxJQUFJLEdBQUcsWUFBWSxxRUFBYyxFQUFFLENBQUM7UUFDaEMsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO1NBQU0sSUFBSSxHQUFHLFlBQVksaUVBQVUsRUFBRSxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztTQUFNLElBQUksR0FBRyxZQUFZLCtEQUFRLEVBQUUsQ0FBQztRQUNqQyxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7U0FBTSxJQUFJLEdBQUcsWUFBWSxtRUFBWSxFQUFFLENBQUM7UUFDckMsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO1NBQU0sSUFBSSxHQUFHLFlBQVksb0VBQWEsRUFBRSxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztTQUFNLElBQUksR0FBRyxZQUFZLGlFQUFVLEVBQUUsQ0FBQztRQUNuQyxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDRCxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUM7QUFFRDs7OztHQUlHO0FBQ0ksU0FBUyxTQUFTLENBQUMsQ0FBNkIsRUFBRSxDQUE2QjtJQUNsRixPQUFPLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN4REQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ087QUFFaUg7QUFDdkc7QUFHaEQsTUFBTSxZQUFZLEdBQThCO0lBQzVDLEVBQUUsR0FBRyxFQUFFLGlFQUFVLEVBQU0sTUFBTSxFQUFFLDJCQUFpQixFQUFFO0lBQ2xELEVBQUUsR0FBRyxFQUFFLHFFQUFjLEVBQUUsTUFBTSxFQUFFLDJCQUFpQixFQUFFO0lBQ2xELEVBQUUsR0FBRyxFQUFFLCtEQUFRLEVBQVEsTUFBTSxFQUFFLDZCQUFtQixFQUFFO0lBQ3BELEVBQUUsR0FBRyxFQUFFLG9FQUFhLEVBQUcsTUFBTSxFQUFFLDJCQUFpQixFQUFFO0lBQ2xELEVBQUUsR0FBRyxFQUFFLG1FQUFZLEVBQUksTUFBTSxFQUFFLDJCQUFpQixFQUFFO0lBQ2xELEVBQUUsR0FBRyxFQUFFLGlFQUFVLEVBQU0sTUFBTSxFQUFFLDBCQUFnQixFQUFFO0lBQ2pELEVBQUUsR0FBRyxFQUFFLG9FQUFhLEVBQUcsTUFBTSxFQUFFLEVBQUUsRUFBRTtDQUN0QyxDQUFDO0FBRUY7OztHQUdHO0FBQ1ksTUFBTSxZQUFhLFNBQVEsbURBQTZEO0lBRW5HOzs7O09BSUc7SUFDSCxNQUFNO1FBRUYsTUFBTSxlQUFlLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVELE1BQU0sT0FBTyxHQUFHLGlFQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNoRSxPQUFPLGdFQUFRLElBQUksRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFFLE9BQU8sT0FBTyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDcEcsb0RBQUMscUVBQVcsSUFBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUksQ0FDcEUsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyw2REFBSyxTQUFTLEVBQUMsZUFBZSxJQUFFLGVBQWUsQ0FBTyxDQUFDO0lBQ2xFLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7QUN2Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDaUI7QUFHaEQ7O0dBRUc7QUFDWSxNQUFNLFFBQVMsU0FBUSwrQ0FBOEc7SUFFaEosTUFBTTtRQUVGLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUV2QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNyQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxLQUFLLENBQUMsQ0FBQztZQUVYLE9BQU8sb0RBQUMscUVBQVcsSUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssR0FBSSxDQUFDO1FBQzVILENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyw2REFBSyxTQUFTLEVBQUMsV0FBVyxJQUFFLFFBQVEsQ0FBTyxDQUFDO0lBQ3ZELENBQUM7Q0FFSjs7Ozs7Ozs7Ozs7Ozs7QUN2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNPO0FBRWM7QUFFcEQ7Ozs7R0FJRztBQUNILFNBQVMsZ0JBQWdCLENBQUMsTUFBc0I7SUFDNUMsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDbEIsT0FBTyxDQUFDLHNFQUFjLENBQUMsQ0FBQztJQUM1QixDQUFDO1NBQU0sSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUNwQyxPQUFPLENBQUMsa0VBQU8sTUFBTSxHQUFHLEVBQUUsQ0FBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLG9EQUFDLHVFQUFhLElBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFJLENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNZLE1BQU0sV0FBWSxTQUFRLCtDQUt2QztJQUxGOztRQU9JLGlCQUFZLEdBQW9DLCtDQUFlLEVBQUUsQ0FBQztJQW9EdEUsQ0FBQztJQWxERyxNQUFNO1FBRUYsSUFBSSxTQUFTLEdBQVcsaUVBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakYsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RCLFNBQVMsSUFBSSxXQUFXLENBQUM7UUFDN0IsQ0FBQztRQUVELE9BQU8sNkRBQUssR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQ2hGLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUM3QyxDQUFDO0lBQ1gsQ0FBQztJQUVELHFCQUFxQixDQUFDLFNBQXdCO1FBQzFDLE9BQU8sQ0FDSCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsR0FBRztZQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsUUFBUTtZQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsU0FBUyxDQUMvQyxDQUFDO0lBQ04sQ0FBQztJQUVELGtCQUFrQixDQUFDLFNBQXdCO1FBRXZDLG1GQUFtRjtRQUNuRiw0RkFBNEY7UUFDNUYsSUFDSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxPQUFPO1lBQzlELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxTQUFTLEVBQzlDLENBQUM7WUFFQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQVEsQ0FBQztZQUM5QyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUV6RCxpRUFBaUU7WUFDakUsMkVBQTJFO1lBQzNFLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDekMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JDLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ3ZDLENBQUM7WUFFRCxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFZO1FBQ3BCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxjQUFjLEVBQUUsQ0FBQztZQUNoQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQVEsQ0FBQztZQUM5QyxVQUFVLENBQUMsbUJBQW1CLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM1RCxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxDQUFDO0lBQ0wsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7OztBQ25GRDtBQUFBO0FBQUE7QUFBK0I7QUFDSztBQUdwQyw0REFBNEQ7QUFDNUQsTUFBTSxhQUFhLEdBQStDLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO0lBQzdFLE1BQU0sSUFBSSxHQUFHLGlFQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxPQUFPLDhEQUFNLFNBQVMsRUFBQyxhQUFhLElBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBUSxDQUFDO0FBQ2hFLENBQUMsQ0FBQztBQUNhLHNFQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNURTtBQUNRO0FBSUE7QUFDZ0M7QUFDSztBQUM5QjtBQUlJO0FBQ1I7QUFDTTtBQUNMO0FBRzNDLE1BQU0sU0FBUyxHQUEwQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBRW5ILE1BQU0sV0FBWSxTQUFRLCtDQUFnRztJQUtySSxZQUFZLEtBQVM7UUFDakIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBSmpCLGVBQVUsR0FBb0MsK0NBQWUsRUFBRSxDQUFDO1FBQ3hELHNCQUFpQixHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUlqRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUVyRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELGlCQUFpQjtRQUNiLHNFQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxvQkFBb0I7UUFDaEIsc0VBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFtQjtRQUN0QixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxpQ0FBTSxJQUFJLENBQUMsS0FBSyxLQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0VBQVMsQ0FBQyxJQUFHLENBQUM7SUFDbEYsQ0FBQztJQUVELFNBQVM7UUFFTCxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFdEMsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFbEIsTUFBTSxhQUFhLEdBQUcsaUVBQVUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osT0FBTyxFQUFFLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO2FBQ3ZELENBQUMsQ0FBQztRQUVQLENBQUM7YUFBTSxDQUFDO1lBQ0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzRCxDQUFDO0lBQ0wsQ0FBQztJQUVELGVBQWUsQ0FBQyxVQUF1QjtRQUVuQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxpQ0FBTSxJQUFJLENBQUMsS0FBSyxLQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLFVBQVUsQ0FBQyxJQUFHLENBQUM7UUFDM0YsQ0FBQzthQUFNLENBQUM7WUFDSixJQUFJLENBQUMsUUFBUSxpQ0FBTSxJQUFJLENBQUMsS0FBSyxLQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBRyxDQUFDO1FBQzlFLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSTtRQUVBLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV0QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUVsQixRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDVixJQUFJO2dCQUNKLFFBQVEsRUFBRSxFQUFFO2dCQUNaLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQzthQUM5QyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksc0VBQVcsQ0FBQyxHQUFHLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0QsQ0FBQzthQUFNLENBQUM7WUFDSixJQUFJLENBQUMsUUFBUSxpQ0FBTSxJQUFJLENBQUMsS0FBSyxLQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsS0FDMUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxzRUFBVyxDQUFDLEdBQUcsRUFBRTtnQkFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxDQUFDO0lBQ0wsQ0FBQztJQUVLLGFBQWE7O1lBQ2YsTUFBTSxPQUFPLEdBQUcsNkVBQVUsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE9BQU87WUFBQyxDQUFDO1lBRXJELE1BQU0sSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFL0MsTUFBTSxJQUFJLEdBQUcsTUFBTSxvRUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUFDLE9BQU87WUFBQyxDQUFDO1lBRXRCLE1BQU0sSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLG1FQUFRLENBQUMsR0FBRyxFQUFFLElBQUksZ0JBQWdCLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1lBRWhELEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELENBQUM7S0FBQTtJQUVELGdCQUFnQjtRQUNaLE1BQU0sT0FBTyxHQUFjLEVBQUUsQ0FBQztRQUM5QixNQUFNLE9BQU8sR0FBYSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzNCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUFDLENBQUM7aUJBQU0sSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUUsQ0FBQztnQkFBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUMsQ0FBQztRQUN0RyxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sSUFBSSxHQUFHLHlGQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxtRUFBWSxDQUFDLENBQUM7UUFDL0QsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsa0ZBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLCtCQUFlLENBQUM7UUFDdEUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQW1CLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELE1BQU0sS0FBSyxHQUE0QjtZQUNuQywyQkFBaUIsRUFBRSxPQUFPO1lBQzFCLDJCQUFpQixFQUFFLFNBQVM7WUFDNUIsNkJBQW1CLEVBQUUsY0FBYztZQUNuQywwQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLDJCQUFpQixFQUFFLFFBQVE7WUFDM0IsMkJBQWlCLEVBQUUsVUFBVTtTQUN6QixDQUFDO1FBQ1QsSUFBSSxJQUFJLEdBQUcsTUFBTSxtQ0FBbUIsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLG1DQUFtQixDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUM1RyxJQUFJLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hHLElBQUksT0FBTyxDQUFDLE1BQU07WUFBRSxJQUFJLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELE1BQU07UUFDRixPQUFPLDZEQUFLLFNBQVMsRUFBQyxXQUFXO1lBQzdCLG9EQUFDLHNFQUFZLElBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDdEMsNkRBQUssR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLG1CQUFtQjtnQkFDcEQsb0RBQUMsa0VBQVEsSUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsZUFBZSxHQUFJO2dCQUN4RyxvREFBQyxxRUFBVyxJQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBSSxDQUMxQztZQUNOLDZEQUFLLFNBQVMsRUFBQyxTQUFTO2dCQUNwQixnRUFBUSxFQUFFLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBVTtnQkFDekcsZ0VBQVEsRUFBRSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQVU7Z0JBQzVHLDZFQUFVLEVBQUUsSUFBSSxDQUFDLHNFQUFXLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQ2xFLGdFQUFRLEVBQUUsRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLDRFQUE4QixDQUNoRixDQUNKLENBQUM7SUFDWCxDQUFDO0NBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pKOEI7QUFDNEU7QUFHNUYsTUFBTSxJQUFLLFNBQVEsbURBQThCO0lBQWhFOztRQUNJLFVBQUssR0FBRztZQUNKLFFBQVEsRUFBRSxtRUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsbUVBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdkQsS0FBSyxFQUFFLHVFQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFO1lBQ2pDLFFBQVEsRUFBRSwwRUFBZSxDQUFDLEdBQUcsRUFBRTtZQUMvQixRQUFRLEVBQUUsbUVBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFO1lBQzlCLEtBQUssRUFBRSxnRUFBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUU7WUFDeEIsV0FBVyxFQUFFLHNFQUFXLENBQUMsR0FBRyxFQUFFLElBQUksS0FBSztTQUMxQyxDQUFDO1FBdUJGLGtCQUFhLEdBQUcsQ0FBQyxHQUFXLEVBQUUsQ0FBc0MsRUFBRSxFQUFFO1lBQ3BFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUMvQixLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDbkMsbUVBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsdUVBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDeEMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUVGLG9CQUFlLEdBQUcsR0FBRyxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUNWLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDMUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUN2QyxDQUFDLENBQUM7WUFDUCxDQUFDO1FBQ0wsQ0FBQyxDQUFDO1FBRUYsdUJBQWtCLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRTtZQUNqQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDakMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzdDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN2QyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDN0MsbUVBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLHVFQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QiwwRUFBZSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO1FBVUYsbUJBQWMsR0FBRyxDQUFDLENBQXVDLEVBQUUsRUFBRTtZQUN6RCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDNUIsMEVBQWUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDO1FBRUYsbUJBQWMsR0FBRyxDQUFDLENBQXNDLEVBQUUsRUFBRTtZQUN4RCxNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUM1QixtRUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUM7UUFFRixnQkFBVyxHQUFHLENBQUMsQ0FBdUMsRUFBRSxFQUFFO1lBQ3RELE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBOEIsQ0FBQztZQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN6QixnRUFBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDO1FBRUYsc0JBQWlCLEdBQUcsQ0FBQyxDQUFzQyxFQUFFLEVBQUU7WUFDM0QsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLHNFQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQztJQWdDTixDQUFDO0lBdkhXLFVBQVUsQ0FBQyxHQUFXO1FBQzFCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUMzRCxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsb0NBQW9DLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3JGLENBQUM7SUFFYSxVQUFVLENBQUMsR0FBVyxFQUFFLEdBQVc7O1lBQzdDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUFDLE9BQU87WUFBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQztnQkFDRCxNQUFNLEdBQUcsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFBQyxPQUFPO2dCQUFDLENBQUM7Z0JBQ3hCLE1BQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM5QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDdkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUN6Qix1RUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixDQUFDO1lBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFzQ0QsaUJBQWlCO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDN0IsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTBCRCxNQUFNO1FBQ0YsT0FBTyw2REFBSyxTQUFTLEVBQUMsTUFBTTtZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQywrREFBTyxHQUFHLEVBQUUsQ0FBQztnQkFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzdGLDhEQUFNLFNBQVMsRUFBQyxPQUFPO29CQUNqQiwrREFBTyxJQUFJLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUk7b0JBQ3pFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksZ0VBQVEsSUFBSSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGFBQVksQ0FDOUgsQ0FDSCxDQUFDO1lBQ1IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxnRUFBUSxPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWUsNEZBQTBCO1lBQ2pHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUk7O2dCQUMvQixnRUFBUSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLElBQzVELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGdFQUFRLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQVUsQ0FBQyxDQUNuSCxDQUNMO1lBQ1I7O2dCQUNJLCtEQUFPLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQzNFO1lBQ1IsK0RBQU8sU0FBUyxFQUFDLFVBQVU7O2dCQUN2QiwrREFBTyxJQUFJLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQ3ZGO1lBQ1I7O2dCQUNJLGdFQUFRLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVc7b0JBQ3ZELGdFQUFRLEtBQUssRUFBQyxFQUFFLDZEQUFtQjtvQkFDbkMsZ0VBQVEsS0FBSyxFQUFDLE9BQU8saURBQWlCO29CQUN0QyxnRUFBUSxLQUFLLEVBQUMsTUFBTSwyQ0FBZ0IsQ0FDL0IsQ0FDTDtZQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxJQUFJLGdFQUFRLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWUsQ0FBQyxLQUFLLENBQUMsaURBQWtCLENBQ3RHLENBQUM7SUFDWCxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7O0FDcklEO0FBQUE7QUFBQTtBQUErQjtBQUkvQjs7OztHQUlHO0FBQ1ksTUFBTSxTQUFVLFNBQVEsbURBQTBEO0lBRTdGLFlBQVksS0FBcUI7UUFDN0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsV0FBVztRQUNQLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUVGLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyw4REFBTSxFQUFFLEVBQUMsS0FBSyxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFDLEtBQUssRUFBQyxFQUFFLEVBQUUsQ0FBQyxHQUFJLENBQUMsQ0FBQztRQUUzRSxPQUFPLDZEQUNILEtBQUssRUFBQyw0QkFBNEIsRUFDbEMsT0FBTyxFQUFDLFdBQVcsRUFDbkIsU0FBUyxFQUFFLGNBQWMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQ2hFLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxFQUNuRCxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsSUFDM0IsS0FBSyxDQUFPLENBQUM7SUFDbkIsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7OztBQzdDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNjO0FBR087QUFDd0I7QUFDOUI7QUFHOUMsTUFBTSxXQUFXLEdBQTZDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO0lBRTFFLElBQUksTUFBTSxpQ0FBeUIsQ0FBQztJQUNwQyxNQUFNLGNBQWMsR0FBZ0IsRUFBRSxFQUNoQyxjQUFjLEdBQWEsRUFBRSxFQUM3QixRQUFRLEdBQWtCLEVBQUUsQ0FBQztJQUVuQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ3JCLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDN0IsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxDQUFDO2FBQU0sSUFBSSxpRUFBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDekIsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCwwREFBMEQ7SUFDMUQsMkRBQTJEO0lBQzNELG9CQUFvQjtJQUNwQixJQUFJLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4QixNQUFNLFFBQVEsR0FBRyx5RkFBcUIsQ0FBQyxpRUFBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1FQUFZLENBQUMsQ0FBQztRQUNuRixNQUFNLEdBQUcsa0ZBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQixRQUFRLENBQUMsSUFBSSxDQUFDLDZEQUFLLFNBQVMsRUFBRSxrQkFBa0IsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLG9EQUFDLHVFQUFhLElBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQU8sQ0FBQyxDQUFDO1FBQ2xKLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyw2REFBSyxTQUFTLEVBQUMsZUFBZSxJQUFFLEtBQUssQ0FBTyxDQUFDLENBQUMsQ0FBQztJQUU1RixPQUFPLDZEQUFLLFNBQVMsRUFBRSxnQkFBZ0IsTUFBTSxFQUFFLElBQUcsUUFBUSxDQUFPLENBQUM7QUFDdEUsQ0FBQyxDQUFDO0FBQ2Esb0VBQVcsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3ZDM0IsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsdUI7Ozs7Ozs7Ozs7OztBQ0FBLDBCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZ2VuZXN5cy1kaWNlLXJvbGxlci9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwic3JjL21vZGVsL3NldHRpbmdzXCI7XG5pbXBvcnQgTWFpbkFwcEFyZWEgZnJvbSBcInNyYy92aWV3L21haW4tYXBwLWFyZWFcIjtcbmltcG9ydCBOYXZCdXR0b24gZnJvbSBcInNyYy92aWV3L25hdi1idXR0b25cIjtcbmltcG9ydCBNZW51IGZyb20gXCJzcmMvdmlldy9tZW51XCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7IHRoZW1lU2V0dGluZ3M6IHR5cGVvZiBUaGVtZSB9LCB7IG1lbnVPcGVuOiBib29sZWFuIH0+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiB7IHRoZW1lU2V0dGluZ3M6IHR5cGVvZiBUaGVtZSB9KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgbWVudU9wZW46IGZhbHNlIH07XG4gICAgICAgIHRoaXMuc3dpdGNoVGhlbWUgPSB0aGlzLnN3aXRjaFRoZW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudG9nZ2xlTWVudSA9IHRoaXMudG9nZ2xlTWVudS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHRvZ2dsZU1lbnUob3BlbjogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVudU9wZW46IG9wZW4gfSk7XG4gICAgfVxuXG4gICAgc3dpdGNoVGhlbWUoKTogdm9pZCB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxpZ2h0XCIsIFwiZGFya1wiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHRoaXMucHJvcHMudGhlbWVTZXR0aW5ncy5nZXRDbGFzcygpKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy50aGVtZVNldHRpbmdzLm9uKHRoaXMuc3dpdGNoVGhlbWUpO1xuICAgICAgICB0aGlzLnN3aXRjaFRoZW1lKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMudGhlbWVTZXR0aW5ncy5vZmYodGhpcy5zd2l0Y2hUaGVtZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPE5hdkJ1dHRvbiB0b2dnbGVDYWxsYmFjaz17dGhpcy50b2dnbGVNZW51fS8+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZW51T3BlbiAmJiA8TWVudSB0b2dnbGVDYWxsYmFjaz17dGhpcy50b2dnbGVNZW51fS8+fSBcbiAgICAgICAgICAgIDxoMSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnRoZW1lU2V0dGluZ3MudG9nZ2xlKCl9PjxzcGFuIGNsYXNzTmFtZT1cImxvZ29cIj5HZW5lc3lzPC9zcGFuPiBEaWNlIFJvbGxlcjwvaDE+XG4gICAgICAgICAgICA8TWFpbkFwcEFyZWEvPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PjtcbiAgICB9XG59XG5cbi8vIFJlbW92ZSBmYWxsYmFjayBuby1KUyBjb250ZW50IGFuZCByZW1vdmUgdGhlIGNsYXNzIGZyb20gdGhlIDxib2R5PiB0YWdcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWpzXCIpO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCB0aGVtZVNldHRpbmdzPXtUaGVtZX0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpISk7XG4iLCJpbXBvcnQgU3ltYm9scyBmcm9tIFwic3JjL21vZGVsL3N5bWJvbHNcIjtcblxuLyoqIFR5cGUgdXNlZCB0byBkZXNjcmliZSBhbGwgdGhlIGRpY2UgY3VycmVudGx5IGhhbmRsZWQgYnkgdGhlIGFwcC4gKi9cbmV4cG9ydCB0eXBlIEFsbG93ZWREaWNlID0gR2VuZXN5c0RpZSB8IFBlcmNlbnRpbGVEaWU7XG4vKiogVHlwZSB1c2VkIHRvIGRlc2NyaWJlIGFsbCB0aGUgZGljZSByZXN1bHRzIGN1cnJlbnRseSBoYW5kbGVkIGJ5IHRoZSBhcHAuICovXG5leHBvcnQgdHlwZSBBbGxvd2VkUmVzdWx0cyA9IEFsbG93ZWREaWNlW1wiY3VycmVudFJlc3VsdFwiXTtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBtb2RlbHMgcmVwcmVzZW50aW5nIGFsbCBkaWNlIHVzZWQgaW4gdGhlIGFwcC5cbiAqIFNob3VsZG4ndCBiZSB1c2VkIG9uIGl0cyBvd24sIGJ1dCBjcmVhdGVzIGJhc2UgZm9yIGFsbCBvdGhlciBkaWNlLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGllPFJlc3VsdFR5cGUgZXh0ZW5kcyBBbGxvd2VkUmVzdWx0cz4ge1xuXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoYXQgdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCByb2xsIHdhcy5cbiAgICAgKiBJZiBudWxsLCB0aGUgZGllIGhhcyBub3QgYmVlbiByb2xsZWQgeWV0LCBlbHNlIGl0J3NcbiAgICAgKiB0aGUgY29udGVudHMgb2YgdGhlIHJlc3VsdGluZyBzaWRlLlxuICAgICAqL1xuICAgIGN1cnJlbnRSZXN1bHQ6IFJlc3VsdFR5cGUgfCBudWxsID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRoYXQgY291bnRzIHRoZSBudW1iZXIgb2YgdGltZXMgdGhpcyBkaWVcbiAgICAgKiBoYXMgYmVlbiByb2xsZWQuIEl0J3MgdXNlZCBwcmltYXJpbHkgaW4gcmVuZGVyaW5nLCB0byBkZXRlcm1pbmVcbiAgICAgKiB3aGVuIHRoZSBkaWUgaGFzIGNoYW5nZWQgc3RhdGUgYnkgYmVpbmcgcm9sbGVkLCBhcyBvcHBvc2VkIHRvXG4gICAgICogYmVpbmcgc2VsZWN0ZWQsIG9yIG1vdmVkIGluIHRoZSBsaXN0LlxuICAgICAqIEluY3JlYXNlcyBieSBvbmUgb24gZXZlcnkgaW52b2NhdGlvbiBvZiBgLnJvbGwoKWAuXG4gICAgICovXG4gICAgcm9sbENvdW50OiBudW1iZXIgPSAwO1xuXG4gICAgLyoqXG4gICAgICogUm9sbHMgdGhlIGRpZSwgc2VsZWN0aW5nIHJhbmRvbSByZXN1bHQgZnJvbSB0aGUgcG9zc2libGUgb25lcyxcbiAgICAgKiBhc3NpZ25zIGl0IHRvIGN1cnJlbnQgcmVzdWx0IGFuZCByZXR1cm5zIGl0LlxuICAgICAqL1xuICAgIGFic3RyYWN0IHJvbGwoKTogUmVzdWx0VHlwZTtcblxufVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIG1vZGVscyByZXByZXNlbnRpbmcgYWxsIHRoZSBHZW5lc3lzIGRpY2UuXG4gKiBQcmltYXJ5IHNldCBvZiBkaWNlIGluIHRoZSBzeXN0ZW0sIGV4Y2x1ZGluZyB0aGUgcGVyY2VudGlsZSBkaWVcbiAqIHVzZWQgaW4gc29tZSBjb21iYXQgc2l0dWF0aW9ucy5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdlbmVzeXNEaWUgZXh0ZW5kcyBEaWU8U3ltYm9sc1tdPiB7XG5cbiAgICAvKipcbiAgICAgKiBMaXN0IG9mIGFsbCBwb3NzaWJsZSByZXN1bHRzIHRoYXQgY2FuIGNvbWUgdXAgb24gdGhlIGRpZS5cbiAgICAgKiBFYWNoIHNpZGUgaXMgcmVwcmVzZW50ZWQgc2VwYXJhdGVseSwgc28gaWYgdHdvIHNpZGVzIGFyZVxuICAgICAqIHRoZSBzYW1lLCB0aGV5IHdpbGwgYmUgbGlzdGVkIHR3aWNlIGhlcmUuXG4gICAgICovXG4gICAgYWJzdHJhY3QgcmVhZG9ubHkgcG9zc2libGVSZXN1bHRzOiBTeW1ib2xzW11bXTtcblxuICAgIC8qKlxuICAgICAqIFJvbGxzIHRoZSBkaWUsIHNlbGVjdGluZyByYW5kb20gcmVzdWx0IGZyb20gdGhlIHBvc3NpYmxlIG9uZXMsXG4gICAgICogYXNzaWducyBpdCB0byBjdXJyZW50IHJlc3VsdCBhbmQgcmV0dXJucyBpdC5cbiAgICAgKi9cbiAgICByb2xsKCk6IFN5bWJvbHNbXSB7XG4gICAgICAgIHRoaXMucm9sbENvdW50Kys7XG4gICAgICAgIHRoaXMuY3VycmVudFJlc3VsdCA9IHRoaXMucG9zc2libGVSZXN1bHRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucG9zc2libGVSZXN1bHRzLmxlbmd0aCldO1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UmVzdWx0O1xuICAgIH1cblxufVxuXG4vKipcbiAqIE1vZGVsIGZvciB0aGUgYmFzZSBwb3NpdGl2ZSBkaWUsIHRoZSBncmVlbiBlaWdodC1zaWRlZCBvbmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBBYmlsaXR5RGllIGV4dGVuZHMgR2VuZXN5c0RpZSB7XG4gICAgcG9zc2libGVSZXN1bHRzID0gW1xuICAgICAgICBbXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTU10sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1NdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTLCBTeW1ib2xzLlNVQ0NFU1NdLFxuICAgICAgICBbU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTLCBTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLkFEVkFOVEFHRSwgU3ltYm9scy5BRFZBTlRBR0VdXG4gICAgXVxufVxuXG4vKipcbiAqIE1vZGVsIGZvciB0aGUgdXBncmFkZWQgcG9zaXRpdmUgZGllLCB0aGUgeWVsbG93IHR3ZWx2ZS1zaWRlZCBvbmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9maWNpZW5jeURpZSBleHRlbmRzIEdlbmVzeXNEaWUge1xuICAgIHBvc3NpYmxlUmVzdWx0cyA9IFtcbiAgICAgICAgW10sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1NdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTUywgU3ltYm9scy5TVUNDRVNTXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTUywgU3ltYm9scy5TVUNDRVNTXSxcbiAgICAgICAgW1N5bWJvbHMuQURWQU5UQUdFXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTUywgU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTLCBTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1MsIFN5bWJvbHMuQURWQU5UQUdFXSxcbiAgICAgICAgW1N5bWJvbHMuQURWQU5UQUdFLCBTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLkFEVkFOVEFHRSwgU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5UUklVTVBIXVxuICAgIF1cbn1cblxuLyoqXG4gKiBNb2RlbCBmb3IgdGhlIGNpcmN1bXN0YW50aWFsIHBvc2l0aXZlIGRpZSwgdGhlIGJsdWUgc2l4LXNpZGVkIG9uZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEJvb3N0RGllIGV4dGVuZHMgR2VuZXN5c0RpZSB7XG4gICAgcG9zc2libGVSZXN1bHRzID0gW1xuICAgICAgICBbXSxcbiAgICAgICAgW10sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1NdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTLCBTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLkFEVkFOVEFHRSwgU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5BRFZBTlRBR0VdXG4gICAgXVxufVxuXG4vKipcbiAqIE1vZGVsIGZvciB0aGUgYmFzZSBuZWdhdGl2ZSBkaWUsIHRoZSBwdXJwbGUgZWlnaHQtc2lkZWQgb25lLlxuICovXG5leHBvcnQgY2xhc3MgRGlmZmljdWx0eURpZSBleHRlbmRzIEdlbmVzeXNEaWUge1xuICAgIHBvc3NpYmxlUmVzdWx0cyA9IFtcbiAgICAgICAgW10sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkVdLFxuICAgICAgICBbU3ltYm9scy5GQUlMVVJFLCBTeW1ib2xzLkZBSUxVUkVdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVQsIFN5bWJvbHMuVEhSRUFUXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRSwgU3ltYm9scy5USFJFQVRdXG4gICAgXVxufVxuXG4vKipcbiAqIE1vZGVsIGZvciB0aGUgdXBncmFkZWQgbmVnYXRpdmUgZGllLCB0aGUgcmVkIHR3ZWx2ZS1zaWRlZCBvbmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2VEaWUgZXh0ZW5kcyBHZW5lc3lzRGllIHtcbiAgICBwb3NzaWJsZVJlc3VsdHMgPSBbXG4gICAgICAgIFtdLFxuICAgICAgICBbU3ltYm9scy5GQUlMVVJFXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRV0sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkUsIFN5bWJvbHMuRkFJTFVSRV0sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkUsIFN5bWJvbHMuRkFJTFVSRV0sXG4gICAgICAgIFtTeW1ib2xzLlRIUkVBVF0sXG4gICAgICAgIFtTeW1ib2xzLlRIUkVBVF0sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkUsIFN5bWJvbHMuVEhSRUFUXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRSwgU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVQsIFN5bWJvbHMuVEhSRUFUXSxcbiAgICAgICAgW1N5bWJvbHMuVEhSRUFULCBTeW1ib2xzLlRIUkVBVF0sXG4gICAgICAgIFtTeW1ib2xzLkRFU1BBSVJdXG4gICAgXVxufVxuXG4vKipcbiAqIE1vZGVsIGZvciB0aGUgY2lyY3Vtc3RhbnRpYWwgbmVnYXRpdmUgZGllLCB0aGUgYmxhY2sgc2l4LXNpZGVkIG9uZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNldGJhY2tEaWUgZXh0ZW5kcyBHZW5lc3lzRGllIHtcbiAgICBwb3NzaWJsZVJlc3VsdHMgPSBbXG4gICAgICAgIFtdLFxuICAgICAgICBbXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRV0sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkVdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVRdXG4gICAgXVxufVxuXG4vKipcbiAqIE1vZGVsIGZvciB0aGUgcGVyY2VudGlsZSBkaWUsIHVzZWQgdG8gZ2VuZXJhdGUgbnVtZXJpY2FsIHJlc3VsdFxuICogYmV0d2VlbiAxIGFuZCAxMDAuIFVzZWQgdG8gZXN0YWJsaXNoIGNyaXRpY2FsIHJlc3VsdHMgaW4gY29tYmF0LlxuICovXG5leHBvcnQgY2xhc3MgUGVyY2VudGlsZURpZSBleHRlbmRzIERpZTxudW1iZXI+IHtcbiAgICByb2xsKCkge1xuICAgICAgICB0aGlzLnJvbGxDb3VudCsrO1xuICAgICAgICB0aGlzLmN1cnJlbnRSZXN1bHQgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRSZXN1bHQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcblxudHlwZSBSZWR1eDxQYXlsb2FkPiA9IHtcbiAgICBkaXNwYXRjaChhcmc6IHsgdHlwZTogXCJDSEFOR0VcIiwgdmFsdWU6IFBheWxvYWQgfSk6IHZvaWQ7XG4gICAgc3Vic2NyaWJlKGFyZzogKCkgPT4gdm9pZCk6ICgpID0+IHZvaWQ7XG4gICAgZ2V0U3RhdGUoKTogeyB2YWx1ZTogUGF5bG9hZCB9O1xufVxuXG5leHBvcnQgY2xhc3MgU2V0dGluZ3M8UGF5bG9hZD4ge1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBpbml0aWFsVmFsdWU/OiBQYXlsb2FkKSB7XG5cbiAgICAgICAgY29uc3Qgc2F2ZWRWYWx1ZTogc3RyaW5nIHwgbnVsbCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKTtcbiAgICAgICAgaWYgKHNhdmVkVmFsdWUpIHtcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IEpTT04ucGFyc2Uoc2F2ZWRWYWx1ZSkudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnN0b3JlID0gY3JlYXRlU3RvcmUodGhpcy5yZWR1Y2VyLmJpbmQodGhpcyksIHsgdmFsdWU6IGluaXRpYWxWYWx1ZSB9KTtcbiAgICB9XG5cbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIHN0b3JlOiBSZWR1eDxQYXlsb2FkPjtcblxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uczogTWFwPChwOiBQYXlsb2FkKSA9PiB2b2lkLCAoKSA9PiB2b2lkPiA9IG5ldyBNYXAoKTtcblxuICAgIHByb3RlY3RlZCByZWR1Y2VyKHN0YXRlOiB7IHZhbHVlOiBQYXlsb2FkIH0sIGFjdGlvbjogeyB0eXBlPzogXCJDSEFOR0VcIiwgdmFsdWU6IFBheWxvYWQgfSk6IHsgdmFsdWU6IFBheWxvYWQgfSB7XG4gICAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gXCJDSEFOR0VcIiAmJiBhY3Rpb24udmFsdWUgIT09IHN0YXRlLnZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7IHZhbHVlOiBhY3Rpb24udmFsdWUgfTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG4gICAgb24oY2FsbGJhY2s6IChwOiBQYXlsb2FkKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiBjYWxsYmFjayh0aGlzLmdldCgpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnNldChjYWxsYmFjaywgdGhpcy5zdG9yZS5zdWJzY3JpYmUoaGFuZGxlcikpO1xuICAgIH1cblxuICAgIG9mZihjYWxsYmFjazogKHA6IFBheWxvYWQpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSB0aGlzLnN1YnNjcmlwdGlvbnMuZ2V0KGNhbGxiYWNrKTtcbiAgICAgICAgaWYgKHVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0KCk6IFBheWxvYWQge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLnZhbHVlO1xuICAgIH1cblxuICAgIHNldCh2YWx1ZTogUGF5bG9hZCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHsgdHlwZTogXCJDSEFOR0VcIiwgdmFsdWUgfSk7XG4gICAgfVxufVxuXG50eXBlIFRoZW1lT3B0aW9ucyA9IFwibGlnaHRcIiB8IFwiZGFya1wiIHwgbnVsbDtcbmNvbnN0IHRoZW1lT3B0aW9uTGlzdDogVGhlbWVPcHRpb25zW10gPSBbXCJsaWdodFwiLCBcImRhcmtcIiwgbnVsbF07XG5cbmNsYXNzIFRoZW1lU2V0dGluZ3MgZXh0ZW5kcyBTZXR0aW5nczxUaGVtZU9wdGlvbnM+IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcInRoZW1lXCIsIG51bGwpO1xuICAgIH1cblxuICAgIGdldENsYXNzKCk6IE5vbk51bGxhYmxlPFRoZW1lT3B0aW9ucz4ge1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVGhlbWUgPSB0aGlzLmdldCgpO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZFRoZW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRUaGVtZTtcbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBcImxpZ2h0XCI7XG4gICAgICAgIH0gZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBcImRhcmtcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJsaWdodFwiO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbmV3VGhlbWVJbmRleCA9ICh0aGVtZU9wdGlvbkxpc3QuaW5kZXhPZih0aGlzLmdldCgpKSArIDEpICUgdGhlbWVPcHRpb25MaXN0Lmxlbmd0aDtcbiAgICAgICAgdGhpcy5zZXQodGhlbWVPcHRpb25MaXN0W25ld1RoZW1lSW5kZXhdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBUaGVtZSA9IG5ldyBUaGVtZVNldHRpbmdzKCk7XG5cbmV4cG9ydCBjb25zdCBXZWJob29rcyA9IG5ldyBTZXR0aW5nczxzdHJpbmdbXT4oXCJ3ZWJob29rc1wiLCBbXSk7XG5leHBvcnQgY29uc3QgV2ViaG9va05hbWVzID0gbmV3IFNldHRpbmdzPHN0cmluZ1tdPihcIndlYmhvb2tfbmFtZXNcIiwgW10pO1xuZXhwb3J0IGNvbnN0IFdlYmhvb2tQcmlvcml0eSA9IG5ldyBTZXR0aW5nczxudW1iZXI+KFwid2ViaG9va19wcmlvcml0eVwiLCAwKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlYmhvb2soKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgY29uc3QgaG9va3MgPSBXZWJob29rcy5nZXQoKTtcbiAgICBjb25zdCBpbmRleCA9IFdlYmhvb2tQcmlvcml0eS5nZXQoKTtcbiAgICByZXR1cm4gaG9va3NbaW5kZXhdIHx8IG51bGw7XG59XG5leHBvcnQgY29uc3QgVXNlcm5hbWUgPSBuZXcgU2V0dGluZ3M8c3RyaW5nPihcInVzZXJuYW1lXCIsIFwiXCIpO1xuZXhwb3J0IGNvbnN0IEF1dG9EaXNjb3JkID0gbmV3IFNldHRpbmdzPGJvb2xlYW4+KFwiYXV0b19kaXNjb3JkXCIsIGZhbHNlKTtcbiIsImltcG9ydCB7IGNvdW50QnkgfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgUmVzdWx0IGZyb20gXCJzcmMvbW9kZWwvcmVzdWx0XCI7XG5pbXBvcnQgU3ltYm9scyBmcm9tIFwic3JjL21vZGVsL3N5bWJvbHNcIjtcblxuLyoqXG4gKiBNZXRob2QgdXNlZCB0byByZXNvbHZlIHBhcnQgb2YgdGhlIHJvbGwgd2hlcmUgc3VjY2Vzc2VzIGFuZCBmYWlsdXJlcyAvXG4gKiBhZHZhbnRhZ2VzIGFuZCB0aHJlYXRzIGNhbmNlbCBlYWNoIG90aGVyIG91dC4gR2l2ZW4gbGlzdCBvZiBzeW1ib2xzLFxuICogY2FuY2VscyB0aGVtIG91dCBhbmQgcmV0dXJucyB0aGUgbGlzdCB3aXRoIG9ubHkgdGhlIHJlbWFpbmluZyBzeW1ib2xzLlxuICpcbiAqIEBwYXJhbSBzeW1ib2xzICBMaXN0IG9mIHN5bWJvbHMgcm9sbGVkXG4gKiBAcmV0dXJucyAgICAgICAgTGlzdCB3aXRoIHN5bWJvbHMgcmVtYWluaW5nIGFmdGVyIGNhbmNlbGxpbmcgcmVzdWx0cyBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU9wcG9zaW5nU3ltYm9scyhzeW1ib2xzOiBTeW1ib2xzW10pOiBTeW1ib2xzW10ge1xuXG4gICAgLy8gTWFrZSB0aGUgZmlyc3QgcGFzcyBieSBjb3VudGluZyBhbGwgdGhlIHN5bWJvbHNcbiAgICBjb25zdCByZW1vdmUgPSBjb3VudEJ5KHN5bWJvbHMpO1xuXG4gICAgLy8gRGVsZXRlIGNvdW50cyBmb3IgdHJpdW1waHMgYW5kIGRlc3BhaXJzLCBhcyB0aGVzZSBuZXZlciBjYW5jZWwgZWFjaCBvdGhlciBvdXRcbiAgICBkZWxldGUgcmVtb3ZlW1N5bWJvbHMuVFJJVU1QSF07XG4gICAgZGVsZXRlIHJlbW92ZVtTeW1ib2xzLkRFU1BBSVJdO1xuXG4gICAgLy8gVXNlIHRoZSBjb3VudHMgYW5kIG1hcmsgdGhlIHNtYWxsZXIgbnVtYmVyIG9mIHN5bWJvbHMgZm9yIHJlbW92YWxcbiAgICByZW1vdmVbU3ltYm9scy5TVUNDRVNTXSA9IHJlbW92ZVtTeW1ib2xzLkZBSUxVUkVdID0gTWF0aC5taW4ocmVtb3ZlW1N5bWJvbHMuU1VDQ0VTU10sIHJlbW92ZVtTeW1ib2xzLkZBSUxVUkVdKTtcbiAgICByZW1vdmVbU3ltYm9scy5BRFZBTlRBR0VdID0gcmVtb3ZlW1N5bWJvbHMuVEhSRUFUXSA9IE1hdGgubWluKHJlbW92ZVtTeW1ib2xzLkFEVkFOVEFHRV0sIHJlbW92ZVtTeW1ib2xzLlRIUkVBVF0pO1xuXG4gICAgY29uc3QgcmVtYWluaW5nU3ltYm9sczogU3ltYm9sc1tdID0gW107XG4gICAgc3ltYm9scy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAocmVtb3ZlW2l0ZW1dKSB7XG4gICAgICAgICAgICByZW1vdmVbaXRlbV0tLTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbWFpbmluZ1N5bWJvbHMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlbWFpbmluZ1N5bWJvbHM7XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHJvbGw7IGdpdmVuIHRoZSBsaXN0IG9mIHJlc3VsdHMgcm9sbGVkLCBjb3VudHMgdGhlbSB1cCxcbiAqIGFuZCByZXR1cm5zIHdoZXRoZXIgdGhlIHJvbGwgd2FzIHN1Y2Nlc3NmdWwgb3IgZmFpbGVkLlxuICpcbiAqIEBwYXJhbSBzeW1ib2xzICBMaXNmIG9mIHN5bWJvbHMgcm9sbGVkXG4gKiBAcmVzdWx0cyAgICAgICAgV2hldGhlciB0aGUgcm9sbCB3YXMgc3VjY2Vzc2Z1bCBvciBmYWlsZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkanVkaWNhdGVSb2xsKHN5bWJvbHM6IFN5bWJvbHNbXSk6IFJlc3VsdCB7XG5cbiAgICBjb25zdCBjb3VudHMgPSBjb3VudEJ5KHN5bWJvbHMpLFxuICAgICAgICAgIGNvdW50U3VjY2VzcyA9IChjb3VudHNbU3ltYm9scy5UUklVTVBIXSB8fCAwKSArIChjb3VudHNbU3ltYm9scy5TVUNDRVNTXSB8fCAwKSxcbiAgICAgICAgICBjb3VudEZhaWx1cmUgPSAoY291bnRzW1N5bWJvbHMuREVTUEFJUl0gfHwgMCkgKyAoY291bnRzW1N5bWJvbHMuRkFJTFVSRV0gfHwgMCk7XG5cbiAgICByZXR1cm4gKGNvdW50U3VjY2VzcyAtIGNvdW50RmFpbHVyZSA+IDApID8gUmVzdWx0LlNVQ0NFU1MgOiBSZXN1bHQuRkFJTFVSRTtcbn1cbiIsImltcG9ydCBTeW1ib2xzIGZyb20gXCJzcmMvbW9kZWwvc3ltYm9sc1wiO1xuaW1wb3J0IHsgR2VuZXN5c0RpZSwgQWJpbGl0eURpZSwgUHJvZmljaWVuY3lEaWUsIEJvb3N0RGllLCBEaWZmaWN1bHR5RGllLCBDaGFsbGVuZ2VEaWUsIFNldGJhY2tEaWUsIFBlcmNlbnRpbGVEaWUgfSBmcm9tIFwic3JjL21vZGVsL2RpY2VcIjtcblxuLyoqXG4gKiBPcmRlciByZXF1aXJlZCBvZiB0aGUgc3ltYm9scyBvbiB0aGUgZGljZS5cbiAqIEdvaW5nIHBvc2l0aXZlIGZpcnN0LCBuZWdhdGl2ZSBzZWNvbmQsIGFuZCBmcm9tIG1vc3QgdG8gbGVhc3QgcG93ZXJmdWwuXG4gKi9cbmNvbnN0IFNZTUJPTF9PUkRFUklORyA9IE9iamVjdC5mcmVlemUoe1xuICAgIFtTeW1ib2xzLlRSSVVNUEhdOiAgIDAsXG4gICAgW1N5bWJvbHMuU1VDQ0VTU106ICAgMSxcbiAgICBbU3ltYm9scy5BRFZBTlRBR0VdOiAyLFxuICAgIFtTeW1ib2xzLkRFU1BBSVJdOiAgIDMsXG4gICAgW1N5bWJvbHMuRkFJTFVSRV06ICAgNCxcbiAgICBbU3ltYm9scy5USFJFQVRdOiAgICA1XG59KTtcblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGhlbHAgd2l0aCBvcmRlcmluZyB0aGUgcmVzdWx0cywgZmlyc3QgYnkgZ3JvdXBpbmcgcG9zaXRpdmUgZGljZSBmaXJzdCxcbiAqIG5lZ2F0aXZlIHNlY29uZCwgdGhlbiBieSBvcmRlcmluZyBlYWNoIGdyb3VwIGZyb20gbW9zdCBwb3dlcmZ1bCB0byBsZWFzdCBwb3dlcmZ1bC5cbiAqIEludGVuZGVkIHRvIGJlIHVzZWQgYXMgY29tcGFyZSBmdW5jdGlvbiBmb3IgQXJyYXkuc29ydC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9yZGVyU3ltYm9scyhhOiBTeW1ib2xzLCBiOiBTeW1ib2xzKTogbnVtYmVyIHtcbiAgICByZXR1cm4gU1lNQk9MX09SREVSSU5HW2FdIGFzIG51bWJlciAtIFNZTUJPTF9PUkRFUklOR1tiXSBhcyBudW1iZXI7XG59XG5cbi8qKlxuICogT3JkZXIgcmVxdWlyZWQgb2YgdGhlIGRpY2UgdGhlbXNlbHZlcy5cbiAqIERvbmUgYXMgZnVuY3Rpb24gcmF0aGVyIHRoYW4gbWFwIGJlY2F1c2UgdGhlcmUncyBubyBlYXN5IHdheSB0byB1c2UgY2xhc3Mgb2YgaW5zdGFuY2VcbiAqIGFzIHZhbHVlIGluIFR5cGVTY3JpcHQuIEdvZXMgcG9zaXRpdmUgZmlyc3QsIG5lZ2F0aXZlIHNlY29uZCwgbW9zdCB0byBsZWFzdCBwb3dlcmZ1bCxcbiAqIGFuZCBwZXJjZW50aWxlIGRpZSBnb2VzIGF0IHRoZSBlbmQuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlRm9yRGllKGRpZTogR2VuZXN5c0RpZSB8IFBlcmNlbnRpbGVEaWUpOiBudW1iZXIge1xuXG4gICAgaWYgKGRpZSBpbnN0YW5jZW9mIFByb2ZpY2llbmN5RGllKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSBpZiAoZGllIGluc3RhbmNlb2YgQWJpbGl0eURpZSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGRpZSBpbnN0YW5jZW9mIEJvb3N0RGllKSB7XG4gICAgICAgIHJldHVybiAyO1xuICAgIH0gZWxzZSBpZiAoZGllIGluc3RhbmNlb2YgQ2hhbGxlbmdlRGllKSB7XG4gICAgICAgIHJldHVybiAzO1xuICAgIH0gZWxzZSBpZiAoZGllIGluc3RhbmNlb2YgRGlmZmljdWx0eURpZSkge1xuICAgICAgICByZXR1cm4gNDtcbiAgICB9IGVsc2UgaWYgKGRpZSBpbnN0YW5jZW9mIFNldGJhY2tEaWUpIHtcbiAgICAgICAgcmV0dXJuIDU7XG4gICAgfVxuICAgIHJldHVybiA2O1xufVxuXG4vKipcbiAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gaGVscCB3aXRoIG9yZGVyaW5nIHRoZSBkaWNlIHRoZW1zZWx2ZXMsIGZpcnN0IGJ5IGdyb3VwaW5nIHBvc2l0aXZlIGRpY2UgZmlyc3QsXG4gKiBuZWdhdGl2ZSBzZWNvbmQsIHRoZW4gYnkgb3JkZXJpbmcgZWFjaCBncm91cCBmcm9tIG1vc3QgcG93ZXJmdWwgdG8gbGVhc3QgcG93ZXJmdWwuXG4gKiBJbnRlbmRlZCB0byBiZSB1c2VkIGFzIGNvbXBhcmUgZnVuY3Rpb24gZm9yIEFycmF5LnNvcnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcmRlckRpY2UoYTogR2VuZXN5c0RpZSB8IFBlcmNlbnRpbGVEaWUsIGI6IEdlbmVzeXNEaWUgfCBQZXJjZW50aWxlRGllKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZ2V0VmFsdWVGb3JEaWUoYSkgLSBnZXRWYWx1ZUZvckRpZShiKTtcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IFN5bWJvbHMgZnJvbSBcInNyYy9tb2RlbC9zeW1ib2xzXCI7XG5pbXBvcnQgeyBBbGxvd2VkRGljZSwgR2VuZXN5c0RpZSwgQWJpbGl0eURpZSwgUHJvZmljaWVuY3lEaWUsIEJvb3N0RGllLCBEaWZmaWN1bHR5RGllLCBDaGFsbGVuZ2VEaWUsIFNldGJhY2tEaWUsIFBlcmNlbnRpbGVEaWUgfSBmcm9tIFwic3JjL21vZGVsL2RpY2VcIjtcbmltcG9ydCBEaWNlRGlzcGxheSBmcm9tIFwic3JjL3ZpZXcvZGlzcGxheS9kaWNlXCI7XG5cbnR5cGUgRGllQ3JlYXRvcjxUIGV4dGVuZHMgQWxsb3dlZERpY2U+ID0geyBjbHM6IG5ldyAoKSA9PiBULCByZXN1bHQ6IFRbXCJjdXJyZW50UmVzdWx0XCJdIH07XG5jb25zdCBkaWNlVG9DcmVhdGU6IERpZUNyZWF0b3I8QWxsb3dlZERpY2U+W10gPSBbXG4gICAgeyBjbHM6IEFiaWxpdHlEaWUsICAgICByZXN1bHQ6IFtTeW1ib2xzLlNVQ0NFU1NdIH0sXG4gICAgeyBjbHM6IFByb2ZpY2llbmN5RGllLCByZXN1bHQ6IFtTeW1ib2xzLlRSSVVNUEhdIH0sXG4gICAgeyBjbHM6IEJvb3N0RGllLCAgICAgICByZXN1bHQ6IFtTeW1ib2xzLkFEVkFOVEFHRV0gfSxcbiAgICB7IGNsczogRGlmZmljdWx0eURpZSwgIHJlc3VsdDogW1N5bWJvbHMuRkFJTFVSRV0gfSxcbiAgICB7IGNsczogQ2hhbGxlbmdlRGllLCAgIHJlc3VsdDogW1N5bWJvbHMuREVTUEFJUl0gfSxcbiAgICB7IGNsczogU2V0YmFja0RpZSwgICAgIHJlc3VsdDogW1N5bWJvbHMuVEhSRUFUXSB9LFxuICAgIHsgY2xzOiBQZXJjZW50aWxlRGllLCAgcmVzdWx0OiA0MiB9XG5dO1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGRyYXdzIHRoZSBjb2xsZWN0aW9uIG9mIGJ1dHRvbnMgdGhhdCBjYW4gYmUgdXNlZCB0byBhZGQgbmV3IGRpY2UgdG8gdGhlIGRpY2UgcG9vbC5cbiAqIE9uY2UgcmVuZGVyZWQsIGl0IGRvZXNuJ3QgcmVhbGx5IGNoYW5nZSwgc28gaXQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHJhdGhlciB0aGFuIENvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGljZUNvbnRyb2xzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDx7IGNhbGxiYWNrOiAoZGllOiBBbGxvd2VkRGljZSkgPT4gdm9pZCB9PiB7XG5cbiAgICAvKipcbiAgICAgKiBJdGVyYXRlcyBvdmVyIHRoZSBsaXN0IG9mIGFsbCB0aGUgZGljZSB3ZSBoYW5kbGUgaW4gdGhlIGRpY2Ugcm9sbGVyLFxuICAgICAqIGFsb25nIHdpdGggZGVmYXVsdCByZXN1bHQgdG8gc2hvdyAoc28gdGhhdCB0aGUgZGljZSBhcmUgZWFzaWx5IGlkZW50aWZpYWJsZSksXG4gICAgICogYW5kIHJlbmRlcnMgZWFjaCBvZiB0aG9zZSBpbiBhIGJ1dHRvbiB0aGF0IGFkZHMgYSBuZXcgZGllIG9mIHRoYXQgdHlwZSB3aGVuZXZlciBpdCdzIGNsaWNrZWQuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uQnV0dG9ucyA9IGRpY2VUb0NyZWF0ZS5tYXAoKHsgY2xzLCByZXN1bHQgfSwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGllTmFtZSA9IHN0YXJ0Q2FzZShjbHMubmFtZSkuc3BsaXQoXCIgXCIpWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9e2BhZGQtJHtkaWVOYW1lfWB9IGtleT17aX0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5jYWxsYmFjayhuZXcgY2xzKCkpfT5cbiAgICAgICAgICAgICAgICA8RGljZURpc3BsYXkgZGllPXtPYmplY3QuYXNzaWduKG5ldyBjbHMoKSwgeyBjdXJyZW50UmVzdWx0OiByZXN1bHQgfSl9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj47XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRpY2UtY29udHJvbHNcIj57YWRkaXRpb25CdXR0b25zfTwvZGl2PjtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEaWNlRGlzcGxheSBmcm9tIFwic3JjL3ZpZXcvZGlzcGxheS9kaWNlXCI7XG5pbXBvcnQgeyBBbGxvd2VkRGljZSB9IGZyb20gXCJzcmMvbW9kZWwvZGljZVwiO1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGlzIHVzZWQgaW4gbWFpbiBhcHAgYXJlYSB0byBkcmF3IHRoZSBsaXN0IG9mIGFsbCB0aGUgZGljZSB0byB0aGUgcG9vbC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGljZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8eyBkaWNlOiBBbGxvd2VkRGljZVtdLCBzZWxlY3RlZDogQWxsb3dlZERpY2VbXSwgc2VsZWN0Q2FsbGJhY2s/OiAoZGllOiBBbGxvd2VkRGljZSkgPT4gdm9pZCB9PiB7XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgZGljZUxpc3QgPSB0aGlzLnByb3BzLmRpY2UubWFwKGRpZSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNsaWNrID0gdGhpcy5wcm9wcy5zZWxlY3RDYWxsYmFjayA/XG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5wcm9wcy5zZWxlY3RDYWxsYmFjayEoZGllKSA6XG4gICAgICAgICAgICAgICAgdm9pZCAwO1xuXG4gICAgICAgICAgICByZXR1cm4gPERpY2VEaXNwbGF5IGRpZT17ZGllfSBzZWxlY3RlZD17dGhpcy5wcm9wcy5zZWxlY3RlZC5pbmNsdWRlcyhkaWUpfSByb2xsQ291bnQ9e2RpZS5yb2xsQ291bnR9IG9uQ2xpY2s9e2NsaWNrfSAvPjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGljZS1saXN0XCI+e2RpY2VMaXN0fTwvZGl2PjtcbiAgICB9XG5cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHsgQWxsb3dlZERpY2UsIEFsbG93ZWRSZXN1bHRzIH0gZnJvbSBcInNyYy9tb2RlbC9kaWNlXCI7XG5pbXBvcnQgU3ltYm9sRGlzcGxheSBmcm9tIFwic3JjL3ZpZXcvZGlzcGxheS9zeW1ib2xcIjtcblxuLyoqXG4gKiBDb252ZXJ0cyByZXN1bHQgb2YgdGhlIGRpZSByb2xsIChvciB0aGUgbGFjayBvZiB0aGVyZW9mKSBpbnRvIHNvbWV0aGluZ1xuICogaHVtYW4tcmVhZGFibGU7IHBlbmRpbmcgbWFyayBmb3Igbm8gcm9sbHMsIHN5bWJvbHMgZm9yIHJlZ3VsYXIgR2VuZXN5cyBkaWNlLFxuICogYW5kIHRoZSBudW1iZXIgZm9yIHBlcmNlbnRpbGUgZGllLlxuICovXG5mdW5jdGlvbiBjb252ZXJ0RGllUmVzdWx0KHJlc3VsdDogQWxsb3dlZFJlc3VsdHMpOiBKU1guRWxlbWVudFtdIHtcbiAgICBpZiAocmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBbPHNwYW4+Pzwvc3Bhbj5dO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gWzxzcGFuPntyZXN1bHQgKyBcIlwifTwvc3Bhbj5dO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0Lm1hcCgocywgaSkgPT4gPFN5bWJvbERpc3BsYXkgc3ltYm9sPXtzfSBrZXk9e2l9IC8+KTtcbn1cblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyB1c2VkIHRvIHJlbmRlciB0aGUgZGljZSBpbWFnZXMgaW4gdGhlIG1haW4gYXJlYSBvZiB0aGUgYXBwLlxuICogR2l2ZW4gdGhlIGRpZSBtb2RlbCBpbnN0YW5jZSwgY29udmVydHMgdGhlIHJvbGwgcmVzdWx0IGludG8gc29tZXRoaW5nIGh1bWFuLXJlYWRhYmxlLFxuICogYW5kIGRyYXdzIGl0IGluIGFuIGVsZW1lbnQgc3R5bGVkIHRvIGxvb2sgbGlrZSBhIGRpZSBvZiByZWxldmFudCBzaGFwZSBhbmQgY29sb3VyLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWNlRGlzcGxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7XG4gICAgZGllOiBBbGxvd2VkRGljZSxcbiAgICBzZWxlY3RlZD86IGJvb2xlYW4sXG4gICAgcm9sbENvdW50PzogbnVtYmVyLFxuICAgIG9uQ2xpY2s/OiAoZXY6IGFueSkgPT4gdm9pZFxufT4gaW1wbGVtZW50cyBFdmVudExpc3RlbmVyT2JqZWN0IHtcblxuICAgIGRpZVJlZmVyZW5jZTogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBjbGFzc05hbWU6IHN0cmluZyA9IHN0YXJ0Q2FzZSh0aGlzLnByb3BzLmRpZS5jb25zdHJ1Y3Rvci5uYW1lKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZCkge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIHNlbGVjdGVkXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gPGRpdiByZWY9e3RoaXMuZGllUmVmZXJlbmNlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfT5cbiAgICAgICAgICAgIHtjb252ZXJ0RGllUmVzdWx0KHRoaXMucHJvcHMuZGllLmN1cnJlbnRSZXN1bHQpfVxuICAgICAgICA8L2Rpdj47XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wczogdGhpc1tcInByb3BzXCJdKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRpZSAhPT0gbmV4dFByb3BzLmRpZSB8fFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZCAhPT0gbmV4dFByb3BzLnNlbGVjdGVkIHx8XG4gICAgICAgICAgICB0aGlzLnByb3BzLnJvbGxDb3VudCAhPT0gbmV4dFByb3BzLnJvbGxDb3VudFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IHRoaXNbXCJwcm9wc1wiXSk6IHZvaWQge1xuXG4gICAgICAgIC8vIFdlIG9ubHkgYXBwbHkgdGhlIHNoYWtlIGFuaW1hdGlvbiB3aGVuIHRoZXJlJ3Mgbm8gcHJlZmVyZW5jZSBmb3IgcmVkdWNlZCBtb3Rpb24sXG4gICAgICAgIC8vIGFuZCB3aGVuIHRoZXJlJ3MgYWN0dWFsIHJlc3VsdCBvbiB0aGUgZGljZSAoJ2NhdXNlIHRoYXQgbWVhbnMgdGhlcmUncyBzb21ldGhpbmcgdG8gcm9sbCkuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpXCIpLm1hdGNoZXMgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMucm9sbENvdW50ICE9PSBwcmV2UHJvcHMucm9sbENvdW50XG4gICAgICAgICkge1xuXG4gICAgICAgICAgICBjb25zdCBkaWVFbGVtZW50ID0gdGhpcy5kaWVSZWZlcmVuY2UuY3VycmVudCE7XG4gICAgICAgICAgICBkaWVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgdGhpcywgZmFsc2UpO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZGllIGlzIHN0aWxsIGluIHRoZSBwcm9jZXNzIG9mIHBsYXlpbmcgc2hha2UgYW5pbWF0aW9uLFxuICAgICAgICAgICAgLy8gcmVzdGFydCBpdCBieSByZW1vdmluZyB0aGUgY2xhc3MgYW5kIHRvZ2dsaW5nIHJlZmxvdyB3aXRoIGJvdW5kaW5nIHJlY3Q7XG4gICAgICAgICAgICBpZiAoZGllRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGFrZVwiKSkge1xuICAgICAgICAgICAgICAgIGRpZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNoYWtlXCIpO1xuICAgICAgICAgICAgICAgIGRpZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNoYWtlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlRXZlbnQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBcImFuaW1hdGlvbmVuZFwiKSB7XG4gICAgICAgICAgICBjb25zdCBkaWVFbGVtZW50ID0gdGhpcy5kaWVSZWZlcmVuY2UuY3VycmVudCE7XG4gICAgICAgICAgICBkaWVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgdGhpcywgZmFsc2UpO1xuICAgICAgICAgICAgZGllRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2hha2VcIik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgU3ltYm9scyBmcm9tIFwic3JjL21vZGVsL3N5bWJvbHNcIjtcblxuLyoqIFJlbmRlciBHZW5lc3lzIGRpY2Ugc3ltYm9scyB1c2luZyB0aGUgZGVkaWNhdGVkIGZvbnQuICovXG5jb25zdCBTeW1ib2xEaXNwbGF5OiBSZWFjdC5TRkM8eyBzeW1ib2w6IFN5bWJvbHMgfCBTeW1ib2xzW10gfT4gPSAoeyBzeW1ib2wgfSkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBpc0FycmF5KHN5bWJvbCkgPyBzeW1ib2wgOiBbc3ltYm9sXTtcbiAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwiZGljZS1zeW1ib2xcIj57bGlzdC5qb2luKFwiXCIpfTwvc3Bhbj47XG59O1xuZXhwb3J0IGRlZmF1bHQgU3ltYm9sRGlzcGxheTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGlmZmVyZW5jZSB9IGZyb20gXCJsb2Rhc2gtZXNcIjtcblxuaW1wb3J0IHsgQWxsb3dlZERpY2UsIEFsbG93ZWRSZXN1bHRzIH0gZnJvbSBcInNyYy9tb2RlbC9kaWNlXCI7XG5pbXBvcnQgeyBBYmlsaXR5RGllLCBQcm9maWNpZW5jeURpZSwgQm9vc3REaWUsIERpZmZpY3VsdHlEaWUsIENoYWxsZW5nZURpZSwgU2V0YmFja0RpZSwgUGVyY2VudGlsZURpZSB9IGZyb20gXCJzcmMvbW9kZWwvZGljZVwiO1xuaW1wb3J0IHsgdG9CbG9iIH0gZnJvbSBcImh0bWwtdG8taW1hZ2VcIjtcbmltcG9ydCB7IGdldFdlYmhvb2ssIFVzZXJuYW1lLCBBdXRvRGlzY29yZCB9IGZyb20gXCJzcmMvbW9kZWwvc2V0dGluZ3NcIjtcbmltcG9ydCB7IHJlbW92ZU9wcG9zaW5nU3ltYm9scywgYWRqdWRpY2F0ZVJvbGwgfSBmcm9tIFwic3JjL3V0aWwvYWRqdWRpY2F0ZVwiO1xuaW1wb3J0IHsgb3JkZXJTeW1ib2xzIH0gZnJvbSBcInNyYy91dGlsL29yZGVyXCI7XG5pbXBvcnQgU3ltYm9scyBmcm9tIFwic3JjL21vZGVsL3N5bWJvbHNcIjtcbmltcG9ydCBSZXN1bHQgZnJvbSBcInNyYy9tb2RlbC9yZXN1bHRcIjtcblxuaW1wb3J0IERpY2VDb250cm9scyBmcm9tIFwic3JjL3ZpZXcvZGljZS1jb250cm9sc1wiO1xuaW1wb3J0IERpY2VMaXN0IGZyb20gXCJzcmMvdmlldy9kaWNlLWxpc3RcIjtcbmltcG9ydCBSb2xsUmVzdWx0cyBmcm9tIFwic3JjL3ZpZXcvcm9sbC1yZXN1bHRzXCI7XG5pbXBvcnQgeyBvcmRlckRpY2UgfSBmcm9tIFwic3JjL3V0aWwvb3JkZXJcIjtcblxudHlwZSBkaWNlVHlwZXMgPSBcImFiaWxpdHlcIiB8IFwicHJvZmljaWVuY3lcIiB8IFwiYm9vc3RcIiB8IFwiZGlmZmljdWx0eVwiIHwgXCJjaGFsbGVuZ2VcIiB8IFwic2V0YmFja1wiIHwgXCJwZXJjZW50aWxlXCI7XG5jb25zdCBkaWNlVHlwZXM6IFJlYWRvbmx5PGRpY2VUeXBlc1tdPiA9IE9iamVjdC5mcmVlemUoW1wiYWJpbGl0eVwiLCBcInByb2ZpY2llbmN5XCIsIFwiYm9vc3RcIiwgXCJkaWZmaWN1bHR5XCIsIFwiY2hhbGxlbmdlXCIsIFwic2V0YmFja1wiXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5BcHBBcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7IGRpY2U6IEFsbG93ZWREaWNlW10sIHNlbGVjdGVkOiBBbGxvd2VkRGljZVtdLCByZXN1bHRzOiBBbGxvd2VkUmVzdWx0c1tdIH0+IHtcblxuICAgIHJlc3VsdHNSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4gPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICBwcml2YXRlIHVwZGF0ZUF1dG9EaXNjb3JkID0gKCkgPT4gdGhpcy5mb3JjZVVwZGF0ZSgpO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IHt9KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgZGljZTogW10sIHNlbGVjdGVkOiBbXSwgcmVzdWx0czogW10gfTtcblxuICAgICAgICB0aGlzLmFkZERpZSA9IHRoaXMuYWRkRGllLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2xlYXJEaWNlID0gdGhpcy5jbGVhckRpY2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24gPSB0aGlzLnRvZ2dsZVNlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJvbGwgPSB0aGlzLnJvbGwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZW5kVG9EaXNjb3JkID0gdGhpcy5zZW5kVG9EaXNjb3JkLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIEF1dG9EaXNjb3JkLm9uKHRoaXMudXBkYXRlQXV0b0Rpc2NvcmQpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBBdXRvRGlzY29yZC5vZmYodGhpcy51cGRhdGVBdXRvRGlzY29yZCk7XG4gICAgfVxuXG4gICAgYWRkRGllKG5ld0RpZTogQWxsb3dlZERpY2UpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgeyBkaWNlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgZGljZTogZGljZS5jb25jYXQoW25ld0RpZV0pLnNvcnQob3JkZXJEaWNlKSB9KTtcbiAgICB9XG5cbiAgICBjbGVhckRpY2UoKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgeyBkaWNlLCBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ0RpY2UgPSBkaWZmZXJlbmNlKGRpY2UsIHNlbGVjdGVkKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRpY2U6IHJlbWFpbmluZ0RpY2UsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IFtdLFxuICAgICAgICAgICAgICAgIHJlc3VsdHM6IHJlbWFpbmluZ0RpY2UubWFwKGRpZSA9PiBkaWUuY3VycmVudFJlc3VsdClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGljZTogW10sIHNlbGVjdGVkOiBbXSwgcmVzdWx0czogW10gfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVTZWxlY3Rpb24odG9nZ2xlZERpZTogQWxsb3dlZERpY2UpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAoc2VsZWN0ZWQuaW5jbHVkZXModG9nZ2xlZERpZSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBzZWxlY3RlZDogc2VsZWN0ZWQuZmlsdGVyKGRpZSA9PiBkaWUgIT09IHRvZ2dsZWREaWUpIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHNlbGVjdGVkOiBzZWxlY3RlZC5jb25jYXQoW3RvZ2dsZWREaWVdKSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJvbGwoKSB7XG5cbiAgICAgICAgY29uc3QgeyBkaWNlLCBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIHNlbGVjdGVkLmZvckVhY2goZGllID0+IGRpZS5yb2xsKCkpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZGljZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogW10sXG4gICAgICAgICAgICAgICAgcmVzdWx0czogZGljZS5tYXAoZGllID0+IGRpZS5jdXJyZW50UmVzdWx0KVxuICAgICAgICAgICAgfSwgKCkgPT4geyBpZiAoQXV0b0Rpc2NvcmQuZ2V0KCkpIHRoaXMuc2VuZFRvRGlzY29yZCgpOyB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHJlc3VsdHM6IHRoaXMuc3RhdGUuZGljZS5tYXAoZGllID0+IGRpZS5yb2xsKCkpIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4geyBpZiAoQXV0b0Rpc2NvcmQuZ2V0KCkpIHRoaXMuc2VuZFRvRGlzY29yZCgpOyB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHNlbmRUb0Rpc2NvcmQoKSB7XG4gICAgICAgIGNvbnN0IHdlYmhvb2sgPSBnZXRXZWJob29rKCk7XG4gICAgICAgIGlmICghd2ViaG9vayB8fCAhdGhpcy5yZXN1bHRzUmVmLmN1cnJlbnQpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzID0+IHNldFRpbWVvdXQocmVzLCA1MDApKTtcblxuICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgdG9CbG9iKHRoaXMucmVzdWx0c1JlZi5jdXJyZW50LCB7IHBpeGVsUmF0aW86IDIgfSk7XG4gICAgICAgIGlmICghYmxvYikgeyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm0uYXBwZW5kKFwiZmlsZVwiLCBibG9iLCBcInJvbGwucG5nXCIpO1xuICAgICAgICBmb3JtLmFwcGVuZChcInVzZXJuYW1lXCIsIFVzZXJuYW1lLmdldCgpIHx8IFwiR2VuZXN5cyBSb2xsZXJcIik7XG4gICAgICAgIGZvcm0uYXBwZW5kKFwiY29udGVudFwiLCB0aGlzLnN1bW1hcmlzZVJlc3VsdHMoKSk7XG5cbiAgICAgICAgZmV0Y2god2ViaG9vaywgeyBtZXRob2Q6IFwiUE9TVFwiLCBib2R5OiBmb3JtIH0pO1xuICAgIH1cblxuICAgIHN1bW1hcmlzZVJlc3VsdHMoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qgc3ltYm9sczogU3ltYm9sc1tdID0gW107XG4gICAgICAgIGNvbnN0IG51bWJlcnM6IG51bWJlcltdID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUucmVzdWx0cy5mb3JFYWNoKHIgPT4ge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocikpIHsgc3ltYm9scy5wdXNoKC4uLnIpOyB9IGVsc2UgaWYgKHR5cGVvZiByID09PSBcIm51bWJlclwiKSB7IG51bWJlcnMucHVzaChyKTsgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZmxhdCA9IHJlbW92ZU9wcG9zaW5nU3ltYm9scyhzeW1ib2xzKS5zb3J0KG9yZGVyU3ltYm9scyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN5bWJvbHMubGVuZ3RoID8gYWRqdWRpY2F0ZVJvbGwoZmxhdCkgOiBSZXN1bHQuTkVVVFJBTDtcbiAgICAgICAgY29uc3QgY291bnRzID0gbmV3IE1hcDxTeW1ib2xzLCBudW1iZXI+KCk7XG4gICAgICAgIGZsYXQuZm9yRWFjaChzID0+IGNvdW50cy5zZXQocywgKGNvdW50cy5nZXQocykgfHwgMCkgKyAxKSk7XG4gICAgICAgIGNvbnN0IG5hbWVzOiBSZWNvcmQ8U3ltYm9scywgc3RyaW5nPiA9IHtcbiAgICAgICAgICAgIFtTeW1ib2xzLlNVQ0NFU1NdOiBcItGD0YHQv9C10YVcIixcbiAgICAgICAgICAgIFtTeW1ib2xzLkZBSUxVUkVdOiBcItC90LXRg9C00LDRh9CwXCIsXG4gICAgICAgICAgICBbU3ltYm9scy5BRFZBTlRBR0VdOiBcItC/0YDQtdC40LzRg9GJ0LXRgdGC0LLQvlwiLFxuICAgICAgICAgICAgW1N5bWJvbHMuVEhSRUFUXTogXCLRg9Cz0YDQvtC30LBcIixcbiAgICAgICAgICAgIFtTeW1ib2xzLlRSSVVNUEhdOiBcItGC0YDQuNGD0LzRhFwiLFxuICAgICAgICAgICAgW1N5bWJvbHMuREVTUEFJUl06IFwi0L7RgtGH0LDRj9C90LjQtVwiLFxuICAgICAgICB9IGFzIGFueTtcbiAgICAgICAgbGV0IHRleHQgPSByZXN1bHQgPT09IFJlc3VsdC5TVUNDRVNTID8gXCLQmNGC0L7Qszog0YPRgdC/0LXRhVwiIDogcmVzdWx0ID09PSBSZXN1bHQuRkFJTFVSRSA/IFwi0JjRgtC+0LM6INC/0YDQvtCy0LDQu1wiIDogXCLQmNGC0L7QszpcIjtcbiAgICAgICAgdGV4dCArPSBcIlxcblwiICsgQXJyYXkuZnJvbShjb3VudHMuZW50cmllcygpKS5tYXAoKFtzeW0sIGNvdW50XSkgPT4gYCR7bmFtZXNbc3ltXX06ICR7Y291bnR9YCkuam9pbihcIlxcblwiKTtcbiAgICAgICAgaWYgKG51bWJlcnMubGVuZ3RoKSB0ZXh0ICs9IFwiXFxu0KfQuNGB0LvQsDogXCIgKyBudW1iZXJzLmpvaW4oXCIsIFwiKTtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkaWNlLWFyZWFcIj5cbiAgICAgICAgICAgIDxEaWNlQ29udHJvbHMgY2FsbGJhY2s9e3RoaXMuYWRkRGllfS8+XG4gICAgICAgICAgICA8ZGl2IHJlZj17dGhpcy5yZXN1bHRzUmVmfSBjbGFzc05hbWU9XCJyZXN1bHRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxEaWNlTGlzdCBkaWNlPXt0aGlzLnN0YXRlLmRpY2V9IHNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkfSBzZWxlY3RDYWxsYmFjaz17dGhpcy50b2dnbGVTZWxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgPFJvbGxSZXN1bHRzIHJlc3VsdHM9e3RoaXMuc3RhdGUucmVzdWx0c30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJvbGxcIiBvbkNsaWNrPXt0aGlzLnJvbGx9Pnt0aGlzLnN0YXRlLnNlbGVjdGVkLmxlbmd0aCA/IFwiUmUtcm9sbCBTZWxlY3RlZFwiIDogXCJSb2xsXCJ9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsZWFyXCIgb25DbGljaz17dGhpcy5jbGVhckRpY2V9Pnt0aGlzLnN0YXRlLnNlbGVjdGVkLmxlbmd0aCA/IFwiUmVtb3ZlIFNlbGVjdGVkXCIgOiBcIkNsZWFyXCJ9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICB7Z2V0V2ViaG9vaygpICYmICFBdXRvRGlzY29yZC5nZXQoKSAmJiB0aGlzLnN0YXRlLnJlc3VsdHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZGlzY29yZFwiIG9uQ2xpY2s9e3RoaXMuc2VuZFRvRGlzY29yZH0+0J7RgtC/0YDQsNCy0LjRgtGMINCyIERpc2NvcmQ8L2J1dHRvbj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cblxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBXZWJob29rcywgV2ViaG9va05hbWVzLCBXZWJob29rUHJpb3JpdHksIFVzZXJuYW1lLCBUaGVtZSwgQXV0b0Rpc2NvcmQgfSBmcm9tIFwic3JjL21vZGVsL3NldHRpbmdzXCI7XG50eXBlIE1lbnVQcm9wcyA9IHsgdG9nZ2xlQ2FsbGJhY2s/OiAob3BlbjogYm9vbGVhbikgPT4gdm9pZCB9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxNZW51UHJvcHM+IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgd2ViaG9va3M6IFdlYmhvb2tzLmdldCgpLmxlbmd0aCA/IFdlYmhvb2tzLmdldCgpIDogW1wiXCJdLFxuICAgICAgICBuYW1lczogV2ViaG9va05hbWVzLmdldCgpLnNsaWNlKCksXG4gICAgICAgIHByaW9yaXR5OiBXZWJob29rUHJpb3JpdHkuZ2V0KCksXG4gICAgICAgIHVzZXJuYW1lOiBVc2VybmFtZS5nZXQoKSB8fCBcIlwiLFxuICAgICAgICB0aGVtZTogVGhlbWUuZ2V0KCkgfHwgXCJcIixcbiAgICAgICAgYXV0b0Rpc2NvcmQ6IEF1dG9EaXNjb3JkLmdldCgpIHx8IGZhbHNlXG4gICAgfTtcblxuICAgIHByaXZhdGUgd2ViaG9va0FwaSh1cmw6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaCgvXFwvYXBpXFwvd2ViaG9va3NcXC8oXFxkKylcXC8oW14vXSspLyk7XG4gICAgICAgIHJldHVybiBtYXRjaCA/IGBodHRwczovL2Rpc2NvcmQuY29tL2FwaS93ZWJob29rcy8ke21hdGNoWzFdfS8ke21hdGNoWzJdfWAgOiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgdXBkYXRlTmFtZShpZHg6IG51bWJlciwgdXJsOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgYXBpID0gdGhpcy53ZWJob29rQXBpKHVybCk7XG4gICAgICAgIGlmICghYXBpKSB7IHJldHVybjsgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpKTtcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICBjb25zdCBuYW1lcyA9IHRoaXMuc3RhdGUubmFtZXMuc2xpY2UoKTtcbiAgICAgICAgICAgIG5hbWVzW2lkeF0gPSBkYXRhLm5hbWUgfHwgYNCS0LXQsdGF0YPQuiAjJHtpZHggKyAxfWA7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZXMgfSk7XG4gICAgICAgICAgICBXZWJob29rTmFtZXMuc2V0KG5hbWVzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVXZWJob29rID0gKGlkeDogbnVtYmVyLCBlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCB3ZWJob29rcyA9IHRoaXMuc3RhdGUud2ViaG9va3Muc2xpY2UoKTtcbiAgICAgICAgY29uc3QgbmFtZXMgPSB0aGlzLnN0YXRlLm5hbWVzLnNsaWNlKCk7XG4gICAgICAgIHdlYmhvb2tzW2lkeF0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgbmFtZXNbaWR4XSA9IG5hbWVzW2lkeF0gfHwgXCJcIjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdlYmhvb2tzLCBuYW1lcyB9KTtcbiAgICAgICAgV2ViaG9va3Muc2V0KHdlYmhvb2tzLmZpbHRlcih3ID0+IHcpKTtcbiAgICAgICAgV2ViaG9va05hbWVzLnNldChuYW1lcyk7XG4gICAgICAgIGlmICh3ZWJob29rc1tpZHhdKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU5hbWUoaWR4LCB3ZWJob29rc1tpZHhdKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhZGRXZWJob29rRmllbGQgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLndlYmhvb2tzLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHdlYmhvb2tzOiB0aGlzLnN0YXRlLndlYmhvb2tzLmNvbmNhdChbXCJcIl0pLFxuICAgICAgICAgICAgICAgIG5hbWVzOiB0aGlzLnN0YXRlLm5hbWVzLmNvbmNhdChbXCJcIl0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZW1vdmVXZWJob29rRmllbGQgPSAoaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUud2ViaG9va3MubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29uc3Qgd2ViaG9va3MgPSB0aGlzLnN0YXRlLndlYmhvb2tzLnNsaWNlKCk7XG4gICAgICAgICAgICBjb25zdCBuYW1lcyA9IHRoaXMuc3RhdGUubmFtZXMuc2xpY2UoKTtcbiAgICAgICAgICAgIHdlYmhvb2tzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgbmFtZXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IE1hdGgubWluKHRoaXMuc3RhdGUucHJpb3JpdHksIHdlYmhvb2tzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdlYmhvb2tzLCBuYW1lcywgcHJpb3JpdHkgfSk7XG4gICAgICAgICAgICBXZWJob29rcy5zZXQod2ViaG9va3MuZmlsdGVyKHcgPT4gdykpO1xuICAgICAgICAgICAgV2ViaG9va05hbWVzLnNldChuYW1lcyk7XG4gICAgICAgICAgICBXZWJob29rUHJpb3JpdHkuc2V0KHByaW9yaXR5KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS53ZWJob29rcy5mb3JFYWNoKChob29rLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoaG9vayAmJiAhdGhpcy5zdGF0ZS5uYW1lc1tpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTmFtZShpLCBob29rKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUHJpb3JpdHkgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByaW9yaXR5IH0pO1xuICAgICAgICBXZWJob29rUHJpb3JpdHkuc2V0KHByaW9yaXR5KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlVXNlcm5hbWUgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJuYW1lIH0pO1xuICAgICAgICBVc2VybmFtZS5zZXQodXNlcm5hbWUpO1xuICAgIH07XG5cbiAgICBoYW5kbGVUaGVtZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgdGhlbWUgPSBlLnRhcmdldC52YWx1ZSBhcyBcImxpZ2h0XCIgfCBcImRhcmtcIiB8IFwiXCI7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aGVtZSB9KTtcbiAgICAgICAgVGhlbWUuc2V0KHRoZW1lIHx8IG51bGwpO1xuICAgIH07XG5cbiAgICBoYW5kbGVBdXRvRGlzY29yZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCBhdXRvID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGF1dG9EaXNjb3JkOiBhdXRvIH0pO1xuICAgICAgICBBdXRvRGlzY29yZC5zZXQoYXV0byk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUud2ViaG9va3MubWFwKChob29rLCBpKSA9PiA8bGFiZWwga2V5PXtpfT57dGhpcy5zdGF0ZS5uYW1lc1tpXSB8fCBg0JLQtdCx0YXRg9C6ICMke2kgKyAxfWB9XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidXJsXCIgdmFsdWU9e2hvb2t9IG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlV2ViaG9vayhpLCBlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUud2ViaG9va3MubGVuZ3RoID4gMSAmJiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJyZW1vdmVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlbW92ZVdlYmhvb2tGaWVsZChpKX0+w5c8L2J1dHRvbj59XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD4pfVxuICAgICAgICAgICAge3RoaXMuc3RhdGUud2ViaG9va3MubGVuZ3RoIDwgNSAmJiA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkV2ViaG9va0ZpZWxkfT7QlNC+0LHQsNCy0LjRgtGMINCy0LXQsdGF0YPQujwvYnV0dG9uPn1cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLndlYmhvb2tzLmxlbmd0aCA+IDEgJiYgPGxhYmVsPtCf0YDQuNC+0YDQuNGC0LXRgtC90YvQuSDQutCw0L3QsNC7XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGhpcy5zdGF0ZS5wcmlvcml0eX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlUHJpb3JpdHl9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS53ZWJob29rcy5tYXAoKF8sIGkpID0+IDxvcHRpb24gdmFsdWU9e2l9IGtleT17XCJwXCIgKyBpfT57dGhpcy5zdGF0ZS5uYW1lc1tpXSB8fCBg0JLQtdCx0YXRg9C6ICMke2kgKyAxfWB9PC9vcHRpb24+KX1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvbGFiZWw+fVxuICAgICAgICAgICAgPGxhYmVsPtCY0LzRj1xuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VybmFtZX0vPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveFwiPtCQ0LLRgtC+0L7RgtC/0YDQsNCy0LrQsCDQsiBEaXNjb3JkXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuYXV0b0Rpc2NvcmR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUF1dG9EaXNjb3JkfS8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPtCi0LXQvNCwXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGhpcy5zdGF0ZS50aGVtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGhlbWV9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+0KHQuNGB0YLQtdC80L3QsNGPPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsaWdodFwiPtCh0LLQtdGC0LvQsNGPPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkYXJrXCI+0KLRkdC80L3QsNGPPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAge3RoaXMucHJvcHMudG9nZ2xlQ2FsbGJhY2sgJiYgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnRvZ2dsZUNhbGxiYWNrIShmYWxzZSl9PtCX0LDQutGA0YvRgtGMPC9idXR0b24+fVxuICAgICAgICA8L2Rpdj47XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgTmF2QnV0dG9uUHJvcHMgPSB7IHRvZ2dsZUNhbGxiYWNrPzogKGV4cGFuZGVkOiBib29sZWFuKSA9PiB2b2lkIH07XG5cbi8qKlxuICogQ29tcG9uZW50IHVzZWQgdG8gaW5kaWNhdGUgdGhlIGNvbnRyb2xzIGZvciBicmluZ2luZyB1cCB0aGUgbWVudSBwYW5lLlxuICogSGFuZGxlcyB1c2VyIGNsaWNrcywgYW5pbWF0aW5nIGFwcHJvcHJpYXRlbHkgd2hlbiB0aGUgbWVudSBpcyBvcGVuZWQsIGNoYW5naW5nIHR3byBsaW5lc1xuICogb2YgdGhlIGJ1cmdlciBpbnRvIGEgY3Jvc3MsIGFuZCBoaWRpbmcgdGhlIHRoaXJkIG9uZSwgb3IgcmV2ZXJ0aW5nIHdoZW4gdGhlIG1lbnUgcGFuZSBpcyBoaWRkZW4uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdkJ1dHRvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8TmF2QnV0dG9uUHJvcHMsIHsgZXhwYW5kZWQ6IGJvb2xlYW4gfT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IE5hdkJ1dHRvblByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgZXhwYW5kZWQ6IGZhbHNlIH07XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBmb3IgdXNlciBpbnRlcmFjdGlvbiBvZiBjbGlja2luZyBvbiB0aGUgbmF2IGJ1dHRvbjtcbiAgICAgKiBpdCB0b2dnbGVzIHRoZSBleHBhbmRlZCBzdGF0ZSwgYW5kIGlmIGNhbGxiYWNrIGhhcyBiZWVuIHByb3ZpZGVkXG4gICAgICogZm9yIHRoZSBjb21wb25lbnQsIHJ1bnMgaXQgd2l0aCBuZXcgZXhwYW5zaW9uIHN0YXRlLlxuICAgICAqL1xuICAgIGhhbmRsZUNsaWNrKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9ICF0aGlzLnN0YXRlLmV4cGFuZGVkO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXhwYW5kZWQ6IG5ld1N0YXRlIH0pO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy50b2dnbGVDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVDYWxsYmFjayhuZXdTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wb25lbnQgcmVuZGVyZXIsIGNyZWF0ZXMgYmFzZSBTVkcgZWxlbWVudCB3aXRoIHRocmVlIGhvcml6b250YWwgbGluZXMgd2l0aGluLlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBsaW5lcyA9IFsyLCA1LCA4XS5tYXAoeSA9PiA8bGluZSB4MT1cIjEuNVwiIHkxPXt5fSB4Mj1cIjguNVwiIHkyPXt5fSAvPik7XG5cbiAgICAgICAgcmV0dXJuIDxzdmdcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMCAxMFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtYnV0dG9uICR7dGhpcy5zdGF0ZS5leHBhbmRlZCA/IFwiZXhwYW5kZWRcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgIHN0eWxlPXt7IHN0cm9rZVdpZHRoOiAxLjUsIHN0cm9rZUxpbmVjYXA6IFwicm91bmRcIiB9fVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgPntsaW5lc308L3N2Zz47XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBmbGF0dGVuLCBpc0FycmF5IH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IFJlc3VsdCBmcm9tIFwic3JjL21vZGVsL3Jlc3VsdFwiO1xuaW1wb3J0IFN5bWJvbHMgZnJvbSBcInNyYy9tb2RlbC9zeW1ib2xzXCI7XG5pbXBvcnQgU3ltYm9sRGlzcGxheSBmcm9tIFwic3JjL3ZpZXcvZGlzcGxheS9zeW1ib2xcIjtcbmltcG9ydCB7IGFkanVkaWNhdGVSb2xsLCByZW1vdmVPcHBvc2luZ1N5bWJvbHMgfSBmcm9tIFwic3JjL3V0aWwvYWRqdWRpY2F0ZVwiO1xuaW1wb3J0IHsgb3JkZXJTeW1ib2xzIH0gZnJvbSBcInNyYy91dGlsL29yZGVyXCI7XG5pbXBvcnQgeyBBbGxvd2VkUmVzdWx0cyB9IGZyb20gXCJzcmMvbW9kZWwvZGljZVwiO1xuXG5jb25zdCBSb2xsUmVzdWx0czogUmVhY3QuU0ZDPHsgcmVzdWx0czogQWxsb3dlZFJlc3VsdHNbXSB9PiA9ICh7IHJlc3VsdHMgfSkgPT4ge1xuXG4gICAgbGV0IHN0YXR1czogUmVzdWx0ID0gUmVzdWx0Lk5FVVRSQUw7XG4gICAgY29uc3QgcmVzdWx0c1N5bWJvbHM6IFN5bWJvbHNbXVtdID0gW10sXG4gICAgICAgICAgcmVzdWx0c051bWJlcnM6IG51bWJlcltdID0gW10sXG4gICAgICAgICAgZWxlbWVudHM6IEpTWC5FbGVtZW50W10gPSBbXTtcblxuICAgIHJlc3VsdHMuZm9yRWFjaChyZXN1bHQgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgcmVzdWx0c051bWJlcnMucHVzaChyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICAgICAgcmVzdWx0c1N5bWJvbHMucHVzaChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBJZiB0aGVyZSBhcmUgYW55IHN5bWJvbHMsIGxldCdzIGZsYXR0ZW4gdGhlIHJlc3VsdHMgYW5kXG4gICAgLy8gZWxpbWluYXRlIHRoZSBvcHBvc2luZyBvbmVzIGZvciBkaXNwbGF5OyBhbHNvIGFkanVkaWNhdGVcbiAgICAvLyB0aGUgcm9sbCByZXN1bHRzLlxuICAgIGlmIChyZXN1bHRzU3ltYm9scy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgZmxhdFJvbGwgPSByZW1vdmVPcHBvc2luZ1N5bWJvbHMoZmxhdHRlbihyZXN1bHRzU3ltYm9scykpLnNvcnQob3JkZXJTeW1ib2xzKTtcbiAgICAgICAgc3RhdHVzID0gYWRqdWRpY2F0ZVJvbGwoZmxhdFJvbGwpO1xuICAgICAgICBpZiAoZmxhdFJvbGwubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbGVtZW50cy5wdXNoKDxkaXYgY2xhc3NOYW1lPXtgZ3JvdXAgc3ltYm9saWMgJHtmbGF0Um9sbC5sZW5ndGggPiA4ID8gXCJsYXJnZVwiIDogXCJcIn1gfT57ZmxhdFJvbGwubWFwKHMgPT4gPFN5bWJvbERpc3BsYXkgc3ltYm9sPXtzfS8+KX08L2Rpdj4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWxlbWVudHMucHVzaCguLi5yZXN1bHRzTnVtYmVycy5tYXAoc2NvcmUgPT4gPGRpdiBjbGFzc05hbWU9XCJncm91cCBudW1lcmljXCI+e3Njb3JlfTwvZGl2PikpO1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgcm9sbC1yZXN1bHRzICR7c3RhdHVzfWB9PntlbGVtZW50c308L2Rpdj47XG59O1xuZXhwb3J0IGRlZmF1bHQgUm9sbFJlc3VsdHM7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007Il0sInNvdXJjZVJvb3QiOiIifQ==