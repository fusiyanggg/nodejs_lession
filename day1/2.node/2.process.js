//获取环境变量
//1. 区分本地开发环境 和线上开发环境
//设置环境变量 set NODE_ENV=developement 设置环境变量

console.log(process.env);
let url = '';
if (process.env.NODE_ENV === "hello") {
    // ENV是process的一个属性
    url = 'http://localhost:8080'; //->在webstorm里面运行js代码
    console.log('开发环境 ');
} else {
    url = 'http://www.baidu.com';  //->在外部node环境下运行js代码
    console.log('线上环境');
}
//======================================
setImmediate(function () {
    console.log('setImmediate');

});
process.nextTick(function () {
    console.log('nextTick');
    //比较重要的方法放在这里      执行优先级 > setImmediate
});//下一队列