"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createControl = void 0;
const todo_test_1 = require("../models/todo_test");
const TODOS = [];
const createControl = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_test_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Created the todo.', createdTodo: newTodo });
};
exports.createControl = createControl;
