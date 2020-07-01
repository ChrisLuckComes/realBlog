(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{217:function(s,a,n){"use strict";n.r(a);var t=n(0),_=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"article-content",attrs:{"data-v-0b1a4f9a":"","data-id":"5ef1ba2e6fb9a058b050a626",itemprop:"articleBody"}},[n("h2",{staticClass:"heading",attrs:{"data-id":"heading-0"}},[s._v("1.根据公式，直接递归")]),s._v(" "),n("pre",[n("code",{staticClass:"hljs js copyable",attrs:{lang:"js"}},[n("span",{staticClass:"hljs-comment"},[s._v("/**\n * 斐波那契数列 F(1)=1 F(2)=1 F(n)=F(n-2)+F(n-1)\n */")]),s._v("\n"),n("p",[n("span",{staticClass:"hljs-comment"},[s._v("/**")])]),s._v("\n"),n("ul",[s._v("\n"),n("li",[s._v("递归\n*/"),s._v("\n"),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),n("span",{staticClass:"hljs-title"},[s._v("Fibonacci_1")]),s._v("("),n("span",{staticClass:"hljs-params"},[s._v("n")]),s._v(") ")]),s._v("{\n"),n("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (n <= "),n("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(") {\n"),n("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" n;\n}\n"),n("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" Fibonacci_1(n - "),n("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(") + Fibonacci_1(n - "),n("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(");\n}\n"),n("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".time("),n("span",{staticClass:"hljs-string"},[s._v('"Fibonacci_1"')]),s._v(");\nFibonacci_1("),n("span",{staticClass:"hljs-number"},[s._v("40")]),s._v(");\n"),n("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".timeEnd("),n("span",{staticClass:"hljs-string"},[s._v('"Fibonacci_1"')]),s._v("); "),n("span",{staticClass:"hljs-comment"},[s._v("//Fibonacci_1: 899.942ms")]),s._v("\n"),n("span",{staticClass:"copy-code-btn"},[s._v("复制代码")])])])])]),n("p",[s._v("简单，根据公式直接写出，但是慢。"),n("br"),s._v(" "),n("strong",[s._v("时间复杂度")]),s._v("：O(2^n)"),n("br"),s._v(" "),n("strong",[s._v("空间复杂度")]),s._v("：递归栈的空间")]),s._v(" "),n("h2",{staticClass:"heading",attrs:{"data-id":"heading-1"}},[s._v("2.不递归，保存重复计算结果")]),s._v(" "),n("pre",[n("code",{staticClass:"hljs js copyable",attrs:{lang:"js"}},[n("span",{staticClass:"hljs-comment"},[s._v("/**"),s._v("\n"),n("li",[s._v("保存计算结果\n*/")])]),s._v("\n"),s._v("\n"),n("p",[n("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" map = "),n("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),n("span",{staticClass:"hljs-built_in"},[s._v("Map")]),s._v("();")]),s._v("\n"),n("p",[n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),n("span",{staticClass:"hljs-title"},[s._v("fib")]),s._v("("),n("span",{staticClass:"hljs-params"},[s._v("n")]),s._v(") ")]),s._v("{\n"),n("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" a;\n"),n("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (map.has(n)) {\na = map.get(n);\n} "),n("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v(" {\na = Fibonacci_2(n);\nmap.set(n, a);\n}\n"),n("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" a;\n}")]),s._v("\n"),n("p",[n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),n("span",{staticClass:"hljs-title"},[s._v("Fibonacci_2")]),s._v("("),n("span",{staticClass:"hljs-params"},[s._v("n")]),s._v(") ")]),s._v("{\n"),n("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (n <= "),n("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(") {\n"),n("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" n;\n}\n"),n("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" fib(n - "),n("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(") + fib(n - "),n("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(");\n}")]),s._v("\n"),n("p",[n("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".time("),n("span",{staticClass:"hljs-string"},[s._v('"Fibonacci_2"')]),s._v(");\nFibonacci_2("),n("span",{staticClass:"hljs-number"},[s._v("40")]),s._v(");\n"),n("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".timeEnd("),n("span",{staticClass:"hljs-string"},[s._v('"Fibonacci_2"')]),s._v("); "),n("span",{staticClass:"hljs-comment"},[s._v("//Fibonacci_2: 0.217ms")]),s._v("\n"),n("span",{staticClass:"copy-code-btn"},[s._v("复制代码")])])])]),n("p",[s._v("可以看到速度比递归快了很多"),n("br"),s._v(" "),n("strong",[s._v("时间复杂度")]),s._v("：O(n)没有重复的计算"),n("br"),s._v(" "),n("strong",[s._v("空间复杂度")]),s._v("：O(n)和递归栈的空间")]),n("p"),s._v(" "),n("h2",{staticClass:"heading",attrs:{"data-id":"heading-2"}},[s._v("3.动态规划")]),s._v(" "),n("pre",[n("code",{staticClass:"hljs js copyable",attrs:{lang:"js"}},[n("span",{staticClass:"hljs-comment"},[s._v("/**\n * 动态规划\n * @param {number}} n\n */")]),s._v("\n"),n("p",[n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),n("span",{staticClass:"hljs-title"},[s._v("Fibonacci_3")]),s._v("("),n("span",{staticClass:"hljs-params"},[s._v("n")]),s._v(") ")]),s._v("{\n"),n("span",{staticClass:"hljs-comment"},[s._v("// write code here F(1)=1，F(2)=1, F(n)=F(n - 1)+F(n - 2)")]),s._v("\n"),n("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (n <= "),n("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(") {\n"),n("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" n;\n}\n"),n("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" a = "),n("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(",\nb = "),n("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(",\nc;\n"),n("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v(" ("),n("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" i = "),n("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("; i <= n; i++) {\nc = a + b;\na = b;\nb = c;\n}\n"),n("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" c;\n}")]),s._v("\n"),n("p",[n("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".time("),n("span",{staticClass:"hljs-string"},[s._v('"Fibonacci_3"')]),s._v(");\nFibonacci_3("),n("span",{staticClass:"hljs-number"},[s._v("40")]),s._v(");\n"),n("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".timeEnd("),n("span",{staticClass:"hljs-string"},[s._v('"Fibonacci_3"')]),s._v("); "),n("span",{staticClass:"hljs-comment"},[s._v("//Fibonacci_3: 0.143ms")]),s._v("\n"),n("span",{staticClass:"copy-code-btn"},[s._v("复制代码")])])])]),n("p",[s._v("耗时最短。将计算过程拆解，每次计算只需要 F(n-2)和 F(n-1)的计算结果，不需要存储所有的计算结果。"),n("br"),s._v(" "),n("strong",[s._v("时间复杂度")]),s._v("：O(n)"),n("br"),s._v(" "),n("strong",[s._v("空间复杂度")]),s._v("：O(1)")]),n("p")])])}),[],!1,null,null,null);a.default=_.exports}}]);