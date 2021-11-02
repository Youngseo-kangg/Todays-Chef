const { user } = require('../../models');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  post: async (req, res) => {
    const newUserData = req.body;
    const { email, password, username } = newUserData;
  },
};
