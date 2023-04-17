const express = require("express");
const cors = require("cors");
const PORT = 3001;
const axios = require("axios");
const dotenv = require("dotenv").config();
const app = express();
app.use(express.json());
express.urlencoded({ extended: true });
var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors({ origin: true }));

//route + method
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      {
        headers: { "private-key": process.env.KEY },
      }
    );
    return res.status(r.status).json(r.data);
  } catch (err) {
    res.json(err.data);
  }
});

app.listen(PORT, (req, res) => {
  console.log(`server started on ${PORT}`);
});
