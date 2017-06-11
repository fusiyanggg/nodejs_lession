function Girl() {
    this._events = {}
}

let girl = new Girl();

Girl.prototype.on = function (eventName, callback) {

};

function cry() {
    console.log('cry');
}

function die() {
    console.log('die');
}

girl.on('run', cry);
girl.on('run', die);
girl.emit('run', 'par');