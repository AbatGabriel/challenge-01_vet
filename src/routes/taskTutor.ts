import express  from "express"
const router = express.Router()

const { getAllTutors,createTutor,deleteTutor,updateTutor } = require("../controllers/taskTutor")


router.route("/tutors").get(getAllTutors)
router.route("/tutor").post(createTutor)
router.route("/tutor/:id").delete(deleteTutor).put(updateTutor)


module.exports = router