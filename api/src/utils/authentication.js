const jwt = require("jsonwebtoken");
const { AdminMethods } = require("../models/admin.model.js");

require("dotenv").config();


const store = new AdminMethods();

 const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (username == undefined || password == undefined)
      return res.json({ message: "missing username or password" });

    const admin = await store.getByUsername(username);
    if (admin.password == password && admin.username == username) {
      const token = jwt.sign(admin, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1d",
      });
      //  const refreshToken = jwt.sign(
      //    { username: admin.username },
      //    process.env.REFRESH_TOKEN_SECRET,
      //    { expiresIn: "1d" }
      //  );
      //  res.cookie("jwt", refreshToken, {
      //    httpOnly: true,
      //    sameSite: "None",
      //    secure: true,
      //    maxAge: 24 * 60 * 60 * 1000,
      //  });
      return res.json({ token ,admin});
    }

    res.status(401).json({ message: "incorrect username or password" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

const refresh = async (req, res) => {
  if (req.cookies?.jwt) {
    const refreshToken = req.cookies.jwt;
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        if (err) {
          return res.status(406).json({ message: "Unauthorized" });
        } else {
          const admin = await store.show(username);
          const accessToken = jwt.sign(admin, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "10m",
          });
          return res.json({ accessToken });
        }
      }
    );
  } else {
    return res.status(406).json({ message: "Unauthorized" });
  }
};

module.exports={login}