const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const chef = require("./data/chef_data.json");
const reciepies = require("./data/reciepe.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Reciepe Server is Running");
});

// chef json  route here
app.get("/chef", (req, res) => {
  res.send(chef);
});
// chef json  route here
app.get("/top-rated", (req, res) => {
  const topRated = reciepies.filter((hotReciepe) => hotReciepe.rating === 4.8);
  res.send(topRated);
});
// get dynamic reciepe data match by hot
app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const selectedReciepe = reciepies?.filter(
    (reciepe) => reciepe.category_id == id
  );
  res.send(selectedReciepe);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
