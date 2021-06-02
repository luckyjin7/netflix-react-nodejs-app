const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recommendationsSchema = new Schema(
  {
    title: { type: String, required: true },
    id: { type: Number, required: true },
    img: { type: String, required: true }
});

const Recommendations = mongoose.model('Recommendations', recommendationsSchema);

module.exports = Recommendations;