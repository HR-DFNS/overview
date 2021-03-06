const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
  _id: Number,
  name: String,
  tagline: String,
  type: String,
  vicinity: String,
  priceLevel: Number,
  zagatFood: Number,
  zagatDecor: Number,
  zagatService: Number,
  longDescription: String,
});

const RestaurantModel = mongoose.model('restaurants', restaurantSchema);

const findOneById = (id, callback) => {
  RestaurantModel.find({_id:id}, callback);
};

const insertMany = (restaurant, callback) => {
  RestaurantModel.insertMany(restaurant, callback);
};

const getTopRated = (callback) => {
  RestaurantModel.find({zagatFood:{$gte:4},zagatDecor:{$gte:4},zagatService:{$gte:4},priceLevel:{$gte:2}},callback)
};

const count = () => RestaurantModel.count();

exports.findOneById = findOneById;
exports.insertMany = insertMany;
exports.getTopRated = getTopRated;
exports.count = count;

