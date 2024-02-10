import express from "express";
import animalController from "../controllers/animal.controller.js"

const router = express.Router();

router.post("/", animalController.createAnimal)
router.get("/", animalController.getAll)
router.get("/:id", animalController.getById)
router.get("/proprietario/:id", animalController.getByIdProprietario)
router.put("/", animalController.UpdateAnimal)
router.delete("/:id", animalController.deleteAnimal)


export default router