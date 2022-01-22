const express = require("express");
const router = new express.Router();
const Student = require("../modals/student");

module.exports = router;
router.post("/students", async (req, res) => {
  try {
    console.log(req.body);
    const user = new Student(req.body);
    const creatuser = await user.save(); //await to save data
    res.status(201).send(creatuser);
  } catch (e) {
    res.status(201).send(creatuser);
  }
});

// get all students

router.get("/students", async (req, res) => {
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
router.get("/students/:id", async (req, res) => {
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
router.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentbyidupdate = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(studentbyidupdate);
    console.log(studentbyidupdate);
  } catch (e) {
    res.status(400).send(e);
  }
});

//delete student from db
router.delete("/students/:id", async (req, res) => {
  try {
    const studentbyid_delete = await Student.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(studentbyid_delete);
  } catch (e) {
    res.status(500).send(e);
  }
});
