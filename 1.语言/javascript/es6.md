[es6features](https://github.com/lukehoban/es6features#arrows)
[阮一峰es6教程](http://es6.ruanyifeng.com/)

1.arrows
2.classes
3.enhanced object literals
4.template strings
  4.1.单行多行字符串
  4.2.字符串插值
  4.3.带标签的模板
```js
const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp > 99 ? "centenarian" : "youngster";

  // 我们甚至可以返回使用模板字面量构建的字符串
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.
```

5.destructuring
```js
var [a = 1] = [];
a === 1; // true
```
6.default + rest + spread
```js
// 剩余运算符
function f(x, ...y) {
  // y is an Array
  return x * y.length;
}
f(3, "hello", true) == 6
// 展开运算符
function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
f(...[1,2,3]) == 6
```
7.let + const
8.iterators + for..of
9.generators
  9.1.function* 返回一个Generator实例
  9.2.Generator是Iterator的子类¬
```js
var fibonacci = {
  [Symbol.iterator]: function*() {
    var pre = 0, cur = 1;
    for (;;) {
      var temp = pre;
      pre = cur;
      cur += temp;
      yield cur;
    }
  }
}

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}
```

10.unicode
11.modules
12.module loaders
13.map + set + weakmap + weakset
14.proxies
15.symbols
16.subclassable built-ins
17.promises
18.math + number + string + array + object APIs
19.binary and octal literals
20.reflect api
21.tail calls