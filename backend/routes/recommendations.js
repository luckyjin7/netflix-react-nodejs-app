const router = require('express').Router();
let Recommendations = require('../models/recommendations.model');

router.route('/').get((req, res) => {
    Recommendations.find()
    .then(recommendation => res.json(recommendation))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const id = Number(req.body.id);
  const img = req.body.img;

  const newRecommendations = new Recommendations({
      title, id, img
  });

  newRecommendations.save()
  .then(() => res.json('Recommendations added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

  router.route('/:id').get((req, res) => {
    Recommendations.findById(req.params.id)
      .then(recommendation => res.json(recommendation))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Recommendations.findByIdAndDelete(req.params.id)
      .then(() => res.json('Recommendations deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Recommendations.findById(req.params.id)
      .then(recommendation => {
        recommendation.title = req.body.title;
        recommendation.id = Number(req.body.id);
        recommendation.img = req.body.img;
  
        recommendation.save()
          .then(() => res.json('Recommendations updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;