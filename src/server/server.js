"use strict";
const fetch = require("node-fetch");
// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();

/* Middleware*/

//Import express bodyParser Middleware
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Import CORS package
// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

//Initialize the main project folder
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

//Server
const port = 8081;
const server = app.listen(port, listening);
function listening() {
  console.log("server running");
  console.log(`running on location: ${port}`);
}

//To encrypt API key
const dotenv = require("dotenv");
dotenv.config();

//GeoNames API Data
const geoNamesURL = "http://api.geonames.org/searchJSON?username=";
const geoNameskey = process.env.GeoNames_Key;
const geoetcURL = "&maxRows=1&q=";

//Weatherbit API Data
const currentWeatherURL = "https://api.weatherbit.io/v2.0/current?&key=";
const futureWeatherURL = "https://api.weatherbit.io/v2.0/forecast/daily?&key=";
const weatherbitKey = process.env.Weatherbit_Key;
const longitude = "&lon=";
const latitude = "&lat=";

//Pixabay API Data
const pixabayURL = "https://pixabay.com/api/?key=";
const pixabayKey = process.env.Pixabay_Key;
const q = "&q=";
const pixetcURL = "&image_type=photo&page=1&per_page=3&orientation=horizontal";

/* Empty JS object with empty properties to act as endpoint for all routes */
let endData = {
  appData: {},
  cityCountry: {},
  weatherData: {},
  imgData: {},
};

//The main post Route
app.post("/addEndData", async function (req, res) {
  let appEndData = {
    cityName: req.body.cityName,
    date: req.body.date,
  };
  endData.appData = appEndData;
  console.log(appEndData);
  //1.Call Geonames API to get coordinates for certain city
  try {
    await geoNamesApi().then(async function (data) {
      /*2.POST coordinates to weatherbit API and get it's response
       *If the trip is within a week, you will get the current weather forecast.
       *If the trip is in the future, you will get a predicted forecast.
       */
      console.log(appEndData.date);
      if (appEndData.date <= 7) {
        await currentWeather(data);
      } else {
        await futureWeather(data);
      }
      //3.Get Img from the Pixabay API
      await dataImg(data);
    });
    console.log(endData);
    res.send(JSON.stringify(endData));
    return JSON.stringify(endData);
  } catch (error) {
    console.log("error", error);
  }
});

//--------------------GeoNames API Call-------------------//

const geoNamesApi = async function () {
  const response = await fetch(
    geoNamesURL + geoNameskey + geoetcURL + endData.appData.cityName
  );
  try {
    const data = await response.json();
    const newData = data.geonames[0];
    endData.cityCountry = newData;
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

//-----------------Weatherbit API Calls------------------//

//Get Current weather
const currentWeather = async function (cityData) {
  const response = await fetch(
    currentWeatherURL +
      weatherbitKey +
      latitude +
      cityData.lat +
      longitude +
      cityData.lng
  );
  try {
    const data = await response.json();
    const newData = data.data[0];
    endData.weatherData = newData;
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

//Get Future weather
const futureWeather = async function (cityData) {
  const response = await fetch(
    futureWeatherURL +
      weatherbitKey +
      latitude +
      cityData.lat +
      longitude +
      cityData.lng
  );
  try {
    const data = await response.json();
    const newData = data.data[0];
    endData.weatherData = newData;
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

//-----------------Pixabay API Calls------------------//

const dataImg = async (data) => {
  const response = await fetch(
    pixabayURL + pixabayKey + q + data.name + pixetcURL
  );
  try {
    const data = await response.json();
    const newData = data.hits[0];
    endData.imgData = newData;
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};
module.exports = { geoNamesApi };
