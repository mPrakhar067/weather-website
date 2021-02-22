const request = require('postman-request')

const forecast = (latitude,longitude,callback)=>{
   const url = 'http://api.weatherstack.com/current?access_key=5c37381266fe9c9fd7e41b36145ba036&query='+latitude+','+longitude+'&units=m'

request({url,json:true},(error,{body})=>{
    if(error){
        callback('unable to connect to weather service',undefined)
    }else if(body.error){
        callback('unable to find location',undefined)
    }else{
        callback(undefined,body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+' degrees out And it feels like '+body.current.feelslike+' degrees here.')
    }
}   )
}

module.exports = forecast