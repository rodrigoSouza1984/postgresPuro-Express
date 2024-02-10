import express from "express";
import proprietarioController from "../controllers/proprietario.controller.js"

const router = express.Router();

router.post("/", proprietarioController.createProprietario)
router.get("/", proprietarioController.getAll)
router.get("/:id", proprietarioController.getById)
router.put("/", proprietarioController.UpdateProprietario)
router.delete("/:id", proprietarioController.deleteProprietario)


export default router