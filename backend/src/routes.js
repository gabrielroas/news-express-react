const express = require('express');
const AuthController = require('./controllers/AuthController');
const NewsController = require('./controllers/NewsController');

const verifyJWT = require('./middlewares/jwt');

const route = express.Router();

// AUTH
route.post('/register', AuthController.register);
route.post('/login', AuthController.login);

// NEWS
route.get('/news', NewsController.allNews);
// ('/news?title=Pesquisa')
route.post('/news/create', verifyJWT, NewsController.create);
route.get('/news/view/:news_url', NewsController.index);
route.delete('/news/view/:news_url/delete', verifyJWT, NewsController.delete);

// edit news
// search news '/news/search?title=title

module.exports = route;
