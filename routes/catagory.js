import express from "express";
import fetch from "node-fetch";

const router =express.Router();



router.get("/", async (req,res)=>{
   
   
    const response= await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    let data= await response.json();
    data=data.categories[0];
    
    
   res.render("catagories");
    
})


export default router;