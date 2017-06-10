/*
 在node中没有window这个全局作用域；
 全局对象:能在页面中直接使用的就是全局对象；
 在node中可以直接使用的都叫全局对象：console / setTimeout / setInterval
 */
//在服务端,都挂在global上
//1.this ,在文件中直接使用当前的this不是global
//2.自己声明的变量 不会挂载在global上,如果没有var变量会声明在global上

var a = 9;
b = "我是 b";
console.log('global.a: ' + global.a); //->undefined
console.log('global.b: ' + global.b); //->b = "我是 b";
// console.log(global);   //->global 是一个对象

console.log('======================================');

/*
 process  进程
 Buffer   缓存区 内存
 clearImmediate: [Function], 清除立即
 clearInterval: [Function],  清除定时器
 clearTimeout: [Function],   清除超时
 setImmediate: [Function],   设置立即定时器
 setInterval: [Function],
 setTimeout: [Function],
 console: [Getter]
 */

//控制台打印
//console [ log| dir| warn| info| error| (time |timeEnd 计算时差) ]

console.time('first');
for (let i = 0; i < 10; i++) {
}
console.timeEnd('first'); //->first 从开始到结束程序执行的时间差

//setTimeout是异步的，在es5中setTimeout里面的回调函数的this指的是window ;
//                   在es6中这里的this指向的是setTimeout ;
//ps：es6中的回调函数如果用箭头函数代替的话要注意箭头函数中没有this，当调用this时会触发作用域链。
setTimeout(function () {
    console.log('setTimeout中的this: ', this);
}, 500);

//若回调函数是实名函数并且需要参数的话
function fn(who, food) {
    console.log('eat： ' + who, food);
}
try {
    setTimeout(fn('参数1', '参数2'));
} catch (e) {
    console.error(e);    //-> throw new TypeError('"callback" argument must be a function');
    //因为fn('','')是执行函数的意思，传入的是一个函数运行的结果，而不是回调函数。我们通常会再外面包一层函数，
    //但在es6中的setTimeout接受三个参数，从第三个参数开始会作为回调函数的参数将其传入
    setTimeout(fn, 1000, '参数1', '参数2');
}
//=========================================================
// 事件环 是基于事件驱动的  服务员的第二个小本
setImmediate(function () {
    console.log('setImmediate');
});//setImmediate立即 是异步方法

setTimeout(function () {
    console.log('timeout');
});
//setImmediate,setTimeout顺序是不确定的 setImmediate第二个小本上
