const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema(
    {   
        images: Array,
        name: String,
        category: String,
        description: String,
        price: Number,
        count: Number,
        specifications: {
            display: String,
            camera: String,
            processor: String,
            storage: String,
            memory: String
        }
    },
    {
        collection: 'Products'
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model('Products', productsSchema);