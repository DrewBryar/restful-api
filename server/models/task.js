const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please give your task a title."],
        minlength: [2, "Your title must be atleast 2 characters long."]
    },
    description:{
        type: String,
        default: ""
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {timestamps:true})

mongoose.model("Task", TaskSchema);