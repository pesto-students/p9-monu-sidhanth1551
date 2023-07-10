const express = require("express");
const connectDb = require("./config/dbConnection")

connectDb();

const app = express();
const PORT=3001;

require("dotenv").config();

app.use(require("./routes/routes"));

app.use(require("./routes/userFinanceRoutes"))

app.listen(PORT,()=>{
    console.log(`The Port is running on ${PORT}`)
})