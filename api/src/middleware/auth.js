const jwt = require("jsonwebtoken");
require("dotenv").config();


const checkToken = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    next();
  } catch (err) {
    res.json({ err: err.message });
  }
};
module.exports ={checkToken}