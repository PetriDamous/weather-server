const request = require("postman-request");
// require("dotenv").config();
// const { mapBox } = require("../../secret");

// Geo Location API
const getLocation = (location, callback) => {
  const geoPrams = {
    api: "https://api.mapbox.com/geocoding/v5/mapbox.places/",
    key: `access_token=${process.env.MAP_BOX_API}`,
    location: `${encodeURIComponent(location)}.json?`,
    limit: "limit=1",
  };

  const url = `${geoPrams.api}${geoPrams.location}${geoPrams.key}&${geoPrams.limit}`;

  request({ url, json: true }, (err, { body: data } = {}) => {
    if (err) {
      return callback("Unable to connect to location services!");
    }

    if (data.message || data.features.length === 0) {
      return callback("Location cannot be found. Please try another search.");
    } else {
      const { features } = data;

      const [dataSet] = features;

      const { center: cords, place_name: location } = dataSet;

      console.log(location);

      const [long, lat] = cords;

      const locationInfo = {
        location,
        long,
        lat,
      };

      return callback(undefined, locationInfo);
    }
  });
};

module.exports = getLocation;
