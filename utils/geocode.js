const request = require('request')

const geocode = (address, callback) => {
    const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYW5pcnVwIiwiYSI6ImNrNGw4dTE0YTFvenozbXF4dWNlYmhyeGkifQ.PuThfcK3VVJ_wBFqNjnjyQ&limit=1'
    request({ url: geocodeUrl, json: true }, (error, response) => {
        callback(error, response)
    });
}

module.exports = geocode