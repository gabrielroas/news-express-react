const { Op } = require('sequelize');
const News = require('../models/News');
const User = require('../models/User');

module.exports = {

    async create(req, res) {
        try {
            const user_id = req.userId;
            // const user = await User.findByPk(user_id);
            const { title, content, thumb_url } = req.body;
            const news_url = title.replace(/\s/g, "-").toLowerCase();

            const news = await News.create({
                user_id,
                title,
                content,
                news_url,
                thumb_url,
            });
            res.status(201).json({ success: 'News created success!' });
        }
        catch (e) {
            res.status(500).send({ error: 'It was not possible to create news' });
        }
    },

    async index(req, res) {
        try {
            const { news_url } = req.params;

            const news = await News.findOne({
                where: { news_url: news_url },
                include: [
                    { association: 'author', attributes: ['name'] },
                ]
            });
            if (!news) return res.status(404).json({ error: 'News not found.' });

            return res.json(news);
        }
        catch (e) {
            res.status(500).send({ error: 'Unable view news' });
        }
    },

    async edit(req, res) {
        const user_id = req.userId;

        const { news_url } = req.params;
        const news = await News.findOne({
            where: { news_url: news_url },
        });

        if (user_id != news.user_id) {
            return res.status(401).send({ error: 'Its was not possible edit news' });
        }

        const { title, content, thumb_url } = req.body;
        const custom_url = title.replace(/\s/g, "-").toLowerCase();

        const newsEdit = await News.update(
            { title, content, thumb_url, news_url: custom_url },
            {
                where: { news_url: news_url }
            }
        );
        res.status(200).json({ success: "News updated" });
    },

    async delete(req, res) {
        try {
            const { news_url } = req.params;

            const news = await News.findOne({
                where: { news_url: news_url },
            });
            if (!news) return res.status(404).json({ error: 'News not found.' });

            const user_id = req.userId;
            //const user = await User.findByPk(user_id);

            if (user_id == news.user_id) {
                await news.destroy();
                return res.status(200).send({ success: 'News successfully deleted' });
            }
            return res.status(401).send({ error: 'It was not possible to delete this news' });
        }
        catch (e) {
            res.status(500).send({ error: 'Unable deleted news' });
        }
    },

    async allNews(req, res) {
        try {
            const title = req.query.title;
            let condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

            const news = await News.findAll({
                where: condition,
                include: [
                    { association: 'author', attributes: ['name'] },
                ]
            });
            if (!news) return res.status(404).json({ error: 'News not found.' });

            return res.json(news);
        }
        catch (e) {
            res.status(500).send({ error: 'Unable view news' });
        }
    },
}