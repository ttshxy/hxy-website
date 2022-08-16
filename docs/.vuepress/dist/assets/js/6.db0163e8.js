(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{336:function(n,t,e){},365:function(n,t,e){"use strict";e(336)},414:function(n,t,e){"use strict";e.r(t);e(365);var i=e(45),l=Object(i.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("原文链接："),e("a",{attrs:{href:"https://blog.csdn.net/YQRQR/article/details/83217710",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://blog.csdn.net/YQRQR/article/details/83217710"),e("OutboundLink")],1)]),n._v(" "),e("p",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000014886753",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://segmentfault.com/a/1190000014886753"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("格式化上下文 (FC - Formatting Context )\n格式化上下文是css视觉渲染过程中的一个重要概念，主要影响盒子布局；")]),n._v(" "),e("p",[n._v("BFC (Block Formatting Context)\nBFC是布局中的迷你布局；")]),n._v(" "),e("p",[n._v("块级格式化上下文，指一个独立的块级渲染区域，只有Block-level Box可以参与；该区域有一套渲染规则来约束盒子布局，且与区域外部无关；")]),n._v(" "),e("p",[n._v("BFC形成条件（满足一下任一条件即可）:")]),n._v(" "),e("p",[n._v("浮动元素，float除了none外的值\n绝对定位元素，position:absolute/fixed\noverflow设置为hidden,auto,scroll\ndisplay为inline-block或者table-cell或者table-caption的元素\nBFC并不是元素，而是元素带有的一些属性，因此上面元素是产生了BFC，而他们本身并不是BFC。")]),n._v(" "),e("p",[n._v("BFC规则")]),n._v(" "),e("p",[n._v("内部的Box会在垂直方向一个接一个的放置\nBox垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box的margin会发生重叠\nBFC的区域不会与float box重叠\nBFC就是页面上一个隔离的独立容器，容器里面的子元素不会影响到外面的的元素；反之亦然\n计算BFC高度的时候，浮动元素也参与计算\n每个元素margin box的左边与包含块border box的左边相接触，即使存在浮动也如此\nBFC副作用")]),n._v(" "),e("p",[n._v("使用 overflow 创建 BFC 后在某些情况下你可能会看到出现一个滚动条或者元素内容被削减，也可能使另一个开发人员感到困惑，无法理解代码的用意。\nfloat: left 将把元素移至左侧，并被其他元素环绕\n使用display:flow-root可以创建一个BFC并且没有副作用；但此属性浏览器兼容不好\n无论什么时候创建BFC都要基于自身的需要来考虑")]),n._v(" "),e("p",[n._v("BFC作用")]),n._v(" "),e("p",[n._v("包裹浮动元素（依据规则4、5）\n浮动元素是脱离文档流的，如果一个没有高度或者高度为auto的容器的子元素是浮动元素，则该容器的高度不会被撑开，通过BFC就能解决容器高度不会被撑开的问题。\n阻止外边距叠加（依据规则4）\n阻止环绕浮动元素，实现多列布局（依据规则3、4、6）")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/70.png",alt:"在这里插入图片描述"}})]),n._v(" "),e("p",[n._v("对于浮动元素，可能会造成文字环绕的情况(Figure1)，但这并不是我们想要的布局(Figure2才是想要的)。要解决这个问题，我们可以用外边距，也可以用BFC；\nFigure1现象产生原因是：在BFC上下文中，每个盒子的左外侧紧贴包含块的左侧（从右到左的格式里，则为盒子右外侧紧贴包含块右侧），甚至有浮动也是如此（尽管盒子里的行盒子 Line Box 可能由于浮动而变窄），除非盒子创建了一个新的BFC（在这种情况下盒子本身可能由于浮动而变窄）。")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/70-20220727113816071.png",alt:"在这里插入图片描述"}})]),n._v(" "),e("p",[n._v("IFC(Inline Formatting Context)\n内联格式化上下文，盒子依次水平排列，从它包含块的最顶端开始。")]),n._v(" "),e("p",[n._v("盒子在垂直方向上可以以不同的方式对齐，以他们的顶部、底部、中部、文字基线对齐。")]),n._v(" "),e("p",[n._v("IFC作用")]),n._v(" "),e("p",[n._v("水平居中\n当一个块要在环境中水平居中时，设置其为inline-block则会在外层产生IFC，通过text-align则可以使其水平居中。\n")]),e("style",[n._v("\n.container{\nwidth:300px;\nheight:300px;\nbackground: greenyellow;\ncolor:#fff;\ntext-align: center;\n}\n.container span{\nwidth:200px;\nheight:50px;\nbackground: lightcoral;\ndisplay: inline-block;\n}\n")]),e("p"),n._v(" "),e("div",{staticClass:"container"},[e("span",[n._v("IFC布局 — 水平居中")])]),n._v(" "),e("style",[n._v("\n    .container{\n          width:300px;\n          height:300px;\n          background: greenyellow;\n          color:#fff;\n          text-align: center;\n      }\n      .container span{\n          width:200px;\n          height:50px;\n          background: lightcoral;\n          display: inline-block;\n      }\n   ")]),n._v(" "),e("div",{staticClass:"container"},[e("span",[n._v("IFC布局 — 水平居中")])]),n._v(" "),e("p",[e("img",{attrs:{src:"https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/70-20220727113850458.png",alt:"在这里插入图片描述"}})]),n._v(" "),e("p",[n._v("垂直居中\n创建一个IFC，用其中一个元素撑开父元素的高度，然后设置其vertical-align:middle，其他行内元素设置此属性既可以在此父元素下垂直居中")]),n._v(" "),e("div",{staticClass:"container"},[e("div",[n._v("1垂直居中")]),n._v(" "),e("div",[n._v("2垂直居中")])]),n._v(" "),e("p",[e("img",{attrs:{src:"https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/70-20220727113940857.png",alt:"在这里插入图片描述"}})]),n._v(" "),e("p",[n._v("GFC(GridLayout Formatting Context)\n网格布局格式化上下文，display的值为grid时会生成网格容器。")]),n._v(" "),e("p",[n._v("可以在网格容器内定义行、列，为每个容器网格项目定义位置、空间")]),n._v(" "),e("p",[n._v("目前没有浏览器支持；")]),n._v(" "),e("p",[n._v("FFC(Flex Formatting Context)\n自适应格式化上下文，display值为flex/inline-flex的元素将会生成自适应容器；")]),n._v(" "),e("p",[n._v("Flex Box由伸缩容器和伸缩项目组成。元素的display属性设置为flex/inline-flex可以得到一个伸缩容器。设置为flex（inline-flex）的容器被渲染成块级元素（行内元素）；")]),n._v(" "),e("p",[n._v("伸缩容器中的每个子元素都是一个伸缩项目，伸缩项目可以是任意数量。")]),n._v(" "),e("p",[n._v("Flex Box定义了伸缩容器内伸缩项目该如何布局；")]),n._v(" "),e("p",[n._v("扩展")]),n._v(" "),e("ol",[e("li",[e("p",[n._v("盒模型\n它指定元素如何显示以及（某种程度上）如何交互。页面上每个元素都被看做一个矩形框，这个框由元素的内容、内边距、边框、外边距组成；如图所示：")])]),n._v(" "),e("li",[e("p",[n._v("Block-level Box\ndisplay属性为block,list-item,table的元素， 会生成block-level box。并且参与block formatting context;")])]),n._v(" "),e("li",[e("p",[n._v("Inline-level Box\ndisplay属性为inline,inline-block,inline-table的元素，会生成inline-level box。并且参与inline formatting context")])]),n._v(" "),e("li",[e("p",[n._v("外边距重叠\n当两个或者多个垂直边距相遇时，他们将形成一个外边距，这种合并外边距的方式成为折叠（collapse）。")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);