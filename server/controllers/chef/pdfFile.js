const { bechef } = require('../../models');
const { isAuthorized, basicAccessToken } = require('../token/accessToken');
const { refreshAuthorized } = require('../token/refreshToken');

module.exports = {
  post: async (req, res) => {
    const accessVerify = isAuthorized(req);
    console.log('bbb', req.body);
    // accessToken 만료
    if (!accessVerify) {
      const refreshVerify = refreshAuthorized(req);
      // refreshToken 만료
      if (!refreshVerify) {
        res.status(401).json({ message: 'Send new Login Request' });
      }
      // refreshToken 유효
      else {
        delete refreshVerify.exp;
        const accessToken = basicAccessToken(refreshVerify);
        // isSubmit true로 바꿔주는 작업
        console.log('aaaaaa', req.file);
        res.status(201).json({ accessToken, message: 'ok' });
      }
    } // accessToken 유효
    else {
      // isSubmit true로 바꿔주는 작업
      res.status(200).json({ message: 'ok' });
    }
  },
};
