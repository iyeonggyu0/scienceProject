const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// const mySqlStore = require("express-mysql-session")(session);
// const PORT = process.env.PORT || 3000;
const PORT = 5000;

// 모듈
const db = require("./models");
const userRouter = require("./routes/user");
const openaiRouter = require("./routes/openai");

dotenv.config();
const app = express();
db.sequelize
  .sync()
  .then(() => {
    console.log("#################\n## DB 연결성공 ##\n#################");
  })
  .catch(console.error);

// cors error
// 3030, 3000 ---> 3030 에러

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// 모듈 작성하기
app.use("/api/user", userRouter);
app.use("/api/gpt", openaiRouter);

// app.get("*", function (req, res) {
//  res.sendFile(__dirname + "/build/index.html");
// });

app.listen(PORT, () => {
  console.log(`${PORT}포트에서 서버 실행중...`);
});
