const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect('mongodb+srv://santanumaity24041996:D31C3ze85AKlYnUj@vegify-react-app.rbxpg2j.mongodb.net/vegify-react-app?retryWrites=true&w=majority&appName=vegify-react-app');

  app.get("/", (req, res) => {
    res.send("Veggify app running")
})
}

main()
.then(() => console.log("MongoDB connected successfully!"))
.catch(err => console.log(err));

// routes
const ItemRoutes = require("./src/routes/ItemRoute");
const CategoryRoutes = require("./src/routes/CategoryRoute");

app.use("/api", ItemRoutes);
app.use('/api', CategoryRoutes);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})





// santanumaity24041996    D31C3ze85AKlYnUj