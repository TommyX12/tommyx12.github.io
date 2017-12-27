webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.music_on = true;
        this.nodes = {
            start: {
                html: "\n\u54C8\u54C8\u54C8\uFF0C\u8FD9\u662F\u7ED9\u4F60\u7684400\u5B57hh \u867D\u7136\u5E76\u4E0D\u662F\u4E00\u4E2A\u68C0\u8BA8\u4E66\uFF0C\u4F46\u662F400\u5B57\u80AF\u5B9A\u662F\u6709\u4E86 \u5927\u6982\u5C31\u662F\u501F\u6B64\u673A\u4F1A\u5199\u70B9\u4E1C\u897Fhhhh\uFF0C\u770B\u5230\u6700\u540E\u7684\u8BDD\u7ED9\u4F60\u4E2A\u5BC6\u7801 \u628A\u5BC6\u7801\u544A\u8BC9\u6211\u5C31\u7ED9\u4F60\u770B\u7167\u7247\u54C8\u54C8\u54C8\n",
                options: [
                    {
                        html: '可以可以',
                        color: 'primary',
                        next: 'narrate1g'
                    },
                    {
                        html: '你有毒吧',
                        color: 'primary',
                        next: 'narrate1b'
                    },
                ]
            },
            narrate1g: {
                html: "\n\u4E4B\u524D\u5728cn\u521A\u89C1\u9762\uFF0C\u6CA1\u51E0\u5929\u7684\u65F6\u5019\u653E\u5B66\u5C31\u78B0\u5230\u4F60\u4EEC \u7136\u540EAmy Zoe Catherine\u4ED6\u4EEC\u8D70\u4E86\uFF0C\u5C31\u5269\u4E0B\u6211\u548C\u4F60\u56DEcn\u5403\u4E86\u4E2A\u996D\u3002\u5BF9\u4F60\u7684\u5370\u8C61\u5C31\u662F\u559C\u6B22\u804A\u5929\u8FD8\u5F88\u70ED\u60C5\uFF0C\u5FC3\u91CC\u60F3\u8FD9\u4E48\u840C\u7684\u5973\u751F\u600E\u4E48\u6CA1\u6709\u53BB\u8DDF\u7537\u670B\u53CB\u4E00\u8D77\u5403\u996D\u4E4B\u7C7B\u7684hh \u7136\u540E\u8FC7\u4E86\u51E0\u5929\u5728hearth\u5B66\u4E60\u7684\u65F6\u5019\u4E5F\u662F\u7ECF\u5E38\u804A\u5929\uFF0C\u641E\u5F97Will\u90FD\u4E0D\u6EE1\u610F\u4E86\uFF0C\u7ED9\u6211\u53D1\u4E86\u4E00\u4E2A\u201C\u6709\u5F02\u6027\u4E5F\u8981\u6709\u4EBA\u6027\u554A\u201D\uFF0C\u4E00\u8138\u9ED1\u4EBA\u95EE\u53F7hh \u90A3\u65F6\u5019\u542C\u8BF4\u4F60\u5176\u5B9E\u4E0D\u600E\u4E48\u4E0B\u697C\u5B66\u4E60\uFF0C\u4F46\u662F\u6211\u5370\u8C61\u4E2D\u4F60\u6709\u597D\u51E0\u6B21\uFF0C\u6240\u4EE5\u5F53\u65F6\u633A\u53D7\u5BA0\u82E5\u60CA\u7684 \u4F60\u6765\u542C\u6211\u5F39\u94A2\u7434\u7684\u65F6\u5019\u554A \u540E\u6765\u5E2E\u4F60\u4FEE\u7535\u8111\u7684\u65F6\u5019\u554A \u90FD\u89C9\u5F97\u5F88\u5F00\u5FC3\n<br>\n\u90A3\u6BB5\u65F6\u95F4\u8BF4\u662F\u50CF\u4E00\u7F15\u9633\u5149\uFF0C\u662F\u771F\u7684\u6CA1\u6709\u5938\u5F20\u3002\u8FD8\u633A\u597D\u5947\u4F60\u5BF9\u6211\u7B2C\u4E00\u5370\u8C61\u600E\u4E48\u6837\u7684hh\n",
                options: [
                    {
                        html: '不错的hh',
                        color: 'primary',
                        next: 'narrate2g'
                    },
                    {
                        html: '一般',
                        color: 'primary',
                        next: 'narrate2b'
                    },
                ]
            },
            narrate1b: {
                html: "\n\u54C8\u54C8\u54C8\u6211\u5C31\u662F\u665A\u4E0A\u8111\u5B50\u4E0D\u597D\u4F7F\u4E86 \u5199\u4E86\u4E2A\u8FD9\u4E2A\u3002\u4F60\u6709\u7A7A\u5C31\u968F\u4FBF\u770B\u770Bhh\n<br>\n\u4E4B\u524D\u5728cn\u521A\u89C1\u9762\uFF0C\u6CA1\u51E0\u5929\u7684\u65F6\u5019\u653E\u5B66\u5C31\u78B0\u5230\u4F60\u4EEC \u7136\u540EAmy Zoe Catherine\u4ED6\u4EEC\u8D70\u4E86\uFF0C\u5C31\u5269\u4E0B\u6211\u548C\u4F60\u56DEcn\u5403\u4E86\u4E2A\u996D\u3002\u5BF9\u4F60\u7684\u5370\u8C61\u5C31\u662F\u559C\u6B22\u804A\u5929\u8FD8\u5F88\u70ED\u60C5\uFF0C\u5FC3\u91CC\u60F3\u8FD9\u4E48\u840C\u7684\u5973\u751F\u600E\u4E48\u6CA1\u6709\u53BB\u8DDF\u7537\u670B\u53CB\u4E00\u8D77\u5403\u996D\u4E4B\u7C7B\u7684hh \u7136\u540E\u8FC7\u4E86\u51E0\u5929\u5728hearth\u5B66\u4E60\u7684\u65F6\u5019\u4E5F\u662F\u7ECF\u5E38\u804A\u5929\uFF0C\u641E\u5F97Will\u90FD\u4E0D\u6EE1\u610F\u4E86\uFF0C\u7ED9\u6211\u53D1\u4E86\u4E00\u4E2A\u201C\u6709\u5F02\u6027\u4E5F\u8981\u6709\u4EBA\u6027\u554A\u201D\uFF0C\u4E00\u8138\u9ED1\u4EBA\u95EE\u53F7hh \u90A3\u65F6\u5019\u542C\u8BF4\u4F60\u5176\u5B9E\u4E0D\u600E\u4E48\u4E0B\u697C\u5B66\u4E60\uFF0C\u4F46\u662F\u6211\u5370\u8C61\u4E2D\u4F60\u6709\u597D\u51E0\u6B21\uFF0C\u6240\u4EE5\u5F53\u65F6\u633A\u53D7\u5BA0\u82E5\u60CA\u7684 \u4F60\u6765\u542C\u6211\u5F39\u94A2\u7434\u7684\u65F6\u5019\u554A \u540E\u6765\u5E2E\u4F60\u4FEE\u7535\u8111\u7684\u65F6\u5019\u554A \u90FD\u89C9\u5F97\u5F88\u5F00\u5FC3\n<br>\n\u90A3\u6BB5\u65F6\u95F4\u8BF4\u662F\u50CF\u4E00\u7F15\u9633\u5149\uFF0C\u662F\u771F\u7684\u6CA1\u6709\u5938\u5F20\u3002\u8FD8\u633A\u597D\u5947\u4F60\u5BF9\u6211\u7B2C\u4E00\u5370\u8C61\u600E\u4E48\u6837\u7684hh\n",
                options: [
                    {
                        html: '不错的hh',
                        color: 'primary',
                        next: 'narrate2g'
                    },
                    {
                        html: '一般',
                        color: 'primary',
                        next: 'narrate2b'
                    },
                ]
            },
            narrate2g: {
                html: "\n\u771F\u7684\u5417hh \u90A3\u6211\u662F\u771F\u7684\u53D7\u5BA0\u82E5\u60CA\u4E86\u3002\u4E0D\u8FC7\u6211\u4E00\u76F4\u4E0D\u89C9\u5F97\u6709\u4EC0\u4E48\u673A\u4F1A\u7684\u56E0\u4E3A\u4F60\u5BF9\u5F88\u591A\u4EBA\u90FD\u5F88\u70ED\u60C5\u554A\u5F88\u5584\u826F\uFF0C\u6240\u4EE5\u4E5F\u5C31\u6CA1\u600E\u4E48\u591A\u60F3\u3002\u540E\u6765\u542C\u8BF4\u4F60\u8981\u53BBSteve\u7684research\uFF0C\u6691\u5047\u7684\u65F6\u5019\u53C8\u6CA1\u4EC0\u4E48\u522B\u7684\u4EBA\u5728\u591A\u4F26\u591A\uFF0C\u90A3\u65F6\u5019\u5C31\u633A\u60CA\u559C\u7684\u56E0\u4E3A\u501F\u6B64\u673A\u4F1A\u53EF\u4EE5\u5E2E\u5230\u5F88\u591A\u5FD9\uFF0C\u6B63\u597D\u53C8\u662F\u6211\uFF08\u4E3A\u6570\u4E0D\u591A\uFF09\u4F1A\u505A\u7684\u4E8B\u60C5\u3002\u90A3\u65F6\u5019\u6709\u65F6\u5019\u8DDF\u4F60\u5403\u5B8C\u996D\u804A\u5929\uFF0C\u804A\u5230\u4E00\u4E9B\u611F\u60C5\u65B9\u9762\u7684\u65F6\u5019\uFF0C\u4F60\u8BF4\u5230\u4F60\u559C\u6B22\u5404\u79CD\u6210\u719F\u7684\u7537\u751F\uFF0C\u8FD8\u4E0D\u600E\u4E48\u4E56\u7684\uFF0C\u7136\u540E\u4F60\u53C8\u8BF4\u6211\u5404\u79CD\u5355\u7EAF\u4EC0\u4E48\u7684\u65F6\u5019\uFF0C\u5C31\u6709\u70B9\u6F5C\u610F\u8BC6\u7684\u5FC3\u91CC\u5728\u51C9hhh \u4E0D\u8FC7\u6211\u5FC3\u6001\u8FD8\u53EF\u4EE5\u7684\uFF0C\u6BD5\u7ADF\u6211\u80FD\u5E2E\u5230\u5FD9\u5C31\u662F\u8DB3\u591F\u5F00\u5FC3\u7684\u4E8B\u60C5\u4E86\uFF0C\u8FD9\u4E2A\u4F60\u81EA\u5DF1\u7684\u9009\u62E9\u5F53\u7136\u8FD8\u662F\u4F60\u81EA\u5DF1\u7684\u3002\n",
                options: [
                    {
                        html: '暑假过得还可以的',
                        color: 'primary',
                        next: 'narrate3g'
                    },
                    {
                        html: '我还是更想回国待着一点 :)',
                        color: 'primary',
                        next: 'narrate3b'
                    },
                ]
            },
            narrate2b: {
                html: "\n\u54C8\u54C8\u54C8\u6211\u90A3\u65F6\u5019\u4E5F\u633A\u6709\u6BD2\u7684\uFF0C\u81EA\u5DF1\u60F3\u592A\u591A\u800C\u5DF2hh \u540E\u6765\u542C\u8BF4\u4F60\u8981\u53BBSteve\u7684research\uFF0C\u6691\u5047\u7684\u65F6\u5019\u53C8\u6CA1\u4EC0\u4E48\u522B\u7684\u4EBA\u5728\u591A\u4F26\u591A\uFF0C\u90A3\u65F6\u5019\u5C31\u633A\u60CA\u559C\u7684\u56E0\u4E3A\u501F\u6B64\u673A\u4F1A\u53EF\u4EE5\u5E2E\u5230\u5F88\u591A\u5FD9\uFF0C\u6B63\u597D\u53C8\u662F\u6211\uFF08\u4E3A\u6570\u4E0D\u591A\uFF09\u4F1A\u505A\u7684\u4E8B\u60C5\u3002\u90A3\u65F6\u5019\u6709\u65F6\u5019\u8DDF\u4F60\u5403\u5B8C\u996D\u804A\u5929\uFF0C\u804A\u5230\u4E00\u4E9B\u611F\u60C5\u65B9\u9762\u7684\u65F6\u5019\uFF0C\u4F60\u8BF4\u5230\u4F60\u559C\u6B22\u5404\u79CD\u6210\u719F\u7684\u7537\u751F\uFF0C\u8FD8\u4E0D\u600E\u4E48\u4E56\u7684\uFF0C\u7136\u540E\u4F60\u53C8\u8BF4\u6211\u5404\u79CD\u5355\u7EAF\u4EC0\u4E48\u7684\u65F6\u5019\uFF0C\u5C31\u6709\u70B9\u6F5C\u610F\u8BC6\u7684\u5FC3\u91CC\u5728\u51C9hhh \u4E0D\u8FC7\u6211\u5FC3\u6001\u8FD8\u53EF\u4EE5\u7684\uFF0C\u6BD5\u7ADF\u6211\u80FD\u5E2E\u5230\u5FD9\u5C31\u662F\u8DB3\u591F\u5F00\u5FC3\u7684\u4E8B\u60C5\u4E86\uFF0C\u8FD9\u4E2A\u4F60\u81EA\u5DF1\u7684\u9009\u62E9\u5F53\u7136\u8FD8\u662F\u4F60\u81EA\u5DF1\u7684\u3002\n",
                options: [
                    {
                        html: '暑假过得还可以的',
                        color: 'primary',
                        next: 'narrate3g'
                    },
                    {
                        html: '我还是更想回国待着一点 :)',
                        color: 'primary',
                        next: 'narrate3b'
                    },
                ]
            },
            narrate3g: {
                html: "\n\u54C8\u54C8\u6211\u57FA\u672C\u4E0A\u6709\u673A\u4F1A\u5C31\u8DD1\u53BB\u8DDF\u4F60\u4E86\uFF0C\u81EA\u5DF1\u7684\u4E8B\u60C5\u6CA1\u505A\u591A\u5C11\uFF0C\u4E0D\u8FC7\u6211\u613F\u610Fhhh\u3002\n<br>\n\u5176\u5B9E\u5C31\u50CF\u4F60\u4E4B\u524D\u8BF4\u8FC7\u4F60\u6015\u56E0\u4E3A\u670B\u53CB\u8DDF\u4F60\u8868\u767D\u6700\u540E\u5C34\u5C2C\u800C\u5931\u53BB\u670B\u53CB\uFF0C\u6211\u4E5F\u633A\u6015\u56E0\u4E3A\u88AB\u4F60\u77E5\u9053\u4E4B\u540E\u5931\u53BB\u4F60\u8FD9\u4E2A\u670B\u53CB\u7684\uFF0C\u5F53\u65F6\u90A3\u4E48\u60F3\u7684\u5C31\u662F\u6015\u4F60\u5C34\u5C2C\u4E86\u7684\u8BDD\uFF0C\u5C31\u8FDE\u670B\u53CB\u4E4B\u95F4\u7684\u5173\u5FC3\u90FD\u53EF\u80FD\u6CA1\u6709\u4E86\uFF0C\u8FD8\u662F\u4E2A\u633A\u5927\u7684\u98CE\u9669\u7684\u3002\u6240\u4EE5\u5C31\u6CA1\u6709\u6562\u600E\u4E48\u505A\uFF0C\u770B\u8D77\u6765\u4F30\u8BA1\u6002\uFF0C\u4E0D\u8FC7\u6211\u73B0\u5728\u5E94\u8BE5\u770B\u5F97\u66F4\u5F00\u4E00\u4E9B\u4E86\u3002\n<br>\n\u8FD8\u662F\u633A\u611F\u52A8\u7684\uFF0C\u4F60\u6709\u8DDF\u6211\u8BB2\u5F88\u591A\u76F8\u5BF9\u79C1\u4EBA\u7684\u4E00\u4E9B\u4E8B\uFF0C\u4E0D\u7BA1\u4F60\u662F\u4E0D\u662F\u4E5F\u8DDF\u522B\u4EBA\u8BF4\uFF0C\u8FD9\u4E2A\u8FD8\u662F\u8981\u8C22\u8C22\u4F60\u7684hhh\u4ECEcn\u5230\u6691\u5047\u751A\u81F3\u5230\u73B0\u5728\uFF0C\u57FA\u672C\u4E0A\u548C\u4F60\u5728\u4E00\u8D77\u7684\u65F6\u5019\u548C\u56DE\u5FC6\u8D77\u6765\u90FD\u662F\u7279\u522B\u7684\u5F00\u5FC3\uFF0C\u6211\u4E5F\u4E0D\u77E5\u9053\u4E3A\u4EC0\u4E48\u3002\u6240\u4EE5\u4E5F\u5C31\u4E0D\u81EA\u89C9\u5730 \u4F60\u6709\u7EA6\u6211\u4EC0\u4E48\u7684 \u57FA\u672C\u4E0A\u6CA1\u600E\u4E48\u60F3\u6211\u5C31\u90FD\u4F1A\u53BB\u5F97\u4E86 \u6574\u4E2A\u6691\u5047\u9694\u5929\u5C31\u5750\u4E24\u4E2A\u5C0F\u65F6\u5730\u94C1 \u4E5F\u4E00\u70B9\u90FD\u4E0D\u7D2Fhh \u867D\u7136\u6CA1\u80FD\u628A\u4F60\u7EA6\u51FA\u6765\u73A9\u8FC7\u4F46\u662F\u6211\u90FD\u5F88\u77E5\u8DB3\u4E86hh\n",
                options: [
                    {
                        html: '...',
                        color: 'primary',
                        next: 'reveal'
                    },
                ]
            },
            narrate3b: {
                html: "\nhh\u6211\u77E5\u9053\u4F60\u5176\u5B9E\u633A\u60F3\u56DE\u56FD\u7684\uFF0C\u4F60\u8DDF\u6211\u6691\u5047\u5446\u90A3\u4E48\u4E45\u771F\u7684\u96BE\u4E3A\u4F60\u4E86\u54C8\u54C8\u54C8\u3002\n<br>\n\u5176\u5B9E\u5C31\u50CF\u4F60\u4E4B\u524D\u8BF4\u8FC7\u4F60\u6015\u56E0\u4E3A\u670B\u53CB\u8DDF\u4F60\u8868\u767D\u6700\u540E\u5C34\u5C2C\u800C\u5931\u53BB\u670B\u53CB\uFF0C\u6211\u4E5F\u633A\u6015\u56E0\u4E3A\u88AB\u4F60\u77E5\u9053\u4E4B\u540E\u5931\u53BB\u4F60\u8FD9\u4E2A\u670B\u53CB\u7684\uFF0C\u5F53\u65F6\u90A3\u4E48\u60F3\u7684\u5C31\u662F\u6015\u4F60\u5C34\u5C2C\u4E86\u7684\u8BDD\uFF0C\u5C31\u8FDE\u670B\u53CB\u4E4B\u95F4\u7684\u5173\u5FC3\u90FD\u53EF\u80FD\u6CA1\u6709\u4E86\uFF0C\u8FD8\u662F\u4E2A\u633A\u5927\u7684\u98CE\u9669\u7684\u3002\u6240\u4EE5\u5C31\u6CA1\u6709\u6562\u600E\u4E48\u505A\uFF0C\u770B\u8D77\u6765\u4F30\u8BA1\u6002\uFF0C\u4E0D\u8FC7\u6211\u73B0\u5728\u5E94\u8BE5\u770B\u5F97\u66F4\u5F00\u4E00\u4E9B\u4E86\u3002\n<br>\n\u8FD8\u662F\u633A\u611F\u52A8\u7684\uFF0C\u4F60\u6709\u8DDF\u6211\u8BB2\u5F88\u591A\u76F8\u5BF9\u79C1\u4EBA\u7684\u4E00\u4E9B\u4E8B\uFF0C\u4E0D\u7BA1\u4F60\u662F\u4E0D\u662F\u4E5F\u8DDF\u522B\u4EBA\u8BF4\uFF0C\u8FD9\u4E2A\u8FD8\u662F\u8981\u8C22\u8C22\u4F60\u7684hhh \u4ECEcn\u5230\u6691\u5047\u751A\u81F3\u5230\u73B0\u5728\uFF0C\u57FA\u672C\u4E0A\u548C\u4F60\u5728\u4E00\u8D77\u7684\u65F6\u5019\u548C\u56DE\u5FC6\u8D77\u6765\u90FD\u662F\u7279\u522B\u7684\u5F00\u5FC3\uFF0C\u6211\u4E5F\u4E0D\u77E5\u9053\u4E3A\u4EC0\u4E48\u3002\u6240\u4EE5\u4E5F\u5C31\u4E0D\u81EA\u89C9\u5730 \u4F60\u6709\u7EA6\u6211\u4EC0\u4E48\u7684 \u57FA\u672C\u4E0A\u6CA1\u600E\u4E48\u60F3\u6211\u5C31\u90FD\u4F1A\u53BB\u5F97\u4E86 \u6574\u4E2A\u6691\u5047\u9694\u5929\u5C31\u5750\u4E24\u4E2A\u5C0F\u65F6\u5730\u94C1 \u4E5F\u4E00\u70B9\u90FD\u4E0D\u7D2Fhh \u867D\u7136\u6CA1\u80FD\u628A\u4F60\u7EA6\u51FA\u6765\u73A9\u8FC7\u4F46\u662F\u6211\u90FD\u5F88\u77E5\u8DB3\u4E86hh\n",
                options: [
                    {
                        html: '...',
                        color: 'primary',
                        next: 'reveal'
                    },
                ]
            },
            reveal: {
                html: "\n\u5176\u5B9E\u6709\u6BB5\u65F6\u95F4\u6211\u7A81\u7136\u60F3\u7528\u73B0\u5728\u8FD9\u79CD\u795E\u5947\u7684\u73A9\u610F\u8868\u4E2A\u767D\u3002\u53CD\u6B63\u9009\u9879\u4E5F\u4E0D\u4F1A\u88AB\u8BB0\u5F55\uFF0C\u5E94\u8BE5\u4E0D\u4F1A\u7ED9\u4F60\u592A\u5927\u7684\u538B\u529B\u3002\u4E0D\u8FC7\u540E\u6765\u60F3\u60F3\u6015\u4F30\u8BA1\u73A9\u7838\u4E86hhh\uFF0C\u5C31\u6CA1\u6709\u60F3\u4E86\n<br>\n\u54C8\u54C8\u5176\u5B9E\u8FD8\u662F\u6709\u65F6\u5019\u641E\u4E86\u4E9B\u65E0\u804A\u7684\u7EC6\u8282\uFF0C\u4F60\u4E4B\u524D\u8C22\u8C22\u6211\u6559\u4F60\u7684\u65F6\u5019\u6211\u8BF4\u6211\u6B63\u597D\u559C\u6B22\uFF0C\u5176\u5B9E\u6211\u8BF4\u7684\u559C\u6B22\u7684\u4E0D\u5149\u662F\u5199\u7801hh \u7136\u540E\u6700\u8FD1\u4F60\u6709\u4E00\u6B21\u95EE\u6211\u6211\u559C\u6B22\u7684\u4EBA\u662F\u8C01 \u90A3\u6B21\u6211\u5C31\u4E0D\u77E5\u9053\u4EC0\u4E48\u673A\u4F1A\u8BF4\u4E86\u4E00\u4E2A\u5218\u73CF\uFF0C\u672C\u6765\u6253\u7B97\u540E\u6765\u544A\u8BC9\u4F60\uFF0C\u8BF4\u90A3\u4E2A\u4EBA\u7684\u540D\u5B57\u6211\u5DF2\u7ECF\u5F53\u5929\u8BF4\u8FC7\u4E86hh \u672C\u6765\u6253\u7B97\u7ED9\u4F60\u751F\u65E5\u5199\u70B9\u97F3\u4E50\u6765\u7740\uFF0C\u4F46\u662F\u4F60\u5F53\u65F6\u5728\u56FD\u5185\uFF0C\u611F\u89C9\u8FD9\u6837\u505A\u4F1A\u4E0D\u4F1A\u592A\u660E\u663E\u4E86\u3002\u5176\u5B9Eidea\u90FD\u5DF2\u7ECF\u60F3\u597D\u4E86\uFF0C\u5C31\u662F\u6CA1\u6709\u505A\u51FA\u6765\u3002\u3002\u54C8\u54C8\u5F53\u65F6\u8FD8\u662F\u592A\u6002\u4E86\n",
                options: [
                    {
                        html: '原来还有这些事。。',
                        color: 'primary',
                        next: 'askg'
                    },
                    {
                        html: '你想太多了吧',
                        color: 'primary',
                        next: 'askb'
                    },
                ]
            },
            askg: {
                html: "\n\u6CA1\u6709\u5566\uFF0C\u53EA\u662F\u6211\u81EA\u5DF1\u60F3\u5F97\u6709\u70B9\u591A\u800C\u5DF2hh\n<br>\n<br>\n<br>\n<br>\n\u6069\u3002\u3002\u6709\u70B9\u60F3\u95EE\u4E00\u4E2A \u5927\u6982\u7B97\u662F\u4F8B\u884C \u8981\u95EE\u7684\u95EE\u9898\n<br>\n\u90A3\u5C31\u662F\u3002\u3002\u4F60\u559C\u6B22\u6211\u4E48hhh\n",
                options: [
                    {
                        html: '喜欢',
                        color: 'primary',
                        next: 'answergg'
                    },
                    {
                        html: '。。一般吧，再说',
                        color: 'primary',
                        next: 'answergb'
                    },
                ]
            },
            askb: {
                html: "\nhhh\u53EF\u80FD\u5427\u3002\n<br>\n<br>\n<br>\n<br>\n\u6069\u3002\u3002\u6709\u70B9\u60F3\u95EE\u4E00\u4E2A \u5927\u6982\u7B97\u662F\u4F8B\u884C \u8981\u95EE\u7684\u95EE\u9898\n<br>\n\u90A3\u5C31\u662F\u3002\u3002\u4F60\u559C\u6B22\u6211\u4E48hhh\n",
                options: [
                    {
                        html: '喜欢',
                        color: 'primary',
                        next: 'answerbg'
                    },
                    {
                        html: '。。一般吧，再说',
                        color: 'primary',
                        next: 'answerbb'
                    },
                ]
            },
            answergg: {
                html: "\n\u54C8\u54C8\u54C8\u771F\u7684\u5F00\u5FC3\uFF0C\u611F\u89C9\u771F\u7684\u633A\u5E78\u798F\u7684\u3002\u8FD8\u662F\u8981\u8C22\u8C22\u4F60\u54C8\u54C8\u54C8\u54C8\uFF0C\u6211\u633A\u77E5\u8DB3\u7684\u3002Just in case \u4F60\u4E0D\u8981\u6709\u4EC0\u4E48\u538B\u529B\u554Ahh\u3002\u6211\u77E5\u9053\u6211\u81EA\u5DF1\u8FD8\u662F\u6709\u4E9B\u5730\u65B9\u4E0D\u4E00\u5B9A\u5408\u4F60\u7684\u5FC3\u610Fhh \u4E0D\u8FC7\u6211\u662F\u5F88\u613F\u610F\u52AA\u529B\u8FDB\u6B65\u7684 \u8FD9\u4E2A\u6211\u81EA\u5DF1\u672C\u8EAB\u4E5F\u613F\u610F\uFF0C\u6240\u4EE5\u6709\u4EC0\u4E48\u8981\u6C42\u4F60\u5C31\u5C3D\u7BA1\u8BF4\u4E86hh\n<br>\n\u5B66\u671F\u5F00\u59CB\u4E4B\u540E\uFF0C\u6211\u4EEC\u90FD\u4F1A\u633A\u5FD9\u7684\u3002\u8981\u662F\u611F\u89C9\u5B66\u4E60\u4E0A\u6709\u4EC0\u4E48\u538B\u529B\u7684\u8BDD\u4E0D\u7528\u62C5\u5FC3\u8FD9\u8FB9\u7684\uFF0C\u5927\u5BB6\u90FD\u5FD9\uFF0C\u6211\u662F\u5F88\u7406\u89E3\u7684hh\u3002\u8981\u662F\u5F71\u54CD\u5230\u4F60\u5B66\u4E60\u90A3\u6211\u5C31\u771F\u7684\u6127\u759A\u4E86\u3002\u7136\u540E\u6709\u4EC0\u4E48\u60F3\u6CD5\u4E4B\u7C7B\u7684\u4E5F\u90FD\u8BF4 \u4E0D\u7528\u6015\u7684\uFF0C\u6211\u5F88\u5584\u89E3\u4EBA\u610F\u7684\u54C8\u54C8\u54C8\u3002\n<br>\n\u751F\u65E5\u7684\u97F3\u4E50 \u6211\u4F1A\u627E\u673A\u4F1A\u505A\u51FA\u6765\u7684hh\n",
                options: [
                    {
                        html: '知道了知道了，还不赶紧给密码',
                        color: 'primary',
                        next: 'keyg'
                    },
                ]
            },
            answergb: {
                html: "\n\u6069\u6211\u7406\u89E3\u7684\uFF0C\u6BD5\u7ADF\u4F60\u4E5F\u8BF4\u8FC7\u591A\u770B\u4E00\u770B\u3002\u4E3B\u8981\u8FD8\u662F\u5E0C\u671B\u4F60\u597D\uFF0C\u6240\u4EE5\u4F60\u6700\u540E\u600E\u4E48\u60F3\u53EA\u8981\u662F\u4F60\u89C9\u5F97\u4F60\u613F\u610F\uFF0C\u90A3\u5C31\u522B\u592A\u62C5\u5FC3\u6211\u8FD9\u8FB9hh\u3002\u6709\u4E9B\u4EC0\u4E48\u4E0D\u6EE1\u610F\u7684\u6211\u4E5F\u662F\u5F88\u613F\u610F\u8FDB\u6B65\u7684 \u6240\u4EE5\u6709\u4EC0\u4E48\u8981\u6C42\u4F60\u4E5F\u53EF\u4EE5\u5C3D\u7BA1\u8BF4 \u8FD8\u662F\u8C22\u8C22\uFF0C\u4E00\u76F4\u4EE5\u6765\u771F\u7684\u662F\u7ED9\u6211\u5E26\u6765\u633A\u591A\u5F00\u5FC3\u7684\u8BB0\u5FC6\u7684\u3002\n<br>\n\u5B66\u671F\u5F00\u59CB\u4E4B\u540E\uFF0C\u6211\u4EEC\u90FD\u4F1A\u633A\u5FD9\u7684\u3002\u8981\u662F\u611F\u89C9\u5B66\u4E60\u4E0A\u6709\u4EC0\u4E48\u538B\u529B\u7684\u8BDD\u4E0D\u7528\u62C5\u5FC3\u8FD9\u8FB9\u7684\uFF0C\u5927\u5BB6\u90FD\u5FD9\uFF0C\u6211\u662F\u5F88\u7406\u89E3\u7684hh\u3002\u8981\u662F\u5F71\u54CD\u5230\u4F60\u5B66\u4E60\u90A3\u6211\u5C31\u771F\u7684\u6127\u759A\u4E86\u3002\u7136\u540E\u6709\u4EC0\u4E48\u60F3\u6CD5\u4E4B\u7C7B\u7684\u4E5F\u90FD\u8BF4 \u4E0D\u7528\u6015\u7684\uFF0C\u6211\u5F88\u5584\u89E3\u4EBA\u610F\u7684\u54C8\u54C8\u54C8\u3002\n<br>\n\u751F\u65E5\u7684\u97F3\u4E50 \u6211\u4F1A\u627E\u673A\u4F1A\u505A\u51FA\u6765\u7684hh\n",
                options: [
                    {
                        html: '知道了知道了，还不赶紧给密码',
                        color: 'primary',
                        next: 'keyb'
                    },
                ]
            },
            answerbg: {
                html: "\n\u54C8\u54C8\u54C8\u771F\u7684\u5F00\u5FC3\uFF0C\u611F\u89C9\u771F\u7684\u633A\u5E78\u798F\u7684\u3002\u8FD8\u662F\u8981\u8C22\u8C22\u4F60\u54C8\u54C8\u54C8\u54C8\uFF0C\u6211\u633A\u77E5\u8DB3\u7684\u3002Just in case \u4F60\u4E0D\u8981\u6709\u4EC0\u4E48\u538B\u529B\u554Ahh\u3002\u6211\u77E5\u9053\u6211\u81EA\u5DF1\u8FD8\u662F\u6709\u4E9B\u5730\u65B9\u4E0D\u4E00\u5B9A\u5408\u4F60\u7684\u5FC3\u610Fhh \u4E0D\u8FC7\u6211\u662F\u5F88\u613F\u610F\u52AA\u529B\u8FDB\u6B65\u7684 \u8FD9\u4E2A\u6211\u81EA\u5DF1\u672C\u8EAB\u4E5F\u613F\u610F\uFF0C\u6240\u4EE5\u6709\u4EC0\u4E48\u8981\u6C42\u4F60\u5C31\u5C3D\u7BA1\u8BF4\u4E86hh\n<br>\n\u5B66\u671F\u5F00\u59CB\u4E4B\u540E\uFF0C\u6211\u4EEC\u90FD\u4F1A\u633A\u5FD9\u7684\u3002\u8981\u662F\u611F\u89C9\u5B66\u4E60\u4E0A\u6709\u4EC0\u4E48\u538B\u529B\u7684\u8BDD\u4E0D\u7528\u62C5\u5FC3\u8FD9\u8FB9\u7684\uFF0C\u5927\u5BB6\u90FD\u5FD9\uFF0C\u6211\u662F\u5F88\u7406\u89E3\u7684hh\u3002\u8981\u662F\u5F71\u54CD\u5230\u4F60\u5B66\u4E60\u90A3\u6211\u5C31\u771F\u7684\u6127\u759A\u4E86\u3002\u7136\u540E\u6709\u4EC0\u4E48\u60F3\u6CD5\u4E4B\u7C7B\u7684\u4E5F\u90FD\u8BF4 \u4E0D\u7528\u6015\u7684\uFF0C\u6211\u5F88\u5584\u89E3\u4EBA\u610F\u7684\u54C8\u54C8\u54C8\u3002\n",
                options: [
                    {
                        html: '知道了知道了，还不赶紧给密码',
                        color: 'primary',
                        next: 'keyg'
                    },
                ]
            },
            answerbb: {
                html: "\n\u6069\u6211\u7406\u89E3\u7684\uFF0C\u6BD5\u7ADF\u4F60\u4E5F\u8BF4\u8FC7\u591A\u770B\u4E00\u770B\u3002\u4E3B\u8981\u8FD8\u662F\u5E0C\u671B\u4F60\u597D\uFF0C\u6240\u4EE5\u4F60\u6700\u540E\u600E\u4E48\u60F3\u53EA\u8981\u662F\u4F60\u89C9\u5F97\u4F60\u613F\u610F\uFF0C\u90A3\u5C31\u522B\u592A\u62C5\u5FC3\u6211\u8FD9\u8FB9hh\u3002\u6709\u4E9B\u4EC0\u4E48\u4E0D\u6EE1\u610F\u7684\u6211\u4E5F\u662F\u5F88\u613F\u610F\u8FDB\u6B65\u7684 \u6240\u4EE5\u6709\u4EC0\u4E48\u8981\u6C42\u4F60\u4E5F\u53EF\u4EE5\u5C3D\u7BA1\u8BF4 \u8FD8\u662F\u8C22\u8C22\uFF0C\u4E00\u76F4\u4EE5\u6765\u771F\u7684\u662F\u7ED9\u6211\u5E26\u6765\u633A\u591A\u5F00\u5FC3\u7684\u8BB0\u5FC6\u7684\u3002\n<br>\n\u5B66\u671F\u5F00\u59CB\u4E4B\u540E\uFF0C\u6211\u4EEC\u90FD\u4F1A\u633A\u5FD9\u7684\u3002\u8981\u662F\u611F\u89C9\u5B66\u4E60\u4E0A\u6709\u4EC0\u4E48\u538B\u529B\u7684\u8BDD\u4E0D\u7528\u62C5\u5FC3\u8FD9\u8FB9\u7684\uFF0C\u5927\u5BB6\u90FD\u5FD9\uFF0C\u6211\u662F\u5F88\u7406\u89E3\u7684hh\u3002\u8981\u662F\u5F71\u54CD\u5230\u4F60\u5B66\u4E60\u90A3\u6211\u5C31\u771F\u7684\u6127\u759A\u4E86\u3002\u7136\u540E\u6709\u4EC0\u4E48\u60F3\u6CD5\u4E4B\u7C7B\u7684\u4E5F\u90FD\u8BF4 \u4E0D\u7528\u6015\u7684\uFF0C\u6211\u5F88\u5584\u89E3\u4EBA\u610F\u7684\u54C8\u54C8\u54C8\u3002\n",
                options: [
                    {
                        html: '知道了知道了，还不赶紧给密码',
                        color: 'primary',
                        next: 'keyb'
                    },
                ]
            },
            keyg: {
                html: "\n\u603B\u800C\u8A00\u4E4B\u603B\u800C\u8A00\u4E4B\uFF0C\u4F60\u7684\u5BC6\u7801\u662F\uFF1A<b>\u6211\u559C\u6B22\u4F60</b>\n<br>\n\u54C8\u54C8\u54C8jks\uFF0C\u4F60\u8981\u662F\u4E0D\u60F3\u8BF4\u8FD9\u4E2A\uFF0C\u4F60\u5C31\u8BF4\uFF1A\n<br>\n<br>\n<b>\u8981\u4EB2\u4EB2\u8981\u62B1\u62B1\u8981\u4E3E\u9AD8\u9AD8</b>\n<br>\n<br>\n\u8FD9\u8BDD\u767E\u770B\u4E0D\u538C\uFF0C\u5F88\u9002\u5408\u5F53\u5BC6\u7801 :) \u3002\n",
                options: []
            },
            keyb: {
                html: "\n\u603B\u800C\u8A00\u4E4B\u603B\u800C\u8A00\u4E4B\uFF0C\u7ED9\u4F60\u5BC6\u7801\uFF1A\n<br>\n<br>\n<b>\u53C8\u7F8E\u53C8\u53EF\u7231\u53C8\u6709\u6587\u5316\u7684Vicky</b>\n<br>\n<br>\n\u54C8\u54C8\u54C8\u54C8\u6211\u7B49\u7740\u4F60\u7684\u5BC6\u7801\u54E6\u3002\n",
                options: []
            },
        };
        this.current_node = this.nodes.start;
    }
    HomePage.prototype.toggle_music = function () {
        if (this.music_on) {
            this.music.nativeElement.pause();
            this.music_on = false;
        }
        else {
            this.music.nativeElement.play();
            this.music_on = true;
        }
    };
    HomePage.prototype.change_node = function (node_name) {
        this.current_node = this.nodes[node_name];
        if (this.music_on) {
            this.music.nativeElement.play();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('music'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "music", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\data\projects\new\creations\2018 Dialog\dialog\src\pages\home\home.html"*/'<audio #music autoplay loop src="assets/music/bgm.mp3"></audio>\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n    <ion-icon color="primary" name="heart"></ion-icon>\n    </ion-title>\n    <ion-buttons right>\n      <button icon-only (click)="toggle_music()">\n        <ion-icon [color]="music_on ? \'secondary\' : \'danger\'" name="musical-notes"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p [innerHTML]="current_node.html">\n  </p>\n</ion-content>\n  \n<ion-footer>\n  <ion-toolbar>\n    <button ion-button block [color]="option.color" *ngFor="let option of current_node.options" (click)="change_node(option.next)" [innerHTML]="option.html">\n    </button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"D:\data\projects\new\creations\2018 Dialog\dialog\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\data\projects\new\creations\2018 Dialog\dialog\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\data\projects\new\creations\2018 Dialog\dialog\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map