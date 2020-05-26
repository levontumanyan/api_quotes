const express = require('express');
const quoteModel = require('../models/quote_model');
const app = express();

app.use(express.static('public'));

app.get('/random_quote', async (req, res) => {
    const quote = await quoteModel.find({});

    try {
        res.send(quote);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/add_quote', async (req, res) => {
    const quote = new quoteModel(req.body);

    try {
        await quote.save();
        res.send(req.body.body);
    } catch (err) {
        res.status(500).send(err);
    }
});

// app.post('/add_quote', async (req, res) => {
//     const quote = new quoteModel({
//         body: req.body.body,
//         author: req.body.author,
//         meta: { upvotes: 0, downvotes: 0 }
//     }
//     );

//     try {
//         await quote.save();
//         res.send(quote);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

module.exports = app;