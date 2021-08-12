const express = require('express')
const path = require('path')

console.log(__dirname);               //this both variable providde by node
// console.log(__filename);
console.log(path.join(__dirname, '../Public'));

const app = express()
const staticPath = path.join(__dirname, '../Public')

app.use(express.static(staticPath))   //index.html file autometic call


// app.get('', (req, res) => {            //a response apsse equest no '' root page show kare 6             
//     res.send("Heloo world!!")          // this is not require if we use express.static because it set default page
// })

// app.get('/help', (req, res) => {
//     res.send({                           //autometically stringfy thai JSON ma convert thai jase
//         name: "keyur",
//         age: 20
//     })
// })

// app.get('/about', (req, res) => {       //array opf object a pan JSON maj represent thase
//     res.send([{
//         name: "keyur", age: 34
//     },
//     {
//         name: "mohan"
//   }
//     ])
// })

app.get('/weather', (req, res) => {
    res.send("this is a weather page!!")
})

app.listen(3000, () => {              //a server start kare 6
    console.log("server  is start on port 3000.");
})


//ygbuybhbb