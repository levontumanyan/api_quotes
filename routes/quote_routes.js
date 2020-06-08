const express = require('express');
const quoteModel = require('../models/quote_model');
const bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors');
const app = express();

// adding for form processing
const urlencodedParser = bodyParser.urlencoded({ extended: true });
//
app.use(express.static('public'));

app.get('/random_quote', async (req, res) => {
    //const quote = await quoteModel.find({});
    // accesses a random quote
    const quote = await quoteModel.aggregate([{ $sample: { size: 1 } }]);
    //console.log(quote[0]);

    try {
        // quote_body = quote.map((document) => document.body)
        res.json(quote[0]);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/all_quotes', cors(), async (req, res) => {

    const quote_array = await quoteModel.find({});
    //console.log(quote[0]);

    try {
        // quote_body = quote.map((document) => document.body)
        res.json(quote_array);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/add_quote', urlencodedParser, async (req, res) => {
    const quote = new quoteModel({
        body: req.body.quote_body,
        author: req.body.quote_author,
        meta: { upvotes: 0, downvotes: 0 }
    }
    );

    try {
        await quote.save();
        res.send(req.body);
    } catch (err) {
        res.status(500).send(err);
    }
});



module.exports = app;