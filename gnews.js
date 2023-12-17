// read API KEY from .env file

const dotenv = require('dotenv');
dotenv.config();

const API_KEY = process.env.API_KEY;
console.log(API_KEY);

fetch(`https://gnews.io/api/v4/search?q=Skilled Worker Visa&lang=en&country=gb&token=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });