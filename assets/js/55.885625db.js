(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{421:function(t,s,a){"use strict";a.r(s);var n=a(45),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"css实现三角形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css实现三角形"}},[t._v("#")]),t._v(" CSS实现三角形")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/image-20220809165908197.png",alt:"image-20220809165908197"}})]),t._v(" "),a("p",[t._v("我们在使用CSS框架的时候，经常会用到下拉框组件，一般该组件里面有个下三角。此外，我们经常用的tooltip，一般也有个三角形，指明方向。初次接触还以为是个图片，审查元素才发现几行CSS代码就可以实现。")]),t._v(" "),a("p",[t._v("我查看了下Bootstrap的"),a("a",{attrs:{href:"https://link.jianshu.com?t=https://github.com/twbs/bootstrap/blob/10606a73bcbfc6c723d60e2a1069c921afff0d2a/less/dropdowns.less",target:"_blank",rel:"noopener noreferrer"}},[t._v("源代码"),a("OutboundLink")],1),t._v("，是由一个叫 "),a("code",[t._v("caret")]),t._v(" 的类实现的，如下所示：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".caret")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("vertical-align")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" middle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@caret-width-base")]),t._v(" dashed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@caret-width-base")]),t._v(" solid ~"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\9"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v(" // IE8\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@caret-width-base")]),t._v(" solid transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@caret-width-base")]),t._v(" solid transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这是一段LESS代码，不过你也能看出点端倪。仔细研究之后，发现原理其实很简单："),a("strong",[t._v("首先把宽度和高度设置为0，然后设置边框样式，结束")]),t._v("。有点懵逼，没关系，我也是。所以我们还是一步一步来分析下。首先看如下代码：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".caret")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px solid black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这个很容易猜到，你会得到一个黑色的正方形。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/image-20220809165743506.png",alt:"image-20220809165743506"}})]),t._v(" "),a("p",[t._v("不如把四个边框都换个颜色，看看效果如何：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".caret")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px solid black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px solid red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px solid green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px solid blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("机智的你好像明白了什么......")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/image-20220809165757396.png",alt:"image-20220809165757396"}})]),t._v(" "),a("p",[t._v("我们不妨给 "),a("code",[t._v("caret")]),t._v(" 设置非零的宽度和高度：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".caret")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px solid black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px solid red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px solid green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px solid blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("就会得到这个图案。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/image-20220809165808634.png",alt:"image-20220809165808634"}})]),t._v(" "),a("p",[t._v("道理很简单，只是我们平时容易忽略而已。我们小时候学习几何的时候，画的图是很细的直线，包括老师也一直强调，做几何题的时候，计算长宽不用考虑直线的长度（准确的说是厚度）。所以我们脑海中也一直保留着这个错误的观点，但是到了编程领域，完全不同了，你画出来的图是一个像素一个像素拼出来的，即使最细的"),a("code",[t._v("border: 1px solid black;")]),t._v("也是占了一个像素。所以，让我们过分一点，把边框宽度设置成50px，你就可以看到计算机是如何处理这种情况的，而且这种处理也是合乎情理的，边框交接处，一边占用一半的面积。")]),t._v(" "),a("p",[t._v("所以，回归到最初的主题，"),a("strong",[t._v("如何画三角形")]),t._v("。我们改一下第三段代码，左右下边框的颜色设置为"),a("code",[t._v("transparent")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".caret")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px solid black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px solid transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px solid transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px solid transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 如下代码会更优雅点，得到的效果是一样的 */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".caret")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px solid transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("所以，你就得到了你想要的三角形了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/image-20220809165820878.png",alt:"image-20220809165820878"}})]),t._v(" "),a("p",[t._v("下三角")]),t._v(" "),a("p",[t._v("结束了吗？还没有，你这样得到的下三角虽然可用，但是本质上占用的空间还是一个正方形，到时候你布局的时候就会发现有点坑，所以我们应该将这个三角形占用的空间尽可能缩小。考虑下第三段代码中，将下边框的长度设置为0，会怎么样？")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 不设置border-bottom即可 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".caret")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px solid black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px solid red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px solid blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("怎么样，有意思吧。如果你此时把左边框和右边框的颜色设置成 "),a("code",[t._v("transparent")]),t._v("，岂不是用最小空间实现了下三角。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/image-20220809165834805.png",alt:"image-20220809165834805"}})]),t._v(" "),a("p",[t._v("知道这个原理后，你是不是就可以得到上三角、左三角、右三角等各种三角形。下图中的示例代码，你可以点击"),a("a",{attrs:{href:"https://link.jianshu.com?t=https://github.com/kangbin/demo/tree/master/css/CSS%E5%AE%9E%E7%8E%B0%E4%B8%89%E8%A7%92%E5%BD%A2",target:"_blank",rel:"noopener noreferrer"}},[t._v("此处"),a("OutboundLink")],1),t._v("获取。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tts-markdown.oss-cn-beijing.aliyuncs.com/img/image-20220809165847402.png",alt:"image-20220809165847402"}})]),t._v(" "),a("p",[t._v("如果你善于思考的话，你会发现稍微改一下第四段代码，你就会得到一个"),a("strong",[t._v("梯形")]),t._v("。某种程度上来讲，这可以算CSS的一个奇技淫巧，但是明白实现原理远比实现一个三角形重要得多，有很多有趣的CSS图形，都是基于这个原理实现的。")])])}),[],!1,null,null,null);s.default=p.exports}}]);