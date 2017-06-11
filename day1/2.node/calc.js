let http =require('http')
let calculator = {
    "+"(a, b)  {
        return a + b
    },
    "-"(a, b)  {
        return a - b
    },
};

module.exports = calculator ;
// exports.exe = calculator ;
// console.log(exports);
// module.exports.exe = calculator;