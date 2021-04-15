const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create a mongoose schema that will map to a MongoDB collection
// and define the shape of the documents within that collection.
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please, enter exercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "Please, enter a name for your exercise",
      },
      duration: {
        type: Number,
        trim: true,
        required: "Please, enter duration",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
  totalDuration: {
    type: Number,
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
