const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  cast: [ String ],
  date: { type: Date, default: new Date }
});  

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;