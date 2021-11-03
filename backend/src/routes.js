const express = require('express');
const AuthController = require('./controllers/AuthController');
const NewsController = require('./controllers/NewsController');
const UserController = require('./controllers/UserController');

const verifyJWT = require('./middlewares/jwt');

const route = express.Router();

// AUTH
route.post('/register', AuthController.register);
route.post('/login', AuthController.login);

// USER
route.get('/profile', verifyJWT, UserController.profile);

// NEWS
route.get('/news', NewsController.allNews); // news?title=Search
route.post('/news/create', verifyJWT, NewsController.create);
route.get('/news/view/:news_url', NewsController.index);
route.post('/news/view/:news_url/edit', verifyJWT, NewsController.edit);
route.delete('/news/view/:news_url/delete', verifyJWT, NewsController.delete);

module.exports = route;
