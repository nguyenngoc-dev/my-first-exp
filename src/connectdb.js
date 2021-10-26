const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/student");
//connect đến database student trên mogopash ở đây localhost là mặc định ở cổng 27017
const Schema = mongoose.Schema;
// Tạo một schema, một khung để có thể làm việc với dữ liệu trên data base

const student = new Schema(
  {
    name: String,
    age: Number,
    hometown: String,
    account: {
      type: String,
      ref: "account",
    },
  },
  {
    collection: "student", // thêm collection để cho biết đây là làm việc trong collection student
    // nếu k thêm thì nó sẽ làm việc với collection ở dưới model
  }
);

const studentModel = mongoose.model("student", student); // mongoose sẽ tự động cập nhật tên collection thành số nhiều,
// ở đây sẽ là students nếu k khai báo collection ở trên
const account = new Schema(
  {
    name: String,
    age: Number,
  },
  {
    collection: "Account",
  }
);

const accountModel = mongoose.model("account", account);
studentModel // find với đk là {} thì sẽ tìm tất cả các document trong collection student
  .find({
    name: "Nguyen Thi Anh", // $gt lớn hơn $gte >= $lt nhỏ hơn $lte <=, dùng thêm regex để làm việc, tìm kiếm với chuỗi
  })
  .populate("account") // liên kết với model account thông qua id của account
  //   .sort('age') // sắp xếp theo tuổi
  //   .skip(số phần tử cần bỏ qua)
  //   . limit(số phần tử giới hạn)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// studentModel         // updateOne({điều kiện},{update})
//   .updateOne(
//     {
//       name: "Nguyyen Van Ngoc",
//     },
//     {
//       name: "Nguyen Van Ngoc",
//     }
//   )
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// studentModel
//   .deleteOne({
//     name: "Thu",
//     age: 19,
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
