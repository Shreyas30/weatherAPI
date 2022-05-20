const express = require("express");

const router = express.Router();
const getWeatherController = require("../controllers/getWeatherController");

router.get("/",(req,res) => {
    res.send("This Works!");
});

router.post("/",getWeatherController.getWeather);

module.exports = router;