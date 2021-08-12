const https = require('https');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=surat&appid=372b10a48059f97add26ea71d6f742e9'

const request = https.request(url, (response) => {
    let data = ''
    response.on("data", (chunk) => {
        data = data + chunk.toString()


    })

    response.on("end", () => {
        // console.log(data);
        const body = JSON.parse(data)
        console.log(body.visibility);
    })
})

request.on("error", (error) => {
    console.log("This is a", error);
})
request.end()




