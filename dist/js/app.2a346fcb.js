(function(e){function t(t){for(var n,o,l=t[0],s=t[1],c=t[2],d=0,p=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,l=1;l<a.length;l++){var s=a[l];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},3415:function(e,t,a){e.exports=a.p+"img/Netflix-logo.0abf47e3.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("7b17"),a("ab8b");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header"),a("Main")],1)},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"d-flex justify-content-between align-items-center"},[a("div",{staticClass:"content-header  "},[e._m(0),a("div",{staticClass:"right-header d-flex"},[a("div",{staticClass:"search-bar"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:"search"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),e._m(1)])])])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"left-header "},[n("div",{staticClass:"logo"},[n("img",{attrs:{src:a("3415"),alt:"logo"}})]),n("div",{staticClass:"menu-content d-flex justify-content-between"},[n("div",[n("a",{attrs:{href:"#"}},[e._v("blabbla")])]),n("div",[n("a",{attrs:{href:"#"}},[e._v("blabbla")])]),n("div",[n("a",{attrs:{href:"#"}},[e._v("blabbla")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menu-content"},[a("div",[a("a",{attrs:{href:"#"}},[e._v("blabbla")])])])}],s={name:"Header",data:function(){return{search:""}}},c=s,u=(a("a316"),a("2877")),d=Object(u["a"])(c,o,l,!1,null,"6733a632",null),p=d.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[e._v(" CONTENT QUESTO è MAIN ")])},h=[],g={name:"Main"},v=g,b=Object(u["a"])(v,f,h,!1,null,"3e0ee208",null),m=b.exports,_={name:"App",components:{Header:p,Main:m},data:function(){return{movies:{page:1,results:[{adult:!1,backdrop_path:"/3lbTiIN8cVonMUQwaeh5nvn61lr.jpg",genre_ids:[12,35,878,10751],id:105,original_language:"en",original_title:"Back to the Future",overview:"Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",popularity:38.464,poster_path:"/7lyBcpYB0Qt8gYhXYaEZUNlNQAv.jpg",release_date:"1985-07-03",title:"Back to the Future",video:!1,vote_average:8.3,vote_count:15222},{adult:!1,backdrop_path:"/a4qvbI9x3nqu3hKQyDRVVBpMklx.jpg",genre_ids:[12,35,10751,878],id:165,original_language:"en",original_title:"Back to the Future Part II",overview:"Marty and Doc are at it again in this wacky sequel to the 1985 blockbuster as the time-traveling duo head to 2015 to nip some McFly family woes in the bud. But things go awry thanks to bully Biff Tannen and a pesky sports almanac. In a last-ditch attempt to set things straight, Marty finds himself bound for 1955 and face to face with his teenage parents -- again.",popularity:21.527,poster_path:"/hQq8xZe5uLjFzSBt4LanNP7SQjl.jpg",release_date:"1989-11-22",title:"Back to the Future Part II",video:!1,vote_average:7.7,vote_count:9744},{adult:!1,backdrop_path:"/igaRMweCynEGoS6w4Rsim7JPnKu.jpg",genre_ids:[12,35,878],id:196,original_language:"en",original_title:"Back to the Future Part III",overview:"The final installment of the Back to the Future trilogy finds Marty digging the trusty DeLorean out of a mineshaft and looking for Doc in the Wild West of 1885. But when their time machine breaks down, the travelers are stranded in a land of spurs. More problems arise when Doc falls for pretty schoolteacher Clara Clayton, and Marty tangles with Buford Tannen.",popularity:17.89,poster_path:"/crzoVQnMzIrRfHtQw0tLBirNfVg.jpg",release_date:"1990-05-25",title:"Back to the Future Part III",video:!1,vote_average:7.4,vote_count:7863}],total_pages:1,total_results:3}}}},y=_,w=(a("5c0b"),Object(u["a"])(y,r,i,!1,null,null,null)),j=w.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(j)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"9c0c":function(e,t,a){},a316:function(e,t,a){"use strict";a("d8a3")},d8a3:function(e,t,a){}});
//# sourceMappingURL=app.2a346fcb.js.map