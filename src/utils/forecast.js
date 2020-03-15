const request = require('request') 
const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/d2b33990165af082e4b42350ffb28133/' + longitude + ',' + latitude
    request ({url: url, json: true}, (error, response) => {
        if(error){
            callback('there is an error', undefined)
        } else if (response.body.error){
            callback(response.body.error, undefined)
        }else{
            callback(undefined, response.body.daily.data[0].summary + 'It is currently ' + response.body.currently.temperature + ' degrees. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })
}
module.exports = forecast
/*
const url = 'https://api.darksky.net/forecast/d2b33990165af082e4b42350ffb28133/37.8267,-122.4233'
request({url: url, json: true}, (error,response) => {
    if(error){
        console.log('there is an error')
    }
    else if (response.body.error){
        console.log(response.body.error)
    }
    else{
        console.log(response.body.daily.data[0].summary + 'It is currently ' + response.body.currently.temperature + ' degrees. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
    }
})
*/