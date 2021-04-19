const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//mongodb+srv://esteban_:Meg@deth1@cluster0.dgfzn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });
if(process.env.MONGODB_ATLAS.length > 0){
  mongoose.connect(process.env.MONGODB_ATLAS, {
    useNewUrlParser: true,
    useFindAndModify: false
  });


} else{
mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});
}

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT} !`);
});
