const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/student");
const Schema = mongoose.Schema;
const student = new Schema(
  {
    name: String,
    age: Number,
    hometown: String,
    account: {
      type: String,
    },
  },
  {
    collection: "student",
  }
);

const studentModel = mongoose.model("student", student);
module.exports = studentModel;
