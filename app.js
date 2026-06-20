const express = require("express");

const app = express();

app.use(express.json());

let products = [
    {id:1,name:"laptop",price:67000},
    {id:2,name:"mouse",price:800},
];

app.get('/',(req,res)=>{
    res.send("api is not working");
});
app.get('/products',(req,res)=>{
    res.send(products);
});
app.get('/products',(req,res)=>{
    res.send("this is products page");
});
app.post('/products',(req,res)=>{
    const {name,price} = req.body;
    const newproducts = {
        id:Date.now(),
        name,
        price
    };
    products = [...products,newproducts]
    res.json(newproducts);
});
app.get('/home',(req,res)=>{
    res.send("this is home page");
});
const port = 5600;
app.listen(port,()=>{
    console.log("server is running port 5600");
});