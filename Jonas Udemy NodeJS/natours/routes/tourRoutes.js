const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');

//router.param('id', tourController.checkId);

//create a checkBody middleware
//check if body contains the name and price property
//if not send back 400 (bad request)
//add it to the post handler stack

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
