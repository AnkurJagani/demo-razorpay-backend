// app.js
// Inside app.js 
const express = require('express');
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || '5000';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname)));

// This razorpayInstance will be used to
// access any resource from razorpay
const razorpayInstance = new Razorpay({

    // Replace with your key_id
    key_id: "asdasdsad",

    // Replace with your key_secret
    key_secret: 'asdasdsad',
});

const writeData = (data) => {
    fs.writeFileSync('orders.json', JSON.stringify(data,null,2));
}

if(!fs.existsSync('orders.json')) {
    writeData([]);
}

// Here we will create two routes one 
// /createOrder and other /verifyOrder 
// Replace these comments with the code 
// provided later in step 2 & 8 for routes

app.listen(PORT, ()=> {
    console.log("Server is Listening on Port ", PORT);
});