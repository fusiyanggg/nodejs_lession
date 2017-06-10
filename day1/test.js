let http = require('http'),
    fs = require('fs');
console.log('hello');
http.createServer(function (req, res) {
    let result = fs.readFileSync('../index.html', 'utf-8');
    res.end(result);

}).listen(80);