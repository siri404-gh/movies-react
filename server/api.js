require('colors');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Movie = require('./Movie.model');

var port = +process.argv[2] || 3000;
var db = 'mongodb://localhost/moviess';

var app = new express();
var path = require('path');

mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('../client/dist/'));

app.get('/', function(req, res) {
    res.send('you are at /');
});

app.get('/movie', function(req, res) {
    Movie.find({})
    .exec(function(err, data) {
        if(err) {
            res.send('error');
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

app.post('/movie', function(req, res) {
    Movie.findOne({
        imdbID: req.body.imdbID
    })
    .exec(function(err, data) {
        if(!data) {
            Movie.create(req.body, function(err, data) {
                if(err) {
                    res.send('error');
                } else {
                    console.log(data);
                    res.send(data);
                }
            });
        } else {
            Movie.findOneAndUpdate({
                imdbID: req.body.imdbID
            }, {
                $set: {
                    imdbRating: req.body.imdbRating
                }
            }, {
                upsert: true
            }, function(err, data) {
                if(err) {
                    res.send('error');
                } else {
                    res.send(data);
                }
            });
        }
    });

});

app.get('/movie/:id', function(req, res) {
    Movie.findOne({
        imdbID: req.params.id
    })
    .exec(function(err, data) {
        if(err) {
            res.send('error');
        } else {
            res.json(data);
        }
    });
});


app.put('/movie/:id', function(req, res) {
    Movie.findOneAndUpdate({
        imdbID: req.params.id
    }, {
        $set: {
            imdbRating: req.body.imdbRating
        }
    }, {
        upsert: true
    }, function(err, data) {
        if(err) {
            res.send('error');
        } else {
            res.send(data);
        }
    });
});

app.delete('/movie/:id', function(req, res) {
    Movie.findOneAndRemove({
        imdbID: req.params.id
    }, function(err, data) {
        if(err) {
            res.send('error');
        } else {
            res.send(data);
        }
    });
});


app.listen(port, function () {
    console.log(('Listening on port ' + port).green);
});
