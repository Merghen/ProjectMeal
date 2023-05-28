import * as dotenv from 'dotenv' 

dotenv.config()
let uri="https://www.themealdb.com/api/json/v1/1/random.php";
    
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
