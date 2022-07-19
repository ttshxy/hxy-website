(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{397:function(t,a,s){"use strict";s.r(a);var n=s(45),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[t._v("#")]),t._v(" XSS")]),t._v(" "),s("h3",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("XSS（Cross Site Script），指"),s("strong",[t._v("跨站脚本攻击")]),t._v("。原本缩写为 CSS，但因为与层叠样式表缩写（CSS）重名要做区分，所以改为 XSS。")]),t._v(" "),s("h3",{attrs:{id:"攻击方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#攻击方式"}},[t._v("#")]),t._v(" 攻击方式")]),t._v(" "),s("p",[t._v("攻击者通过向网站页面注入恶意脚本（一般是 JavaScript），通过恶意脚本对客户端网页进行篡改，达到窃取信息等目的，本质是数据被当作程序执行。")]),t._v(" "),s("h3",{attrs:{id:"xss-的注入点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss-的注入点"}},[t._v("#")]),t._v(" XSS 的注入点")]),t._v(" "),s("ul",[s("li",[t._v("HTML 的节点内容或属性，存在读取可输入数据")]),t._v(" "),s("li",[t._v("javascript 代码，存在由后台注入的变量或用户输入的信息")]),t._v(" "),s("li",[t._v("富文本")])]),t._v(" "),s("h3",{attrs:{id:"xss-危害"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss-危害"}},[t._v("#")]),t._v(" XSS 危害")]),t._v(" "),s("ul",[s("li",[t._v("通过 document.cookie 盗取 cookie")]),t._v(" "),s("li",[t._v("使用 js 或 css 破坏页面正常的结构与样式")]),t._v(" "),s("li",[t._v("流量劫持（通过访问某段具有 window.location.href 定位到其他页面:"),s("code",[t._v('<script>window.location.href="www.baidu.com";<\/script>')]),t._v("）")]),t._v(" "),s("li",[t._v("Dos 攻击：利用合理的客户端请求来占用过多的服务器资源，从而使合法用户无法得到服务器响应")]),t._v(" "),s("li",[t._v("利用 iframe、frame、XMLHttpRequest 或上述 Flash 等方式，以（被攻击）用户的身份执行一些管理动作，或执行一些一般的如发微博、加好友、发私信等操作")]),t._v(" "),s("li",[t._v("利用可被攻击的域受到其他域信任的特点，以受信任来源的身份请求一些平时不允许的操作，如进行不当的投票活动")]),t._v(" "),s("li",[t._v("偷取网站任意数据、用户资料等等")])]),t._v(" "),s("h3",{attrs:{id:"xss-的类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss-的类型"}},[t._v("#")]),t._v(" XSS 的类型")]),t._v(" "),s("h4",{attrs:{id:"反射型-非持久"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反射型-非持久"}},[t._v("#")]),t._v(" 反射型（非持久）")]),t._v(" "),s("p",[t._v("反射型 XSS，也叫非持久型 XSS，是指发生请求时，XSS 代码出现在请求 URL 中，作为参数提交到服务器，服务器解析并响应。响应内容包含 XSS 代码，返回给浏览器解析并执行，这个过程就像一次反射，所以叫反射型 XSS。")]),t._v(" "),s("p",[t._v("这种攻击方式通常需要攻击者诱使用户点击一个恶意链接，或者提交一个表单，或者进入一个恶意网站时，注入脚本进入被攻击者的网站。")]),t._v(" "),s("p",[t._v("该方式只会经过服务器，不会经过数据库。")]),t._v(" "),s("p",[t._v("例子：\n比如用户进行搜索时，点击搜索按钮访问到如下链接")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v('http://xxx.com/search?keyword=">'),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("alert('XSS攻击');"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("当浏览器请求时，服务器解析参数 keyword，得到"),s("code",[t._v("\"><script>alert('XSS攻击');<\/script>")]),t._v("，拼接到 HTML 中返回给浏览器，如下：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  alert('XSS攻击')\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n">\n'),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("搜索"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n  您搜索的关键词是：">\n  '),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    alert('XSS攻击')\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("因此将其执行了。")]),t._v(" "),s("h4",{attrs:{id:"存储型-持久"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储型-持久"}},[t._v("#")]),t._v(" 存储型（持久）")]),t._v(" "),s("p",[t._v("存储型 XSS，也叫持久型 XSS，主要是将 XSS 代码发送到服务器，当浏览器请求数据时，脚本从服务器上传回并执行。与反射型 XSS 的差别在于，提交的代码会存储在服务器端，下次请求时目标页面时不用再提交 XSS 代码。")]),t._v(" "),s("p",[t._v("比较常见的场景就是网页的留言板，攻击者在留言板写下包含攻击性的脚本代码，发表之后所有访问该留言的用户，留言内容从服务器解析之后发现有 XSS 代码于是当做正常的 HTML 和 JS 解析执行，就发生了 XSS 攻击。")]),t._v(" "),s("p",[t._v("该方式会经过服务器，也会经过数据库。")]),t._v(" "),s("h4",{attrs:{id:"dom-型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom-型"}},[t._v("#")]),t._v(" DOM 型")]),t._v(" "),s("p",[t._v("基于 DOM 的 XSS 攻击是指通过恶意脚本修改页面的 DOM 结构，将攻击脚本写在 URL 中，诱导用户点击该 URL，如果 URL 被解析，那么攻击脚本就会被运行，和前两者 XSS 攻击区别是：取出和执行恶意代码由浏览器端完成，不经过服务端，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞主要在于 DOM 型攻击。")]),t._v(" "),s("p",[t._v("例子引用自："),s("a",{attrs:{href:"https://link.segmentfault.com/?enc=uaPr40ZL%2F5wqF6KYKydnJw%3D%3D.nuSEbgY2q7814d5U96GqZChWC%2FB6OLvByWva9u9povrTxh%2BqxdieS6yVQr%2F3StpqTaCrXAmg7ujPMHndRyMtJQ%3D%3D",target:"_blank",rel:"noopener noreferrer"}},[t._v("DOM 型攻击例子"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("XSS:"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("btn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Submit"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("div"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  const input = document.getElementById('input')\n  const btn = document.getElementById('btn')\n  const div = document.getElementById('div')\n\n  let val\n\n  input.addEventListener(\n    'change',\n    e => {\n      val = e.target.value\n    },\n    false\n  )\n\n  btn.addEventListener(\n    'click',\n    () => {\n      div.innerHTML = `"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("${val}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("testLink"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("`\n    },\n    false\n  )\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("点击 Submit 按钮后，会在当前页面插入一个链接，其地址为用户的输入内容。如果用户在输入时构造了如下内容：")]),t._v(" "),s("div",{staticClass:"language-arcade extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("'' onclick=alert(/xss/)\n")])])]),s("p",[t._v("用户提交之后，页面代码就变成了：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onlick")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("alert(/xss/)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("testLink"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("此时，用户点击生成的链接，就会执行对应的脚本。")]),t._v(" "),s("h3",{attrs:{id:"如何防范-xss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何防范-xss"}},[t._v("#")]),t._v(" 如何防范 XSS")]),t._v(" "),s("p",[t._v("总体就是"),s("strong",[t._v("不能将用户的输入直接存到服务器，需要对一些数据进行特殊处理")])]),t._v(" "),s("h4",{attrs:{id:"设置-httponly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置-httponly"}},[t._v("#")]),t._v(" 设置 HttpOnly")]),t._v(" "),s("p",[t._v("HttpOnly 是一个设置 cookie 是否可以被 javasript 脚本读取的属性，浏览器会禁止页面的 Javascript 访问带有 HttpOnly 属性的 Cookie。")]),t._v(" "),s("p",[t._v("严格来说，这种方式不是防御 XSS，而是在用户被 XSS 攻击之后，不被获取 Cookie 数据。")]),t._v(" "),s("h4",{attrs:{id:"csp-内容安全策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csp-内容安全策略"}},[t._v("#")]),t._v(" CSP 内容安全策略")]),t._v(" "),s("p",[t._v("CSP(content security policy)，是一个额外的安全层，用于检测并削弱某些特定类型的攻击，包括跨站脚本 (XSS) 和数据注入攻击等。")]),t._v(" "),s("p",[t._v("CSP 可以通过 HTTP 头部（Content-Security-Policy）或")]),s("meta"),t._v("元素配置页面的内容安全策略，以控制浏览器可以为该页面获取哪些资源。比如一个可以上传文件和显示图片页面，应该允许图片来自任何地方，但限制表单的 action 属性只可以赋值为指定的端点。"),s("p"),t._v(" "),s("p",[t._v("现在主流的浏览器内置了防范 XSS 的措施，开启 CSP，即开启白名单，可阻止白名单以外的资源加载和运行")]),t._v(" "),s("h4",{attrs:{id:"输入检查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入检查"}},[t._v("#")]),t._v(" 输入检查")]),t._v(" "),s("p",[t._v("对于用户的任何输入要进行编码、解码和过滤：")]),t._v(" "),s("ul",[s("li",[t._v("编码：不能对用户输入的内容都保持原样，对用户输入的数据进行字符实体编码转义")]),t._v(" "),s("li",[t._v("解码：原样显示内容的时候必须解码，不然显示不到内容了")]),t._v(" "),s("li",[t._v("过滤：把输入的一些不合法的东西都过滤掉，从而保证安全性。如移除用户上传的 DOM 属性，如 onerror，移除用户上传的 Style 节点、iframe、script 节点等")])]),t._v(" "),s("p",[t._v("对用户输入所包含的特殊字符或标签进行编码或过滤，如 "),s("code",[t._v("<")]),t._v("，"),s("code",[t._v(">")]),t._v("，"),s("code",[t._v("script")]),t._v("，防止 XSS 攻击")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("escHTML")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" str\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&amp;'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&lt;'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&gt;'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("x27")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&#039;'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("x22")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'&quto;'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"输出检查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输出检查"}},[t._v("#")]),t._v(" 输出检查")]),t._v(" "),s("p",[t._v("用户的输入会存在问题，服务端的输出也会存在问题。一般来说，除富文本的输出外，在变量输出到 HTML 页面时，可以使用编码或转义的方式来防御 XSS 攻击。例如利用 "),s("a",{attrs:{href:"https://link.segmentfault.com/?enc=MppsxZcu8wF%2FW2k6z7I3Gw%3D%3D.DlUrUuZYzKpk3hHCfxU5dh0PZCFN9aZYveD7O4y2QG57FzdSr3OdpKf9vtNTt0en",target:"_blank",rel:"noopener noreferrer"}},[t._v("sanitize-html"),s("OutboundLink")],1),t._v(" 对输出内容进行有规则的过滤之后再输出到页面中。")]),t._v(" "),s("h4",{attrs:{id:"输入内容长度控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入内容长度控制"}},[t._v("#")]),t._v(" 输入内容长度控制")]),t._v(" "),s("p",[t._v("对于不受信任的输入，都应该限定一个合理的长度。虽然无法完全防止 XSS 发生，但可以增加 XSS 攻击的难度。")]),t._v(" "),s("h4",{attrs:{id:"验证码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证码"}},[t._v("#")]),t._v(" 验证码")]),t._v(" "),s("p",[t._v("防止脚本冒充用户提交危险操作。")]),t._v(" "),s("h2",{attrs:{id:"csrf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[t._v("#")]),t._v(" CSRF")]),t._v(" "),s("h3",{attrs:{id:"概述-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述-2"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("CSRF(Cross Site Request Forgery)指的是"),s("strong",[t._v("跨站请求伪造")]),t._v("，是一种劫持受信任用户向服务器发送非预期请求的攻击方式。跨域指的是请求来源于其他网站，伪造指的是非用户自身的意愿。")]),t._v(" "),s("h3",{attrs:{id:"攻击方式-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#攻击方式-2"}},[t._v("#")]),t._v(" 攻击方式")]),t._v(" "),s("p",[t._v("攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。")]),t._v(" "),s("p",[t._v("与 XSS 攻击不同的是：XSS 是攻击者直接对我们的网站 A 进行注入攻击，CSRF 是通过网站 B 对我们的网站 A 进行伪造请求。")]),t._v(" "),s("p",[t._v("例子：你登录购物网站 A 之后点击一个恶意链接 B，B 请求了网站 A 的下单接口，结果是在网站 A 的帐号生成一个订单。其背后的原理是：网站 B 通过表单、get 请求来伪造网站 A 的请求，这时候请求会带上网站 A 的 cookies，若登录态是保存在 cookies 中，则实现了伪造攻击。")]),t._v(" "),s("p",[t._v("跨站请求可以用各种方式：图片 URL、超链接、CORS、Form 提交等等。部分请求方式可以直接嵌入在第三方论坛、文章中。")]),t._v(" "),s("h3",{attrs:{id:"csrf-危害"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf-危害"}},[t._v("#")]),t._v(" CSRF 危害")]),t._v(" "),s("ul",[s("li",[t._v("用户的登录态被盗用")]),t._v(" "),s("li",[t._v("冒充用户完成操作或修改数据")])]),t._v(" "),s("h3",{attrs:{id:"csrf-的类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf-的类型"}},[t._v("#")]),t._v(" CSRF 的类型")]),t._v(" "),s("h4",{attrs:{id:"get-类型的-csrf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-类型的-csrf"}},[t._v("#")]),t._v(" GET 类型的 CSRF")]),t._v(" "),s("p",[t._v("例子引入自："),s("a",{attrs:{href:"https://link.segmentfault.com/?enc=V4YG%2Fq6TTW306GVPPS9FrA%3D%3D.NbWM8hpFsTtMEeQBs9gIuHKaL8lv68Z8k3n2xOkWKRP6A0BVaFeblWSHjchovwxAq0L84CrJOUaQnl9I71hDjg%3D%3D",target:"_blank",rel:"noopener noreferrer"}},[t._v("GET CSRF 例子"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("假设有这样一个场景：目标网站 A("),s("code",[t._v("www.a.com")]),t._v(")，恶意网站 B("),s("code",[t._v("www.b.com")]),t._v(")")]),t._v(" "),s("p",[t._v("两个网站的域名不一样，目标网站 A 上有一个删除文章的功能，通常是用户单击'删除文章'链接时才会删除指定的文章。这个链接是"),s("code",[t._v("www.a.com/blog/del?id=1")]),t._v(", id 代表不同的文章。实际上就是发起一个 GET 请求")]),t._v(" "),s("ul",[s("li",[t._v("无法使用 Ajax 发起 GET 请求。因为 CSRF 请求是跨域的，而 Ajax 有同源策略的限制")]),t._v(" "),s("li",[t._v("可以通过在恶意网站 B 上静态或者动态创建 img,script 等标签发起 GET 请求。将其 src 属性指向"),s("code",[t._v("www.a.com/blog/del?id=1")]),t._v("。通过标签的方式发起的请求不受同源策略的限制")]),t._v(" "),s("li",[t._v("最后欺骗已经登录目标网站 A 的用户访问恶意网站 B，那么就会携带网站 A 源的登录凭证向网站 A 后台发起请求，这样攻击就发生了")])]),t._v(" "),s("p",[t._v("CSRF 攻击有以下几个关键点：")]),t._v(" "),s("ul",[s("li",[t._v("请求是跨域的，可以看出请求是从恶意网站 B 上发出的")]),t._v(" "),s("li",[t._v("通过 img, script 等标签来发起一个 GET 请求，因为这些标签不受同源策略的限制")]),t._v(" "),s("li",[t._v("发出的请求是身份认证后的")])]),t._v(" "),s("h4",{attrs:{id:"post-类型的-csrf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post-类型的-csrf"}},[t._v("#")]),t._v(" POST 类型的 CSRF")]),t._v(" "),s("p",[t._v("假如目标网站 A 上有发表文章的功能，那么我们就可以动态创建 form 标签，然后修改文章的题目。")]),t._v(" "),s("p",[t._v("在网站 B 中：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setForm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" form "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'form'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  form"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("action "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'www.a.com/blog/article/update'")]),t._v("\n  form"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("methods "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" input "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),t._v("\n  input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'csfr攻击啦！'")]),t._v("\n  input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),t._v("\n  form"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("form"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  form"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("submit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setForm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("上面代码可以看出，动态创建了 form 表单，然后调用 submit 方法，就可以通过跨域的伪造请求来实现修改目标网站 A 的某篇文章的标题了。")]),t._v(" "),s("p",[t._v("通常是利用自动提交的表单")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://xxx.com/money"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("account"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("jacky"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("10000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  document.forms[0].submit()\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h4",{attrs:{id:"链接类型的-csrf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接类型的-csrf"}},[t._v("#")]),t._v(" 链接类型的 CSRF")]),t._v(" "),s("p",[t._v("链接类型的 CSRF 并不常见，比起其他两种用户打开页面就中招的情况，这种需要用户点击链接才会触发。这种类型通常是在论坛中发布的图片中嵌入恶意链接，或者以广告的形式诱导用户中招，攻击者通常会以比较夸张的词语诱骗用户点击，例如：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://test.com/csrf/withdraw.php?amount=1000&for=hacker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("taget")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("_blank"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 重磅消息！！ "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"如何防范-csrf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何防范-csrf"}},[t._v("#")]),t._v(" 如何防范 CSRF")]),t._v(" "),s("h4",{attrs:{id:"验证码-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证码-2"}},[t._v("#")]),t._v(" 验证码")]),t._v(" "),s("p",[t._v("由于 CSRF 攻击伪造请求不会经过受攻击的网站，所以我们可以在网站加入验证码，这样必须通过验证码之后才能进行请求，有效的遏制了 CSRF 请求。")]),t._v(" "),s("p",[t._v("但是，这种方式不是万能的，并不是每个请求都加验证码，那样用户体验会非常不好，只能在部分请求添加，作为一种辅助的防御手段。")]),t._v(" "),s("h4",{attrs:{id:"验证-referer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证-referer"}},[t._v("#")]),t._v(" 验证 Referer")]),t._v(" "),s("p",[t._v("在 HTTP 协议中，头部有个 Referer 字段，他记录了该 HTTP 请求的来源地址，在服务端设置该字段的检验，通过检查该字段，就可以知道该请求是否合法，不过请求头也容易伪造。")]),t._v(" "),s("h4",{attrs:{id:"cookie-设置-samesite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-设置-samesite"}},[t._v("#")]),t._v(" cookie 设置 SameSite")]),t._v(" "),s("p",[t._v("设置 SameSite：设置 cookie 的 SameSite 值为 strict，这样只有同源网站的请求才会带上 cookie。这样 cookies 就不能被其他域名网站使用，达到了防御的目的。")]),t._v(" "),s("h4",{attrs:{id:"添加-token-验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加-token-验证"}},[t._v("#")]),t._v(" 添加 token 验证")]),t._v(" "),s("p",[t._v("浏览器请求服务器时，服务器返回一个 token，每个请求都需要同时带上 token 和 cookie 才会被认为是合法请求")]),t._v(" "),s("p",[t._v("这是一种相对成熟的解决方案。要抵御 CSRF，关键在于在请求中放入攻击者所不能伪造的信息，并且该信息不存在于 Cookie 之中。在服务端随机生成 token，在 HTTP 请求中以参数的形式加入这个 token，并在服务器端建立一个拦截器来验证这个 token，如果请求中没有 token 或者 token 内容不正确，则认为可能是 CSRF 攻击而拒绝该请求。")]),t._v(" "),s("h4",{attrs:{id:"更换登录态方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更换登录态方案"}},[t._v("#")]),t._v(" 更换登录态方案")]),t._v(" "),s("p",[t._v("因为 CSRF 本质是伪造请求携带了保存在 cookies 中的信息，所以对 session 机制的登录态比较不利，如果更换 JWT（JSON Web Token）方案，其 token 信息一般设置到 HTTP 头部的，所以可以防御 CSRF 攻击。")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://link.segmentfault.com/?enc=pffT3q%2FyKD0s553FjESwVA%3D%3D.mFLZ1dpUa18CJy7NwYMm1bkHZAam%2FtFu0%2FDyiU63Z7%2BxMuGOLxd14%2BMZX4SJZreG",target:"_blank",rel:"noopener noreferrer"}},[t._v("WEB 前端安全——XSS 和 CSRF"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("ps： "),s("a",{attrs:{href:"https://link.segmentfault.com/?enc=VOujNkrRYwflHXf52hlkSg%3D%3D.6sZYOhj3DqeXzfbs5ztcXUMhu6sw%2FYg6KZr7R%2Fn8jOl2bHmymv6b7MREDd6dcplW",target:"_blank",rel:"noopener noreferrer"}},[t._v("个人技术博文 Github 仓库"),s("OutboundLink")],1),t._v("，欢迎 star")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);