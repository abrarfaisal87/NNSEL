import express, { Router } from "express"
import { getProjectById, getProjects } from "../controllers/projects.controller.js";

const router = express.Router();

router.get('/',getProjects);
router.get('/:id',getProjectById);


export default router;