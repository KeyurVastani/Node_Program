const request = require('request');

// const url = 'https://api.openweathermap.org/data/2.5/weather?q=surat&appid=372b10a48059f97add26ea71d6f742e9'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log("check your Internet");
//     } else if (!response.body.weather) {
//         console.log("unable to load");

//     } else {
//         console.log(response.body.weather[0].icon);
//         // const Data = JSON.parse(response.body)
//         // console.log(Data.main);

//     }
// })



//----------------- callBack applied on Http--------------------------

const geocode = (city_name, callback) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=372b10a48059f97add26ea71d6f742e9`

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback("check your Internet", "data not Fatch");
        } else if (!response.body.weather) {
            callback("unable to load", "data not Fatch");

        } else {
            callback("Not come", {
                icon: response.body.weather[0].icon,
                base: response.body.base
            });


        }
    })

}



geocode("surat", (error, data) => {
    console.log("error", error);
    console.log("Data", data);

})





