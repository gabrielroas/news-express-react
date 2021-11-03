const User = require('../models/User');

module.exports = { 

    async profile(req, res) {
        const user_id = req.user_id;
        const user = await User.findByPk(user_id);
  
        return res.json(user);
     },

}