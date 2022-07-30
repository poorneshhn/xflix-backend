const app = require("express")();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

const data = require("../data/allvideos");

app.get("/v1/videos", (req, res) => {
  res.status(200).json(data);
});

app.post("/v1/videos", (req, res) => {
  res.status(201).json({ status: "success" });
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Port is running on ", process.env.PORT || 8000);
});
