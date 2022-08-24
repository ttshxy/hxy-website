(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{405:function(t,e,r){"use strict";r.r(e);var a=r(45),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"js基础"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#js基础"}},[t._v("#")]),t._v(" js基础")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/base/code/debounce.html"}},[t._v("什么是防抖，应用场景有哪些⭐️")])],1),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/base/code/throttle.html"}},[t._v("什么是节流，应用场景有哪些⭐️")])],1),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/base/code/01.html"}},[t._v("为何 0.1+0.2 不等于 0.3，应如何做相等比较")])],1),t._v(" "),r("h1",{attrs:{id:"js生成二维数组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#js生成二维数组"}},[t._v("#")]),t._v(" js生成二维数组")]),t._v(" "),r("p",[t._v("方法一:")]),t._v(" "),r("p",[r("code",[t._v("new Array(n).fill(new Array(n).fill(1));")])]),t._v(" "),r("p",[t._v("当一个对象被传递给 **"),r("code",[t._v("fill")]),t._v("**方法的时候, 填充数组的是这个对象的引用")]),t._v(" "),r("p",[t._v("所以一维中的每一个数组,都指向同一个引用")]),t._v(" "),r("p",[t._v("如果一维中的任何一个元素执行push,哪个每一个二维中都会多一个元素")]),t._v(" "),r("p",[t._v("所以为了避免这种情况可以")]),t._v(" "),r("p",[r("code",[t._v("new Array(n).fill().map(()=>{return new Array(n).fill(false)})")])]),t._v(" "),r("p",[t._v("方法二:")]),t._v(" "),r("p",[r("code",[t._v("Array.from(new Array(3),()=>{return new Array(3).fill(false)})")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("fill 方法故意被设计成通用方法, 该方法不要求 this 是数组对象。\n\nfill 方法是个可变方法, 它会改变调用它的 this 对象本身, 然后返回它, 而并不是返回一个副本。\n\n当一个对象被传递给 fill方法的时候, 填充数组的是这个对象的引用。\n")])])]),r("p",[t._v("来源：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill")])])}),[],!1,null,null,null);e.default=s.exports}}]);