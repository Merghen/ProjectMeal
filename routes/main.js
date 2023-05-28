import express from "express";
import fetch from "node-fetch";
import {getAllMeals} from '../controllers/mainController.js';



const router = express.Router();


router.get("/", getAllMeals);


export default router;