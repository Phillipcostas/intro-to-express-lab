
const express = require('express')
const app = express()

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


// // Exercise 1:
// app.get('/greetins/:userName', (req, res) => {
//     res.send(`<h1>Hello!!! ${req.params.userName}</h1>`);
// })


// // Exercise 2: 
// app.get('/roll/:number', (req, res) => {
//     const number = parseInt(req.params.number)
//     if (isNaN(number)) {
//         return res.send(`You must specify a number`)
//     } 
    
//     const rolledNumber = Math.floor(Math.random() * (number + 1));
    

//     res.send(`You rolled a ${rolledNumber}`)
// })

// Exercise 3: 

// app.get('/collectibles/:index', (req, res) => {
//     const index = parseInt(req.params.index)

//     if (index >= 0 && index < collectibles.length){
//         const item = collectibles[index]

//         res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);
//   } else {
//     res.send(`This item is not yet in stock. Check back soon!`);
//   }
// });

// Exercise: 4


app.get('/shoes', (req, res) => {
    let findShoes = shoes;

    if (req.query['min-price']) {
        const minPrice = parseInt(req.query['min-price']);
        findShoes = findShoes.filter(shoe => shoe.price >= minPrice);
    }

    if (req.query['max-price']) {
        const maxPrice = parseInt(req.query['max-price']);
        findShoes = findShoes.filter(shoe => shoe.price <= maxPrice);
    }

    if (req.query.type) {
        const shoeType = req.query.type.toLowerCase();
        findShoes = findShoes.filter(shoe => shoe.type.toLowerCase() === shoeType);
    }
    res.send(findShoes)
});




app.listen(3000, () => {
    console.log('Listening on port 3000')
  })