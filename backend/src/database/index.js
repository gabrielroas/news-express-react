const Sequelize = require('sequelize');
const dbConfig = require('../config/db');
const User = require('../models/User');
const News = require('../models/News');

const connection = new Sequelize(dbConfig);

User.init(connection);
News.init(connection);

User.associate(connection.models);
News.associate(connection.models);

module.exports = connection;
