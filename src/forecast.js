const request = require("request");

const forecast = ({ latitude, longitude }, callback) => {
  const weatherStackURL = `http://api.weatherstack.com/forecast?access_key=${process.env.WEATHERSTACK_API}&query=${latitude},${longitude}`;

  request({ url: weatherStackURL, json: true }, (error, { body }) => {
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
