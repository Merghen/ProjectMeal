import express from "express";
import fetch from "node-fetch";

const router =express.Router();

let uri="https://www.themealdb.com/api/json/v1/1/filter.php?a=";

router.get("/", async (req,res)=>{
    
    
   res.render("countries")
    
})

router.post("/", async (req,res)=>{
   
   const country = req.body.country

    const response= await fetch(uri+country);
    let data= await response.json();
    data=data.meals
   
    
   res.render("countries")
    
})


export default router;