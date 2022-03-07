const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { restaurantService } = require('../services');

const createRestaurant = catchAsync(async (req, res) => {
    const restaurant = await restaurantService.createRestaurant(req.body);
    res.status(httpStatus.CREATED).send(restaurant);
});

const getRestaurants = catchAsync(async (req, res) => {
    const query = req.query.searchQuery && req.query.searchQuery != '' ? req.query.searchQuery : null;
    const restaurants = await restaurantService.viewRestaurants(query);
    res.send(restaurants);
});

module.exports = {
    createRestaurant,
    getRestaurants
}