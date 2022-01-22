const express = require("express");
const { send } = require("express/lib/response");
const mongoose = require("mongoose");
const validator = require("validator");
const Student = require("./modals/student");
require("./db/config");
const port = 3000;
const app = express();
app.use(express.json()); //what ever data we are sending we have read that as json data
//so we add this

app.post("/students", async (req, res) => {
  try {
    console.log(req.body);
    const user = new Student(req.body);
    const creatuser = await user.save(); //await to save data
    res.status(201).send(creatuser);
  } catch (e) {
    res.status(201).send(creatuser);
  }
});
app.get("/students", async (req, res) => {
  try {
    const usersdata = await Student.find();
    res.send(usersdata);
    console.log(usersdata);
  } catch (e) {
    res.status(201).send(e);
  }
});

// to get desire id
// app.get("/students/:id", async (req, res) => {
//   try {
//     const usersdata = req.params;
//     console.log(req.params);
//     res.send(req.params);
//   } catch (e) {
//     res.status(201).send(e);
//   }
// });

// to get students by email using mongo query
app.get("/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const studentdata = await Student.findById(id);
    console.log(studentdata);
    if (!studentdata) {
      res.status(404).send(e);
    } else {
      res.send(studentdata);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

//update student using patch request
app.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentbyidupdate = await Student.findByIdAndUpdate(_id, req.body);
    res.send(studentbyidupdate);
    //console.log(studentbyidupdate);
  } catch (e) {
    res.status(404).send(e);
  }
});

app.listen(port, () => {
  console.log(`listning at port ${port}`);
});
