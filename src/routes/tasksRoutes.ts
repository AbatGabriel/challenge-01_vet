import express  from "express"
const router = express.Router()

const { getAllTutors,createTutor,deleteTutor,updateTutor } = require("../controllers/taskTutor")
const {createPet,updatePet,deletePet} = require("../controllers/taskPet")


router.route("/tutors").get(getAllTutors)
router.route("/tutor").post(createTutor)
router.route("/tutor/:id").delete(deleteTutor).put(updateTutor)

router.route("/pet/:tutorId").post(createPet)
router.route("/pet/:petId/tutor/:tutorId").delete(deletePet).put(updatePet)


module.exports = router