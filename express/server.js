const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require("./models/todoList")
require('dotenv').config();

var app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

mongoose.connect(process.env.MONGODB_URL);

// Check for database connection errors
mongoose.connection.on("error", (error) => {
    console.error("MongoDB connection error:", error);
});

// Get saved tasks from the database
app.get("/api/getTodoList", (req, res) => {
    TodoModel.find({})
        .then((todoList) => res.json(todoList))
        .catch((err) => res.json(err))
});

// Add new task to the database
app.post("/api/addTodoList", (req, res) => {
    TodoModel.create({
        task: req.body.task,
        status: req.body.status,
        deadline: req.body.deadline,
    })
        .then((todo) => res.json(todo))
        .catch((err) => res.json(err));
});

// Update task fields (including deadline)
app.post("/api/updateTodoList/:id", (req, res) => {
    const id = req.params.id;
    const updateData = {
        task: req.body.task,
        status: req.body.status,
        deadline: req.body.deadline,
    };
    TodoModel.findByIdAndUpdate(id, updateData)
        .then((todo) => res.json(todo))
        .catch((err) => res.json(err));
});

// Delete task from the database
app.delete("/api/deleteTodoList/:id", (req, res) => {
    const id = req.params.id;
    TodoModel.findByIdAndDelete({ _id: id })
        .then((todo) => res.json(todo))
        .catch((err) => res.json(err));
});

app.listen(port, () => {
    console.log('Server running on 3001');
});