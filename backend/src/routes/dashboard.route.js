import express, { Router } from "express"
import { addProject, deleteProject, updateProject } from "../controllers/dashboard.controller.js";

const router = express.Router();

router.post('/',addProject);
router.put('/:id',updateProject);
router.delete('/:id',deleteProject);

export default router;