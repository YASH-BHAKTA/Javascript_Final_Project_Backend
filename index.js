const express = require('express');
const cors = require("cors");
require('./db/config');
const Student = require('./db/Students');
const app = express();
app.use(express.json());
app.use(cors());
app.post("/add", async (req, resp) => {
    let student = new Student(req.body);
    let result = await student.save();
    resp.send(result);
});

app.get("/students", async (req, resp) => {
    let students = await Student.find();
    if (students.length > 0) {
        resp.send(students);
    }
    else {
        resp.send({result : "No Product Found"})
    }
});


app.listen(5000);