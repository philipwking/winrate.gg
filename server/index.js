const express = require("express");

const envUser = 'pk2'//process.env.ENV_USER
const envPass = '!pk234'// process.env.ENV_PASS

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect('mongodb://pk2:!pk234@192.168.1.200:27017', { useNewUrlParser: true })
    .then(() => {
        console.log('Start');
    })
    .catch((err) => {
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
