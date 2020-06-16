const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;



app.use("/", (req, res) => {
    res.json({ "hello": "world"});
});

app.listen(PORT, () => {
    console.log("running on port " + PORT);
});