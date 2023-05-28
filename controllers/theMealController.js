import fetch from "node-fetch";
import {Comment} from "../models/commetModel.js"
import * as dotenv from 'dotenv' 


dotenv.config();

let ingridients=[];
let uri=process.THE_MEAL_URI;

export async function getTheMeal (req,res){
     
     // gerekli id'ye sahip yemeği dönderir.
     const id = req.params.id;
     const response= await fetch(uri+id);
     let data= await response.json();
     
     if(data.meals!=null){
          data=data.meals[0];

          getIngridients(data);
     
          console.log(ingridients);
     
          // bu yemeğe özel yorum varsa onu bulur.
          const comments= await Comment.find({mealId:id});
     
          
          res.status(200).render("singleMeal",{
               data:data, 
               comments:comments, 
               ingridients:ingridients
          })
     }
     else{
          res.status(404).render("404")
     }
     
     
}



function getIngridients(data){
   ingridients=[];
    if(data.strIngredient1 !="") ingridients.push(data.strIngredient1);
    if(data.strIngredient2 !="") ingridients.push(data.strIngredient2);
    if(data.strIngredient3 !="") ingridients.push(data.strIngredient3);
    if(data.strIngredient4 !="") ingridients.push(data.strIngredient4);
    if(data.strIngredient5 !="") ingridients.push(data.strIngredient5);
    if(data.strIngredient6 !="") ingridients.push(data.strIngredient6);
    if(data.strIngredient7 !="") ingridients.push(data.strIngredient7);
    if(data.strIngredient8 !="") ingridients.push(data.strIngredient8);
    if(data.strIngredient9 !="") ingridients.push(data.strIngredient9);
    if(data.strIngredient10 !="") ingridients.push(data.strIngredient10);

}
