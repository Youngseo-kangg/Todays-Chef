const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  basicAccessToken: (data) => {
    return jwt.sign(data, process.env.ACCESS_SECRET, { expiresIn: '4h' });
  },
  isAuthorized: (req) => {
    if (!req.headers.authorization) {
      return false;
    }
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return false;
    } else {
      try {
        const tokenCheck = jwt.verify(token, process.env.ACCESS_SECRET);

        if (!tokenCheck) {
          return false;
        }
        return tokenCheck;
      } catch (err) {
        console.log(err);
        return false;
      }
    }
  },
};
