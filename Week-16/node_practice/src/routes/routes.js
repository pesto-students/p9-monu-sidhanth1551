const express = require("express");
const router = express.Router();

const {getWeatherUpdate,fiveDayWeatherUpdate} = require("../controller/weatherController")

router.get("/",(req,res)=>{
    res.json({title:"Welcome to weather updates"})
})
//To know weather based on City
router.get("/weather-report-city/:city",getWeatherUpdate)

//To know weather based on the pincode of india.
router.get("/zipCode/:zipCode",fiveDayWeatherUpdate);

module.exports = router;