const express = require("express");
const app = express();
const cors = require("cors");
// const bodyParser = require('body-parser');
app.use(cors());
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
