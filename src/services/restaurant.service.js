const httpStatus = require('http-status');
const { Restaurant } = require('../models');
const ApiError = require('../utils/ApiError');

const createRestaurant = async (restaurantBody) => {
    if (await Restaurant.isRestaurantPresent(restaurantBody.name)) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Restaurant aready present');
    }
    return Restaurant.create(restaurantBody);
};

const viewRestaurants = async (query = null) => {
    let restaurants = [];
    if(query){
        let regex = new RegExp(query,'i');
        restaurants = await Restaurant.find({
            $or: [{ name: regex}, {place: regex}, {cuisine: regex}]
        });
    } else {
         restaurants = await Restaurant.find();
    }
    return restaurants;
}

const getRestaurantById = (id) => {
    return Restaurant.findById(id);
}

const deleteRestaurantById = async (resId) => {
    const restaurant = await getRestaurantById(resId);
    if(!restaurant){
        throw new ApiError(httpStatus.NOT_FOUND, 'Restaurant not found');
    }
    await restaurant.remove();
    return restaurant;
}

module.exports = {
    createRestaurant,
    viewRestaurants,
    deleteRestaurantById
}