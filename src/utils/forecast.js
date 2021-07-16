const request = require('request')

const forecast = (lan, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d17735d9998c7ea689e2cdf63d584424&query='+ lon + ',' + lan 

    request({url, json: true}, (error, { body }) => {
        if(error) {
            callback('unable to connect to weather', undefined)
        } else if(body.error) {
            callback('unable to find location', undefined)
        } else {
            const temp = body.current.temperature
            const feels = body.current.feelslike
            const overall = body.current.weather_descriptions[0]
            callback(undefined, overall + ". It is currently " + temp + " degrees out. It feels like " + feels + " degrees out")
        }
    })
}

module.exports = forecast