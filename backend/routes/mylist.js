const router = require('express').Router();
let Mylist = require('../models/mylist.model');

router.route('/').get((req, res) => {
    Mylist.find()
    .then(mylist => res.json(mylist))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const id = Number(req.body.id);
  const img = req.body.img;

  const newMylist = new Mylist({
      title, id, img
  });

   newMylist.save()
  .then(() => res.json('Mylist added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

  router.route('/:id').get((req, res) => {
    Mylist.findById(req.params.id)
      .then(mylist => res.json(mylist))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Mylist.findByIdAndDelete(req.params.id)
      .then(() => res.json('Mylist deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Mylist.findById(req.params.id)
      .then(mylist => {
        mylist.title = req.body.title;
        mylist.id = Number(req.body.id);
        mylist.img = req.body.img;
  
        mylist.save()
          .then(() => res.json('Mylist updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;