// 获取环境变量
// 1.区分本地开发环境 和线上开发环境
// process.env属性返回一个对象，包含了当前Shell的所有环境变量。
// 通常的做法是，新建一个环境变量NODE_ENV，用它确定当前所处的开发阶段，生产阶段设为production，开发阶段设为develop或staging，然后在脚本中读取process.env.NODE_ENV即可。

console.log(process.env);//->打印当前的环境变量
process.env.NODE_ENV = 'production';

let url = '', log = '';
if (process.env.NODE_ENV === "develop") {
    log = '环境变量是开发环境';
    url = 'http://localhost:8080';
    console.log('开发环境 ');
} else {
    log = '生产阶段，各项部署完毕，可投入线上运行';
    url = 'http://www.baidu.com';
    console.log('线上环境');
}
//console setTimeout setImmediate setInterval process Buffer
//异步
//全局对象