const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
dotenv.config();

const app = express();
const port = process.env.PORT || 1999;
const url = process.env.SERVER_URL;
app.use(express.json());

app.use(
  cors({
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
    origin: process.env.FRONTEND_URL,
  })
);
app.use(cookieParser());
app.use(morgan("dev"));
app.use(compression());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.get("/", (req, res) => {
  res.send("Server Shop MOLXIPI.");
});
app.listen(port, () => {
  console.log(`Server is running at ${url}${port}`);
});
