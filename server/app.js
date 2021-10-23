const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(80, () => {
  console.log(`서버 연결 성공 🍎`);
});
