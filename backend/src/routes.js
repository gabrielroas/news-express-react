const express = require('express');
const AuthController = require('./controllers/AuthController');
const NewsController = require('./controllers/NewsController');
const UserController = require('./controllers/UserController');

const verify_jwt = require('./middlewares/jwt');

const route = express.Router();

// AUTH
route.post('/register', AuthController.register);
route.post('/login', AuthController.login);

// USER
route.get('/profile', verify_jwt, UserController.profile);

// NEWS
route.get('/news', NewsController.allNews); // news?title=Search
route.post('/news/create', verify_jwt, NewsController.create);
route.get('/news/view/:news_url', NewsController.index);
route.post('/news/view/:news_url/edit', verify_jwt, NewsController.edit);
route.delete('/news/view/:news_url/delete', verify_jwt, NewsController.delete);

module.exports = route;
