//Store the data in to Json file form of json


const fs = require('fs')

// const Book = {
//     title: 'Ego is  the  Enemy',
//     author: 'Keyur Vastani'
// }

// const JsonBook = JSON.stringify(Book)
// fs.writeFileSync('jsonData.json', JsonBook)


const dataBuffer = fs.readFileSync('jsonData.json') // this is a binary data
const dataJSON = dataBuffer.toString()   //convet into string
const data = JSON.parse(dataJSON)   //convert into object
data.author = "VASTANI_KEYUR"

const convertIntoJson = JSON.stringify(data)

fs.writeFileSync('jsonData.json', convertIntoJson)

