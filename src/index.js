const express = require("express");
const app = express();
const studentModel = require("../models/account");
const bodyParser = require("body-parser");
const accountRouter = require("../routers/account");
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/api/account/", accountRouter);
app.get("/", (req, res, next) => {
  res.json("hey hey hey hey !");
});
app.get("/home", (req, res, next) => {
  res.json("This is my house");
});
// app.post("/register", (req, res, next) => {
//   const name = req.body.name;
//   const age = req.body.age;
//   studentModel
//     .findOne({
//       name: name,
//     })
//     .then((data) => {
//       if (data) {
//         res.json("Tên đã có trong database");
//       } else {
//         return studentModel.create({
//           name: name,
//           age: age,
//         });
//       }
//     })
//     .then((data) => res.json("Thành công"))
//     .catch((err) => res.status(400).json("thất bại"));
// });
// app.post("/login", (req, res, next) => {
//   const name = req.body.name;
//   const age = req.body.age;
//   studentModel
//     .findOne({
//       name: name,
//       age: age,
//     })
//     .then((data) => {
//       if (data) res.json("đăng nhập thành công");
//       else res.status(300).json("Bạn chưa đăng kí tài khoản");
//     })
//     .catch((err) => res.status(400).json("không thể đăng nhập"));
// });
app.listen(process.env.PORT, (req, res) => {
  console.log("listen on the port");
});
