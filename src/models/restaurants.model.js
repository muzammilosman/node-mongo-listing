const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');

const restaurantSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    cuisine: {
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
restaurantSchema.plugin(toJSON);
restaurantSchema.plugin(paginate);


restaurantSchema.statics.isRestaurantPresent = async function(restaurantName)  {
    const restaurant = await this.findOne({name: restaurantName});
    return restaurant;
}

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
