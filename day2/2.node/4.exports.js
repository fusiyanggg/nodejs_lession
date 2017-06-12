// console.log(a); -->a 没有是一个没有定义的变量，会报错；
// 由报错信息可以看到，在node环境里每个.js文件都是默认放到一个闭包里面执行的，而这个闭包会被传入默认的参数
/*
 // (function (exports, require, module, __filename, __dirname) {
 //     console.log(a)
 // })();
 */

// 避免项目中全局变量命名污染

// 1. node.js中 -> 模块化 (避免污染全局变量，团队协作不会产生冲突);
// 2. 单例模式 var obj201703node = {a} 缺点:名字无法避免冲突,调用时命名过长;
// 3. 闭包 ;(seajs CMD 就近依赖) 、 (requirejs AMD 依赖前置);
// node自带 common js 规范;定义了如何使用模块、如何定义模块、如何导出模块;

// ## 如何定义模块？
// 在node文件中每个js就是一个模块，为了每个模块之间没有关系 ，所以在代码执行时外层（默认）套了一个闭包！！闭包中的形参也是全局对象


// 模块的闭包只在文件中存在;node命令行运行时不存在 ->$ exports is undefined
// 在全局中this被默认指向了exports
console.log(this === exports); //->true //在这个闭包中将this指向改变成了exports对象


// exports.dialog = dialog
// console.log(module.exports = dialog);
// console.log(exports === this);


var dialog = {a: 1};
/*
 module.exports = dialog;
 exports.dialog = dialog;
 module.exports.dialog = dialog;
 */
//exports = dialog ×
