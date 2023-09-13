//create web server
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mongoose = require('mongoose');
var Comment = require('../models/comment');

//GET route
router.get('/', function(req, res) {
    Comment.find(function(err, comments) {
        if (err) {
            console.log(err);
            res.send(500);
        } else {
            res.json(comments);
        }
    });
});

//POST route
router.post('/', jsonParser);
router.post('/', function(req, res) {
    console.log(req.body);
    if (req.body == null) {
        console.log("No body sent");
        res.send(400);
    } else {
        var comment = new Comment({
            name: req.body.name,
            comment: req.body.comment,
            timestamp: Date.now()
        });
        comment.save(function(err, comment) {
            if (err) {
                console.log(err);
                res.send(500);
            } else {
                res.json(comment);
            }
        });
    }
});

//PUT route
router.put('/:id', jsonParser);
router.put('/:id', function(req, res) {
    console.log(req.body);
    if (req.body == null) {
        console.log("No body sent");
        res.send(400);
    } else {
        Comment.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            comment: req.body.comment,
            timestamp: Date.now()
        }, function(err, comment) {
            if (err) {
                console.log(err);
                res.send(500);
            } else {
                res.json(comment);
            }
        });
    }
});

//DELETE route
router.delete('/:id', function(req, res) {
    Comment.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            console.log(err);
            res.send(500);
        } else {
            res.send(200);
        }
    });
});

module.exports = router;