// These routes will render the actual html pages for 
// the user to see 
const router = require("express").Router();
const path = require("path");

// renders the main page of the app
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// renders the exercise page
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

// renders the stats page
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;