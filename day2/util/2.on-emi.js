function Girl() {
    this._events = {} //给实例化的对象一个私有的事件池
}

let girl = new Girl();

//在类的原型上定义订阅方法，使得所有的实例都能继承到订阅(绑定)
Girl.prototype.on = function (eventName, callback) {
//进来先判断事件池中有没有存在传入的事件
    if (this._events[eventName]) { //因为event是一个变量，所以不能用.访问，必须用[]
//如果存在这个事件名，则在这个事件队列里面添加一个新的执行方法
        this._events[eventName].push(callback)
        //->>
        // _event = {
        //     eventName: [fn1, callback],
        //     eventName1: [fn12, fn2],
        // }

    } else {//如果没有这个事件，则将这个事件名添加到事件池中，并且绑定的方法存入数组中
        this._events[eventName] = [callback]
    }
};

//根据发布函数的参数(事件名) 执行对应事件中的方法
Girl.prototype.emit = function (eventName) {
    if (this._events[eventName]) {
        this._events[eventName].forEach(function (item) {
            item()
        })
    }
};


function cry() {
    console.log('cry');
}

function die() {
    console.log('die');
}

girl.on('失恋', cry);
girl.on('失恋', die);
//如果发布的时候需要传入一些参数要订阅的事件执行
girl.emit('失恋', '大声哭', '跳楼');