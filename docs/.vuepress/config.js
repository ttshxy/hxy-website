module.exports = {
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  base: '/',
  title: '胡潇遥的个人网站',
  description: '胡潇遥的个人网站,个人网，个人博客',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'React', link: '/react/' },
      {
        text: '基础知识',
        link: '/base/',
      },
      { text: '数据结构与算法', link: '/leetcode/' },
      {
        text: 'Github',
        link: 'https://github.com/ttshxy/ttshxy.github.io/tree/master',
      },
    ],
    sidebar: {
      '/react/': [
        ['', '目录'],
        ['$$typeof.md', 'React 中 $$typeof 的作用'],
        ['key.md', 'React key的作用以及使用方式'],
      ],
      '/base/': [
        ['', '目录'],
        {
          name: 'code',
          collabsable: true,
          title: 'js',
          children: [
            ['code/', '目录'],
            ['code/0', 'js var let const的区别'],
            ['code/debounce', '什么是防抖，应用场景有哪些⭐️'],
            ['code/throttle', '什么是节流，应用场景有哪些⭐️'],
            ['code/01', 'js中为何 0.1+0.2 不等于 0.3，应如何做相等比较'],
            ['code/02', 'Ajax/Fetch/axios三者有什么区别'],
            ['code/03', 'TCP 三次握手与四次挥手'],
            ['code/04', 'for...in与for...of的区别'],
            ['code/05', 'js严格模式的特点'],
            ['code/06', 'js跨域'],
            ['code/07', 'Antd Form.Item控件嵌套'],
            ['code/08', 'js事件循环体系'],
            ['code/09', 'for与forEach哪个快'],
            ['code/10', 'js作用域与闭包'],
            ['code/11', 'js中的this'],
            ['code/12', 'js中的原型与原型链'],
            ['code/13', 'NodeJs commonJs与ES6 import区别'],
            ['code/14', 'js深拷贝与浅拷贝'],
            ['code/15', 'requestAnimationFrame使用'],
            ['code/16', 'js数组去重'],
            ['code/17', '手写js拍平函数flat'],
            ['code/18', 'url参数匹配'],
            ['code/19', '事件捕获与冒泡'],
            ['code/20', 'Retina 屏 1px 像素问题'],
            ['code/21', '前端安全-XSS和CSRF'],
            ['code/22', 'js变量提升'],
            ['code/23', 'js进制转换'],
            ['code/24', 'js字符串 数组方法整理'],
            [
              'code/25',
              'js obj与Map的区别 / 介绍下 Set、Map、WeakSet 和 WeakMap 的区别？',
            ],
            ['code/26', 'async defer的区别'],
            [
              'code/27',
              'instanceof作用，手动实现function isInstanceOf (child, Parent)',
            ],
            ['code/28', 'js手写发布订阅'],
            ['code/29', 'js call/apply/bind的区别，手写bind函数'],
            ['code/30', 'js new操作符干了什么，手写new函数'],
            ['code/31', '前端性能优化总结'],
            ['code/32', '手写Promise.all'],
          ],
        },
        {
          name: 'react',
          title: 'react',
          children: [
            ['react/', '目录'],
            // ['react/$$typeof', 'React 中 $$typeof 的作用'],
            ['react/key', 'React key的作用以及使用方式'],
            ['react/context', 'React Context使用'],
            // ['react/portals', 'React Portals使用'],
            ['react/lazy', 'React代码分割/React.lazy使用'],
            [
              'react/01',
              'React Hooks 为啥 useState 返回的是 array 而不是 object 呢？',
            ],
            ['react/ErrorBoundary', 'react ErrorBoundary使用'],
            ['react/02', '为什么不能在表达式里面定义 react hooks'],
            ['react/03', 'react useEffect与useLayoutEffect的区别'],
            ['react/04', 'react hooks闭包问题'],
            ['react/05', 'react hooks遇到的坑'],
            ['react/06', 'react为什么要废除三个周期函数'],
          ],
        },
        {
          name: 'css',
          collabsable: true,
          title: 'css',
          children: [
            ['css/', '目录'],
            ['css/01', 'BFC是什么？有什么作用？'],
            ['css/02', 'z-index: 999 元素一定会置于 z-index: 0 元素之上吗'],
            [
              'css/03',
              '介绍一下标准的CSS的盒子模型？与低版本IE的盒子模型有什么不同',
            ],
            ['css/04', 'css box-shadow属性'],
            ['css/05', 'css BFC IFC'],
            ['css/06', 'z-index属性在什么情况下会失效？'],
            ['css/07', 'flex注意事项'],
            ['css/08', 'css重绘与回流的区别，什么属性改变会导致重绘'],
            ['css/09', 'css水平垂直居中'],
            ['css/10', 'css选择器与优先级'],
            ['css/11', 'css实现三角形'],
            ['css/12', 'css单行截断'],
          ],
        },
        {
          name: 'Webpack',
          collabsable: true,
          title: 'Webpack',
          children: [
            ['webpack/', '目录'],
            ['webpack/01', 'vite和webpack的区别'],
            ['webpack/02', 'webpack常用loader'],
            ['webpack/03', 'webpack常用plugin'],
            ['webpack/04', 'webpack的热更新是如何做到的？原理是什么？'],
            ['webpack/05', 'webpack proxy工作原理？为什么能解决跨域?'],
            ['webpack/06', 'Loader和Plugin的区别？编写Loader，Plugin的思路？'],
          ],
        },
        {
          name: '网络相关',
          collabsable: true,
          title: '网络相关',
          children: [
            ['network/', '目录'],
            ['network/01', 'GET与POST的区别'],
          ],
        },
        {
          name: 'sundry',
          collabsable: true,
          title: '杂项',
          children: [
            ['sundry/', '目录'],
            ['sundry/01', 'git flow流程'],
            ['sundry/正则表达式', '正则表达式'],
            ['sundry/02', '个人相关'],
          ],
        },
      ],
      '/leetcode/': [
        ['', '目录'],
        {
          name: 'jzoffer',
          collabsable: true,
          title: 'jzoffer',
          children: [
            ['01', '最大公约数与最小公倍数'],
            ['全排列', '全排列'],
            ['02', '二分查找'],
            ['offer09', '09. 用两个栈实现队列'],
            ['offer30', '30. 包含min函数的栈'],
            ['offer06', '06. 从尾到头打印链表'],
            ['offer24', '24. 反转链表'],
            ['offer35', '35. 复杂链表的复制'],
            ['offer06', '04. 二维数组中的查找'],
            ['offer11', '11. 旋转数组的最小数字'],
            ['offer50', '50. 第一个只出现一次的字符'],
          ],
        },
      ],
      '/algorithms/': [
        ['', '目录'],
        ['binarySearch', '二分查找'],
      ],
    },
  },
};
