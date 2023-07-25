"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const task = require("./routes/task");
//routes
app.use('/api/v1', task);
app.listen(3000);
console.log('port 3000 conected...');
