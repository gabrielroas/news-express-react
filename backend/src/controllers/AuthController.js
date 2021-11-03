const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

module.exports = {

    async register(req, res) {
        try {
            const { name, email, password } = req.body;
            const password_bcrypt = await bcrypt.hash(password, 10);
            const user = await User.create({ name, email, password: password_bcrypt });
            res.status(201).json({ success: 'You have been successfully registered.' });
        }
        catch (err) {
            res.status(500).json({ error: "Unable to register" });
        }
    },

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email: email } });
            if (user) {
                const compare_encrypted_password = await bcrypt.compare(password, user.password);

                if (compare_encrypted_password) {
                    const token = jwt.sign({ user: user.id }, process.env.JWT_SECRET, { expiresIn: '365d' });
                    res.status(202).json({ success: "Successfully logged in", token: token });
                } else {
                    res.status(400).json({ error: "Incorrect password" });
                }

            } else {
                res.status(401).json({ error: "Incorrect user" });
            }
        }
        catch (e) {
            res.status(500).json({ error: "Unable to login" });
        }
    }
}