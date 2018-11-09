const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/videos', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch((error) => console.log('Unable to connect MongoDB', error));

module.exports = mongoose;