"use strict";
    const express = require("express");
    const app = express();
    const bodyParser = require("body-parser");
    app.use(bodyParser.json());

    const foodList = [
        {
            "name": "Pizza",
            "price": 18,
            "id": 0
        },
        {
            "name": "Taco",
            "price":3,
            "id": 1
        },
        {
            "name": "Lasagna",
            "price": 12,
            "id": 2
        },
        {
            "name": "Mac n Cheese",
            "price": 15,
            "id": 3
        }

    ];
    let counter = 4;

    app.get("/food", (req, res) => {
        console.log("GET request");
        res.send(foodList);
    });

    app.post("/food", (req, res) => {
        console.log("POST request");
        foodList.push({
            name: req.body.name,
            price: req.body.price,
            id: counter++
        });
        res.send(foodList);
    });

    app.delete("/food/:id", (req, res) => {
        console.log("DELETE request");
        for (let item of foodList) {
            if(item.id == req.params.id) {
                foodList.splice(foodList.indexOf(item), 1);
            }
        }
        res.send(foodList);
    });

    app.put("/food/:id", (req, res) => {
        console.log("PUT request");
        for (let item of foodList) {
            if(item.id == req.params.id) {
                foodList.splice(foodList.indexOf(item), 1, {
                    name: req.body.name,
                    price: req.body.price,
                    id: item.id
                });
            }
        }
        res.send(foodList);
    });
    
    const port = 3000;
    // 'app' is the object
    app.listen(port, () => console.log(`App listening on port ${port}.`)); 



const http = require("http");
const add = require("./add");
const subtract = require("./subtract");
const advanced = require("./advanced");

console.log("./advanced");
advanced.multiply(2, 5);
advanced.divivde(50, 10);
// add(10, 20);
// subtract(100, 50);

http.createServer((request, response) => {
    console.log("The server is running on port 8080.");
    response.writeHead(200, {
        "content-type": "text/plain"
    });
    response.write("Kwame is learning how to use Node.JS today.");
    response.end();
    // Going to the "Port" 8080
}).listen(8080);