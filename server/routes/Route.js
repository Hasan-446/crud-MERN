import express, { Router } from "express";
import { addUser,getUser,getUserData,updateUser,deleteUser } from "../controller/userController.js";

const router = express.Router();

router.post("/add", addUser);

router.get("/all",getUser);

router.get("/:id",getUserData)

router.post("/:id",updateUser)

router.delete("/:id",deleteUser)

export default router;
