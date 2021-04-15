const router = require("express").Router();
// const db = require("../models/workout.js");
const db = require("../models/workout.js");

console.log("PRINT DB", db);

// Get all workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      console.log("All Workouts!!!", dbWorkout);
      res.send(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Create a workout
router.post("/api/workouts", ({ body }, res) => {
    console.log("This is the body", body);
    db.Workout.create(body).then(dbWorkout => {
        console.log("Create a workout", dbWorkout);
        res.send(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

module.exports = router;
