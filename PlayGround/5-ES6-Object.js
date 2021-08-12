// Object Properties ShortHand
const Age = 45;
const names = "keyur"

const Data = {
    names,    //names:names
    age: Age,
    location: "SURAT"
}


const Product = {
    namess: "ptuy",
    price: 343,
    rating: 5.4,
    order: 2
}

//destructure


const { namess, price, type = 64 } = Product
console.log(names, price, type);



const transation = (type, { price, order }) => {
    console.log(type);
    console.log(price);
    console.log(order);


}


transation("new", Product)