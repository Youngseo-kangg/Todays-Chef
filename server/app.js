const express = require('express');
const app = express();

const localPort = 4000;
const remotePort = 80;

app.get('/', (req, res) => {
  res.send('Hello Server!');
});

app.listen(remotePort, () => {
  console.log(`서버 연결 성공 🍎`);
});
