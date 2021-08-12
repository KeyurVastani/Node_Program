//referance



// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             length: 10,
//             height: 20
//         }
//         callback(data)
//     }, 2000);
// }

// geocode("surat", (datas) => {
//     console.log(datas);
// })



//--------------------------------


const add = (a, b, Sumation) => {

    setTimeout(() => {
        // sum = a + b
        // Sumation(sum)
        Sumation(a + b)
    }, 1000);

}



add(5, 15, (sum) => {
    console.log("sum is", sum)
})