const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  basicRefreshToken: (data) => {
    return jwt.sign(data, process.env.REFRESH_SECRET, { expiresIn: '3m' });
  },
  sendRefreshToken: (res, refreshToken) => {
    if (process.env.CLIENT_URL) {
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
      });
    } else {
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
      });
    }
  },
  refreshAuthorized: (req) => {
    if (!req.cookies) {
      return false;
    }
    const token = req.cookies.refreshToken;

    if (!token) {
      return false;
    } else {
      try {
        const tokenCheck = jwt.verify(token, process.env.REFRESH_SECRET);
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
