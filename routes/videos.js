const router = require('express').Router();
const validate = require('../validator');
const Video = require('../models/video');

router.get('/', (req, res) => {

    Video
      .find()
      .sort('title')
      .then(data => res.send(data));
});

router.get('/:id', (req, res) => {

  Video
    .findOne({_id: req.params.id})
    .then(video => {
      if (!video) return res.status(404).send('Unable to find video with given ID');
      res.send(video)
    })
    .catch(error => res.status(400).send(error.message)); 
});

router.post('/', (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
 
  const video = new Video(req.body);
  video
    .save()
    .then(video => res.send(video))
    .catch(err => res.send(err.message));
});

router.put('/:id', (req, res) => {

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  Video.findOneAndUpdate({_id: req.params.id}, {
    $set: { ...req.body }
  }, { new: true })
  .then(video => {
    if (!video) return res.status(404).send(`Video with ${req.params.id} ID could not be found`);
    res.send(video);
  })
  .catch(err => res.send(err.message));
});

router.delete('/:id', (req, res) => {

  Video
    .findOneAndDelete({ _id: req.params.id })
    .then(video => {
      if (!video) 
        return res.status(404).send(`Unable to find video for ${req.params.id} ID`);
      
      res.send(video)
    })
    .catch(err => res.status(400).send(err.message));
});

module.exports = router;