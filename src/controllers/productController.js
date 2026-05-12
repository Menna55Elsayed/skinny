// src/controllers/productController.js
const Product = require('../models/Product');

// ============================================
// GET /api/products
// Supports: ?skinType=dry|oily|normal  &minPrice=0  &maxPrice=200
// ============================================
exports.getAllProducts = async (req, res) => {
  try {
    const { skinType, minPrice, maxPrice } = req.query;
    const filter = {};

    if (skinType) filter.skinType = skinType;

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const products = await Product.find(filter).sort({ createdAt: -1 });

    res.json({ success: true, data: products });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ============================================
// GET /api/products/:id
// ============================================
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};