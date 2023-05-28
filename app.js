import express from"express";
import routerMain from "./routes/main.js";
import routerSingleMeal from "./routes/theMeal.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import * as dotenv from 'dotenv' 


dotenv.config()

const app = express();

//veritabanı bağlantısı

mongoose.connect("mongodb+srv://faruktopsakal3:4ejlODiLwmneXDZm@cluster0.02g0izu.mongodb.net/?retryWrites=true&w=majority").then(console.log("başarıyla veritabanına bağlandı"));

//statik dosyalara erişim.
app.use(express.static('public'))

//middlewares
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: false }))

//routes
app.use("/",routerMain);
app.use("/meals",routerSingleMeal);
app.all("*", (req,res)=>{

    res.status(202).render("404")
})


//server
app.listen(3000, ()=>{console.log("çalışıyor")})