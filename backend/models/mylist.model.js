const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mylistSchema = new Schema(
  {
    title: { type: String, required: true },
    id: { type: Number, required: true },
    img: { type: String, required: true }
});

const Mylist = mongoose.model('Mylist', mylistSchema);

module.exports = Mylist;