const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  quantity: { type: Number, default: 0 },
  category: String,
  dateAdded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
