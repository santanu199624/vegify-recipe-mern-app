const express = require("express");
const router = express.Router();

const ItemControllers = require("../controller/ItemControllers");
// const getSearchedItems = require("../controller/ItemControllers");

// router.get("/", (req, res) => {
//     res.send("From items route")
// })



router.get("/all-items", ItemControllers.getAllItems);
// Route for search
router.get("/items", ItemControllers.getSearchedItems);
// Route for single item
router.get("/items/:id", ItemControllers.getsSingleItems);

module.exports = router;

