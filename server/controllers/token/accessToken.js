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
      console.log('token 있어서 들어옴');
      try {
        console.log('tokenCheck시작');
        const tokenCheck = jwt.verify(token, process.env.ACCESS_SECRET);
        // 이 밑에서부터 console.log찍는거 아무것도 안찍힘
        console.log('tokenCheck: ', tokenCheck);
        if (!tokenCheck) {
          console.log('jwt.verify false');
          return false;
        } else {
          console.log('jwt.verify true');
          return tokenCheck;
        }
      } catch (err) {
        console.log('jwt.verify false/true는 아닌데 오류 있음');
        return false;
      }
    }
  },
};
