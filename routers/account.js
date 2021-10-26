const express = require("express");
const router = express.Router();
const studentModel = require("../models/account");
// Lấy dữ liệu từ DB
router.get("/", (req, res, next) => {
  studentModel
    .find({})
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("không thể lấy dữ liệu"));
});
// Đẩy dữ liệu lên DB
router.post("/", (req, res, next) => {
  const name = req.body.name;
  const age = req.body.age;
  studentModel
    .findOne({
      name: name,
    })
    .then((data) => {
      if (data) {
        res.json("Tên đã có trong database");
      } else {
        return studentModel.create({
          name: name,
          age: age,
        });
      }
    })
    .then((data) => res.json("Thành công"))
    .catch((err) => res.status(400).json("thất bại"));
});
// update dữ liệu lưu ý khi update thì link cần thêm id cho document cần update;
router.put("/:id", (req, res, next) => {
  var id = req.params.id;
  var newName = req.body.newName;
  studentModel
    .findByIdAndUpdate(id, {
      name: newName,
    })
    .then((data) => res.json("update thành công"))
    .catch((err) => res.status(400).json("update thất bại"));
});
// Xóa dữ liệu tương tự put cần thêm id cho đường dẫn
router.delete("/:id", (req, res, next) => {
  var id = req.params.id;
  studentModel
    .deleteOne({
      _id: id,
    })
    .then((data) => res.json("delete thành công"))
    .catch((err) => res.status(400).json("delete thất bại"));
});

module.exports = router;
