const mongoose=require('mongoose');

const studentSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    
});

module.exports = mongoose.model("students",studentSchema);