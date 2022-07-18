let router = require("express").Router();
let tmdb = require("../../utils/tmdb");

router.get("/", async (req, res) => {
    res.send(await tmdb.getPopularMovies());
});

module.exports = router;
