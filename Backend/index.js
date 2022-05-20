const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const getWeatherRouter = require("./routes/getWeatherRouter.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use("/getWeather",getWeatherRouter);

app.use("/",(req,res) => {
    res.send("Welcome to Weather API !!");
})




app.listen(PORT,()=> console.log(`Server Running on Port ${PORT}`));