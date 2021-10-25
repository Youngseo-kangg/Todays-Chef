const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./models');
require('dotenv').config();

const serverPort = process.env.SERVER_PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));

app.use(
  cors({
    origin: [process.env.CLIENT_URL, 'http://localhost:3000'],
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('Hello Server!');
});

app.use((req, res, next) => {
  res.status(404).send('Not Found!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: 'Internal Server Error',
    stacktrace: err.toString(),
  });
});

// 데이터베이스 연결
sequelize
  .sync({ force: false })
  .then(() => {
    console.log();
    console.log(`👍데이터베이스 연결 성공👍 \n`);
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(serverPort, () => {
  console.log(`서버 연결 성공 🍎`);
});
