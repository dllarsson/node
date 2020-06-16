const express = require('express');
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
require('dotenv/config');
const bodyParser = require('body-parser');


app.use(bodyParser.json());



const postsRoute = require('./routes/posts');

app.use("/posts", postsRoute);

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }, () =>
console.log("connected to db"));


app.listen(PORT, () => {
    console.log("running on port " + PORT);
});

