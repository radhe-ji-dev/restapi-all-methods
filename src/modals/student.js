const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "email is already in DB"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("invalid email");
      }
    },
  },
  phone: {
    type: Number,
    required: true,
    min: 10,
  },
  address: {
    type: String,
    required: true,
    min: 3,
  },
});

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;
