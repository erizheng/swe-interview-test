const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

//implement the CORS config
const cors = require("cors");
app.use(cors());

//products array
let products = [
    { id: 1, name: 'Product 1', description: 'description 1', price: 100, imageUrl: '' },
    { id: 2, name: 'Product 2', description: 'description 2', price: 200, imageUrl: '' },
    { id: 3, name: 'Product 3', description: 'description 3', price: 300, imageUrl: '' },
    { id: 4, name: 'Product 4', description: 'description 4', price: 150, imageUrl: '' },
    { id: 5, name: 'Product 5', description: 'description 5', price: 500, imageUrl: '' },
    { id: 6, name: 'Product 6', description: 'description 6', price: 50, imageUrl: '' },
];

//function to generate a url for getting a random image from picsum
const fetchImageUrl = () => {
    return `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`;
};



//implement the get api for getting products
app.get('/api/products', (req, res) => {
    //generates random image
    const result = products.map(product => ({ ...product, imageUrl: fetchImageUrl()}));
    res.status(200).send({ "data": result});
});

//implement the delete api for deleting a product by Id
app.delete('/api/products/:id', (req, res) => {
    const id = req.params.id;
    //console.log(id);
    
    const index = products.findIndex((product) => product.id == id);
    products.splice(index, 1);
    res.status(200).send({products});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
