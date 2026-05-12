// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//   name:        { type: String, required: true, trim: true },
//   description: { type: String, trim: true },
//   price:       { type: Number, required: true, min: 0 },
//   image:       { type: String },   // رابط الصورة
//   // نوع البشرة — القيم المسموح بيها
//   skinType: {
//     type: String,
//     enum: ['dry', 'oily', 'normal', ''],
//     default: ''
//   },
//   stock:      { type: Number, default: 0 },
// }, { timestamps: true });

// module.exports = mongoose.model('Product', productSchema);

const mongoose = require('mongoose')
const pruductSchema = mongoose.Schema(
    {
       name:{
    type:String,
    require:[true,"pls enter product name"]},
     quantity:{
    type:Number,
    require:[true],
    default:0},

    price :{
        type:Number,
        require:true,
        default:0

    },
    Image:{
        type:String,
        require:false,
        },
    },

    {
        timestamps:true,
    }
);

const Product = mongoose.model("Product",pruductSchema)

