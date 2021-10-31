const { Model, DataTypes } = require('sequelize');

class News extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
            content: DataTypes.TEXT,
            news_url: DataTypes.STRING,
            thumb_url: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'author' });
    }
}

module.exports = News;