const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cities', (err) => {
  if (err) {
    throw err;
  }
  console.log('connected to mongoDB');
});

const db = mongoose.connection;

const citySchema = new mongoose.Schema({
  name: String,
  fun: String,
  safety: String,
  queervibes: String,
  weather: String,
  description: String,
  places: [
    {
      name: String,
      address: String,
      website: String,
      vibe: String,
      queerdar: String,
      description: String,
      lat: Number,
      lng: Number,
      category: String,
      identity: String,
      city: String,
      image: String,
    },
  ],
});

const City = mongoose.model('City', citySchema);

const save = (req, callback) => {
  const city = new City(req);
  city.save((err, response) => {
    if (err) {
      throw err;
    }
    callback(null, response);
  });
};

const find = (callback) => {
  City.find({}, (err, res) => {
    if (err) {
      throw err;
    }
    callback(null, res);
  });
};

module.exports = { save, find, db };
