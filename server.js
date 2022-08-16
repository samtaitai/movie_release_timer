var express = require('express');
var app = express();

app.use(express.static('/public'));

app.get('/greentime', function(req, res){
    res.sendFile( __dirname + "/" + "index.html" );
});

app.get('/test', function(req, res){
    res.sendFile( __dirname + "/" + "test.html" );
});

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port);
})