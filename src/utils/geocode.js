const request = require('request');
const geocode = (address, callback) => {
    const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWljaGFlbGVza2FuZGVyIiwiYSI6ImNrNzJoeGJiNTAyOTczZHQwaXA2bTk4aTAifQ.9b2TQ483NzarPYJwt7YmcA&limit=1'

    request ({url:url2, json:true}, (error,response) => {
        if(error){
            callback('there is an error', undefined)
        } else if (response.body.features.length === 0){
            callback('there is still an error', undefined)
        }else {
            callback(undefined,
                     {longitude:  response.body.features[0].center[0],
                      latitude: response.body.features[0].center[1],
                      location: response.body.features[0].place_name})



        }})
    }

module.exports = geocode

/*const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWljaGFlbGVza2FuZGVyIiwiYSI6ImNrNzJoeGJiNTAyOTczZHQwaXA2bTk4aTAifQ.9b2TQ483NzarPYJwt7YmcA&limit=1'
request({url:url2, json:true}, (error,response) => {
    if(error){
        console.log('there is an error')
    } else if (response.body.features.length === 0){
        console.log('there is still an error')
    }else {
        const longitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]
        console.log(longitude, latitude)
    }
})*/