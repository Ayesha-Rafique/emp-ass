const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  joiningDate: { type: Date, required: true },
  designation: { type: String, required: true },
  contact: { type: String, required: true },
  workProfile: { type: String, required: true },
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
