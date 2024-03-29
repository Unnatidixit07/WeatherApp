const request=require('request')

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoidW5uYXRpMDciLCJhIjoiY2s4MXY1NTYyMGVvazNvbXdiZGZyamZmOCJ9.odiivXMTNC-YM--4fIwjpw'
    request({url,json:true},(error,{body})=>{
        if(error)
           callback('unable to connect',undefined)
        else if(body.features.length==0)
           callback('unable to find location',undefined)
        else{
            callback(undefined,{
                longitude:body.features[0].center[0],
                latitude:body.features[0].center[1],
                location:body.features[0].place_name
            })
        }
           
    })
          
}
module.exports=geocode
