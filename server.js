const express = require('express');
const mongoose = require('mongoose');
const quote_routes = require('./routes/quote_routes.js');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json()); // Make sure it comes back as json

// mongoose.connect('mongodb+srv://api_quotes_admin:Zs3w73dqMjTiN2N@quotesapi01-s2dqb.mongodb.net/test?retryWrites=true&w=majority', {
//     useNewUrlParser: true
// });

const connection = "mongodb+srv://api_quotes_admin:Zs3w73dqMjTiN2N@quotesapi01-s2dqb.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(process.env.MONGODB_URI || connection,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

app.use(quote_routes);

app.listen(PORT, () => { console.log(`Server is running on port: ${PORT}`) });