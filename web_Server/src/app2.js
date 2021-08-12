const express = require('express')
const path = require('path')
const hbs = require('hbs')
const { get } = require('http')


const app = express()

// define path for express config
const staticPath = path.join(__dirname, '../Public')
const TemplatePath = path.join(__dirname, '../Template/views')
const partialPath = path.join(__dirname, '../Template/partials')


//Setup handlerbars engine and views location
app.set('view engine', 'hbs')  // by default express views folder ne find kare 6 jo te change karvu hoy to
app.set("views", TemplatePath)   //this is a custome directory path
hbs.registerPartials(partialPath)


//setup static directory to serve   
app.use(express.static(staticPath))


app.get('', (req, res) => {
    res.render('index', {
        title: "weather App",
        name: "Keyur"
    })

})


app.get('/about', (req, res) => {
    res.render('about', {
        title: "about App",
        name: "about author"
    })

})


app.get('/weather', (req, res) => {
    res.send("this is a weather page!!")
})



//404 Pages error code
app.get('/about/*', (req, res) => {
    res.render('404', {
        title: "This is a 404 Error",
        errorMessage: " About help Page is not found"
    })

})

app.get('*', (req, res) => {
    res.render('404', {
        title: "This is a 404 Error",
        errorMessage: " please try again"
    })

})



// app.get('/about/*', (req, res) => {
//     res.send("<h1>this is 404 ERROR PAGE</h1>")
// })


// app.get('*', (req, res) => {
//     res.send("<h1>this is 404 ERROR PAGE</h1>")
// })


app.listen(3000, () => {              //a server start kare 6
    console.log("server  is start on port 3000.");
})