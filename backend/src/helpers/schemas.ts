import * as Joi from 'joi';

const schemas = {
  userBody: Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    balance: Joi.number().required(),
    role: Joi.string().required()
  })
};

export default schemas;