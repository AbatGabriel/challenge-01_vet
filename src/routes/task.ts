import express  from "express"
const router = express.Router()

const { getAllTasks,createTask,getTask } = require("../controllers/task")


router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").get(getTask)


module.exports = router