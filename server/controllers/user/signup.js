const { user } = require('../../models');
const { encryptPwd, decryptPwd } = require('../hashing/hashingPwd');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  post: async (req, res) => {
    const newUserData = req.body;
    const { email, password, nickname } = newUserData;
    const encryptedPw = encryptPwd(password);

    const findNickname = await user.findOne({
      where: { nickname },
    });
    const findEmail = await user.findOne({
      where: { email },
    });

    if (findEmail && !findNickname) {
      res.status(400).json({ message: 'same email' });
    } else if (!findEmail && findNickname) {
      res.status(400).json({ message: 'same nickname' });
    } else if (findNickname && findEmail) {
      res.status(400).json({ message: 'invalid User' });
    } else if (!findNickname && !findEmail) {
      res.status(200).json({ message: 'ok' });
    }
  },
};
