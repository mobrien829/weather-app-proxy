const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`server on ${port}`);
});

app.get("/forecast", async (req, res) => {
  console.log(req);
  res.send({ msg: "hello from the backend" });
});
