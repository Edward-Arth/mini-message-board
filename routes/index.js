var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Post' });
});

router.post('/new', function(req, res, next) {
  const newName = req.body.name;
  const newMessage = req.body.message;
  messages.push({text: newMessage, user: newName, added: new Date()});
  res.redirect('/');
});

module.exports = router;
