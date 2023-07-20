// import express module
const express = require ("express");
// create express app
const app = express();
// import body parse
const bodyParser = require ("body-parser");
//configuration 
app.use(bodyParser.urlencoded({ extended: true }));
// configuration: JSON response
app.use(bodyParser.json());
// configuration Security
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
  });
//
const Product = require("./models/product");
//import mongoose 
const mongoose = require("mongoose");
// la connection
mongoose.connect('mongodb://localhost:27017/testDB');

//business logic  : 

// add product
app.post("/products", (req, res) => {
    console.log("here into adding product", req.body);
    let product = new Product(req.body);
    product.save((err, doc) => {
      if (err) {
        console.log("here error", err);
      } else {
        res.json({ message: "added with succes" });
      }
    })

  });
// business logic : get all products 
app.get("/products", (req, res) => {
    console.log("here into get all products");
    Product.find().then(
      (docs) => {
        console.log("here all products", docs);
        res.json({ allProducts: docs, message: "succes" })
      });
  });
// business logic : delete product by ID
  app.delete("/products/:id", (req, res) => {
    console.log("here into delete product", req.params.id);
    let x = req.params.id
    Product.deleteOne({ _id: req.params.id }).then((res) => {
      if (response.deletedCount == 1) {
        res.json({ message: "deleted with success" });
      }
    })
  });
// business logic : get product by ID
  app.get("/products/:id", (req, res) => {
    console.log("here into get product", req.params.id);
    let x = req.params.id
    Product.findOne({ _id: x }).then((doc) => {
      res.json({ message: "here product : success", product: doc });
    })
  });
// business logic : edit product by ID
  app.put("/products", (req, res) => {
    console.log("here into edit product", req.body)
    Product.updateOne({ _id: req.body._id }, req.body).then(
      (res) => {
        res.json({ message: "product edeted with success" });
      });
  });
//business logic : update product
  app.put("/products/:id", (req, res) => {
    console.log('here into edit product', req.body);
    console.log('here into edit product', req.params.id);
    Product.updateOne({ _id: req.params.id }, req.body).then(
      (response) => {
        res.json({ message: "edited with success", response })
        console.log('response after edit', response)
      })
  });












// make app exportable
module.exports = app;
