const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  basicAccessToken: (data) => {
    return jwt.sign(data, process.env.ACCESS_SECRET, { expiresIn: '1d' });
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
        // 이 밑에서부터 console.log찍는거 아무것도 안찍힘
        if (!tokenCheck) {
          return false;
        } else {
          return tokenCheck;
        }
      } catch (err) {
        return false;
      }
    }
  },
};
