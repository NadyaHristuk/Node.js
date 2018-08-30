let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let catSchema = new Schema({
  name: {
    type: String,
    required: [
      true, 'Укажите имя кота'
    ],
    unique: true
  },
  age: {
    type: Number
  },
  date: Date.now()
});

const Cat = mongoose.model('cat', catSchema);

module.exports = Cat;
