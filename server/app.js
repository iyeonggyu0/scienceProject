const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const dotenv = require("dotenv");
// const mySqlStore = require("express-mysql-session")(session);
// const PORT = process.env.PORT || 3000;
const PORT = 5000;

// 모듈
const userRouter = require("./routes/user");
const procudtRouter = require("./routes/product");
const multerRouter = require("./routes/multer");
const db = require("./models");
const passportConfig = require("./passport");

dotenv.config();
const app = express();
db.sequelize
  .sync()
  .then(() => {
    console.log("#################\n## DB 연결성공 ##\n#################");
  })
  .catch(console.error);
passportConfig();

// cors error
// 3030, 3000 ---> 3030 에러

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// 쿠키 작성하기
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    // store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 30,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// 모듈 작성하기
// app.use("/api/user", userRouter);

// app.get("*", function (req, res) {
//  res.sendFile(__dirname + "/build/index.html");
// });

app.listen(PORT, () => {
  console.log(`${PORT}포트에서 서버 실행중...`);
});
