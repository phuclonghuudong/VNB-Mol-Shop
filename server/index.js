// ===== BẮT LỖI TOÀN CỤC =====
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION!", err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION!", err);
});

// ===== CÁC IMPORT =====
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const errorHandler = require("./v1/middlewares/errorHandler");

// ===== CẤU HÌNH MÔI TRƯỜNG =====
dotenv.config();

// ===== KHỞI TẠO APP =====
const app = express();
const port = process.env.PORT || 1999;
const url = process.env.SERVER_URL;

// ===== MIDDLEWARE =====
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(compression());
app.use(
  cors({
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
    origin: process.env.FRONTEND_URL,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// ===== ROUTES =====
app.get("/", (req, res) => {
  res.send("Server Shop MOLXIPI.");
});
const mainRouter = require("./v1/routes");
app.use("/", mainRouter);

// ===== Middleware xử lý lỗi cuối cùng =====
app.use(errorHandler);

// ===== START SERVER =====
app.listen(port, () => {
  console.log(`Server is running at ${url}${port}`);
});
