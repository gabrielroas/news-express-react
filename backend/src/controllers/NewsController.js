const News = require('../models/News');
const User = require('../models/User');
const { Op } = require('sequelize');

module.exports = {

    async create(req, res) {
        try {
            const user_id = req.user_id;
            const { title, content, thumb_url } = req.body;

            const news_title_replace = title.replace(/\s/g, "-").toLowerCase();
            const news_title_cout = await News.count({
                where: {
                    title: title,
                }
            });
            const news_title_url = `${news_title_replace}-${news_title_cout + 1}`;

            const news = await News.create({
                user_id,
                title,
                content,
                news_url: news_title_url,
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
                include: { association: 'author', attributes: ['name', 'id'] },

            });
            if (!news) return res.status(404).json({ error: 'News not found.' });

            return res.json(news);
        }
        catch (e) {
            res.status(500).send({ error: 'Unable view news' });
        }
    },

    async edit(req, res) {
        try {
            const user_id = req.user_id;

            const { news_url } = req.params;
            const news = await News.findOne({
                where: { news_url: news_url },
            });

            if (user_id != news.user_id) {
                return res.status(401).send({ error: 'Its was not possible edit news' });
            }

            const { title, content, thumb_url } = req.body;
            const news_title_replace = title.replace(/\s/g, "-").toLowerCase();
            const news_title_cout = await News.count({
                where: {
                    title: title,
                }
            });
            const news_title_url = `${news_title_replace}-${news_title_cout + 1}`;

            const news_edit = await News.update(
                { title, content, thumb_url, news_url: news_title_url },
                {
                    where: { news_url: news_url }
                }
            );
            res.status(200).json({ success: "News updated" });
        }
        catch (e) {
            res.status(500).json({ error: "Unable update news" });
        }
    },

    async delete(req, res) {
        try {
            const { news_url } = req.params;

            const news = await News.findOne({
                where: { news_url: news_url },
            });
            if (!news) return res.status(404).json({ error: 'News not found.' });

            const user_id = req.user_id;

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