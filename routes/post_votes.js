var express = require('express');
var router = express.Router();
const quoteModel = require('../models/quote_model');
var morgan = require('morgan');
var cors = require('cors');

router.use(morgan('tiny'));

router.get('/:id', async function (req, res) {

    const quote_to_rate = await quoteModel.findById(req.params.id);
    //console.log(quote[0]);

    try {
        // quote_body = quote.map((document) => document.body)
        res.send(quote_to_rate);
        console.log(quote_to_rate);
    } catch (err) {
        res.status(500).send(err);
    }

});


router.post('/:id/upvote', cors(), async function (req, res) {

    const quote_to_rate = await quoteModel.findById(req.params.id);
    const num_of_upvotes = await quote_to_rate.meta.upvotes;
    const num_of_downvotes = await quote_to_rate.meta.downvotes;

    console.log(num_of_upvotes);

    const query = { _id: req.params.id };
    const update = { meta: { upvotes: num_of_upvotes + 1, downvotes: num_of_downvotes } };

    await quoteModel.findOneAndUpdate(query, update, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

router.post('/:id/downvote', cors(), async function (req, res) {

    const quote_to_rate = await quoteModel.findById(req.params.id);
    const num_of_upvotes = await quote_to_rate.meta.upvotes;
    const num_of_downvotes = await quote_to_rate.meta.downvotes;

    console.log(num_of_downvotes);

    const query = { _id: req.params.id };
    const update = { meta: { upvotes: num_of_upvotes, downvotes: num_of_downvotes + 1 } };

    await quoteModel.findOneAndUpdate(query, update, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});


module.exports = router;