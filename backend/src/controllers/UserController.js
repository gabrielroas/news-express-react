const User = require('../models/User');

module.exports = { 

    async profile(req, res) {
        const user_id = req.userId;
        const user = await User.findByPk(user_id);
  
        return res.json(user);
     },

}