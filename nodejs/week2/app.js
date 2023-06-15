const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = require("./routs");

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is a search engine");
});

app.use("", router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
