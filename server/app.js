const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Server!');
});

app.listen(4000, () => {
  console.log(`서버 연결 성공 🍎`);
});
