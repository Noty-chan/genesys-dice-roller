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
                Object(src_model_settings__WEBPACK_IMPORTED_MODULE_3__[/* getWebhook */ "f"])() && !src_model_settings__WEBPACK_IMPORTED_MODULE_3__[/* AutoDiscord */ "a"].get() && this.state.results.length > 0 &&
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
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "url", value: hook, onChange: e => this.handleWebhook(i, e) }))),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvZGljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvYWRqdWRpY2F0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9vcmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9kaWNlLWNvbnRyb2xzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9kaWNlLWxpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L2Rpc3BsYXkvZGljZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZGlzcGxheS9zeW1ib2wudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L21haW4tYXBwLWFyZWEudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L21lbnUudHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L25hdi1idXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L3JvbGwtcmVzdWx0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL21haW4ubGVzcz85MjJkIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7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QUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtRUFBWSxDQUFDLENBQUM7UUFDbkYsTUFBTSxHQUFHLGtGQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbEIsUUFBUSxDQUFDLElBQUksQ0FBQyw2REFBSyxTQUFTLEVBQUUsa0JBQWtCLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxvREFBQyx1RUFBYSxJQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFPLENBQUMsQ0FBQztRQUNsSixDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsNkRBQUssU0FBUyxFQUFDLGVBQWUsSUFBRSxLQUFLLENBQU8sQ0FBQyxDQUFDLENBQUM7SUFFNUYsT0FBTyw2REFBSyxTQUFTLEVBQUUsZ0JBQWdCLE1BQU0sRUFBRSxJQUFHLFFBQVEsQ0FBTyxDQUFDO0FBQ3RFLENBQUMsQ0FBQztBQUNhLG9FQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN2QzNCLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHVCOzs7Ozs7Ozs7Ozs7QUNBQSwwQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2dlbmVzeXMtZGljZS1yb2xsZXIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcInNyYy9tb2RlbC9zZXR0aW5nc1wiO1xuaW1wb3J0IE1haW5BcHBBcmVhIGZyb20gXCJzcmMvdmlldy9tYWluLWFwcC1hcmVhXCI7XG5pbXBvcnQgTmF2QnV0dG9uIGZyb20gXCJzcmMvdmlldy9uYXYtYnV0dG9uXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwic3JjL3ZpZXcvbWVudVwiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8eyB0aGVtZVNldHRpbmdzOiB0eXBlb2YgVGhlbWUgfSwgeyBtZW51T3BlbjogYm9vbGVhbiB9PiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogeyB0aGVtZVNldHRpbmdzOiB0eXBlb2YgVGhlbWUgfSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IG1lbnVPcGVuOiBmYWxzZSB9O1xuICAgICAgICB0aGlzLnN3aXRjaFRoZW1lID0gdGhpcy5zd2l0Y2hUaGVtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvZ2dsZU1lbnUgPSB0aGlzLnRvZ2dsZU1lbnUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICB0b2dnbGVNZW51KG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lbnVPcGVuOiBvcGVuIH0pO1xuICAgIH1cblxuICAgIHN3aXRjaFRoZW1lKCk6IHZvaWQge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsaWdodFwiLCBcImRhcmtcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCh0aGlzLnByb3BzLnRoZW1lU2V0dGluZ3MuZ2V0Q2xhc3MoKSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMudGhlbWVTZXR0aW5ncy5vbih0aGlzLnN3aXRjaFRoZW1lKTtcbiAgICAgICAgdGhpcy5zd2l0Y2hUaGVtZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLnRoZW1lU2V0dGluZ3Mub2ZmKHRoaXMuc3dpdGNoVGhlbWUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxOYXZCdXR0b24gdG9nZ2xlQ2FsbGJhY2s9e3RoaXMudG9nZ2xlTWVudX0vPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUubWVudU9wZW4gJiYgPE1lbnUgdG9nZ2xlQ2FsbGJhY2s9e3RoaXMudG9nZ2xlTWVudX0vPn0gXG4gICAgICAgICAgICA8aDEgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy50aGVtZVNldHRpbmdzLnRvZ2dsZSgpfT48c3BhbiBjbGFzc05hbWU9XCJsb2dvXCI+R2VuZXN5czwvc3Bhbj4gRGljZSBSb2xsZXI8L2gxPlxuICAgICAgICAgICAgPE1haW5BcHBBcmVhLz5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD47XG4gICAgfVxufVxuXG4vLyBSZW1vdmUgZmFsbGJhY2sgbm8tSlMgY29udGVudCBhbmQgcmVtb3ZlIHRoZSBjbGFzcyBmcm9tIHRoZSA8Ym9keT4gdGFnXG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJuby1qc1wiKTtcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgdGhlbWVTZXR0aW5ncz17VGhlbWV9IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSEpO1xuIiwiaW1wb3J0IFN5bWJvbHMgZnJvbSBcInNyYy9tb2RlbC9zeW1ib2xzXCI7XG5cbi8qKiBUeXBlIHVzZWQgdG8gZGVzY3JpYmUgYWxsIHRoZSBkaWNlIGN1cnJlbnRseSBoYW5kbGVkIGJ5IHRoZSBhcHAuICovXG5leHBvcnQgdHlwZSBBbGxvd2VkRGljZSA9IEdlbmVzeXNEaWUgfCBQZXJjZW50aWxlRGllO1xuLyoqIFR5cGUgdXNlZCB0byBkZXNjcmliZSBhbGwgdGhlIGRpY2UgcmVzdWx0cyBjdXJyZW50bHkgaGFuZGxlZCBieSB0aGUgYXBwLiAqL1xuZXhwb3J0IHR5cGUgQWxsb3dlZFJlc3VsdHMgPSBBbGxvd2VkRGljZVtcImN1cnJlbnRSZXN1bHRcIl07XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgbW9kZWxzIHJlcHJlc2VudGluZyBhbGwgZGljZSB1c2VkIGluIHRoZSBhcHAuXG4gKiBTaG91bGRuJ3QgYmUgdXNlZCBvbiBpdHMgb3duLCBidXQgY3JlYXRlcyBiYXNlIGZvciBhbGwgb3RoZXIgZGljZS5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERpZTxSZXN1bHRUeXBlIGV4dGVuZHMgQWxsb3dlZFJlc3VsdHM+IHtcblxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGF0IHRoZSByZXN1bHQgb2YgdGhlIGxhc3Qgcm9sbCB3YXMuXG4gICAgICogSWYgbnVsbCwgdGhlIGRpZSBoYXMgbm90IGJlZW4gcm9sbGVkIHlldCwgZWxzZSBpdCdzXG4gICAgICogdGhlIGNvbnRlbnRzIG9mIHRoZSByZXN1bHRpbmcgc2lkZS5cbiAgICAgKi9cbiAgICBjdXJyZW50UmVzdWx0OiBSZXN1bHRUeXBlIHwgbnVsbCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0aGF0IGNvdW50cyB0aGUgbnVtYmVyIG9mIHRpbWVzIHRoaXMgZGllXG4gICAgICogaGFzIGJlZW4gcm9sbGVkLiBJdCdzIHVzZWQgcHJpbWFyaWx5IGluIHJlbmRlcmluZywgdG8gZGV0ZXJtaW5lXG4gICAgICogd2hlbiB0aGUgZGllIGhhcyBjaGFuZ2VkIHN0YXRlIGJ5IGJlaW5nIHJvbGxlZCwgYXMgb3Bwb3NlZCB0b1xuICAgICAqIGJlaW5nIHNlbGVjdGVkLCBvciBtb3ZlZCBpbiB0aGUgbGlzdC5cbiAgICAgKiBJbmNyZWFzZXMgYnkgb25lIG9uIGV2ZXJ5IGludm9jYXRpb24gb2YgYC5yb2xsKClgLlxuICAgICAqL1xuICAgIHJvbGxDb3VudDogbnVtYmVyID0gMDtcblxuICAgIC8qKlxuICAgICAqIFJvbGxzIHRoZSBkaWUsIHNlbGVjdGluZyByYW5kb20gcmVzdWx0IGZyb20gdGhlIHBvc3NpYmxlIG9uZXMsXG4gICAgICogYXNzaWducyBpdCB0byBjdXJyZW50IHJlc3VsdCBhbmQgcmV0dXJucyBpdC5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCByb2xsKCk6IFJlc3VsdFR5cGU7XG5cbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBtb2RlbHMgcmVwcmVzZW50aW5nIGFsbCB0aGUgR2VuZXN5cyBkaWNlLlxuICogUHJpbWFyeSBzZXQgb2YgZGljZSBpbiB0aGUgc3lzdGVtLCBleGNsdWRpbmcgdGhlIHBlcmNlbnRpbGUgZGllXG4gKiB1c2VkIGluIHNvbWUgY29tYmF0IHNpdHVhdGlvbnMuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHZW5lc3lzRGllIGV4dGVuZHMgRGllPFN5bWJvbHNbXT4ge1xuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiBhbGwgcG9zc2libGUgcmVzdWx0cyB0aGF0IGNhbiBjb21lIHVwIG9uIHRoZSBkaWUuXG4gICAgICogRWFjaCBzaWRlIGlzIHJlcHJlc2VudGVkIHNlcGFyYXRlbHksIHNvIGlmIHR3byBzaWRlcyBhcmVcbiAgICAgKiB0aGUgc2FtZSwgdGhleSB3aWxsIGJlIGxpc3RlZCB0d2ljZSBoZXJlLlxuICAgICAqL1xuICAgIGFic3RyYWN0IHJlYWRvbmx5IHBvc3NpYmxlUmVzdWx0czogU3ltYm9sc1tdW107XG5cbiAgICAvKipcbiAgICAgKiBSb2xscyB0aGUgZGllLCBzZWxlY3RpbmcgcmFuZG9tIHJlc3VsdCBmcm9tIHRoZSBwb3NzaWJsZSBvbmVzLFxuICAgICAqIGFzc2lnbnMgaXQgdG8gY3VycmVudCByZXN1bHQgYW5kIHJldHVybnMgaXQuXG4gICAgICovXG4gICAgcm9sbCgpOiBTeW1ib2xzW10ge1xuICAgICAgICB0aGlzLnJvbGxDb3VudCsrO1xuICAgICAgICB0aGlzLmN1cnJlbnRSZXN1bHQgPSB0aGlzLnBvc3NpYmxlUmVzdWx0c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnBvc3NpYmxlUmVzdWx0cy5sZW5ndGgpXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFJlc3VsdDtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBNb2RlbCBmb3IgdGhlIGJhc2UgcG9zaXRpdmUgZGllLCB0aGUgZ3JlZW4gZWlnaHQtc2lkZWQgb25lLlxuICovXG5leHBvcnQgY2xhc3MgQWJpbGl0eURpZSBleHRlbmRzIEdlbmVzeXNEaWUge1xuICAgIHBvc3NpYmxlUmVzdWx0cyA9IFtcbiAgICAgICAgW10sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1NdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTUywgU3ltYm9scy5TVUNDRVNTXSxcbiAgICAgICAgW1N5bWJvbHMuQURWQU5UQUdFXSxcbiAgICAgICAgW1N5bWJvbHMuQURWQU5UQUdFXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTUywgU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5BRFZBTlRBR0UsIFN5bWJvbHMuQURWQU5UQUdFXVxuICAgIF1cbn1cblxuLyoqXG4gKiBNb2RlbCBmb3IgdGhlIHVwZ3JhZGVkIHBvc2l0aXZlIGRpZSwgdGhlIHllbGxvdyB0d2VsdmUtc2lkZWQgb25lLlxuICovXG5leHBvcnQgY2xhc3MgUHJvZmljaWVuY3lEaWUgZXh0ZW5kcyBHZW5lc3lzRGllIHtcbiAgICBwb3NzaWJsZVJlc3VsdHMgPSBbXG4gICAgICAgIFtdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTU10sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1MsIFN5bWJvbHMuU1VDQ0VTU10sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1MsIFN5bWJvbHMuU1VDQ0VTU10sXG4gICAgICAgIFtTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLlNVQ0NFU1MsIFN5bWJvbHMuQURWQU5UQUdFXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTUywgU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTLCBTeW1ib2xzLkFEVkFOVEFHRV0sXG4gICAgICAgIFtTeW1ib2xzLkFEVkFOVEFHRSwgU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5BRFZBTlRBR0UsIFN5bWJvbHMuQURWQU5UQUdFXSxcbiAgICAgICAgW1N5bWJvbHMuVFJJVU1QSF1cbiAgICBdXG59XG5cbi8qKlxuICogTW9kZWwgZm9yIHRoZSBjaXJjdW1zdGFudGlhbCBwb3NpdGl2ZSBkaWUsIHRoZSBibHVlIHNpeC1zaWRlZCBvbmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBCb29zdERpZSBleHRlbmRzIEdlbmVzeXNEaWUge1xuICAgIHBvc3NpYmxlUmVzdWx0cyA9IFtcbiAgICAgICAgW10sXG4gICAgICAgIFtdLFxuICAgICAgICBbU3ltYm9scy5TVUNDRVNTXSxcbiAgICAgICAgW1N5bWJvbHMuU1VDQ0VTUywgU3ltYm9scy5BRFZBTlRBR0VdLFxuICAgICAgICBbU3ltYm9scy5BRFZBTlRBR0UsIFN5bWJvbHMuQURWQU5UQUdFXSxcbiAgICAgICAgW1N5bWJvbHMuQURWQU5UQUdFXVxuICAgIF1cbn1cblxuLyoqXG4gKiBNb2RlbCBmb3IgdGhlIGJhc2UgbmVnYXRpdmUgZGllLCB0aGUgcHVycGxlIGVpZ2h0LXNpZGVkIG9uZS5cbiAqL1xuZXhwb3J0IGNsYXNzIERpZmZpY3VsdHlEaWUgZXh0ZW5kcyBHZW5lc3lzRGllIHtcbiAgICBwb3NzaWJsZVJlc3VsdHMgPSBbXG4gICAgICAgIFtdLFxuICAgICAgICBbU3ltYm9scy5GQUlMVVJFXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRSwgU3ltYm9scy5GQUlMVVJFXSxcbiAgICAgICAgW1N5bWJvbHMuVEhSRUFUXSxcbiAgICAgICAgW1N5bWJvbHMuVEhSRUFUXSxcbiAgICAgICAgW1N5bWJvbHMuVEhSRUFUXSxcbiAgICAgICAgW1N5bWJvbHMuVEhSRUFULCBTeW1ib2xzLlRIUkVBVF0sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkUsIFN5bWJvbHMuVEhSRUFUXVxuICAgIF1cbn1cblxuLyoqXG4gKiBNb2RlbCBmb3IgdGhlIHVwZ3JhZGVkIG5lZ2F0aXZlIGRpZSwgdGhlIHJlZCB0d2VsdmUtc2lkZWQgb25lLlxuICovXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlRGllIGV4dGVuZHMgR2VuZXN5c0RpZSB7XG4gICAgcG9zc2libGVSZXN1bHRzID0gW1xuICAgICAgICBbXSxcbiAgICAgICAgW1N5bWJvbHMuRkFJTFVSRV0sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkVdLFxuICAgICAgICBbU3ltYm9scy5GQUlMVVJFLCBTeW1ib2xzLkZBSUxVUkVdLFxuICAgICAgICBbU3ltYm9scy5GQUlMVVJFLCBTeW1ib2xzLkZBSUxVUkVdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5GQUlMVVJFLCBTeW1ib2xzLlRIUkVBVF0sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkUsIFN5bWJvbHMuVEhSRUFUXSxcbiAgICAgICAgW1N5bWJvbHMuVEhSRUFULCBTeW1ib2xzLlRIUkVBVF0sXG4gICAgICAgIFtTeW1ib2xzLlRIUkVBVCwgU3ltYm9scy5USFJFQVRdLFxuICAgICAgICBbU3ltYm9scy5ERVNQQUlSXVxuICAgIF1cbn1cblxuLyoqXG4gKiBNb2RlbCBmb3IgdGhlIGNpcmN1bXN0YW50aWFsIG5lZ2F0aXZlIGRpZSwgdGhlIGJsYWNrIHNpeC1zaWRlZCBvbmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXRiYWNrRGllIGV4dGVuZHMgR2VuZXN5c0RpZSB7XG4gICAgcG9zc2libGVSZXN1bHRzID0gW1xuICAgICAgICBbXSxcbiAgICAgICAgW10sXG4gICAgICAgIFtTeW1ib2xzLkZBSUxVUkVdLFxuICAgICAgICBbU3ltYm9scy5GQUlMVVJFXSxcbiAgICAgICAgW1N5bWJvbHMuVEhSRUFUXSxcbiAgICAgICAgW1N5bWJvbHMuVEhSRUFUXVxuICAgIF1cbn1cblxuLyoqXG4gKiBNb2RlbCBmb3IgdGhlIHBlcmNlbnRpbGUgZGllLCB1c2VkIHRvIGdlbmVyYXRlIG51bWVyaWNhbCByZXN1bHRcbiAqIGJldHdlZW4gMSBhbmQgMTAwLiBVc2VkIHRvIGVzdGFibGlzaCBjcml0aWNhbCByZXN1bHRzIGluIGNvbWJhdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFBlcmNlbnRpbGVEaWUgZXh0ZW5kcyBEaWU8bnVtYmVyPiB7XG4gICAgcm9sbCgpIHtcbiAgICAgICAgdGhpcy5yb2xsQ291bnQrKztcbiAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0ID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UmVzdWx0O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XG5cbnR5cGUgUmVkdXg8UGF5bG9hZD4gPSB7XG4gICAgZGlzcGF0Y2goYXJnOiB7IHR5cGU6IFwiQ0hBTkdFXCIsIHZhbHVlOiBQYXlsb2FkIH0pOiB2b2lkO1xuICAgIHN1YnNjcmliZShhcmc6ICgpID0+IHZvaWQpOiAoKSA9PiB2b2lkO1xuICAgIGdldFN0YXRlKCk6IHsgdmFsdWU6IFBheWxvYWQgfTtcbn1cblxuZXhwb3J0IGNsYXNzIFNldHRpbmdzPFBheWxvYWQ+IHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgaW5pdGlhbFZhbHVlPzogUGF5bG9hZCkge1xuXG4gICAgICAgIGNvbnN0IHNhdmVkVmFsdWU6IHN0cmluZyB8IG51bGwgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSk7XG4gICAgICAgIGlmIChzYXZlZFZhbHVlKSB7XG4gICAgICAgICAgICBpbml0aWFsVmFsdWUgPSBKU09OLnBhcnNlKHNhdmVkVmFsdWUpLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zdG9yZSA9IGNyZWF0ZVN0b3JlKHRoaXMucmVkdWNlci5iaW5kKHRoaXMpLCB7IHZhbHVlOiBpbml0aWFsVmFsdWUgfSk7XG4gICAgfVxuXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBzdG9yZTogUmVkdXg8UGF5bG9hZD47XG5cbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IE1hcDwocDogUGF5bG9hZCkgPT4gdm9pZCwgKCkgPT4gdm9pZD4gPSBuZXcgTWFwKCk7XG5cbiAgICBwcm90ZWN0ZWQgcmVkdWNlcihzdGF0ZTogeyB2YWx1ZTogUGF5bG9hZCB9LCBhY3Rpb246IHsgdHlwZT86IFwiQ0hBTkdFXCIsIHZhbHVlOiBQYXlsb2FkIH0pOiB7IHZhbHVlOiBQYXlsb2FkIH0ge1xuICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT09IFwiQ0hBTkdFXCIgJiYgYWN0aW9uLnZhbHVlICE9PSBzdGF0ZS52YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geyB2YWx1ZTogYWN0aW9uLnZhbHVlIH07XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5uYW1lLCBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIG9uKGNhbGxiYWNrOiAocDogUGF5bG9hZCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4gY2FsbGJhY2sodGhpcy5nZXQoKSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5zZXQoY2FsbGJhY2ssIHRoaXMuc3RvcmUuc3Vic2NyaWJlKGhhbmRsZXIpKTtcbiAgICB9XG5cbiAgICBvZmYoY2FsbGJhY2s6IChwOiBQYXlsb2FkKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gdGhpcy5zdWJzY3JpcHRpb25zLmdldChjYWxsYmFjayk7XG4gICAgICAgIGlmICh1bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCgpOiBQYXlsb2FkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS52YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQodmFsdWU6IFBheWxvYWQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFwiQ0hBTkdFXCIsIHZhbHVlIH0pO1xuICAgIH1cbn1cblxudHlwZSBUaGVtZU9wdGlvbnMgPSBcImxpZ2h0XCIgfCBcImRhcmtcIiB8IG51bGw7XG5jb25zdCB0aGVtZU9wdGlvbkxpc3Q6IFRoZW1lT3B0aW9uc1tdID0gW1wibGlnaHRcIiwgXCJkYXJrXCIsIG51bGxdO1xuXG5jbGFzcyBUaGVtZVNldHRpbmdzIGV4dGVuZHMgU2V0dGluZ3M8VGhlbWVPcHRpb25zPiB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXCJ0aGVtZVwiLCBudWxsKTtcbiAgICB9XG5cbiAgICBnZXRDbGFzcygpOiBOb25OdWxsYWJsZTxUaGVtZU9wdGlvbnM+IHtcblxuICAgICAgICBjb25zdCBzZWxlY3RlZFRoZW1lID0gdGhpcy5nZXQoKTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRUaGVtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkVGhlbWU7XG4gICAgICAgIH0gZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KVwiKS5tYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJsaWdodFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJkYXJrXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwibGlnaHRcIjtcbiAgICB9XG5cbiAgICB0b2dnbGUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG5ld1RoZW1lSW5kZXggPSAodGhlbWVPcHRpb25MaXN0LmluZGV4T2YodGhpcy5nZXQoKSkgKyAxKSAlIHRoZW1lT3B0aW9uTGlzdC5sZW5ndGg7XG4gICAgICAgIHRoaXMuc2V0KHRoZW1lT3B0aW9uTGlzdFtuZXdUaGVtZUluZGV4XSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgVGhlbWUgPSBuZXcgVGhlbWVTZXR0aW5ncygpO1xuXG5leHBvcnQgY29uc3QgV2ViaG9va3MgPSBuZXcgU2V0dGluZ3M8c3RyaW5nW10+KFwid2ViaG9va3NcIiwgW10pO1xuZXhwb3J0IGNvbnN0IFdlYmhvb2tQcmlvcml0eSA9IG5ldyBTZXR0aW5nczxudW1iZXI+KFwid2ViaG9va19wcmlvcml0eVwiLCAwKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlYmhvb2soKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgY29uc3QgaG9va3MgPSBXZWJob29rcy5nZXQoKTtcbiAgICBjb25zdCBpbmRleCA9IFdlYmhvb2tQcmlvcml0eS5nZXQoKTtcbiAgICByZXR1cm4gaG9va3NbaW5kZXhdIHx8IG51bGw7XG59XG5leHBvcnQgY29uc3QgVXNlcm5hbWUgPSBuZXcgU2V0dGluZ3M8c3RyaW5nPihcInVzZXJuYW1lXCIsIFwiXCIpO1xuZXhwb3J0IGNvbnN0IEF1dG9EaXNjb3JkID0gbmV3IFNldHRpbmdzPGJvb2xlYW4+KFwiYXV0b19kaXNjb3JkXCIsIGZhbHNlKTtcbiIsImltcG9ydCB7IGNvdW50QnkgfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgUmVzdWx0IGZyb20gXCJzcmMvbW9kZWwvcmVzdWx0XCI7XG5pbXBvcnQgU3ltYm9scyBmcm9tIFwic3JjL21vZGVsL3N5bWJvbHNcIjtcblxuLyoqXG4gKiBNZXRob2QgdXNlZCB0byByZXNvbHZlIHBhcnQgb2YgdGhlIHJvbGwgd2hlcmUgc3VjY2Vzc2VzIGFuZCBmYWlsdXJlcyAvXG4gKiBhZHZhbnRhZ2VzIGFuZCB0aHJlYXRzIGNhbmNlbCBlYWNoIG90aGVyIG91dC4gR2l2ZW4gbGlzdCBvZiBzeW1ib2xzLFxuICogY2FuY2VscyB0aGVtIG91dCBhbmQgcmV0dXJucyB0aGUgbGlzdCB3aXRoIG9ubHkgdGhlIHJlbWFpbmluZyBzeW1ib2xzLlxuICpcbiAqIEBwYXJhbSBzeW1ib2xzICBMaXN0IG9mIHN5bWJvbHMgcm9sbGVkXG4gKiBAcmV0dXJucyAgICAgICAgTGlzdCB3aXRoIHN5bWJvbHMgcmVtYWluaW5nIGFmdGVyIGNhbmNlbGxpbmcgcmVzdWx0cyBvdXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU9wcG9zaW5nU3ltYm9scyhzeW1ib2xzOiBTeW1ib2xzW10pOiBTeW1ib2xzW10ge1xuXG4gICAgLy8gTWFrZSB0aGUgZmlyc3QgcGFzcyBieSBjb3VudGluZyBhbGwgdGhlIHN5bWJvbHNcbiAgICBjb25zdCByZW1vdmUgPSBjb3VudEJ5KHN5bWJvbHMpO1xuXG4gICAgLy8gRGVsZXRlIGNvdW50cyBmb3IgdHJpdW1waHMgYW5kIGRlc3BhaXJzLCBhcyB0aGVzZSBuZXZlciBjYW5jZWwgZWFjaCBvdGhlciBvdXRcbiAgICBkZWxldGUgcmVtb3ZlW1N5bWJvbHMuVFJJVU1QSF07XG4gICAgZGVsZXRlIHJlbW92ZVtTeW1ib2xzLkRFU1BBSVJdO1xuXG4gICAgLy8gVXNlIHRoZSBjb3VudHMgYW5kIG1hcmsgdGhlIHNtYWxsZXIgbnVtYmVyIG9mIHN5bWJvbHMgZm9yIHJlbW92YWxcbiAgICByZW1vdmVbU3ltYm9scy5TVUNDRVNTXSA9IHJlbW92ZVtTeW1ib2xzLkZBSUxVUkVdID0gTWF0aC5taW4ocmVtb3ZlW1N5bWJvbHMuU1VDQ0VTU10sIHJlbW92ZVtTeW1ib2xzLkZBSUxVUkVdKTtcbiAgICByZW1vdmVbU3ltYm9scy5BRFZBTlRBR0VdID0gcmVtb3ZlW1N5bWJvbHMuVEhSRUFUXSA9IE1hdGgubWluKHJlbW92ZVtTeW1ib2xzLkFEVkFOVEFHRV0sIHJlbW92ZVtTeW1ib2xzLlRIUkVBVF0pO1xuXG4gICAgY29uc3QgcmVtYWluaW5nU3ltYm9sczogU3ltYm9sc1tdID0gW107XG4gICAgc3ltYm9scy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAocmVtb3ZlW2l0ZW1dKSB7XG4gICAgICAgICAgICByZW1vdmVbaXRlbV0tLTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbWFpbmluZ1N5bWJvbHMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlbWFpbmluZ1N5bWJvbHM7XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHJvbGw7IGdpdmVuIHRoZSBsaXN0IG9mIHJlc3VsdHMgcm9sbGVkLCBjb3VudHMgdGhlbSB1cCxcbiAqIGFuZCByZXR1cm5zIHdoZXRoZXIgdGhlIHJvbGwgd2FzIHN1Y2Nlc3NmdWwgb3IgZmFpbGVkLlxuICpcbiAqIEBwYXJhbSBzeW1ib2xzICBMaXNmIG9mIHN5bWJvbHMgcm9sbGVkXG4gKiBAcmVzdWx0cyAgICAgICAgV2hldGhlciB0aGUgcm9sbCB3YXMgc3VjY2Vzc2Z1bCBvciBmYWlsZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkanVkaWNhdGVSb2xsKHN5bWJvbHM6IFN5bWJvbHNbXSk6IFJlc3VsdCB7XG5cbiAgICBjb25zdCBjb3VudHMgPSBjb3VudEJ5KHN5bWJvbHMpLFxuICAgICAgICAgIGNvdW50U3VjY2VzcyA9IChjb3VudHNbU3ltYm9scy5UUklVTVBIXSB8fCAwKSArIChjb3VudHNbU3ltYm9scy5TVUNDRVNTXSB8fCAwKSxcbiAgICAgICAgICBjb3VudEZhaWx1cmUgPSAoY291bnRzW1N5bWJvbHMuREVTUEFJUl0gfHwgMCkgKyAoY291bnRzW1N5bWJvbHMuRkFJTFVSRV0gfHwgMCk7XG5cbiAgICBjb25zb2xlLndhcm4oXCJDT1VOVDogXCIsIGNvdW50cyk7XG5cbiAgICByZXR1cm4gKGNvdW50U3VjY2VzcyAtIGNvdW50RmFpbHVyZSA+IDApID8gUmVzdWx0LlNVQ0NFU1MgOiBSZXN1bHQuRkFJTFVSRTtcbn1cbiIsImltcG9ydCBTeW1ib2xzIGZyb20gXCJzcmMvbW9kZWwvc3ltYm9sc1wiO1xuaW1wb3J0IHsgR2VuZXN5c0RpZSwgQWJpbGl0eURpZSwgUHJvZmljaWVuY3lEaWUsIEJvb3N0RGllLCBEaWZmaWN1bHR5RGllLCBDaGFsbGVuZ2VEaWUsIFNldGJhY2tEaWUsIFBlcmNlbnRpbGVEaWUgfSBmcm9tIFwic3JjL21vZGVsL2RpY2VcIjtcblxuLyoqXG4gKiBPcmRlciByZXF1aXJlZCBvZiB0aGUgc3ltYm9scyBvbiB0aGUgZGljZS5cbiAqIEdvaW5nIHBvc2l0aXZlIGZpcnN0LCBuZWdhdGl2ZSBzZWNvbmQsIGFuZCBmcm9tIG1vc3QgdG8gbGVhc3QgcG93ZXJmdWwuXG4gKi9cbmNvbnN0IFNZTUJPTF9PUkRFUklORyA9IE9iamVjdC5mcmVlemUoe1xuICAgIFtTeW1ib2xzLlRSSVVNUEhdOiAgIDAsXG4gICAgW1N5bWJvbHMuU1VDQ0VTU106ICAgMSxcbiAgICBbU3ltYm9scy5BRFZBTlRBR0VdOiAyLFxuICAgIFtTeW1ib2xzLkRFU1BBSVJdOiAgIDMsXG4gICAgW1N5bWJvbHMuRkFJTFVSRV06ICAgNCxcbiAgICBbU3ltYm9scy5USFJFQVRdOiAgICA1XG59KTtcblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGhlbHAgd2l0aCBvcmRlcmluZyB0aGUgcmVzdWx0cywgZmlyc3QgYnkgZ3JvdXBpbmcgcG9zaXRpdmUgZGljZSBmaXJzdCxcbiAqIG5lZ2F0aXZlIHNlY29uZCwgdGhlbiBieSBvcmRlcmluZyBlYWNoIGdyb3VwIGZyb20gbW9zdCBwb3dlcmZ1bCB0byBsZWFzdCBwb3dlcmZ1bC5cbiAqIEludGVuZGVkIHRvIGJlIHVzZWQgYXMgY29tcGFyZSBmdW5jdGlvbiBmb3IgQXJyYXkuc29ydC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9yZGVyU3ltYm9scyhhOiBTeW1ib2xzLCBiOiBTeW1ib2xzKTogbnVtYmVyIHtcbiAgICByZXR1cm4gU1lNQk9MX09SREVSSU5HW2FdIGFzIG51bWJlciAtIFNZTUJPTF9PUkRFUklOR1tiXSBhcyBudW1iZXI7XG59XG5cbi8qKlxuICogT3JkZXIgcmVxdWlyZWQgb2YgdGhlIGRpY2UgdGhlbXNlbHZlcy5cbiAqIERvbmUgYXMgZnVuY3Rpb24gcmF0aGVyIHRoYW4gbWFwIGJlY2F1c2UgdGhlcmUncyBubyBlYXN5IHdheSB0byB1c2UgY2xhc3Mgb2YgaW5zdGFuY2VcbiAqIGFzIHZhbHVlIGluIFR5cGVTY3JpcHQuIEdvZXMgcG9zaXRpdmUgZmlyc3QsIG5lZ2F0aXZlIHNlY29uZCwgbW9zdCB0byBsZWFzdCBwb3dlcmZ1bCxcbiAqIGFuZCBwZXJjZW50aWxlIGRpZSBnb2VzIGF0IHRoZSBlbmQuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlRm9yRGllKGRpZTogR2VuZXN5c0RpZSB8IFBlcmNlbnRpbGVEaWUpOiBudW1iZXIge1xuXG4gICAgaWYgKGRpZSBpbnN0YW5jZW9mIFByb2ZpY2llbmN5RGllKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSBpZiAoZGllIGluc3RhbmNlb2YgQWJpbGl0eURpZSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGRpZSBpbnN0YW5jZW9mIEJvb3N0RGllKSB7XG4gICAgICAgIHJldHVybiAyO1xuICAgIH0gZWxzZSBpZiAoZGllIGluc3RhbmNlb2YgQ2hhbGxlbmdlRGllKSB7XG4gICAgICAgIHJldHVybiAzO1xuICAgIH0gZWxzZSBpZiAoZGllIGluc3RhbmNlb2YgRGlmZmljdWx0eURpZSkge1xuICAgICAgICByZXR1cm4gNDtcbiAgICB9IGVsc2UgaWYgKGRpZSBpbnN0YW5jZW9mIFNldGJhY2tEaWUpIHtcbiAgICAgICAgcmV0dXJuIDU7XG4gICAgfVxuICAgIHJldHVybiA2O1xufVxuXG4vKipcbiAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gaGVscCB3aXRoIG9yZGVyaW5nIHRoZSBkaWNlIHRoZW1zZWx2ZXMsIGZpcnN0IGJ5IGdyb3VwaW5nIHBvc2l0aXZlIGRpY2UgZmlyc3QsXG4gKiBuZWdhdGl2ZSBzZWNvbmQsIHRoZW4gYnkgb3JkZXJpbmcgZWFjaCBncm91cCBmcm9tIG1vc3QgcG93ZXJmdWwgdG8gbGVhc3QgcG93ZXJmdWwuXG4gKiBJbnRlbmRlZCB0byBiZSB1c2VkIGFzIGNvbXBhcmUgZnVuY3Rpb24gZm9yIEFycmF5LnNvcnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcmRlckRpY2UoYTogR2VuZXN5c0RpZSB8IFBlcmNlbnRpbGVEaWUsIGI6IEdlbmVzeXNEaWUgfCBQZXJjZW50aWxlRGllKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZ2V0VmFsdWVGb3JEaWUoYSkgLSBnZXRWYWx1ZUZvckRpZShiKTtcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IFN5bWJvbHMgZnJvbSBcInNyYy9tb2RlbC9zeW1ib2xzXCI7XG5pbXBvcnQgeyBBbGxvd2VkRGljZSwgR2VuZXN5c0RpZSwgQWJpbGl0eURpZSwgUHJvZmljaWVuY3lEaWUsIEJvb3N0RGllLCBEaWZmaWN1bHR5RGllLCBDaGFsbGVuZ2VEaWUsIFNldGJhY2tEaWUsIFBlcmNlbnRpbGVEaWUgfSBmcm9tIFwic3JjL21vZGVsL2RpY2VcIjtcbmltcG9ydCBEaWNlRGlzcGxheSBmcm9tIFwic3JjL3ZpZXcvZGlzcGxheS9kaWNlXCI7XG5cbnR5cGUgRGllQ3JlYXRvcjxUIGV4dGVuZHMgQWxsb3dlZERpY2U+ID0geyBjbHM6IG5ldyAoKSA9PiBULCByZXN1bHQ6IFRbXCJjdXJyZW50UmVzdWx0XCJdIH07XG5jb25zdCBkaWNlVG9DcmVhdGU6IERpZUNyZWF0b3I8QWxsb3dlZERpY2U+W10gPSBbXG4gICAgeyBjbHM6IEFiaWxpdHlEaWUsICAgICByZXN1bHQ6IFtTeW1ib2xzLlNVQ0NFU1NdIH0sXG4gICAgeyBjbHM6IFByb2ZpY2llbmN5RGllLCByZXN1bHQ6IFtTeW1ib2xzLlRSSVVNUEhdIH0sXG4gICAgeyBjbHM6IEJvb3N0RGllLCAgICAgICByZXN1bHQ6IFtTeW1ib2xzLkFEVkFOVEFHRV0gfSxcbiAgICB7IGNsczogRGlmZmljdWx0eURpZSwgIHJlc3VsdDogW1N5bWJvbHMuRkFJTFVSRV0gfSxcbiAgICB7IGNsczogQ2hhbGxlbmdlRGllLCAgIHJlc3VsdDogW1N5bWJvbHMuREVTUEFJUl0gfSxcbiAgICB7IGNsczogU2V0YmFja0RpZSwgICAgIHJlc3VsdDogW1N5bWJvbHMuVEhSRUFUXSB9LFxuICAgIHsgY2xzOiBQZXJjZW50aWxlRGllLCAgcmVzdWx0OiA0MiB9XG5dO1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGRyYXdzIHRoZSBjb2xsZWN0aW9uIG9mIGJ1dHRvbnMgdGhhdCBjYW4gYmUgdXNlZCB0byBhZGQgbmV3IGRpY2UgdG8gdGhlIGRpY2UgcG9vbC5cbiAqIE9uY2UgcmVuZGVyZWQsIGl0IGRvZXNuJ3QgcmVhbGx5IGNoYW5nZSwgc28gaXQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHJhdGhlciB0aGFuIENvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGljZUNvbnRyb2xzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDx7IGNhbGxiYWNrOiAoZGllOiBBbGxvd2VkRGljZSkgPT4gdm9pZCB9PiB7XG5cbiAgICAvKipcbiAgICAgKiBJdGVyYXRlcyBvdmVyIHRoZSBsaXN0IG9mIGFsbCB0aGUgZGljZSB3ZSBoYW5kbGUgaW4gdGhlIGRpY2Ugcm9sbGVyLFxuICAgICAqIGFsb25nIHdpdGggZGVmYXVsdCByZXN1bHQgdG8gc2hvdyAoc28gdGhhdCB0aGUgZGljZSBhcmUgZWFzaWx5IGlkZW50aWZpYWJsZSksXG4gICAgICogYW5kIHJlbmRlcnMgZWFjaCBvZiB0aG9zZSBpbiBhIGJ1dHRvbiB0aGF0IGFkZHMgYSBuZXcgZGllIG9mIHRoYXQgdHlwZSB3aGVuZXZlciBpdCdzIGNsaWNrZWQuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uQnV0dG9ucyA9IGRpY2VUb0NyZWF0ZS5tYXAoKHsgY2xzLCByZXN1bHQgfSwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGllTmFtZSA9IHN0YXJ0Q2FzZShjbHMubmFtZSkuc3BsaXQoXCIgXCIpWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9e2BhZGQtJHtkaWVOYW1lfWB9IGtleT17aX0gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5jYWxsYmFjayhuZXcgY2xzKCkpfT5cbiAgICAgICAgICAgICAgICA8RGljZURpc3BsYXkgZGllPXtPYmplY3QuYXNzaWduKG5ldyBjbHMoKSwgeyBjdXJyZW50UmVzdWx0OiByZXN1bHQgfSl9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj47XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRpY2UtY29udHJvbHNcIj57YWRkaXRpb25CdXR0b25zfTwvZGl2PjtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEaWNlRGlzcGxheSBmcm9tIFwic3JjL3ZpZXcvZGlzcGxheS9kaWNlXCI7XG5pbXBvcnQgeyBBbGxvd2VkRGljZSB9IGZyb20gXCJzcmMvbW9kZWwvZGljZVwiO1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGlzIHVzZWQgaW4gbWFpbiBhcHAgYXJlYSB0byBkcmF3IHRoZSBsaXN0IG9mIGFsbCB0aGUgZGljZSB0byB0aGUgcG9vbC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGljZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8eyBkaWNlOiBBbGxvd2VkRGljZVtdLCBzZWxlY3RlZDogQWxsb3dlZERpY2VbXSwgc2VsZWN0Q2FsbGJhY2s/OiAoZGllOiBBbGxvd2VkRGljZSkgPT4gdm9pZCB9PiB7XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgZGljZUxpc3QgPSB0aGlzLnByb3BzLmRpY2UubWFwKGRpZSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNsaWNrID0gdGhpcy5wcm9wcy5zZWxlY3RDYWxsYmFjayA/XG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5wcm9wcy5zZWxlY3RDYWxsYmFjayEoZGllKSA6XG4gICAgICAgICAgICAgICAgdm9pZCAwO1xuXG4gICAgICAgICAgICByZXR1cm4gPERpY2VEaXNwbGF5IGRpZT17ZGllfSBzZWxlY3RlZD17dGhpcy5wcm9wcy5zZWxlY3RlZC5pbmNsdWRlcyhkaWUpfSByb2xsQ291bnQ9e2RpZS5yb2xsQ291bnR9IG9uQ2xpY2s9e2NsaWNrfSAvPjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGljZS1saXN0XCI+e2RpY2VMaXN0fTwvZGl2PjtcbiAgICB9XG5cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3RhcnRDYXNlIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHsgQWxsb3dlZERpY2UsIEFsbG93ZWRSZXN1bHRzIH0gZnJvbSBcInNyYy9tb2RlbC9kaWNlXCI7XG5pbXBvcnQgU3ltYm9sRGlzcGxheSBmcm9tIFwic3JjL3ZpZXcvZGlzcGxheS9zeW1ib2xcIjtcblxuLyoqXG4gKiBDb252ZXJ0cyByZXN1bHQgb2YgdGhlIGRpZSByb2xsIChvciB0aGUgbGFjayBvZiB0aGVyZW9mKSBpbnRvIHNvbWV0aGluZ1xuICogaHVtYW4tcmVhZGFibGU7IHBlbmRpbmcgbWFyayBmb3Igbm8gcm9sbHMsIHN5bWJvbHMgZm9yIHJlZ3VsYXIgR2VuZXN5cyBkaWNlLFxuICogYW5kIHRoZSBudW1iZXIgZm9yIHBlcmNlbnRpbGUgZGllLlxuICovXG5mdW5jdGlvbiBjb252ZXJ0RGllUmVzdWx0KHJlc3VsdDogQWxsb3dlZFJlc3VsdHMpOiBKU1guRWxlbWVudFtdIHtcbiAgICBpZiAocmVzdWx0ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBbPHNwYW4+Pzwvc3Bhbj5dO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gWzxzcGFuPntyZXN1bHQgKyBcIlwifTwvc3Bhbj5dO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0Lm1hcCgocywgaSkgPT4gPFN5bWJvbERpc3BsYXkgc3ltYm9sPXtzfSBrZXk9e2l9IC8+KTtcbn1cblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyB1c2VkIHRvIHJlbmRlciB0aGUgZGljZSBpbWFnZXMgaW4gdGhlIG1haW4gYXJlYSBvZiB0aGUgYXBwLlxuICogR2l2ZW4gdGhlIGRpZSBtb2RlbCBpbnN0YW5jZSwgY29udmVydHMgdGhlIHJvbGwgcmVzdWx0IGludG8gc29tZXRoaW5nIGh1bWFuLXJlYWRhYmxlLFxuICogYW5kIGRyYXdzIGl0IGluIGFuIGVsZW1lbnQgc3R5bGVkIHRvIGxvb2sgbGlrZSBhIGRpZSBvZiByZWxldmFudCBzaGFwZSBhbmQgY29sb3VyLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWNlRGlzcGxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7XG4gICAgZGllOiBBbGxvd2VkRGljZSxcbiAgICBzZWxlY3RlZD86IGJvb2xlYW4sXG4gICAgcm9sbENvdW50PzogbnVtYmVyLFxuICAgIG9uQ2xpY2s/OiAoZXY6IGFueSkgPT4gdm9pZFxufT4gaW1wbGVtZW50cyBFdmVudExpc3RlbmVyT2JqZWN0IHtcblxuICAgIGRpZVJlZmVyZW5jZTogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBjbGFzc05hbWU6IHN0cmluZyA9IHN0YXJ0Q2FzZSh0aGlzLnByb3BzLmRpZS5jb25zdHJ1Y3Rvci5uYW1lKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZWxlY3RlZCkge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9IFwiIHNlbGVjdGVkXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gPGRpdiByZWY9e3RoaXMuZGllUmVmZXJlbmNlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfT5cbiAgICAgICAgICAgIHtjb252ZXJ0RGllUmVzdWx0KHRoaXMucHJvcHMuZGllLmN1cnJlbnRSZXN1bHQpfVxuICAgICAgICA8L2Rpdj47XG4gICAgfVxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wczogdGhpc1tcInByb3BzXCJdKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRpZSAhPT0gbmV4dFByb3BzLmRpZSB8fFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZCAhPT0gbmV4dFByb3BzLnNlbGVjdGVkIHx8XG4gICAgICAgICAgICB0aGlzLnByb3BzLnJvbGxDb3VudCAhPT0gbmV4dFByb3BzLnJvbGxDb3VudFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IHRoaXNbXCJwcm9wc1wiXSk6IHZvaWQge1xuXG4gICAgICAgIC8vIFdlIG9ubHkgYXBwbHkgdGhlIHNoYWtlIGFuaW1hdGlvbiB3aGVuIHRoZXJlJ3Mgbm8gcHJlZmVyZW5jZSBmb3IgcmVkdWNlZCBtb3Rpb24sXG4gICAgICAgIC8vIGFuZCB3aGVuIHRoZXJlJ3MgYWN0dWFsIHJlc3VsdCBvbiB0aGUgZGljZSAoJ2NhdXNlIHRoYXQgbWVhbnMgdGhlcmUncyBzb21ldGhpbmcgdG8gcm9sbCkuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpXCIpLm1hdGNoZXMgJiZcbiAgICAgICAgICAgIHRoaXMucHJvcHMucm9sbENvdW50ICE9PSBwcmV2UHJvcHMucm9sbENvdW50XG4gICAgICAgICkge1xuXG4gICAgICAgICAgICBjb25zdCBkaWVFbGVtZW50ID0gdGhpcy5kaWVSZWZlcmVuY2UuY3VycmVudCE7XG4gICAgICAgICAgICBkaWVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgdGhpcywgZmFsc2UpO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZGllIGlzIHN0aWxsIGluIHRoZSBwcm9jZXNzIG9mIHBsYXlpbmcgc2hha2UgYW5pbWF0aW9uLFxuICAgICAgICAgICAgLy8gcmVzdGFydCBpdCBieSByZW1vdmluZyB0aGUgY2xhc3MgYW5kIHRvZ2dsaW5nIHJlZmxvdyB3aXRoIGJvdW5kaW5nIHJlY3Q7XG4gICAgICAgICAgICBpZiAoZGllRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGFrZVwiKSkge1xuICAgICAgICAgICAgICAgIGRpZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNoYWtlXCIpO1xuICAgICAgICAgICAgICAgIGRpZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNoYWtlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlRXZlbnQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBcImFuaW1hdGlvbmVuZFwiKSB7XG4gICAgICAgICAgICBjb25zdCBkaWVFbGVtZW50ID0gdGhpcy5kaWVSZWZlcmVuY2UuY3VycmVudCE7XG4gICAgICAgICAgICBkaWVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgdGhpcywgZmFsc2UpO1xuICAgICAgICAgICAgZGllRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2hha2VcIik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgU3ltYm9scyBmcm9tIFwic3JjL21vZGVsL3N5bWJvbHNcIjtcblxuLyoqIFJlbmRlciBHZW5lc3lzIGRpY2Ugc3ltYm9scyB1c2luZyB0aGUgZGVkaWNhdGVkIGZvbnQuICovXG5jb25zdCBTeW1ib2xEaXNwbGF5OiBSZWFjdC5TRkM8eyBzeW1ib2w6IFN5bWJvbHMgfCBTeW1ib2xzW10gfT4gPSAoeyBzeW1ib2wgfSkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBpc0FycmF5KHN5bWJvbCkgPyBzeW1ib2wgOiBbc3ltYm9sXTtcbiAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwiZGljZS1zeW1ib2xcIj57bGlzdC5qb2luKFwiXCIpfTwvc3Bhbj47XG59O1xuZXhwb3J0IGRlZmF1bHQgU3ltYm9sRGlzcGxheTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGlmZmVyZW5jZSB9IGZyb20gXCJsb2Rhc2gtZXNcIjtcblxuaW1wb3J0IHsgQWxsb3dlZERpY2UsIEFsbG93ZWRSZXN1bHRzIH0gZnJvbSBcInNyYy9tb2RlbC9kaWNlXCI7XG5pbXBvcnQgeyBBYmlsaXR5RGllLCBQcm9maWNpZW5jeURpZSwgQm9vc3REaWUsIERpZmZpY3VsdHlEaWUsIENoYWxsZW5nZURpZSwgU2V0YmFja0RpZSwgUGVyY2VudGlsZURpZSB9IGZyb20gXCJzcmMvbW9kZWwvZGljZVwiO1xuaW1wb3J0IGh0bWwyY2FudmFzIGZyb20gXCJodG1sMmNhbnZhc1wiO1xuaW1wb3J0IHsgZ2V0V2ViaG9vaywgVXNlcm5hbWUsIEF1dG9EaXNjb3JkIH0gZnJvbSBcInNyYy9tb2RlbC9zZXR0aW5nc1wiO1xuaW1wb3J0IHsgcmVtb3ZlT3Bwb3NpbmdTeW1ib2xzLCBhZGp1ZGljYXRlUm9sbCB9IGZyb20gXCJzcmMvdXRpbC9hZGp1ZGljYXRlXCI7XG5pbXBvcnQgeyBvcmRlclN5bWJvbHMgfSBmcm9tIFwic3JjL3V0aWwvb3JkZXJcIjtcbmltcG9ydCBTeW1ib2xzIGZyb20gXCJzcmMvbW9kZWwvc3ltYm9sc1wiO1xuaW1wb3J0IFJlc3VsdCBmcm9tIFwic3JjL21vZGVsL3Jlc3VsdFwiO1xuXG5pbXBvcnQgRGljZUNvbnRyb2xzIGZyb20gXCJzcmMvdmlldy9kaWNlLWNvbnRyb2xzXCI7XG5pbXBvcnQgRGljZUxpc3QgZnJvbSBcInNyYy92aWV3L2RpY2UtbGlzdFwiO1xuaW1wb3J0IFJvbGxSZXN1bHRzIGZyb20gXCJzcmMvdmlldy9yb2xsLXJlc3VsdHNcIjtcbmltcG9ydCB7IG9yZGVyRGljZSB9IGZyb20gXCJzcmMvdXRpbC9vcmRlclwiO1xuXG50eXBlIGRpY2VUeXBlcyA9IFwiYWJpbGl0eVwiIHwgXCJwcm9maWNpZW5jeVwiIHwgXCJib29zdFwiIHwgXCJkaWZmaWN1bHR5XCIgfCBcImNoYWxsZW5nZVwiIHwgXCJzZXRiYWNrXCIgfCBcInBlcmNlbnRpbGVcIjtcbmNvbnN0IGRpY2VUeXBlczogUmVhZG9ubHk8ZGljZVR5cGVzW10+ID0gT2JqZWN0LmZyZWV6ZShbXCJhYmlsaXR5XCIsIFwicHJvZmljaWVuY3lcIiwgXCJib29zdFwiLCBcImRpZmZpY3VsdHlcIiwgXCJjaGFsbGVuZ2VcIiwgXCJzZXRiYWNrXCJdKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkFwcEFyZWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIHsgZGljZTogQWxsb3dlZERpY2VbXSwgc2VsZWN0ZWQ6IEFsbG93ZWREaWNlW10sIHJlc3VsdHM6IEFsbG93ZWRSZXN1bHRzW10gfT4ge1xuXG4gICAgcmVzdWx0c1JlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHByaXZhdGUgdXBkYXRlQXV0b0Rpc2NvcmQgPSAoKSA9PiB0aGlzLmZvcmNlVXBkYXRlKCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczoge30pIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBkaWNlOiBbXSwgc2VsZWN0ZWQ6IFtdLCByZXN1bHRzOiBbXSB9O1xuXG4gICAgICAgIHRoaXMuYWRkRGllID0gdGhpcy5hZGREaWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbGVhckRpY2UgPSB0aGlzLmNsZWFyRGljZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbiA9IHRoaXMudG9nZ2xlU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucm9sbCA9IHRoaXMucm9sbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNlbmRUb0Rpc2NvcmQgPSB0aGlzLnNlbmRUb0Rpc2NvcmQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgQXV0b0Rpc2NvcmQub24odGhpcy51cGRhdGVBdXRvRGlzY29yZCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIEF1dG9EaXNjb3JkLm9mZih0aGlzLnVwZGF0ZUF1dG9EaXNjb3JkKTtcbiAgICB9XG5cbiAgICBhZGREaWUobmV3RGllOiBBbGxvd2VkRGljZSk6IHZvaWQge1xuICAgICAgICBjb25zdCB7IGRpY2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBkaWNlOiBkaWNlLmNvbmNhdChbbmV3RGllXSkuc29ydChvcmRlckRpY2UpIH0pO1xuICAgIH1cblxuICAgIGNsZWFyRGljZSgpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCB7IGRpY2UsIHNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGgpIHtcblxuICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nRGljZSA9IGRpZmZlcmVuY2UoZGljZSwgc2VsZWN0ZWQpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZGljZTogcmVtYWluaW5nRGljZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogW10sXG4gICAgICAgICAgICAgICAgcmVzdWx0czogcmVtYWluaW5nRGljZS5tYXAoZGllID0+IGRpZS5jdXJyZW50UmVzdWx0KVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaWNlOiBbXSwgc2VsZWN0ZWQ6IFtdLCByZXN1bHRzOiBbXSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZVNlbGVjdGlvbih0b2dnbGVkRGllOiBBbGxvd2VkRGljZSk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGlmIChzZWxlY3RlZC5pbmNsdWRlcyh0b2dnbGVkRGllKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHNlbGVjdGVkOiBzZWxlY3RlZC5maWx0ZXIoZGllID0+IGRpZSAhPT0gdG9nZ2xlZERpZSkgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgc2VsZWN0ZWQ6IHNlbGVjdGVkLmNvbmNhdChbdG9nZ2xlZERpZV0pIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcm9sbCgpIHtcblxuICAgICAgICBjb25zdCB7IGRpY2UsIHNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGgpIHtcblxuICAgICAgICAgICAgc2VsZWN0ZWQuZm9yRWFjaChkaWUgPT4gZGllLnJvbGwoKSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBkaWNlLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBbXSxcbiAgICAgICAgICAgICAgICByZXN1bHRzOiBkaWNlLm1hcChkaWUgPT4gZGllLmN1cnJlbnRSZXN1bHQpXG4gICAgICAgICAgICB9LCAoKSA9PiB7IGlmIChBdXRvRGlzY29yZC5nZXQoKSkgdGhpcy5zZW5kVG9EaXNjb3JkKCk7IH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgcmVzdWx0czogdGhpcy5zdGF0ZS5kaWNlLm1hcChkaWUgPT4gZGllLnJvbGwoKSkgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7IGlmIChBdXRvRGlzY29yZC5nZXQoKSkgdGhpcy5zZW5kVG9EaXNjb3JkKCk7IH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgc2VuZFRvRGlzY29yZCgpIHtcbiAgICAgICAgY29uc3Qgd2ViaG9vayA9IGdldFdlYmhvb2soKTtcbiAgICAgICAgaWYgKCF3ZWJob29rIHx8ICF0aGlzLnJlc3VsdHNSZWYuY3VycmVudCkgeyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCBjYW52YXMgPSBhd2FpdCBodG1sMmNhbnZhcyh0aGlzLnJlc3VsdHNSZWYuY3VycmVudCk7XG4gICAgICAgIGNvbnN0IGJsb2I6IEJsb2IgPSBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+XG4gICAgICAgICAgICBjYW52YXMudG9CbG9iKChiOiBCbG9iIHwgbnVsbCkgPT4gcmVzb2x2ZShiISksIFwiaW1hZ2UvcG5nXCIpXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtLmFwcGVuZChcImZpbGVcIiwgYmxvYiwgXCJyb2xsLnBuZ1wiKTtcbiAgICAgICAgZm9ybS5hcHBlbmQoXCJ1c2VybmFtZVwiLCBVc2VybmFtZS5nZXQoKSB8fCBcIkdlbmVzeXMgUm9sbGVyXCIpO1xuICAgICAgICBmb3JtLmFwcGVuZChcImNvbnRlbnRcIiwgdGhpcy5zdW1tYXJpc2VSZXN1bHRzKCkpO1xuXG4gICAgICAgIGZldGNoKHdlYmhvb2ssIHsgbWV0aG9kOiBcIlBPU1RcIiwgYm9keTogZm9ybSB9KTtcbiAgICB9XG5cbiAgICBzdW1tYXJpc2VSZXN1bHRzKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHN5bWJvbHM6IFN5bWJvbHNbXSA9IFtdO1xuICAgICAgICBjb25zdCBudW1iZXJzOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLnJlc3VsdHMuZm9yRWFjaChyID0+IHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHIpKSB7IHN5bWJvbHMucHVzaCguLi5yKTsgfSBlbHNlIGlmICh0eXBlb2YgciA9PT0gXCJudW1iZXJcIikgeyBudW1iZXJzLnB1c2gocik7IH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGZsYXQgPSByZW1vdmVPcHBvc2luZ1N5bWJvbHMoc3ltYm9scykuc29ydChvcmRlclN5bWJvbHMpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhZGp1ZGljYXRlUm9sbChmbGF0KTtcbiAgICAgICAgY29uc3QgY291bnRzID0gbmV3IE1hcDxTeW1ib2xzLCBudW1iZXI+KCk7XG4gICAgICAgIGZsYXQuZm9yRWFjaChzID0+IGNvdW50cy5zZXQocywgKGNvdW50cy5nZXQocykgfHwgMCkgKyAxKSk7XG4gICAgICAgIGNvbnN0IG5hbWVzOiBSZWNvcmQ8U3ltYm9scywgc3RyaW5nPiA9IHtcbiAgICAgICAgICAgIFtTeW1ib2xzLlNVQ0NFU1NdOiBcItGD0YHQv9C10YVcIixcbiAgICAgICAgICAgIFtTeW1ib2xzLkZBSUxVUkVdOiBcItC90LXRg9C00LDRh9CwXCIsXG4gICAgICAgICAgICBbU3ltYm9scy5BRFZBTlRBR0VdOiBcItC/0YDQtdC40LzRg9GJ0LXRgdGC0LLQvlwiLFxuICAgICAgICAgICAgW1N5bWJvbHMuVEhSRUFUXTogXCLRg9Cz0YDQvtC30LBcIixcbiAgICAgICAgICAgIFtTeW1ib2xzLlRSSVVNUEhdOiBcItGC0YDQuNGD0LzRhFwiLFxuICAgICAgICAgICAgW1N5bWJvbHMuREVTUEFJUl06IFwi0L7RgtGH0LDRj9C90LjQtVwiLFxuICAgICAgICB9IGFzIGFueTtcbiAgICAgICAgbGV0IHRleHQgPSByZXN1bHQgPT09IFJlc3VsdC5TVUNDRVNTID8gXCLQmNGC0L7Qszog0YPRgdC/0LXRhVwiIDogcmVzdWx0ID09PSBSZXN1bHQuRkFJTFVSRSA/IFwi0JjRgtC+0LM6INC/0YDQvtCy0LDQu1wiIDogXCLQmNGC0L7QszpcIjtcbiAgICAgICAgdGV4dCArPSBcIlxcblwiICsgQXJyYXkuZnJvbShjb3VudHMuZW50cmllcygpKS5tYXAoKFtzeW0sIGNvdW50XSkgPT4gYCR7bmFtZXNbc3ltXX06ICR7Y291bnR9YCkuam9pbihcIlxcblwiKTtcbiAgICAgICAgaWYgKG51bWJlcnMubGVuZ3RoKSB0ZXh0ICs9IFwiXFxu0KfQuNGB0LvQsDogXCIgKyBudW1iZXJzLmpvaW4oXCIsIFwiKTtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkaWNlLWFyZWFcIj5cbiAgICAgICAgICAgIDxEaWNlQ29udHJvbHMgY2FsbGJhY2s9e3RoaXMuYWRkRGllfS8+XG4gICAgICAgICAgICA8RGljZUxpc3QgZGljZT17dGhpcy5zdGF0ZS5kaWNlfSBzZWxlY3RlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZH0gc2VsZWN0Q2FsbGJhY2s9e3RoaXMudG9nZ2xlU2VsZWN0aW9ufSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJvbGxcIiBvbkNsaWNrPXt0aGlzLnJvbGx9Pnt0aGlzLnN0YXRlLnNlbGVjdGVkLmxlbmd0aCA/IFwiUmUtcm9sbCBTZWxlY3RlZFwiIDogXCJSb2xsXCJ9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsZWFyXCIgb25DbGljaz17dGhpcy5jbGVhckRpY2V9Pnt0aGlzLnN0YXRlLnNlbGVjdGVkLmxlbmd0aCA/IFwiUmVtb3ZlIFNlbGVjdGVkXCIgOiBcIkNsZWFyXCJ9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICB7Z2V0V2ViaG9vaygpICYmICFBdXRvRGlzY29yZC5nZXQoKSAmJiB0aGlzLnN0YXRlLnJlc3VsdHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZGlzY29yZFwiIG9uQ2xpY2s9e3RoaXMuc2VuZFRvRGlzY29yZH0+0J7RgtC/0YDQsNCy0LjRgtGMINCyIERpc2NvcmQ8L2J1dHRvbj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgcmVmPXt0aGlzLnJlc3VsdHNSZWZ9PlxuICAgICAgICAgICAgICAgIDxSb2xsUmVzdWx0cyByZXN1bHRzPXt0aGlzLnN0YXRlLnJlc3VsdHN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cblxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBXZWJob29rcywgV2ViaG9va1ByaW9yaXR5LCBVc2VybmFtZSwgVGhlbWUsIEF1dG9EaXNjb3JkIH0gZnJvbSBcInNyYy9tb2RlbC9zZXR0aW5nc1wiO1xudHlwZSBNZW51UHJvcHMgPSB7IHRvZ2dsZUNhbGxiYWNrPzogKG9wZW46IGJvb2xlYW4pID0+IHZvaWQgfTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8TWVudVByb3BzPiB7XG4gICAgc3RhdGUgPSB7IHdlYmhvb2tzOiBXZWJob29rcy5nZXQoKS5sZW5ndGggPyBXZWJob29rcy5nZXQoKSA6IFtcIlwiXSwgcHJpb3JpdHk6IFdlYmhvb2tQcmlvcml0eS5nZXQoKSwgdXNlcm5hbWU6IFVzZXJuYW1lLmdldCgpIHx8IFwiXCIsIHRoZW1lOiBUaGVtZS5nZXQoKSB8fCBcIlwiLCBhdXRvRGlzY29yZDogQXV0b0Rpc2NvcmQuZ2V0KCkgfHwgZmFsc2UgfTtcblxuICAgIGhhbmRsZVdlYmhvb2sgPSAoaWR4OiBudW1iZXIsIGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IHdlYmhvb2tzID0gdGhpcy5zdGF0ZS53ZWJob29rcy5zbGljZSgpO1xuICAgICAgICB3ZWJob29rc1tpZHhdID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWJob29rcyB9KTtcbiAgICAgICAgV2ViaG9va3Muc2V0KHdlYmhvb2tzLmZpbHRlcih3ID0+IHcpKTtcbiAgICB9O1xuXG4gICAgYWRkV2ViaG9va0ZpZWxkID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS53ZWJob29rcy5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2ViaG9va3M6IHRoaXMuc3RhdGUud2ViaG9va3MuY29uY2F0KFtcIlwiXSkgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaGFuZGxlUHJpb3JpdHkgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByaW9yaXR5IH0pO1xuICAgICAgICBXZWJob29rUHJpb3JpdHkuc2V0KHByaW9yaXR5KTtcbiAgICB9O1xuXG4gICAgaGFuZGxlVXNlcm5hbWUgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJuYW1lIH0pO1xuICAgICAgICBVc2VybmFtZS5zZXQodXNlcm5hbWUpO1xuICAgIH07XG5cbiAgICBoYW5kbGVUaGVtZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgdGhlbWUgPSBlLnRhcmdldC52YWx1ZSBhcyBcImxpZ2h0XCIgfCBcImRhcmtcIiB8IFwiXCI7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aGVtZSB9KTtcbiAgICAgICAgVGhlbWUuc2V0KHRoZW1lIHx8IG51bGwpO1xuICAgIH07XG5cbiAgICBoYW5kbGVBdXRvRGlzY29yZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCBhdXRvID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGF1dG9EaXNjb3JkOiBhdXRvIH0pO1xuICAgICAgICBBdXRvRGlzY29yZC5zZXQoYXV0byk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUud2ViaG9va3MubWFwKChob29rLCBpKSA9PiA8bGFiZWwga2V5PXtpfT7QktC10LHRhdGD0LogI3tpICsgMX1cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInVybFwiIHZhbHVlPXtob29rfSBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZVdlYmhvb2soaSwgZSl9IC8+XG4gICAgICAgICAgICA8L2xhYmVsPil9XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS53ZWJob29rcy5sZW5ndGggPCA1ICYmIDxidXR0b24gb25DbGljaz17dGhpcy5hZGRXZWJob29rRmllbGR9PtCU0L7QsdCw0LLQuNGC0Ywg0LLQtdCx0YXRg9C6PC9idXR0b24+fVxuICAgICAgICAgICAge3RoaXMuc3RhdGUud2ViaG9va3MubGVuZ3RoID4gMSAmJiA8bGFiZWw+0J/RgNC40L7RgNC40YLQtdGC0L3Ri9C5INC60LDQvdCw0LtcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLnByaW9yaXR5fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVQcmlvcml0eX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLndlYmhvb2tzLm1hcCgoXywgaSkgPT4gPG9wdGlvbiB2YWx1ZT17aX0ga2V5PXtcInBcIiArIGl9PtCS0LXQsdGF0YPQuiAje2kgKyAxfTwvb3B0aW9uPil9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2xhYmVsPn1cbiAgICAgICAgICAgIDxsYWJlbD7QmNC80Y9cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS51c2VybmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcm5hbWV9Lz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3hcIj7QkNCy0YLQvtC+0YLQv9GA0LDQstC60LAg0LIgRGlzY29yZFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmF1dG9EaXNjb3JkfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVBdXRvRGlzY29yZH0vPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD7QotC10LzQsFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3RoaXMuc3RhdGUudGhlbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRoZW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPtCh0LjRgdGC0LXQvNC90LDRjzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGlnaHRcIj7QodCy0LXRgtC70LDRjzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGFya1wiPtCi0ZHQvNC90LDRjzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRvZ2dsZUNhbGxiYWNrICYmIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy50b2dnbGVDYWxsYmFjayEoZmFsc2UpfT7Ql9Cw0LrRgNGL0YLRjDwvYnV0dG9uPn1cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIE5hdkJ1dHRvblByb3BzID0geyB0b2dnbGVDYWxsYmFjaz86IChleHBhbmRlZDogYm9vbGVhbikgPT4gdm9pZCB9O1xuXG4vKipcbiAqIENvbXBvbmVudCB1c2VkIHRvIGluZGljYXRlIHRoZSBjb250cm9scyBmb3IgYnJpbmdpbmcgdXAgdGhlIG1lbnUgcGFuZS5cbiAqIEhhbmRsZXMgdXNlciBjbGlja3MsIGFuaW1hdGluZyBhcHByb3ByaWF0ZWx5IHdoZW4gdGhlIG1lbnUgaXMgb3BlbmVkLCBjaGFuZ2luZyB0d28gbGluZXNcbiAqIG9mIHRoZSBidXJnZXIgaW50byBhIGNyb3NzLCBhbmQgaGlkaW5nIHRoZSB0aGlyZCBvbmUsIG9yIHJldmVydGluZyB3aGVuIHRoZSBtZW51IHBhbmUgaXMgaGlkZGVuLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZCdXR0b24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PE5hdkJ1dHRvblByb3BzLCB7IGV4cGFuZGVkOiBib29sZWFuIH0+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBOYXZCdXR0b25Qcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGV4cGFuZGVkOiBmYWxzZSB9O1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgZm9yIHVzZXIgaW50ZXJhY3Rpb24gb2YgY2xpY2tpbmcgb24gdGhlIG5hdiBidXR0b247XG4gICAgICogaXQgdG9nZ2xlcyB0aGUgZXhwYW5kZWQgc3RhdGUsIGFuZCBpZiBjYWxsYmFjayBoYXMgYmVlbiBwcm92aWRlZFxuICAgICAqIGZvciB0aGUgY29tcG9uZW50LCBydW5zIGl0IHdpdGggbmV3IGV4cGFuc2lvbiBzdGF0ZS5cbiAgICAgKi9cbiAgICBoYW5kbGVDbGljaygpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSAhdGhpcy5zdGF0ZS5leHBhbmRlZDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGV4cGFuZGVkOiBuZXdTdGF0ZSB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudG9nZ2xlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9nZ2xlQ2FsbGJhY2sobmV3U3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcG9uZW50IHJlbmRlcmVyLCBjcmVhdGVzIGJhc2UgU1ZHIGVsZW1lbnQgd2l0aCB0aHJlZSBob3Jpem9udGFsIGxpbmVzIHdpdGhpbi5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgbGluZXMgPSBbMiwgNSwgOF0ubWFwKHkgPT4gPGxpbmUgeDE9XCIxLjVcIiB5MT17eX0geDI9XCI4LjVcIiB5Mj17eX0gLz4pO1xuXG4gICAgICAgIHJldHVybiA8c3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAgMTBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWJ1dHRvbiAke3RoaXMuc3RhdGUuZXhwYW5kZWQgPyBcImV4cGFuZGVkXCIgOiBcIlwifWB9XG4gICAgICAgICAgICBzdHlsZT17eyBzdHJva2VXaWR0aDogMS41LCBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgID57bGluZXN9PC9zdmc+O1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZmxhdHRlbiwgaXNBcnJheSB9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCBSZXN1bHQgZnJvbSBcInNyYy9tb2RlbC9yZXN1bHRcIjtcbmltcG9ydCBTeW1ib2xzIGZyb20gXCJzcmMvbW9kZWwvc3ltYm9sc1wiO1xuaW1wb3J0IFN5bWJvbERpc3BsYXkgZnJvbSBcInNyYy92aWV3L2Rpc3BsYXkvc3ltYm9sXCI7XG5pbXBvcnQgeyBhZGp1ZGljYXRlUm9sbCwgcmVtb3ZlT3Bwb3NpbmdTeW1ib2xzIH0gZnJvbSBcInNyYy91dGlsL2FkanVkaWNhdGVcIjtcbmltcG9ydCB7IG9yZGVyU3ltYm9scyB9IGZyb20gXCJzcmMvdXRpbC9vcmRlclwiO1xuaW1wb3J0IHsgQWxsb3dlZFJlc3VsdHMgfSBmcm9tIFwic3JjL21vZGVsL2RpY2VcIjtcblxuY29uc3QgUm9sbFJlc3VsdHM6IFJlYWN0LlNGQzx7IHJlc3VsdHM6IEFsbG93ZWRSZXN1bHRzW10gfT4gPSAoeyByZXN1bHRzIH0pID0+IHtcblxuICAgIGxldCBzdGF0dXM6IFJlc3VsdCA9IFJlc3VsdC5ORVVUUkFMO1xuICAgIGNvbnN0IHJlc3VsdHNTeW1ib2xzOiBTeW1ib2xzW11bXSA9IFtdLFxuICAgICAgICAgIHJlc3VsdHNOdW1iZXJzOiBudW1iZXJbXSA9IFtdLFxuICAgICAgICAgIGVsZW1lbnRzOiBKU1guRWxlbWVudFtdID0gW107XG5cbiAgICByZXN1bHRzLmZvckVhY2gocmVzdWx0ID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHJlc3VsdHNOdW1iZXJzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJlc3VsdHNTeW1ib2xzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSWYgdGhlcmUgYXJlIGFueSBzeW1ib2xzLCBsZXQncyBmbGF0dGVuIHRoZSByZXN1bHRzIGFuZFxuICAgIC8vIGVsaW1pbmF0ZSB0aGUgb3Bwb3Npbmcgb25lcyBmb3IgZGlzcGxheTsgYWxzbyBhZGp1ZGljYXRlXG4gICAgLy8gdGhlIHJvbGwgcmVzdWx0cy5cbiAgICBpZiAocmVzdWx0c1N5bWJvbHMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGZsYXRSb2xsID0gcmVtb3ZlT3Bwb3NpbmdTeW1ib2xzKGZsYXR0ZW4ocmVzdWx0c1N5bWJvbHMpKS5zb3J0KG9yZGVyU3ltYm9scyk7XG4gICAgICAgIHN0YXR1cyA9IGFkanVkaWNhdGVSb2xsKGZsYXRSb2xsKTtcbiAgICAgICAgaWYgKGZsYXRSb2xsLmxlbmd0aCkge1xuICAgICAgICAgICAgZWxlbWVudHMucHVzaCg8ZGl2IGNsYXNzTmFtZT17YGdyb3VwIHN5bWJvbGljICR7ZmxhdFJvbGwubGVuZ3RoID4gOCA/IFwibGFyZ2VcIiA6IFwiXCJ9YH0+e2ZsYXRSb2xsLm1hcChzID0+IDxTeW1ib2xEaXNwbGF5IHN5bWJvbD17c30vPil9PC9kaXY+KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVsZW1lbnRzLnB1c2goLi4ucmVzdWx0c051bWJlcnMubWFwKHNjb3JlID0+IDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAgbnVtZXJpY1wiPntzY29yZX08L2Rpdj4pKTtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YHJvbGwtcmVzdWx0cyAke3N0YXR1c31gfT57ZWxlbWVudHN9PC9kaXY+O1xufTtcbmV4cG9ydCBkZWZhdWx0IFJvbGxSZXN1bHRzO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyJdLCJzb3VyY2VSb290IjoiIn0=