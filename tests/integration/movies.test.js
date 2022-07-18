// Configure the testing libraries
let chai = require('chai');
let sinon = require("sinon");
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
let should = chai.should();
let expect = chai.expect;

// Ready the app for requests
let app = require('../../src/app');
let tmdb = require("../../utils/tmdb");

describe('GET /movies', () => {
    it('should not be emptry, and returns response from the backend API', done => {
        // stub the tmdb
        sinon.stub(tmdb, "getPopularMovies").returns({
            page: 1,
            results: [

            ],
        });
        chai
            .request(app)
            .get('/movies')
            .end((err, res) => {
                res.status.should.be.equal(200);
                console.log(res.body);
                res.body["page"].should.be.equal(1);
                done();
            });
    });
});
