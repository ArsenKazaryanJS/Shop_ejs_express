const joi = require('joi')


const userSchema = joi.object({
    name: joi
    .string()
    .alphanum()
    .min(2)
    .max(30)
    .required(),

    password: joi
    .string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required() ,

    confirmPassword: joi
    .ref('password'),

    email: joi
    .string()
    .email()
    .required() ,

    roles: joi
    .array()
    .items(joi.string())
    .default(['user']),

})



module.exports = userSchema