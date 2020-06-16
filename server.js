const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;



app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " " + req.ip);
    next();
  });
app.listen(PORT, () => {
    console.log("running on port " + PORT);
});

//Test