const bcrypt = require('bcrypt');
const cryptoJS = require('crypto-js');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  encryptPwd: (unhashedPwd) => {
    const salt = bcrypt.genSaltSync(10);
    const encrypted = bcrypt.hashSync(unhashedPwd, salt);
    return encrypted;
  },

  decryptPwd: (hashedPwd) => {
    let byte = cryptoJS.AES.decrypt(hashedPwd, process.env.CRYPTOJS_SECRET);
    console.log('byte: ', byte);
    // const decrypted = byte.toString(cryptoJS.enc.Utf8);
    // console.log('decrypted: ', decrypted);
    return decrypted;
  },

  comparePwd: (reqBodyPwd, encryptedPwd) => {
    const compare = bcrypt.compareSync(reqBodyPwd, encryptedPwd);
    return compare; // boolean
  },
};
