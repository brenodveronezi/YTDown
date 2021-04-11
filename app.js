var app = require('./server.js');

app.listen(3000, function() {
    console.log('Servidor Online!');
})


module.exports = function(application){
    application.get('/', function(req ,res){
        res.render("home")
    })
}