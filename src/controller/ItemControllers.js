const Item = require("../model/ItemModel");

const getAllItems = async (req, res) => {
    // res.send("From all items controller")
    const result = await Item.find().sort({createAt: -1});
    res.status(200).json(result);
}

// For search items
const getSearchedItems = async(req, res) => {
    const {q} = req.query;
    try {
        let items;
        if(q) {
            items = await Item.find({ name: { $regex: q, $options: "i" } })
        }
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: "No items found" });
    }
}

// For single items

const getsSingleItems = async (req, res) => {
    const {id} = req.params;
    try {
        const item = await Item.findById(id);
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: "No items found" });
    }
}

module.exports = {
    getAllItems,
    getSearchedItems,
    getsSingleItems
}