const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./db/conn");
const router = require("./routes/route");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use("",router);

connectDB();

const port = process.env.PORT;
app.listen(port , ()=>{
    console.log(`listening on PORT : ${port} `);
}) 