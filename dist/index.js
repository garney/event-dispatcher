'use strict';function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var EventDispatcher=function(){function a(){_classCallCheck(this,a),this.listeners={}}return _createClass(a,[{key:"addEventListener",value:function(a,b){var c=this;return new Promise(function(d){var e=c.listeners[a]||[];e.push(b),c.listeners[a]=e,d()})}},{key:"dispatchEvent",value:function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];var e=this;return new Promise(function(b){var d=e.listeners[a];d?d.forEach(function(a){a.apply(null,c)}):b(!1)})}}]),a}();module.exports=EventDispatcher;
