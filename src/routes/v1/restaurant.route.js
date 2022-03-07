const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const restaurantController  = require('../../controllers/restaurant.controller');

const router = express.Router();

router
  .route('/')
  .get(auth('getRestaurants'), restaurantController.getRestaurants)
  .post(auth('createRestaurant'), restaurantController.createRestaurant)

module.exports = router;