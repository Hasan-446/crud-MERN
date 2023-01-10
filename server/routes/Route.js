import express, { Router } from "express";
import { addUser,getUser } from "../controller/userController.js";

const router = express.Router();

router.post("/add", addUser);

router.get("/all",getUser);

export default router;
