(function(e){function t(t){for(var r,s,o=t[0],l=t[1],c=t[2],p=0,v=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&v.push(i[s][0]),i[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(v.length)v.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(r=!1)}r&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},i={app:0},n=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0757":function(e,t,a){},"0ba7":function(e,t,a){"use strict";a("44f3")},3415:function(e,t,a){e.exports=a.p+"img/Netflix-logo.0abf47e3.png"},"382a":function(e,t,a){"use strict";a("0757")},"44f3":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("7b17"),a("ab8b"),a("15f5");var r=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header",{on:{search:function(t){e.searchMovies(t),e.searchSeries(t)}}}),a("Main",{attrs:{movies:e.moviesFiltered,popular:e.popular,series:e.series}})],1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"d-flex justify-content-between align-items-center"},[a("div",{staticClass:"content-header  "},[e._m(0),a("div",{staticClass:"right-header d-flex"},[a("div",{staticClass:"search-bar"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchString,expression:"searchString"}],attrs:{type:"text",placeholder:"search"},domProps:{value:e.searchString},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.$emit("search",e.searchString)},input:function(t){t.target.composing||(e.searchString=t.target.value)}}})]),e._m(1)])])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"left-header "},[r("div",{staticClass:"logo"},[r("img",{attrs:{src:a("3415"),alt:"logo"}})]),r("div",{staticClass:"menu-content d-flex justify-content-between"},[r("div",[r("a",{attrs:{href:"#"}},[e._v("blabbla")])]),r("div",[r("a",{attrs:{href:"#"}},[e._v("blabbla")])]),r("div",[r("a",{attrs:{href:"#"}},[e._v("blabbla")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menu-content"},[a("div",[a("a",{attrs:{href:"#"}},[e._v("blabbla")])])])}],l={name:"Header",data:function(){return{searchString:""}}},c=l,u=(a("0ba7"),a("2877")),p=Object(u["a"])(c,s,o,!1,null,"60ec4180",null),v=p.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("div",{staticClass:"movies-container container"},[a("div",{staticClass:"row"},[0===e.movies.length&&0===e.series.length?a("div",[a("h2",[e._v("POPULAR")]),a("div",{staticClass:"d-flex flex-wrap"},e._l(e.popular,(function(e){return a("Movie",{key:e.id,attrs:{title:e.title,original_title:e.original_title,original_language:e.original_language,vote_average:e.vote_average,poster_path:e.poster_path}})})),1)]):a("div",[a("h2",[e._v("MOVIES")]),a("div",{staticClass:"d-flex flex-wrap"},e._l(e.movies,(function(e){return a("Movie",{key:e.id,attrs:{title:e.title,original_title:e.original_title,original_language:e.original_language,vote_average:e.vote_average,poster_path:e.poster_path}})})),1),a("h2",[e._v("SERIES")]),a("div",{staticClass:"d-flex flex-wrap"},e._l(e.series,(function(e){return a("Movie",{key:e.id,attrs:{title:e.name,original_title:e.original_name,original_language:e.original_language,vote_average:e.vote_average,poster_path:e.poster_path}})})),1)])])])])},d=[],g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"movies-card col-3"},[a("div",{staticClass:"img-container",style:"background-image:url("+e.getPoster(e.poster_path)+")"},[a("div",{staticClass:"info-movies "},[a("div",{staticClass:"title"},[e._v(e._s(e.title))]),a("div",{staticClass:"original-title"},[e._v(e._s(e.original_title))]),a("div",{staticClass:"vote-average"},[e._v(e._s(e.vote_average))]),a("div",{staticClass:"star-container"},e._l(5,(function(t){return a("i",{key:t,staticClass:"fa-star ",class:t<=e.starVoted?"fas":"far"})})),0)])])])},h=[],_=(a("a9e3"),{name:"Movie",data:function(){return{starVoted:Math.round(this.vote_average/2)}},props:{image:String,poster_path:String,title:String,original_title:String,original_language:String,vote_average:Number},methods:{getPoster:function(e){return"https://image.tmdb.org/t/p/w500/".concat(e)}}}),m=_,b=(a("382a"),Object(u["a"])(m,g,h,!1,null,"e253701a",null)),y=b.exports,x={name:"Main",components:{Movie:y},props:{movies:Array,popular:Array,series:Array}},C=x,S=(a("614f"),Object(u["a"])(C,f,d,!1,null,"f73879ee",null)),w=S.exports,O=a("bc3a"),k=a.n(O),M={name:"App",components:{Header:v,Main:w},data:function(){return{popular:[],moviesFiltered:[],series:[]}},created:function(){var e=this;k.a.get("https://api.themoviedb.org/3/movie/popular?api_key=a53522894d1bbda81e60114afc99aada").then((function(t){e.popular=t.data.results,e.moviesFiltered=t.data.results,console.log(e.popular)}))},methods:{searchMovies:function(e){var t=this;0!=e.length?k.a.get("https://api.themoviedb.org/3/search/movie?api_key=a53522894d1bbda81e60114afc99aada&query=".concat(e)).then((function(e){t.moviesFiltered=e.data.results,console.log(t.moviesFiltered)})):this.moviesFiltered=this.popular},searchSeries:function(e){var t=this;console.log("series mi vedi?"),k.a.get("https://api.themoviedb.org/3/search/tv?api_key=a53522894d1bbda81e60114afc99aada&query=".concat(e)).then((function(e){t.series=e.data.results,console.log(t.series)}))}}},j=M,P=(a("5c0b"),Object(u["a"])(j,i,n,!1,null,null,null)),E=P.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(E)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"614f":function(e,t,a){"use strict";a("f94c")},"9c0c":function(e,t,a){},f94c:function(e,t,a){}});
//# sourceMappingURL=app.7769aaa7.js.map