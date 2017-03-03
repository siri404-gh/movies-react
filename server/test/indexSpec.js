var should = require('chai').should();
var supertest = require("supertest");
var app = require('../app');
var url = supertest("http://localhost:3000");
describe("[1] Suite to test: Welcome Route", function(err){
    it("Test case [1] for: GET '/'", function(done){
        url
            .get("/")
            .expect(200)
            .expect('Content-Type', /html/)
            .end(function(err, res) {
                if(err) {
                    throw err;
                }
                res.text.should.be.equal("you are at /");
                done();
            })
    });
});
describe("[2] Suite to test: Search Movie Route", function(err) {
    it("Test case to list all movies: GET '/movie'", function(done) {
        url
            .get("/movie")
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if(err) {
                    throw err;
                }
                var searchResult = JSON.parse(res.text);
                searchResult.length.should.not.be.empty;
                done();
            })
    });
    it("Test case for search movie by ID: GET '/movie/id'", function(done) {
        url
            .get("/movie/57763e0c3ed0e72a3ccc493f")
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if(err) {
                    throw err;
                }
                var searchResult = JSON.parse(res.text);
                searchResult._id.should.be.equal('57763e0c3ed0e72a3ccc493f');
                done();
            })
    });
});

describe("[3] Suite to test: Add/Update Movie Route", function(err){
    it("Test case [1] for: POST '/movie'", function(done){
        url
            .post("/movie")
            .send('Content-Type', /json/)
            .send({
                "Title":"Suswara3",
                "Year":"1999",
                "Language":"english",
                "Country":"USA",
                "Awards":"",
                "Poster":"www.google.com/die+hard",
                "Rating":"4.6"
            })
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if(err) {
                    throw err;
                }
                var searchResult = JSON.parse(res.text);
                searchResult.Title.should.be.equal('Suswara3');
                done();
            })
    });
    it("Test case for updating movie'", function(done){
        url
            .put("/movie/57763e0c3ed0e72a3ccc493f")
            .send('Content-Type', /json/)
            .send({
                "title":"KingKong4"
            })
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if(err) {
                    throw err;
                }
            done();
            })
    });
});

describe("[4] Suite to test: Delete Movie Route", function(err){
    it("Test case [1] for: DELETE '/movie/57763e0c3ed0e72a3ccc493f'", function(done){
        url
            .delete("/movie/57763e0c3ed0e72a3ccc493f")
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if(err) {
                    throw err;
                }
                done();
            })
    });
});
