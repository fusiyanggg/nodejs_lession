/**
 * Created by fusiyang on 2017/6/11.
 */
let haha = {
    name: 'fsy',
    age: 25
};
module.exports = haha;

let fn = () => {
    console.log('hello word');
};

module.exports.fn = fn;