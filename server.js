const PORT = 3000;
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB on VM3
mongoose.connect('mongodb://192.168.1.103:27017/microdb');

const ItemSchema = new mongoose.Schema({ name: String });
const Item = mongoose.model('Item', ItemSchema);

app.get('/api/items', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

app.listen(PORT, () => {
    console.log(`Backend running on http://192.168.1.102:${PORT}`);
});
