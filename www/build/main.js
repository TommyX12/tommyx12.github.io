webpackJsonp([13],{

/***/ 134:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 134;

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(333);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__global__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_manager__ = __webpack_require__(334);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__storage_manager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_data__ = __webpack_require__(335);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__task_data__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timeline_data__ = __webpack_require__(340);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__timeline_data__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__statistics__ = __webpack_require__(341);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__statistics__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reward_system__ = __webpack_require__(342);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__reward_system__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scheduler__ = __webpack_require__(343);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__scheduler__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__driver__ = __webpack_require__(344);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__driver__["a"]; });








//# sourceMappingURL=models.js.map

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cards/cards.module": [
		348,
		12
	],
	"../pages/content/content.module": [
		349,
		11
	],
	"../pages/item-create/item-create.module": [
		350,
		10
	],
	"../pages/item-detail/item-detail.module": [
		351,
		9
	],
	"../pages/list-master/list-master.module": [
		352,
		0
	],
	"../pages/login/login.module": [
		353,
		3
	],
	"../pages/menu/menu.module": [
		354,
		8
	],
	"../pages/search/search.module": [
		355,
		7
	],
	"../pages/settings/settings.module": [
		357,
		6
	],
	"../pages/signup/signup.module": [
		356,
		2
	],
	"../pages/tabs/tabs.module": [
		358,
		1
	],
	"../pages/tutorial/tutorial.module": [
		359,
		5
	],
	"../pages/welcome/welcome.module": [
		360,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 185;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = (function () {
    function Api(http) {
        this.http = http;
        this.url = 'https://example.com/api/v1';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(242);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mocks_providers_items__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_providers__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_components__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models_models__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_11__providers_providers__["c" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                // components registration
                __WEBPACK_IMPORTED_MODULE_13__components_components__["c" /* TabsComp */],
                __WEBPACK_IMPORTED_MODULE_13__components_components__["d" /* TimelinePageComp */],
                __WEBPACK_IMPORTED_MODULE_13__components_components__["b" /* MissionsPageComp */],
                __WEBPACK_IMPORTED_MODULE_13__components_components__["a" /* ActionsBrowserComp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-create/item-create.module#ItemCreatePageModule', name: 'ItemCreatePage', segment: 'item-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                // entry components registration
                __WEBPACK_IMPORTED_MODULE_13__components_components__["c" /* TabsComp */],
                __WEBPACK_IMPORTED_MODULE_13__components_components__["d" /* TimelinePageComp */],
                __WEBPACK_IMPORTED_MODULE_13__components_components__["b" /* MissionsPageComp */],
                __WEBPACK_IMPORTED_MODULE_13__components_components__["a" /* ActionsBrowserComp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__providers_providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_10__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_11__providers_providers__["d" /* User */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                { provide: __WEBPACK_IMPORTED_MODULE_11__providers_providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["c" /* IonicErrorHandler */] },
                // model registration
                __WEBPACK_IMPORTED_MODULE_14__models_models__["b" /* Global */],
                __WEBPACK_IMPORTED_MODULE_14__models_models__["f" /* StorageManager */],
                __WEBPACK_IMPORTED_MODULE_14__models_models__["g" /* TaskData */],
                __WEBPACK_IMPORTED_MODULE_14__models_models__["h" /* TimelineData */],
                __WEBPACK_IMPORTED_MODULE_14__models_models__["e" /* Statistics */],
                __WEBPACK_IMPORTED_MODULE_14__models_models__["c" /* RewardSystem */],
                __WEBPACK_IMPORTED_MODULE_14__models_models__["d" /* Scheduler */],
                __WEBPACK_IMPORTED_MODULE_14__models_models__["a" /* Driver */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = (function () {
    function User(api) {
        this.api = api;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('login', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
            else {
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(translate, platform, config, statusBar, splashScreen) {
        var _this = this;
        this.translate = translate;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.root_page = __WEBPACK_IMPORTED_MODULE_5__components_components__["c" /* TabsComp */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.initTranslate();
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        if (this.translate.getBrowserLang() !== undefined) {
            this.translate.use(this.translate.getBrowserLang());
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\data\projects\new\creations\2018 Catalyzer\catalyzer\src\app\app.component.html"*/'\n\n<ion-split-pane>\n\n  <ion-menu side="left" type="push" [content]="content">\n\n    <ion-content>\n\n      <!-- <ion-list> -->\n\n        <!-- <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)"> -->\n\n          <!-- {{p.title}} -->\n\n        <!-- </button> -->\n\n      <!-- </ion-list> -->\n\n      <p text-center>PLACEHOLDER</p>\n\n    </ion-content>\n\n  </ion-menu>\n\n  \n\n  <ion-nav #content main [root]="root_page"></ion-nav>\n\n\n\n</ion-split-pane>\n\n\n\n'/*ion-inline-end:"D:\data\projects\new\creations\2018 Catalyzer\catalyzer\src\app\app.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_models__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsComp = (function () {
    function TabsComp(nav_ctrl, translate_service, global) {
        this.nav_ctrl = nav_ctrl;
        this.translate_service = translate_service;
        this.global = global;
        this.tabs = [
            { title: 'TITLE_TIMELINE', icon: 'pulse', component: __WEBPACK_IMPORTED_MODULE_3__components__["d" /* TimelinePageComp */] },
            { title: 'TITLE_STATS', icon: 'stats', component: __WEBPACK_IMPORTED_MODULE_3__components__["d" /* TimelinePageComp */] },
            { title: 'TITLE_MISSIONS', icon: 'list-box', component: __WEBPACK_IMPORTED_MODULE_3__components__["b" /* MissionsPageComp */] },
            { title: 'TITLE_MORE', icon: 'more', component: __WEBPACK_IMPORTED_MODULE_3__components__["d" /* TimelinePageComp */] },
        ];
        this.init_translate();
    }
    TabsComp.prototype.init_translate = function () {
        var self = this;
        this.global.wait_for_translation().then(function () {
            for (var _i = 0, _a = self.tabs; _i < _a.length; _i++) {
                var tab = _a[_i];
                tab.title = self.global.tr[tab.title];
            }
        });
    };
    TabsComp.prototype.change_tab = function (tab_or_index) {
        this.tabs_comp.select(tab_or_index);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('tabs_comp'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Tabs */])
    ], TabsComp.prototype, "tabs_comp", void 0);
    TabsComp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'comp-tabs',template:/*ion-inline-start:"D:\data\projects\new\creations\2018 Catalyzer\catalyzer\src\components\tabs\tabs.html"*/'<ion-tabs #tabs_comp tabsHighlight="true" tabsLayout="icon-top">\n  <ion-tab [root]="tab.component" [tabTitle]="tab.title" [tabIcon]="tab.icon" *ngFor="let tab of tabs"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\data\projects\new\creations\2018 Catalyzer\catalyzer\src\components\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__models_models__["b" /* Global */]])
    ], TabsComp);
    return TabsComp;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Global; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Global = (function () {
    function Global(loading_ctrl, translate_service) {
        this.loading_ctrl = loading_ctrl;
        this.translate_service = translate_service;
        this.tr_keys = [
            'ROOT_ACTION_NAME',
            'TEXT_LOADING',
            'TEXT_SAVING',
            'TITLE_TIMELINE',
            'TITLE_STATS',
            'TITLE_MISSIONS',
            'TITLE_MORE',
        ];
        this.tr = null;
        this.tr_waiting = [];
        this.init_translate();
    }
    Global.prototype.start_loading = function (message) {
        var loading = this.loading_ctrl.create({
            content: message
        });
        loading.present();
        return loading;
    };
    Global.prototype.init_translate = function () {
        var _this = this;
        this.translate_service.get(this.tr_keys).subscribe(function (values) {
            _this.tr = values;
            for (var _i = 0, _a = _this.tr_waiting; _i < _a.length; _i++) {
                var callback = _a[_i];
                callback();
            }
            _this.tr_waiting = [];
        });
    };
    Global.prototype.wait_for_translation = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            if (self.tr) {
                resolve();
            }
            else {
                self.tr_waiting.push(resolve);
            }
        });
    };
    Global = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], Global);
    return Global;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StorageManager = (function () {
    function StorageManager(storage, global, translate_service) {
        this.storage = storage;
        this.global = global;
        this.translate_service = translate_service;
    }
    StorageManager.prototype.load = function (key) {
        var loading = this.global.start_loading(this.global.tr.TEXT_LOADING);
        return this.storage.get(key).then(function (value) {
            loading.dismiss();
            return value;
        });
    };
    StorageManager.prototype.save = function (key, value) {
        var loading = this.global.start_loading(this.global.tr.TEXT_SAVING);
        return this.storage.set(key, value).then(function () {
            loading.dismiss();
        });
    };
    StorageManager = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__models__["b" /* Global */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], StorageManager);
    return StorageManager;
}());

//# sourceMappingURL=storage-manager.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskData = (function () {
    function TaskData(global) {
        this.global = global;
        this.changed = new __WEBPACK_IMPORTED_MODULE_2__common_common__["b" /* Event */]();
        this.actions = {};
        var self = this;
        this.initialize();
        this.global.wait_for_translation().then(function () {
            self.set_root_action_name();
        });
    }
    TaskData.prototype.initialize = function () {
        var action = new __WEBPACK_IMPORTED_MODULE_2__common_common__["a" /* Action */]();
        action.id = 0;
        this.actions[0] = action;
        var action_edit;
        action_edit = this.get_new_action_edit();
        action_edit.parent_action_id = 0;
        action_edit.name = "test thing 1";
        this.apply_new_action_edit(action_edit);
        // or load data.
    };
    TaskData.prototype.set_root_action_name = function () {
        this.actions[0].name = this.global.tr.ROOT_ACTION_NAME;
    };
    // tested
    TaskData.prototype.get_first_unused_key = function (dict) {
        var keys = [];
        for (var key in dict) {
            keys.push(parseInt(key));
        }
        keys.sort();
        var i = 0;
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (key > i + 1) {
                return i + 1;
            }
            i = key;
        }
        return i + 1;
    };
    TaskData.prototype.get_next_action_id = function () {
        return this.get_first_unused_key(this.actions);
    };
    // public get_next_mission_id(): number {
    // }
    // DO NOT modify its id
    TaskData.prototype.get_new_action_edit = function () {
        var action = new __WEBPACK_IMPORTED_MODULE_2__common_common__["a" /* Action */]();
        var action_edit = action.serialize();
        action_edit.id = this.get_next_action_id();
        return action_edit;
    };
    TaskData.prototype.apply_new_action_edit = function (data) {
        var action = new __WEBPACK_IMPORTED_MODULE_2__common_common__["a" /* Action */]();
        action.deserialize(data);
        this.actions[data.id] = action;
        // move node
        this.get_action(data.parent_action_id).child_action_ids.push(data.id);
        this.changed.dispatch(null);
    };
    TaskData.prototype.action_exists = function (id) {
        return id in this.actions;
    };
    TaskData.prototype.get_action = function (id) {
        return this.actions[id];
    };
    TaskData.prototype.get_root_action = function () {
        return this.actions[0];
    };
    TaskData.prototype.delete_action = function (id) {
        delete this.actions[id];
        this.changed.dispatch(null);
    };
    TaskData.prototype.get_action_edit = function (id) {
        return this.get_action(id).serialize();
    };
    TaskData.prototype.apply_action_edit = function (id, data) {
        var action = this.get_action(id);
        // move node
        __WEBPACK_IMPORTED_MODULE_2__common_common__["c" /* Util */].array_remove(this.get_action(action.parent_action_id).child_action_ids, data.id);
        this.get_action(data.parent_action_id).child_action_ids.push(data.id);
        action.deserialize(data);
        this.changed.dispatch(null);
    };
    TaskData.prototype.serialize = function () {
        alert('TaskData::serialize not implemented');
        var s_actions = {};
        for (var key in this.actions) {
            s_actions[key] = this.actions[key].serialize();
        }
        return {
            actions: s_actions,
        };
    };
    TaskData.prototype.deserialize = function (data) {
        alert('TaskData::deserialize not implemented');
        this.actions = {};
        for (var key in data.actions) {
            var action = new __WEBPACK_IMPORTED_MODULE_2__common_common__["a" /* Action */]();
            action.deserialize(data.actions[key]);
            this.actions[key] = action;
        }
    };
    TaskData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__models__["b" /* Global */]])
    ], TaskData);
    return TaskData;
}());

//# sourceMappingURL=task-data.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
var Util = (function () {
    function Util() {
    }
    Util.print = function (msg) {
        console.log(msg);
    };
    Util.directory_of_path = function (path) {
        return path.substring(0, path.lastIndexOf("/") + 1);
    };
    Util.file_name_of_path = function (path) {
        var slash_index = path.lastIndexOf("/");
        var dot_index = path.lastIndexOf(".");
        if (slash_index >= 0) {
            path = path.substring(slash_index + 1, path.length);
            dot_index -= slash_index + 1;
        }
        if (dot_index >= 0) {
            path = path.substring(0, dot_index);
        }
        return path;
    };
    Util.array_remove = function (array, value) {
        var index = array.indexOf(value);
        if (index >= 0) {
            array.splice(index, 1);
        }
    };
    Util.parse_date = function (str) {
        var time_info = [];
        var i;
        var buffer = "";
        for (i = 0; i <= str.length; i++) {
            var c = str.charAt(i);
            if (c >= '0' && c <= '9') {
                buffer += c;
            }
            else {
                if (buffer.length > 0)
                    time_info.push(parseInt(buffer));
                buffer = "";
            }
        }
        if (time_info.length != 5)
            return NaN;
        return Date.UTC(time_info[0], time_info[1] - 1, time_info[2], time_info[3], time_info[4], 0);
    };
    Util.hue_to_RGB = function (v1, v2, vH) {
        if (vH < 0)
            vH += 1;
        if (vH > 1)
            vH -= 1;
        if ((6 * vH) < 1)
            return (v1 + (v2 - v1) * 6 * vH);
        if ((2 * vH) < 1)
            return (v2);
        if ((3 * vH) < 2)
            return (v1 + (v2 - v1) * ((2 / 3) - vH) * 6);
        return (v1);
    };
    Util.hsl_to_rgb = function (H, S, L) {
        //http://www.easyrgb.com/index.php?X=MATH&H=9#text9
        var R, G, B;
        if (S == 0) {
            R = L * 255; //RGB results from 0 to 255
            G = L * 255;
            B = L * 255;
        }
        else {
            var var_2 = void 0;
            if (L < 0.5)
                var_2 = L * (1 + S);
            else
                var_2 = (L + S) - (S * L);
            var var_1 = 2 * L - var_2;
            R = 255 * this.hue_to_RGB(var_1, var_2, H + (1 / 3));
            G = 255 * this.hue_to_RGB(var_1, var_2, H);
            B = 255 * this.hue_to_RGB(var_1, var_2, H - (1 / 3));
        }
        return { r: R, g: G, b: B };
    };
    Util.hsl = function (r, g, b) {
        //http://www.easyrgb.com/index.php?X=MATH&H=18#text18
        var var_Min = Math.min(r, g, b); //Min. value of RGB
        var var_Max = Math.max(r, g, b); //Max. value of RGB
        var del_Max = var_Max - var_Min; //Delta RGB value
        var L = (var_Max + var_Min) / 2;
        var H = 0.0, S = 0.0;
        if (del_Max == 0) {
            H = 0; //HSL results from 0 to 1
            S = 0;
        }
        else {
            if (L < 0.5)
                S = del_Max / (var_Max + var_Min);
            else
                S = del_Max / (2 - var_Max - var_Min);
            var del_R = (((var_Max - r) / 6) + (del_Max / 2)) / del_Max;
            var del_G = (((var_Max - g) / 6) + (del_Max / 2)) / del_Max;
            var del_B = (((var_Max - b) / 6) + (del_Max / 2)) / del_Max;
            if (r == var_Max)
                H = del_B - del_G;
            else if (g == var_Max)
                H = (1 / 3) + del_R - del_B;
            else if (b == var_Max)
                H = (2 / 3) + del_G - del_R;
            if (H < 0)
                H += 1;
            if (H > 1)
                H -= 1;
        }
        return { h: H, s: S, l: L };
    };
    Util.luma = function (r, g, b) {
        return 0.299 * r + 0.587 * g + 0.114 * b;
    };
    Util.clamp = function (x, min, max) {
        return Math.min(Math.max(x, min), max);
    };
    Util.random = function (min, max) {
        return min + Math.random() * (max - min);
    };
    Util.random_int = function (min, max) {
        return Math.floor(this.random(min, max));
    };
    Util.map = function (x, in_min, in_max, out_min, out_max, clamp_in) {
        if (clamp_in === true)
            x = this.clamp(x, in_min, in_max);
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    };
    /* public static getRepeatTxt(mission){
        if (mission == null) return "";
        
        let outStr = mission.segments > 1 ? "[/%1] ".arg(mission.segments) : "";
        if (mission.repeatMode == "none") {
            outStr += qsTr("[No Repeat]");
        }
        else {
            let repeatStr = "";
            if (mission.repeatMode == "days") repeatStr = qsTr("Every %1 Days");
            else if (mission.repeatMode == "months") repeatStr = qsTr("Every %1 Months");
            else if (mission.repeatMode == "years") repeatStr = qsTr("Every %1 Years");
            outStr += "[" + repeatStr.arg(mission.repeatParam) + "]";
            
            if (!mission.isForever()){
                outStr += " [" + qsTr("Until: ") + Engine.timeToString(mission.repeatUntil) + "]";
            }
        }
        return outStr;
    } */
    Util.random_select_chance = function (chance_array) {
        if (chance_array.length == 0)
            return -1;
        var options = chance_array.length - 1;
        var pointer = 0;
        var total = 0.0;
        for (var i = 0; i < chance_array.length; ++i)
            total += chance_array[i];
        var rand = this.random(0, total);
        while (pointer < options) {
            var chance = chance_array[pointer];
            if (rand < chance)
                break;
            rand -= chance;
            total -= chance;
            pointer++;
        }
        return pointer;
    };
    Util.is_object = function (item) {
        return (item !== null && typeof item === "object" && !this.is_array(item));
    };
    Util.is_array = function (item) {
        return (item !== null && item.constructor === Array);
    };
    Util.deep_copy = function (item) {
        /* if (this.is_object(item) || this.is_array(item)) {
            return JSON.parse(JSON.stringify(item));
        }
        else {
            return item;
        } */
        return JSON.parse(JSON.stringify(item));
    };
    Util.merge_default = function (obj, default_obj) {
        if (this.is_object(obj) && this.is_object(default_obj)) {
            for (var property in default_obj) {
                if (default_obj.hasOwnProperty(property)) {
                    if (!obj.hasOwnProperty(property)) {
                        obj[property] = this.deep_copy(default_obj[property]);
                    }
                    else {
                        this.merge_default(obj[property], default_obj[property]);
                    }
                }
            }
        }
    };
    Util.set_property_with_ref = function (ref, value) {
        var cur = ref[0];
        var i = 1;
        while (i < ref.length - 1) {
            cur = cur[ref[i]];
            i++;
        }
        cur[ref[i]] = value;
    };
    Util.get_property_with_ref = function (ref) {
        var cur = ref[0];
        var i = 1;
        while (i < ref.length) {
            cur = cur[ref[i]];
            i++;
        }
        return cur;
    };
    return Util;
}());

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var Event = (function () {
    function Event() {
        this.handlers = [];
    }
    Event.prototype.add_listener = function (handler) {
        this.handlers.push(handler);
    };
    Event.prototype.dispatch = function (data) {
        for (var _i = 0, _a = this.handlers; _i < _a.length; _i++) {
            var handler = _a[_i];
            handler(data);
        }
    };
    return Event;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Action; });
var Action = (function () {
    function Action() {
        this.id = 0;
        this.name = '';
        this.parent_action_id = 0;
        this.child_action_ids = [];
    }
    // DO NOT call this method directly.
    Action.prototype.serialize = function () {
        return {
            id: this.id,
            name: this.name,
            parent_action_id: this.parent_action_id,
            child_action_ids: this.child_action_ids.slice(),
        };
    };
    // DO NOT call this method directly.
    Action.prototype.deserialize = function (data) {
        this.id = data.id;
        this.name = data.name;
        this.parent_action_id = data.parent_action_id;
        this.child_action_ids = data.child_action_ids.slice();
    };
    return Action;
}());

//# sourceMappingURL=action.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Mission */
var Mission = (function () {
    function Mission() {
    }
    return Mission;
}());

//# sourceMappingURL=mission.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimelineData = (function () {
    function TimelineData(global) {
        this.global = global;
        this.changed = new __WEBPACK_IMPORTED_MODULE_2__common_common__["b" /* Event */]();
    }
    TimelineData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__models__["b" /* Global */]])
    ], TimelineData);
    return TimelineData;
}());

//# sourceMappingURL=timeline-data.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Statistics; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Statistics = (function () {
    function Statistics(global) {
        this.global = global;
        this.changed = new __WEBPACK_IMPORTED_MODULE_2__common_common__["b" /* Event */]();
    }
    Statistics = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__models__["b" /* Global */]])
    ], Statistics);
    return Statistics;
}());

//# sourceMappingURL=statistics.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardSystem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RewardSystem = (function () {
    function RewardSystem(global) {
        this.global = global;
        this.changed = new __WEBPACK_IMPORTED_MODULE_2__common_common__["b" /* Event */]();
    }
    RewardSystem = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__models__["b" /* Global */]])
    ], RewardSystem);
    return RewardSystem;
}());

//# sourceMappingURL=reward-system.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scheduler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Scheduler = (function () {
    function Scheduler() {
    }
    Scheduler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Scheduler);
    return Scheduler;
}());

//# sourceMappingURL=scheduler.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Driver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Driver = (function () {
    function Driver(global) {
        this.global = global;
    }
    Driver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__models__["b" /* Global */]])
    ], Driver);
    return Driver;
}());

//# sourceMappingURL=driver.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelinePageComp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_models__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimelinePageComp = (function () {
    function TimelinePageComp(nav_ctrl, global, storage_manager, task_data) {
        this.nav_ctrl = nav_ctrl;
        this.global = global;
        this.storage_manager = storage_manager;
        this.task_data = task_data;
    }
    TimelinePageComp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'comp-timeline-page',template:/*ion-inline-start:"D:\data\projects\new\creations\2018 Catalyzer\catalyzer\src\components\timeline-page\timeline-page.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons right>\n    </ion-buttons>\n    <ion-title>\n      {{\'TITLE_TIMELINE\' | translate}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="test">\n    <div class="test2">\n    </div>\n    <div class="test2">\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\data\projects\new\creations\2018 Catalyzer\catalyzer\src\components\timeline-page\timeline-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__models_models__["b" /* Global */],
            __WEBPACK_IMPORTED_MODULE_2__models_models__["f" /* StorageManager */],
            __WEBPACK_IMPORTED_MODULE_2__models_models__["g" /* TaskData */]])
    ], TimelinePageComp);
    return TimelinePageComp;
}());

//# sourceMappingURL=timeline-page.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MissionsPageComp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_models__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MissionsPageComp = (function () {
    function MissionsPageComp(nav_ctrl, global, storage_manager, task_data, modal_ctrl) {
        this.nav_ctrl = nav_ctrl;
        this.global = global;
        this.storage_manager = storage_manager;
        this.task_data = task_data;
        this.modal_ctrl = modal_ctrl;
    }
    MissionsPageComp.prototype.open_actions_browser = function () {
        // let modal = this.modal_ctrl.create(ActionsBrowserComp)
        // modal.present()
        this.nav_ctrl.push(__WEBPACK_IMPORTED_MODULE_2__components__["a" /* ActionsBrowserComp */]);
    };
    MissionsPageComp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'comp-missions-page',template:/*ion-inline-start:"D:\data\projects\new\creations\2018 Catalyzer\catalyzer\src\components\missions-page\missions-page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons right>\n      <button strong ion-button (click)="open_actions_browser()">\n        Actions\n      </button>\n    </ion-buttons>\n    <ion-title>\n      {{\'TITLE_MISSIONS\' | translate}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="test">\n    <div class="test2">\n    </div>\n    <div class="test2">\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\data\projects\new\creations\2018 Catalyzer\catalyzer\src\components\missions-page\missions-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__models_models__["b" /* Global */],
            __WEBPACK_IMPORTED_MODULE_3__models_models__["f" /* StorageManager */],
            __WEBPACK_IMPORTED_MODULE_3__models_models__["g" /* TaskData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], MissionsPageComp);
    return MissionsPageComp;
}());

//# sourceMappingURL=missions-page.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsBrowserComp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_models__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActionsBrowserComp = (function () {
    function ActionsBrowserComp(nav_ctrl, view_ctrl, global, storage_manager, task_data) {
        this.nav_ctrl = nav_ctrl;
        this.view_ctrl = view_ctrl;
        this.global = global;
        this.storage_manager = storage_manager;
        this.task_data = task_data;
        this.current_action = null;
        this.test = [1, 2, 3];
        this.goto_root();
    }
    ActionsBrowserComp.prototype.goto_parent = function () {
        this.current_action = this.task_data.get_action(this.current_action.parent_action_id);
    };
    ActionsBrowserComp.prototype.goto_root = function () {
        this.current_action = this.task_data.get_root_action();
    };
    ActionsBrowserComp.prototype.goto_child = function (child_id) {
        this.current_action = this.task_data.get_action(child_id);
    };
    ActionsBrowserComp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'comp-actions-browser',template:/*ion-inline-start:"D:\data\projects\new\creations\2018 Catalyzer\catalyzer\src\components\actions-browser\actions-browser.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons right>\n    </ion-buttons>\n    <ion-title>\n      {{\'TITLE_ACTIONS\' | translate}}\n    </ion-title>\n  </ion-navbar>\n  <ion-toolbar style="border-top: 1px solid #aaa;">\n    <ion-buttons left>\n      <button ion-button icon-only (click)="goto_root()"\n        [disabled]="current_action.id == 0"\n        >\n        <ion-icon name="home"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="goto_parent()"\n        [disabled]="current_action.id == 0"\n        >\n        <ion-icon name="undo"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title text-center><h6>{{ current_action.name }}</h6></ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only>\n        <ion-icon name="md-add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="outer-content">\n  <ion-list>\n  <ion-item *ngFor="let child_id of current_action.child_action_ids">\n    <button ion-button full clear style="margin: 0; font-size: 1em;" color="dark">\n      <span style="width: 100%; text-align: left;">\n      {{ task_data.get_action(child_id).name }}\n      </span>\n    </button>\n    <button ion-button icon-right item-right outline\n      (click)="goto_child(child_id)"\n      >\n      Enter\n      <ion-icon name="ios-arrow-forward"></ion-icon>\n    </button>\n    <button ion-button icon-only item-right clear>\n      <ion-icon name="ios-more"></ion-icon>\n    </button>\n  </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\data\projects\new\creations\2018 Catalyzer\catalyzer\src\components\actions-browser\actions-browser.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__models_models__["b" /* Global */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_models__["b" /* Global */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__models_models__["f" /* StorageManager */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_models__["f" /* StorageManager */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__models_models__["g" /* TaskData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_models__["g" /* TaskData */]) === "function" && _e || Object])
    ], ActionsBrowserComp);
    return ActionsBrowserComp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=actions-browser.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(332);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timeline_page_timeline_page__ = __webpack_require__(345);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__timeline_page_timeline_page__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__missions_page_missions_page__ = __webpack_require__(346);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__missions_page_missions_page__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_browser_actions_browser__ = __webpack_require__(347);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__actions_browser_actions_browser__["a"]; });




//# sourceMappingURL=components.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(336);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__util__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event__ = __webpack_require__(337);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__event__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__action__ = __webpack_require__(338);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__action__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mission__ = __webpack_require__(339);
/* unused harmony reexport Mission */




//# sourceMappingURL=common.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(312);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });





//# sourceMappingURL=providers.js.map

/***/ })

},[228]);
//# sourceMappingURL=main.js.map