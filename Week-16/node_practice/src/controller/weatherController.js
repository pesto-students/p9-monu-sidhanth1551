const axios = require("axios");
const dotenv = require("dotenv").config();
const {appendApiKey} = require("../service/utils")


//@desc Get weather updars
//route GET /weather-report-city
//@access public 
const getWeatherUpdate = (req,res)=>{
    
    //fetching weather update by city name
    const baseUrl = appendApiKey(process.env.WEATHER_REPORT_API);
    axios.get(baseUrl.replace("{city}",req.params.city))
    .then((response)=>{
        res.status(200).json({data:response.data})
    })
    .catch((err)=>{
        res.status(400).json({Message:"Error occured",error:err})
    })
}


//Here we are fecthing 5 days weather forecast by just entering zipCode of city
//@desc Get weather updars
//route GET /weather-report-city
//@access public 
const fiveDayWeatherUpdate = async (req,res)=>{
    const baseUrl =appendApiKey(process.env.CALL_BY_ZIP_CODE_INDIA)
    await axios.get(baseUrl.replace("{zipcode}",req.params.zipCode))
    .then(async (response1)=>{
        //Here we are fetching lat and long of city returned by zipCode and fetching 5 days weather forecast
        const baseUrl2=appendApiKey(process.env.FIVE_DAY_WEATHER_FORECAST)
        await axios.get(baseUrl2.replace("{lat}",response1.data.lat).replace("{lon}",response1.data.lon))
        .then((response2)=>{
            res.status(200).json({fiveDaysWeatherReport:response2.data})
          })
        .catch((err)=>{ 
            res.status(400).json({Message:"Error occured",error:err})
        })

        return res;
    })
    .catch((err)=>{
        res.status(400).json({Message:"Error occured",error:err})
    })
}
module.exports = {getWeatherUpdate,fiveDayWeatherUpdate}