// console.log(exports);
var dialog =
    {name :'alala'
    };
// console.log( a );

//->执行报错

// node自带 commonjs规范

// 模块的闭包只在文件中存在 node命令行运行时不存在 exports is undefined

// exports.dialog = dialog
console.log(module.exports = dialog);
console.log(exports === this);