const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/routes");
const connectDB = require("./db/conn");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use("",router);
app.use("/profiles",express.static("profiles"));
app.use("/blogpics",express.static("blogpics"));

connectDB();

const port = process.env.PORT || 8000;
app.listen(port , ()=>{
    console.log(`app is listening on PORT : ${port}`);
});