const Book = {
    title: 'Ego is  the  Enemy',
    author: 'Keyur Vastani'
}

const JsonBook = JSON.stringify(Book)  //convert object and array into JSON formate
console.log(JsonBook); //it is a string


// console.log(JsonBook.title); //undefine because Book object contain title property not a JsonBook Contain



//convert Json to object or array

const JsonToObject = JSON.parse(JsonBook)
console.log(JsonToObject);
console.log(JsonToObject.author);
