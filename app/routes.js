var Article = require('./models/article');
module.exports = function(app){

    app.get('/', function(req, res){
        res.render('index')
    });

    app.get("/articles", function(req, res) {
      Article.find(function(err, todos) {
        if (err) {
          res.send(err)
        } else {
          res.send({
            title: "eeee"
          })
        }
      });
    });
}
