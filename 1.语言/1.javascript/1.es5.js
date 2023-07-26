// https://zh.javascript.info/

// 1.Array
[0, 1, 2, 3, 4].slice(1, 3);      // [1, 2]
[0, 1, 2, 3, 4].slice(0);         // [0, 1, 2, 3, 4]
[0, 1, 2, 3, 4].splice(1, 2, 5);  // [1, 2]  原数组为[0, 5, 3, 4]
[0, 1, 1, 2, 3, 4].indexOf(1, 2); // 2
[0, 1, 1, 2, 3, 4].lastIndexOf(1, 1); // 1

// 2.String
String.fromCharCode(97, 118, 97); // "ava"  
'JavaScript'.slice(1, 4); // "ava"
'JavaScript'.slice(2, 1); // ""

'JavaScript'.substring(1, 4); // "ava"
'JavaScript'.substring(2, 1); // "a"

'cat, bat, sat, fat'.match('at'); // ["at", index: 1, input: "cat, bat, sat, fat"]
'cat, bat, sat, fat'.search('at'); // 1

'aaa'.replace('a', 'b'); // "baa"
'aaa'.replace(/a/, 'b'); // "baa"
'aaa'.replace(/a/g, 'b'); // "bbb"

'1,2,3'.split(","); // [1,2,3]

// 3.Math
Math.ceil();
Math.floor();
Math.round();
Math.abs();

// 4.Date
(new Date()).getFullYear();
(new Date()).getMonth();
(new Date()).getDate();

// 5.Number
(10).toString(16); // "a"
(10).toFixed(2); // "10.00"

// 6.Function
let fn = new Function('a', 'b', 'return a+b');
console.log(fn(1, 3));

Function.prototype.bind();
Function.prototype.call();
Function.prototype.apply();

// 7.Object
// 原型链的特性：属性值的查找 自身 ->原型 ->原型的原型 ->...... ->null
// 检测属性:  
// in                        自有属性与继承属性都返回true
// o.hasOwnProperty()        自有属性返回true，继承属性返回false
// o.propertyIsEnumerable()  自有属性且该自有属性可枚举返回true，其他返回false
var a = ['is enumerable'];
a.propertyIsEnumerable(0);          // 返回 true
a.propertyIsEnumerable('length');   // 返回 false

console.log(Object.keys(a)); // [0]
console.log(Object.getOwnPropertyNames(a)); // ['0', 'length']

let user = {
  name: "John"
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
Object.defineProperty(user, "name", {
  value: "John",
  writable: false,
  enumerable: false,
  configurable: false
});
Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false }
});

// 8.RegExp
let regex = /^[a-zA-Z]+[0-9]*\W?_$/gi;  // 加载时候解释执行(when the script is loaded.)
let regex2 = new RegExp(/^[a-zA-Z]+[0-9]*\W?_$/, "gi");  // 运行时候解释执行
regex.test(); // 正则表达式是否与指定的字符是否串匹配
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  // abc12345#$*% abc 12345 #$*% 0 abc12345#$*%
  console.log(match, p1, p2, p3, offset, string);
  return [p1, p2, p3].join(' - ');
}
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%

// 正则表达式中字符的含义
// 1.字符类别（Character Classes）
// . \d \D \w \W \s \S \t \r \n \v \f [\b] \0 \xhh \uhhhh

// 2.字符集合（Character Sets）
// [xyz] [^xyz] ^表示非

// 3.边界（Boundaries）
// ^ $ \b \B

// 4.分组（Grouping）与反向引用（back references）
// (x) -> 匹配 x 并且捕获匹配项,被匹配的子字符串可以在结果数组的元素 [1], ..., [n] 中找到
// \n -> n 是一个正整数。一个反向引用（back reference），指向正则表达式中第 n 个括号（从左开始数）中匹配的子字符串
// (?:x) -> 匹配 x 不会捕获匹配项。

// 5.数量词（Quantifiers）
// x* -> {0,}
// x+ -> {1,}
// x? -> {0,1}
// x*? x+? x{n,}?-> 默认情况下，是贪婪的.如果在数量词 *、+、? 或 {}, 任意一个后面紧跟该符号（?），会使数量词变为非贪婪
// x|y
// x{n} x{n,} x{n,m}

// 6.断言（Assertions）
// x(?=y) -> 仅匹配被y跟随的x
// x(?!y) -> 仅匹配不被y跟随的x
