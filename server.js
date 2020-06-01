const express = require('express');
const mongoose = require('mongoose');
const quote_routes = require('./routes/quote_routes.js');



const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json()); // Make sure it comes back as json

const connection = process.env.MONGODB_URI;

mongoose.connect(connection,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

app.use(quote_routes);

app.listen(PORT, () => { console.log(`Server is running on port: ${PORT}`) });