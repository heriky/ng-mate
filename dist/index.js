!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("angular"));else if("function"==typeof define&&define.amd)define(["angular"],t);else{var n=t("object"==typeof exports?require("angular"):e.angular);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=30)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.querySelector("[ng-app]")||document.documentElement,t=i.default.element(e).injector();if(t)return t;for(var n=e.childNodes,r=0;r<n.length;r++){var u=o(n[r]);if(u)return u}return null}Object.defineProperty(t,"__esModule",{value:!0}),t.getInjector=o;var u=n(0),i=r(u),a=n(16),l=r(a),c=null;t.default=c,(0,l.default)(t,"default",function(){return c||(c=o())})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.EventBus=t.genResource=t.getInjector=t.Animation=t.Deferred=t.ModuleHelper=t.FactoryCreator=void 0;var o=n(14);Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var u=n(18),i=r(u),a=n(19),l=r(a),c=n(15),s=r(c),f=n(8),d=r(f),p=n(1),y=n(20),h=r(y),v=n(17),b=r(v);t.FactoryCreator=i.default,t.ModuleHelper=l.default,t.Deferred=s.default,t.Animation=d.default,t.getInjector=p.getInjector,t.genResource=h.default,t.EventBus=b.default},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(){function e(t,n,o,u){r(this,e),this._$transclude=t,this._$element=n,this._$compile=o,this._$scope=u}return o(e,[{key:"$onInit",value:function(){this.validateProps(),this.handleStyle(),this.handleClassName(),this.gap&&this.handleGap()}},{key:"handleStyle",value:function(){this.styleObj=this.styleObj||{},this.vAlign&&(this.styleObj.alignItems=this.vAlign),this.hAlign&&(this.styleObj.justifyContent=this.hAlign)}},{key:"handleClassName",value:function(){this.mixedClassName=this.className?"__group "+this.className:"__group"}},{key:"handleGap",value:function(){var e=this,t=this._$element[0].firstChild;t.style.display="none",setTimeout(function(){var n=e.gap,r=e._$element[0].firstChild.children;Array.from(r).slice(0,-1).forEach(function(t){e.setGap(t,n)}),t.style.display="flex"})}},{key:"setGap",value:function(e,t){e.style.marginRight||(e.style.marginRight=t+"px")}},{key:"validateProps",value:function(){var e=this.vAlign,t=void 0===e?"":e,n=this.hAlign,r=void 0===n?"":n,o=this.styleObj,u=void 0===o?{}:o,i=this.className,a=void 0===i?"":i,l=this.gap,c=void 0===l?0:l;if("string"!=typeof t)throw new Error("v-align属性必须为string类型");if("string"!=typeof r)throw new Error("h-align属性必须为string类型");if("string"!=typeof a)throw new Error("className属性必须为string类型");if("[object Object]"!==Object.prototype.toString.call(u))throw new Error("style-obj属性必须为Object类型");if("number"!=typeof c)throw new Error("gap属性必须为number类型")}}]),e}();t.default=u},function(e,t){e.exports="<div ng-class=$ctrl.mixedClassName ng-style=$ctrl.styleObj ng-transclude>\r\n     \x3c!-- <ng-transclude></ng-transclude> --\x3e\r\n</div>"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),u=n(26);t.default=o.default.module("mate.components.ui",[u.HGroup,u.VGroup,u.Group]).name},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Mixins=void 0;var r=n(29),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.Mixins=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setByProps=t.getByProps=void 0;var r=n(31);t.getByProps=r.getByProps,t.setByProps=r.setByProps},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=void 0,o=void 0;r=void 0===window.onanimationend&&void 0!==window.onwebkitanimationend?"webkitAnimationEnd animationend":"animationend",o=void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend?"webkitTransitionEnd transitionend":"transitionend";var u=[r,o].join(" ").split(" "),i=function(){};t.default={addClass:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];u.forEach(function(o){e.addEventListener(o,function(){r&&e.classList.remove(t),n()},!1)}),e.classList.add(t)},removeClass:function(e,t,n){u.forEach(function(t){e.addEventListener(t,n,!1)}),e.classList.remove(t)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(32),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300,t=arguments[1],n=arguments[2];return function(r,u,i){if(!i)throw new Error("can not use Debounce decorator with a constructor!");var a=i.value||r[u],l=null,c=null;return i.value=function(){for(var r=this,u=arguments.length,i=Array(u),s=0;s<u;s++)i[s]=arguments[s];l=l||o.default.get("$timeout"),l.cancel(c),c=l(function(){c=null,a.apply(t||r,i)},e,n)},i}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n,r,u){if(!u)throw new Error("can not use Delay decorator with a constructor!");var i=u.value||n[r],a=null;return u.value=function(){for(var n=this,r=arguments.length,u=Array(r),l=0;l<r;l++)u[l]=arguments[l];(a=a||o.default.get("$timeout"))(function(){i.apply(n,u)},e,t)},u}}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=["arguments","caller"],u=["name","prototype","length"].concat(o);t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,n,o){if(o)throw new Error("can not use Inject decorator with a non-constructor!");var i=e,a=function e(){for(var n=this,o=arguments.length,u=Array(o),a=0;a<o;a++)u[a]=arguments[a];r(this,e),t.forEach(function(e,t){return n["_"+e]=u[t]}),Object.assign(i.prototype,this);var l=new(Function.prototype.bind.apply(i,[null].concat(u)));return Object.keys(this).forEach(function(e){i.prototype.propertyIsEnumerable(e)&&delete i.prototype[e],l.hasOwnProperty(e)||(l[e]=n[e])}),l};return Object.getOwnPropertyNames(e).forEach(function(t){-1===u.indexOf(t)&&(a[t]=e[t])}),a.$inject=t,a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments[1];return function(n,r,o){if(!o)throw new Error("can not use Throttle decorator with a constructor!");var u=o.value||n[r],i=void 0;return o.value=function(){var n=Date.now();if(!i||n-i>e){for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];u.apply(t||this,o),i=n}},o}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Delay=t.Debounce=t.Throttle=t.Bind=t.Inject=void 0;var o=n(12),u=r(o),i=n(9),a=r(i),l=n(13),c=r(l),s=n(10),f=r(s),d=n(11),p=r(d);t.Inject=u.default,t.Bind=a.default,t.Throttle=c.default,t.Debounce=f.default,t.Delay=p.default},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(){function e(){var t=this;r(this,e),this.promise=new Promise(function(e,n){t._resolve=e,t._reject=n})}return o(e,[{key:"resolve",value:function(e){this._resolve.call(this.promise,e)}},{key:"reject",value:function(e){this._reject.call(this.promise,e)}}]),e}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){Object.defineProperty(e,t,{get:function(){return n.apply(this)}})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(21),o={};t.default={on:function(e,t){return(o[e]=o[e]||[]).push(t),this.off.bind(this,e,t)},once:function(e,t){var n=this,r=function r(){for(var o=arguments.length,u=Array(o),i=0;i<o;i++)u[i]=arguments[i];n.off(e,r),t.apply(null,u)};return this.on(e,r)},off:function(e,t){var n=o[e];if(t){var r=n.indexOf(t);~r&&(n[r]=null)}else n.length=0;return this},dispatch:function(e){for(var t=0,n=o[e]||[],u=arguments.length,i=Array(u>1?u-1:0),a=1;a<u;a++)i[a-1]=arguments[a];for(;t<n.length;){var l=n[t];null===l?n.splice(t,1):((0,r.isFunction)(l)?l.apply(null,i):console.error("事件总线分发 %s 消息失败，注册的listener不是函数类型！",e),t++)}return this},getListeners:function(e){return o[e]||[]}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=["apply","arguments","bind","call","caller","constructor","Symbol"];t.default={create:function(e){function t(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];var u=new(Function.prototype.bind.apply(e,[null].concat(n))),i=Object.getPrototypeOf(u);return Object.getOwnPropertyNames(i).forEach(function(e){if(-1===r.indexOf(e)){var t=i[e];"function"==typeof t&&(i[e]=t.bind(u))}}),u}return console.warn("FactoryCreator.create 方法将在下一版本废弃,请尽快使用别的替代解决方案!(迁移指南:https://github.com/kuitos/angular-es-utils/blob/master/src/factory-creator/README.md)"),t.$inject=e.$inject||[],t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={get:function(e,t){try{return o.default.module(e)}catch(n){return o.default.module(e,t)}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){d=e}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHttpConfigs=t.COMMON_HEADERS=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.setApiPrefix=o;var i=n(0),a=r(i),l=n(33),c=r(l),s=n(1),f=r(s),d="",p=t.COMMON_HEADERS={"Cache-Control":"no-cache","X-Requested-With":"https://github.com/kuitos"},y=t.defaultHttpConfigs={headers:{},interceptor:{}};t.default=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments[5],l=a.default.merge({},{headers:p},y,o);Object.keys(r).forEach(function(e){r[e]=a.default.merge({},l,r[e])});var s={get:u({method:"GET",cache:t},l),query:u({method:"GET",isArray:!0,cache:t},l),save:u({method:"POST",cache:t},l),update:u({method:"PUT",cache:t},l),patch:u({method:"PATCH",cache:t},l),remove:u({method:"DELETE",cache:t},l),delete:u({method:"DELETE",cache:t},l)};return(0,c.default)({},function(){return f.default.get("$resource")(d+e,n,u({},s,r),i)})}},function(e,t,n){"use strict";function r(e){return!(p<=11)&&("function"==typeof e&&/^(?:class\s|constructor\()/.test(Function.prototype.toString.call(e)))}function o(){return"number"==typeof value}function u(e){return"[object RegExp]"===y.call(e)}function i(e){return null!=e&&("object"===(void 0===e?"undefined":d(e))||"function"==typeof e)}function a(e){return"string"==typeof e}function l(e){return"function"==typeof e}function c(e){return!!e&&"function"==typeof e.then}function s(e){return!(!e||!(e.nodeName||e.prop&&e.attr&&e.find))}function f(e){return void 0!==e}Object.defineProperty(t,"__esModule",{value:!0});var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.isClass=r,t.isNumber=o,t.isRegExp=u,t.isObject=i,t.isString=a,t.isFunction=l,t.isPromiseLike=c,t.isElement=s,t.isDefined=f;var p=window.document.documentMode,y=Object.prototype.toString;t.isArray=Array.isArray},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a,l=n(3),c=function(e){return e&&e.__esModule?e:{default:e}}(l),s=n(2),f=(i=(0,s.Inject)("$transclude","$element","$compile","$scope"))(a=function(e){function t(e,n,u,i){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,u,i))}return u(t,e),t}(c.default))||a;t.default=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),u=r(o),i=n(4),a=r(i),l=n(22),c=r(l),s={controller:c.default,template:a.default,bindings:{vAlign:"@?",hAlign:"@?",styleObj:"<?",className:"@",gap:"<?"},transclude:!0};t.default=u.default.module("mate.components.ui.Group",[]).component("group",s).name},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(3),s=function(e){return e&&e.__esModule?e:{default:e}}(c),f=n(2),d=(i=(0,f.Inject)("$transclude","$element","$compile","$scope"))(a=function(e){function t(e,n,u,i){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,u,i))}return u(t,e),l(t,[{key:"handleClassName",value:function(){this.mixedClassName=this.className?"__hgroup "+this.className:"__hgroup"}}]),t}(s.default))||a;t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),u=r(o),i=n(4),a=r(i),l=n(24),c=r(l),s={controller:c.default,template:a.default,bindings:{vAlign:"@?",hAlign:"@?",styleObj:"<?",className:"@",gap:"<?"},transclude:!0};t.default=u.default.module("mate.components.ui.HGroup",[]).component("hGroup",s).name},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Group=t.VGroup=t.HGroup=void 0;var o=n(25),u=r(o),i=n(28),a=r(i),l=n(23),c=r(l);n(34),t.HGroup=u.default,t.VGroup=a.default,t.Group=c.default},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(3),s=function(e){return e&&e.__esModule?e:{default:e}}(c),f=n(2),d=(i=(0,f.Inject)("$transclude","$element","$compile","$scope"))(a=function(e){function t(e,n,u,i){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,u,i))}return u(t,e),l(t,[{key:"handleStyle",value:function(e){this.styleObj=this.styleObj||{},this.vAlign&&(this.styleObj.justifyContent=this.vAlign),this.hAlign&&(this.styleObj.alignItems=this.hAlign)}},{key:"handleClassName",value:function(){this.mixedClassName=this.className?"__vgroup "+this.className:"__vgroup"}},{key:"setGap",value:function(e,t){e.style.marginBottom||(e.style.marginBottom=t+"px")}}]),t}(s.default))||a;t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),u=r(o),i=n(4),a=r(i),l=n(27),c=r(l),s={controller:c.default,template:a.default,bindings:{vAlign:"@?",hAlign:"@?",styleObj:"<?",className:"@",gap:"<?"},transclude:!0};t.default=u.default.module("mate.components.ui.VGroup",[]).component("vGroup",s).name},function(e,t,n){"use strict";function r(e){var t=null;return function(){return t||(t=new e)}}function o(e){return"[object Object]"===Object.prototype.toString.apply(e)}function u(e){if("function"!=typeof e&&!o(e)&&!Array.isArray(e))throw new Error("只能传入类、实例对象或者他们的类数组😳");var t=Array.isArray(e)?e:[e];return function(e){var n=!0,u=!1,a=void 0;try{for(var l,c=t[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var s=l.value,f=o()?s:r(s)();i(e.prototype,f),i(e.prototype,s.prototype)}}catch(e){u=!0,a=e}finally{try{!n&&c.return&&c.return()}finally{if(u)throw a}}}}function i(e,t){var n=!0,r=!1,o=void 0;try{for(var u,i=Reflect.ownKeys(t)[Symbol.iterator]();!(n=(u=i.next()).done);n=!0){var a=u.value;["__proto__","constructor"].includes(a)||void 0===e[a]&&(e[a]=t[a])}}catch(e){r=!0,o=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw o}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.setByProps=t.getByProps=t.Mixins=void 0;var o=n(0),u=r(o),i=n(5),a=r(i),l=n(6),c=n(7),s=u.default.module("mate.components",[a.default]);t.default=s.name,t.Mixins=l.Mixins,t.getByProps=c.getByProps,t.setByProps=c.setByProps},function(e,t,n){"use strict";function r(e,t,n){for(var r=n,o=e.split("."),u=0;u<o.length;u++){var i=o[u];if(u===o.length-1){r[i]=t;break}null==r[i]&&(r[i]={}),r=r[i]}}function o(e,t){return e.split(".").reduce(function(e,t){return e[t]},t)}Object.defineProperty(t,"__esModule",{value:!0}),t.setByProps=r,t.getByProps=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if(!n)throw new Error("can not use Bind decorator with a constructor!");var r=n.value||e[t],o="__"+r+"Fn__";return delete n.value,delete n.writable,n.set=function(e){this[o]=e},n.get=function(){return this[o]||(this[o]=r.bind(this))},n}},function(e,t,n){"use strict";function r(e,t){return new Proxy(e,o(e,t))}var o=function(e,t){var n=!1,r=null,o=function(e){n||(r=t(e),n=!0)},u=function(e,t){return o(e),r[t]},i=function(e,t,n){return o(e),r.apply(t,n)};return"function"==typeof e?{get:u,apply:i}:{get:u}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t){}])});