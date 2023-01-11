import express, { Router } from "express";
import { addUser,getUser,getUserData,updateUser } from "../controller/userController.js";

const router = express.Router();

router.post("/add", addUser);

router.get("/all",getUser);

router.get("/:id",getUserData)

router.post("/:id",updateUser)

export default router;
