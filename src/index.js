const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const forecast = require("./forecast.js");
const geocode = require("./geocode.js");

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`server on ${port}`);
});

app.get("/forecast", (req, res) => {
  if (!req.query.location) {
    return res.send({ error: "You must provide a location" });
  }
  geocode(req.query.location, (geoError, geoData) => {
    if (geoError) {
      return res.send({ error: geoError });
    }

    forecast(geoData, (forecastError, forecastData) => {
      if (forecastError) {
        return res.send({ error: forecastError });
      }
      res.send({ forecastData });
    });
  });
});
