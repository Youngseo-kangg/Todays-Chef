const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`서버 연결 성공 🍎`);
});
