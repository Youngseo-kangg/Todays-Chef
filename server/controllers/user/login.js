const { user } = require('../../models');

module.exports = {
  post: async (req, res) => {
    try {
      console.log('hi');
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};
