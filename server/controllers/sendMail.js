const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const { user } = require('../models');
dotenv.config();

module.exports = {
  successMail: async (userEmail, userName) => {
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
      subject: '안녕하세요. 오늘의 셰프팀입니다.',
      text: '오늘의 셰프가 되신 것을 진심으로 축하드립니다.',
      html: `<div
        style="
          width: 40%;
          min-width: 450px;
          border: 2px solid #000;
          margin: 0 auto;
          border-radius: 20px;
        "
      >
        <h1
          style="
            text-align: center;
            width: 70%;
            height: 100px;
            line-height: 140px;
            border-bottom: 2px solid #000;
            font-size: max(1.7vw, 20px);
            margin: 0 auto;
            color:#000;
          "
        >
          오늘의 셰프에서 알려드립니다
        </h1>
        <h2 style="font-size: 60px; text-align: center">✔️</h2>
        <p
          style="
            text-align: center;
            line-height: 30px;
            padding: 0 50px;
            padding-bottom: 50px;
            font-size: 13px;
            color:#000;
          "
        >
          안녕하세요, ${userName}님. 우선 오늘의 셰프 지원해주셔서 감사합니다. <br />
          ${userName}님의 지원서는 저희가 꼼꼼하게 확인하였습니다. <br /><br />
          그 결과, ${userName}님이 오늘의 셰프로서
          <span style="color: rgb(95, 95, 255); font-weight: bold">적합</span
          >하다고 판단되어 알려드립니다. <br /><br />
          셰프가 되신 것을 진심으로 축하드리며, <br />
          오늘의 셰프에서 활발한 활동 기대하겠습니다.<br /><br />
          셰프의 활동을 위해선
          <span style="color: rgb(255, 72, 72); font-weight: bold">재로그인</span>
          부닥드립니다. <br />
          <span style="color: rgb(255, 72, 72); font-weight: bold"
            >재로그인을 하지 않을 시, 셰프 활동을 할 수 없습니다.</span
          >
          <br /><br />문의사항이 있으시다면 고객센터로 연락 부탁드립니다.
        </p>
      </div>`, // html body
    });
  },

  failMail: async (userEmail, userName) => {
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
      subject: '안녕하세요. 오늘의 셰프팀입니다.',
      text: '오늘의 셰프는 언제나 열려있습니다.',
      html: `<body style="margin: 0; padding: 0">
      <div
        style="
          width: 40%;
          min-width: 450px;
          border: 2px solid #000;
          margin: 0 auto;
          border-radius: 20px;
        "
      >
        <h1
          style="
            text-align: center;
            width: 70%;
            height: 100px;
            line-height: 140px;
            border-bottom: 2px solid #000;
            font-size: max(1.7vw, 20px);
            margin: 0 auto;
            color:#000;
          "
        >
          오늘의 셰프에서 알려드립니다
        </h1>
        <h2 style="font-size: 60px; text-align: center">✖️</h2>
        <p
          style="
            text-align: center;
            line-height: 30px;
            padding: 0 50px;
            padding-bottom: 50px;
            font-size: 13px;
            color:#000;
          "
        >
          안녕하세요, ${userName}님. 우선 오늘의 셰프 지원해주셔서 감사합니다. <br />
          ${userName}님의 지원서는 저희가 꼼꼼하게 확인하였습니다. <br /><br />
          그 결과, ${userName}님이 오늘의 셰프로서
          <span style="color: rgb(255, 72, 72); font-weight: bold">부적합</span
          >하다고 판단되어 알려드립니다. <br /><br />
          언제나 오늘의 셰프로서의 도전은 가능합니다. <br />
          ${userName}님을 오늘의 셰프로서 만나뵙기를 기대하고 있겠습니다.<br /><br />
          재도전시,
          <span style="color: rgb(255, 72, 72); font-weight: bold"
            >재로그인 후</span
          >
          이용 부닥드립니다. <br />
          <span style="color: rgb(255, 72, 72); font-weight: bold"
            >재로그인을 하지 않을 시, 이력서 제출이 불가합니다.</span
          >
          <br /><br />문의사항이 있으시다면 고객센터로 연락 부탁드립니다.
        </p>
      </div>
    </body>`, // html body
    });
  },
};
