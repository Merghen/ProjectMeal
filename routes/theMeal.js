import express from "express";
import {getTheMeal} from "../controllers/theMealController.js";
import {createComment} from "../controllers/commentController.js";


const router =express.Router();

// id'ye göre yemeği dönderir.
router.get("/:id",getTheMeal);

// yorum ile ilgili işlemler
router.post("/:id/comments",createComment )



export default router;