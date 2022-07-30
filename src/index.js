const app = require("express")();
const { videos } = require("../data/allvideos");

app.get("/v1/videos", (req, res) => {
  res.status(200).json(videos);
});
app.listen(process.env.PORT || 8000, () => {
  console.log("Port is running on ", process.env.PORT || 8000);
});
