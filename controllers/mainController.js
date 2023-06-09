import * as dotenv from 'dotenv' 
import fetch from "node-fetch";

dotenv.config()
let uri=process.RANDOM_MEAL_URI;
    
let meals=[];
generateRandomMeal();

export function getAllMeals(req,res){
    res.status(200).render("main",{meals:meals});   
}


// anasayfaya rastgele yemek seçmesini sağlayan fonksyion.
async function generateRandomMeal(){

    for (let index = 0; index < 6; index++) {
        
        const response= await fetch(uri);
        const data= await response.json();
        let meal= data.meals[0];
        meals.push(meal);
    }
  
}
