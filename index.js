require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors")
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

// DB CONNECTION
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB CONNECTED")
})

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const auth = require("./routes/auth")
app.use("/api", auth)

const port = process.env.PORT || 2000;

app.listen(port, () => {
    console.log(`app is running at port ${port}`)
});