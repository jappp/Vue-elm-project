webpackJsonp([1],{"/Y+N":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{ref:"menuList",refInFor:!0,staticClass:"menu-item",class:{current:t.currentIndex===i},on:{click:function(s){t.selectMenu(i,s)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(t._s(s.name)+"\n        ")])])}))]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s){return e("li",{ref:"foodList",refInFor:!0,staticClass:"food-list"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-item border-1px"},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s},on:{add:t._drop}})],1)])])}))])})),t._v(" "),e("shopcart",{ref:"shopcart",attrs:{selectFoods:t.selectFoods,deliveryPrice:t.seller.deliveryPrice,minPrice:t.seller.minPrice}})],1)])},a=[],n={render:i,staticRenderFns:a};s.a=n},0:function(t,s){},"34KM":function(t,s){},"8Q+5":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"nav border-1px"},[e("div",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1)]),t._v(" "),e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)},a=[],n={render:i,staticRenderFns:a};s.a=n},Bmky:function(t,s,e){"use strict";var i=e("m3es"),a=e.n(i),n=e("Jn7X");s.a={props:{selectFoods:{type:Array,default:function(){return[{price:10,count:1}]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],fold:!0}},methods:{drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)}},toggleList:function(){this.totalCount&&(this.fold=!this.fold)},hideList:function(){this.fold=!0},empty:function(){this.selectFoods.forEach(function(t){t.count=0})},pay:function(){this.totalPrice<this.minPrice||window.alert("支付"+(this.totalPrice+4)+"元")},_drop:function(t){var s=this;this.$nextTick(function(){s.drop(t)})},beforeDrop:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var i=e.el.getBoundingClientRect(),a=i.left-32,n=-(window.innerHeight-i.top-22);t.style.display="",t.style.webkitTransform="translate3d(0,"+n+"px,0)",t.style.transform="translate3d(0,"+n+"px,0)";var r=t.getElementsByClassName("inner-hook")[0];r.style.webkitTransform="translate3d("+a+"px,0,0)",r.style.transform="translate3d("+a+"px,0,0)"}}},dropping:function(t,s){t.offsetHeight;this.$nextTick(function(){t.style.webkitTransform="translate3d(0,0,0)",t.style.transform="translate3d(0,0,0)";var e=t.getElementsByClassName("inner-hook")[0];e.style.webkitTransform="translate3d(0,0,0)",e.style.transform="translate3d(0,0,0)",t.addEventListener("transitionend",s)})},afterDrop:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){if(0===this.totalPrice)return"￥"+this.minPrice+"元起送";if(this.totalPrice<this.minPrice){return"还差￥"+(this.minPrice-this.totalPrice)+"元起送"}return"去结算"},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new a.a(t.$refs.listContent,{})}),s}},components:{cartcontrol:n.a}}},EmmV:function(t,s){},FUCg:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice))]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.pay(s)}}},[e("div",{staticClass:"pay",class:t.payClass},[t._v("\n          "+t._s(t.payDesc)+"\n        ")])])]),t._v(" "),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s){return e("div",[e("transition",{attrs:{name:"drop"},on:{"before-enter":t.beforeDrop,enter:t.dropping,"after-enter":t.afterDrop}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])],1)})),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s},on:{add:t._drop}})],1)])}))])])])],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:t.hideList}})])],1)},a=[],n={render:i,staticRenderFns:a};s.a=n},HtGh:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,width:"64",height:"64"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n        "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n      ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个活动")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper"},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("v-star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[i].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])])})):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.hideDetail}},[e("i",{staticClass:"icon-close"})])])])],1)},a=[],n={render:i,staticRenderFns:a};s.a=n},JJff:function(t,s,e){"use strict";var i=e("m3es"),a=e.n(i),n=e("Jn7X"),r=e("xSw9");s.a={props:{seller:{type:Object}},data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},components:{cartcontrol:n.a,shopcart:r.a},methods:{_initScroll:function(){var t=this;this.menuScroll=new a.a(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new a.a(this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(s){t.scrollY=Math.abs(s.y)})},_calculateHeight:function(){var t=this.$refs.foodList,s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}},_followScroll:function(t){var s=this.$refs.menuList,e=s[t];this.menuScroll.scrollToElement(e,300,0,0)},selectMenu:function(t){var s=this.$refs.foodList,e=s[t];this.foodsScroll.scrollToElement(e,250)},_drop:function(t){var s=this;this.$nextTick(function(){s.$refs.shopcart.drop(t)})}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length-1;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(this.scrollY>=s&&this.scrollY<e)return this._followScroll(t),t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},created:function(){var t=this;this.classMap=["decrease","discount","guarantee","invoice","special"],this.$http.get("/api/goods").then(function(s){s=s.body,0===s.errno&&(t.goods=s.data,t.$nextTick(function(){t._initScroll(),t._calculateHeight()}))})}}},Jn7X:function(t,s,e){"use strict";function i(t){e("cTxF")}var a=e("hIg6"),n=e("Wj5L"),r=e("o7Pn"),o=i,l=r(a.a,n.a,o,null,null);s.a=l.exports},LApS:function(t,s,e){"use strict";var i=e("NVrd");s.a={props:{seller:{type:Object}},data:function(){return{detailShow:!1}},components:{"v-star":i.a},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}},created:function(){this.classMap=["decrease","discount","guarantee","invoice","special"]}}},M93x:function(t,s,e){"use strict";function i(t){e("Nx6X")}var a=e("ajUD"),n=e("8Q+5"),r=e("o7Pn"),o=i,l=r(a.a,n.a,o,null,null);s.a=l.exports},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a=e("M93x"),n=e("/ocq"),r=e("ORbq"),o=e("34KM"),l=(e.n(o),e("PXOj"));i.a.config.productionTip=!1,i.a.use(n.a),i.a.use(r.a);var c=[{path:"/",redirect:"/goods"},{path:"/goods",component:l.a}],u=new n.a({linkActiveClass:"active",routes:c});new i.a({el:"#app",router:u,template:"<App/>",components:{App:a.a}})},NVrd:function(t,s,e){"use strict";function i(t){e("EmmV")}var a=e("XugS"),n=e("m1lm"),r=e("o7Pn"),o=i,l=r(a.a,n.a,o,null,null);s.a=l.exports},Nx6X:function(t,s){},PXOj:function(t,s,e){"use strict";function i(t){e("mflw")}var a=e("JJff"),n=e("/Y+N"),r=e("o7Pn"),o=i,l=r(a.a,n.a,o,null,null);s.a=l.exports},QQqo:function(t,s){},Wj5L:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.decreaseCart(s)}}},[e("span",{staticClass:"inner icon-remove_circle_outline"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add icon-add_circle",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addCart(s)}}})],1)},a=[],n={render:i,staticRenderFns:a};s.a=n},XugS:function(t,s,e){"use strict";s.a={props:{score:{type:Number},size:{type:Number}},computed:{sizeClass:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=parseInt(this.score),e=this.score-s<.5,i=0;i<s;i++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}}},ajUD:function(t,s,e){"use strict";var i=e("woOf"),a=e.n(i),n=e("hxP8");s.a={data:function(){return{seller:{}}},components:{"v-header":n.a},created:function(){var t=this;this.$http.get("/api/seller").then(function(s){s=s.body,0===s.errno&&(t.seller=a()({},t.seller,s.data),console.log(t.seller))})}}},cTxF:function(t,s){},hIg6:function(t,s,e){"use strict";var i=e("7+uW");s.a={props:{food:{type:Object}},methods:{addCart:function(t){this.food.count?this.food.count++:i.a.set(this.food,"count",1),this.$emit("add",t.target)},decreaseCart:function(){this.food.count--}}}},hxP8:function(t,s,e){"use strict";function i(t){e("xx6/")}var a=e("LApS"),n=e("HtGh"),r=e("o7Pn"),o=i,l=r(a.a,n.a,o,null,null);s.a=l.exports},m1lm:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star"},[e("ul",{class:t.sizeClass},t._l(t.itemClasses,function(t){return e("li",{class:t})}))])},a=[],n={render:i,staticRenderFns:a};s.a=n},mflw:function(t,s){},xSw9:function(t,s,e){"use strict";function i(t){e("QQqo")}var a=e("Bmky"),n=e("FUCg"),r=e("o7Pn"),o=i,l=r(a.a,n.a,o,null,null);s.a=l.exports},"xx6/":function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.8c263798e07f0e5d4d50.js.map