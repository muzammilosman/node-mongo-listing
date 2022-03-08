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

const deleteRestaurant = catchAsync(async (req, res) => {
    await restaurantService.deleteRestaurantById(req.params.id)
    res.status(httpStatus.NO_CONTENT).send({
        message: 'Successfully deleted'
    });
});

module.exports = {
    createRestaurant,
    getRestaurants,
    deleteRestaurant
}