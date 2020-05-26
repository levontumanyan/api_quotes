const express = require('express');
const mongoose = require('mongoose');
const quote_routes = require('./routes/quote_routes.js');

const PORT = process.env.port || 3000;

const app = express();

app.use(express.json()); // Make sure it comes back as json

mongoose.connect('mongodb+srv://api_quotes_admin:Zs3w73dqMjTiN2N@quotesapi01-s2dqb.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(quote_routes);

app.listen(PORT, () => { console.log(`Server is running on port: ${PORT}`) });