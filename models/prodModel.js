const Joi = require('joi');

const productSchema = Joi.object({
    title: Joi.string()
        .min(3)
        .max(100)
        .required(),
    
    price: Joi.number()
        .greater(0)
        .required(),
    
    quantity: Joi.number()
        .integer()
        .min(1)
        .required(),
    
    total: Joi.number()
        .greater(0)
        .required(),
    
    discountPercentage: Joi.number()
        .min(0)
        .max(100)
        .required(),
    
    discountedTotal: Joi.number()
        .greater(0)
        .required(),
    
    thumbnail: Joi.string()
        .uri()
        .required()
});

module.exports = productSchema