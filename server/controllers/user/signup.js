const { user } = require('../../models');
const { encryptPwd } = require('../hashing/hashingPwd');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  post: async (req, res) => {
    const newUserData = req.body;
    console.log('newUserData: ', newUserData);
    const { email, password, nickname } = newUserData;

    const encryptedPw = encryptPwd(password);
    console.log('encryptedPw: ', encryptedPw);

    const findNickname = await user.findOne({
      where: { nickname },
    });
    const findEmail = await user.findOne({
      where: { email },
    });

    if (findEmail && !findNickname) {
      res.status(400).json({ message: 'same email' });
    } else if (findNickname && findEmail) {
      res.status(400).json({ message: 'invalid User' });
    } else if ((!findNickname && !findEmail) || (!findEmail && findNickname)) {
      res.status(200).json({ message: 'ok' });

      await user.create({
        email,
        password: encryptedPw,
        nickname,
        userImg: '',
        isChef: false,
        isOauth: false,
      });
    }
  },
};
