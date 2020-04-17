const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${process.env.MAPBOX_API}`;

  const data = {
    latitude: null,
    longitude: null,
    location: null,
  };

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connec to location services", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try elsewhere");
    } else {
      data.latitude = body.features[0].center[1];
      data.longitude = body.features[0].center[0];
      data.location = body.features[0].place_name;
      callback(undefined, data);
      return data;
    }
  });
};

module.exports = geocode;
