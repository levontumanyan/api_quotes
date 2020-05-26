const express = require('express');
const quoteModel = require('../models/quote_model');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// adding for form processing
const urlencodedParser = bodyParser.urlencoded({ extended: true });
//
app.use(express.static('public'));
//app.use(express.static(path.join(__dirname, 'public')));

app.get('/random_quote', async (req, res) => {
    const quote = await quoteModel.find({});


    try {
        quote_body = quote.map((document) => document.body)
        res.send(quote_body);
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