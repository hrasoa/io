var Io=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function e(t,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),"undefined"!=typeof window&&window.IntersectionObserver?new window.IntersectionObserver(t,n):null}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getEntryId=u,t.getUniq=c,t.default=void 0;var i,r=(i=n(0))&&i.__esModule?i:{default:i};function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a={observer:{},once:!0,onIntersection:null,delay:800,intersectionTime:250};function u(){return"io-".concat(c())}function c(){return Math.random().toString(36).substr(2,9)}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=o({},a,t),this.entries={},this.api=new r.default(this.handleIntersection.bind(this),this.options.observer)}var t,n,i;return t=e,(n=[{key:"handleIntersection",value:function(e){for(var t=e.length-1;t>=0;t-=1)this.handleEntryIntersection(e[t])}},{key:"handleEntryIntersection",value:function(e){var t=e.target,n=e.isIntersecting,i=e.time,r=t.getAttribute("data-io-id"),s=o({},this.options,this.entries[r].options);this.entries[r][n?"lastIn":"lastOut"]=i;var a=this.entries[r],u=a.lastIn,c=void 0===u?0:u,l=a.lastOut,f=void 0===l?0:l;n&&(this.entries[r].timerId=setTimeout(this.onIntersection.bind(this,e,s),s.delay)),!n&&c-f<s.intersectionTime&&clearTimeout(this.entries[r].timerId)}},{key:"onIntersection",value:function(e,t){t.onIntersection&&t.onIntersection(e),!0===t.once&&this.unobserve(e.target)}},{key:"unobserve",value:function(e){this.api&&(delete this.entries[e.getAttribute("data-io-id")],this.api.unobserve(e))}},{key:"disconnect",value:function(){this.api&&this.api.disconnect()}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.api){var n=u();this.entries[n]={options:t},e.setAttribute("data-io-id",n),this.api.observe(e)}}}])&&s(t.prototype,n),i&&s(t,i),e}();t.default=l},function(e,t,n){e.exports=n(1).default}]);