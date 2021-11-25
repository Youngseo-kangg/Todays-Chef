const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const { user } = require('../models');
dotenv.config();

module.exports = {
  successMail: async (userEmail) => {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.NODEMAILER_ACCOUT_USER,
        pass: process.env.NODEMAILER_ACCOUT_PASSWORD,
      },
    });

    let info = await transporter.sendMail({
      from: `"오늘의 셰프 관리자" ${process.env.NODEMAILER_ACCOUT_USER}`,
      to: `${userEmail}`, // list of receivers
      subject: '승인이 완료 되었습니다',
      text: '오늘의 셰프가 되신 것을 진심으로 축하드립니다!',
      html: `<div>
      <h1
        style="
          text-align: center;
          height: 100px;
          width: 800px;
          line-height: 100px;
          border-bottom: 3px solid #603224;
          color: #603224;
          margin: 0 auto;
        "
      >
        🥳 오늘의 셰프가 되신 것을 축하드립니다 🥳
      </h1>
      <p
        style="
          width: 800px;
          margin: 0 auto;
          padding: 50px;
          text-align: center;
          line-height: 40px;
          color: #603224;
        "
      >
        ㅇㅇ님, 앞으로의 셰프 활약 기대하겠습니다! <br />
        셰프 인증이 완료 되었으며, 마이페이지에서 셰프 권한을 누려보세요! <br />
        문의사항이 있으시다면 고객센터로 연락 부탁드립니다.
      </p>
    </div>`, // html body
    });
  },
};
