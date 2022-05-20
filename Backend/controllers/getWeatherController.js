const axios = require("axios")

const BaseURL = "http://api.weatherapi.com/v1/current.json";

const getWeather = async (req,res) => {

    const cities = req.body.cities;
    try{

        let obj = {};
        for(i=0;i<cities.length;i++){
            let response = await axios.get(`${BaseURL}?key=${process.env.APIKEY}&q=${cities[i]}&aqi=no`);
            obj[cities[i]] = `${response.data.current.temp_c}C`;
        }
        res.status(200).json({weather:obj});
    }
    catch(error){
        res.status(404).json({error:"Invalid City Name"});
    }
};

module.exports = {
    getWeather:getWeather
};