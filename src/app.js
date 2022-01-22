const express = require("express");
const { send } = require("express/lib/response");
const mongoose = require("mongoose");
const validator = require("validator");
const Student = require("./modals/student");
const studentRouters = require("./routers/students");
require("./db/config");
const port = 3000;
const app = express();
app.use(express.json()); //what ever data we are sending we have read that as json data
app.use(studentRouters);
app.listen(port, () => {
  console.log(`listning at port ${port}`);
});
