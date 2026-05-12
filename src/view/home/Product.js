// src/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:        { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  price:       { type: Number, required: true, min: 0 },
  image:       { type: String },   // رابط الصورة
  // نوع البشرة — القيم المسموح بيها
  skinType: {
    type: String,
    enum: ['dry', 'oily', 'normal', ''],
    default: ''
  },
  stock:      { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
