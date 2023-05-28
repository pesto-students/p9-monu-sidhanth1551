const express = require('express');
const app = express();
const PORT = 3000;
require("dotenv").config();

app.use(require('./routes/routes'));

app.listen(PORT,()=>{
    console.log(`This app is running on ${PORT} Port`)
})
