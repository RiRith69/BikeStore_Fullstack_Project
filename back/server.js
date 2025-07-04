const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to backend session");
});
app.get("/new", (req, res) => {
  res.send("this is new model in LLM");
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
