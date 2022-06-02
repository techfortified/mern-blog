require("dotenv").config();
const express = require("express");
const multer = require("multer");
const path = require("path");
const http = require("http");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const { allowedDomains, port } = require("./config");
const mongoConnect = require("./db");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const app = express();
app.use(cors({ origin: allowedDomains, credentials: true }));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")));
// call database
mongoConnect();
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
const server = http.createServer(app);
server.listen(port, () => {
  console.log("Backend is running.");
});
