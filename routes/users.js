import express from "express";
import { addUser, deleteUser, getUser, getUserByID, updateUser } from "../controller/users.js";

const router = express.Router();

router.get('/', getUser);

router.get('/:id', getUserByID);

router.post('/', addUser);

router.put('/:id', updateUser);

export default router;