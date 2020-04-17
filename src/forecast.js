const request = require("request");

const forecast = ({ latitude, longitude }, callback) => {
  const darkSkyURL = `https://api.darksky.net/forecast/${process.env.DARKSKY_API}/${latitude},${longitude}`;

  request({ url: darkSkyURL, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback(body.error, undefined);
    } else {
      callback(undefined, body);
    }
  });
};

module.exports = forecast;
