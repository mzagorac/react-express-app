const Joi = require('joi');

module.exports = movie => {
  
  const schema = {
    title: Joi.string().min(2).required(),
    genre: Joi.string().min(2).required(),
    cast: Joi.array()
  };

  return Joi.validate(movie, schema);
};