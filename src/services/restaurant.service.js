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

module.exports = {
    createRestaurant,
    viewRestaurants
}