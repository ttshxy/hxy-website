(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{434:function(e,t,p){"use strict";p.r(t);var v=p(45),a=Object(v.a)({},(function(){var e=this,t=e.$createElement,p=e._self._c||t;return p("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[p("h1",{attrs:{id:"vite和webpack的区别"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#vite和webpack的区别"}},[e._v("#")]),e._v(" vite和webpack的区别")]),e._v(" "),p("p",[e._v("webpack 原理图")]),e._v(" "),p("p",[p("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9fae07439b6c478f92d7033eb627c11e~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp",alt:"image-20200929144416064"}})]),e._v(" "),p("p",[e._v("vite 原理图")]),e._v(" "),p("p",[p("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/614f50eeed37481894341ade9d0802b6~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp",alt:"image-20200929144957808"}})]),e._v(" "),p("p",[e._v("答案：")]),e._v(" "),p("p",[e._v("webpack会先打包，然后启动开发服务器，请求服务器时直接给予打包结果。")]),e._v(" "),p("p",[e._v("而vite是直接启动开发服务器，请求哪个模块再对该模块进行实时编译。")]),e._v(" "),p("p",[e._v("由于现代浏览器本身就支持ES Module，会自动向依赖的Module发出请求。")]),e._v(" "),p("p",[e._v("vite充分利用这一点，将开发环境下的模块文件，就作为浏览器要执行的文件，而不是像webpack那样进行打包合并。")]),e._v(" "),p("p",[e._v("由于vite在启动的时候不需要打包，也就意味着不需要分析模块的依赖、不需要编译，因此启动速度非常快。当浏览器请求某个模块时，再根据需要对模块内容进行编译。这种按需动态编译的方式，极大的缩减了编译时间，项目越复杂、模块越多，vite的优势越明显。")]),e._v(" "),p("p",[e._v("在HMR方面，当改动了一个模块后，仅需让浏览器重新请求该模块即可，不像webpack那样需要把该模块的相关依赖模块全部编译一次，效率更高。 当需要打包到生产环境时，vite使用传统的rollup进行打包，因此，vite的主要优势在开发阶段。另外，由于vite利用的是ES Module，因此在代码中不可以使用CommonJS")])])}),[],!1,null,null,null);t.default=a.exports}}]);