var Article = require('../models/article');

module.exports = function (app) {
  app.get("/articles", function (req, res) {
    Article.find((err, todos) => {
      if (err) {
        res.send(err);
      } else {
        res.json(todos); // return all todos in JSON format
      }
    });
  });

  app.post('/api/articles', function (req, res) {

    // create a todo, information comes from AJAX request from Angular
    Article.create(
      {
        text: req.body.text,
        done: false
      }, (err, todo) => {
        if (err) {
          res.send(err);
        }

        // get and return all the todos after you create another
        Article.find((err, todos) => {
          if (err) {
            res.send(err);
          } else {
            res.json(todos);
          }
        });
      });
  });

  app.delete('/api/articles/:article_id', (req, res) => {
    Article.remove({
      _id: req.params.todo_id
    }, (err, todo) => {
      if (err) {
        res.send(err);
      }
      // get and return all the todos after you create another
      Article.find(function (err, todos) {
        if (err) {
          res.send(err);
        } else {
          res.json(todos);
        }
      });
    });
  });
};
