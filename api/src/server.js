const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { login } = require("./utils/authentication");
const { checkToken } = require("./middleware/auth");
const app = express();

const apiRoute = require("./routes/api");

app.use(express.json());
// Use middleware to handle HTTP request bodies
app.use(bodyParser.json());

// Use middleware to enable CORS
app.use(cors());

// app.post("/auth/login", login);

app.use("/api", apiRoute);

app.listen(4000, () => {
  console.log("server listening on port : 4000");
});
