const mongoose = require('mongoose');
const { Schema } = mongoose;


const burgerSchema = new Schema({
  id: {
      unique: true,
      type: Number,
      required: 'ID required.',
    },
  date: { 
      type: Date, 
      default: Date(),
       },
  place: {
      type: String,
      required: 'Place required.'
    },
  user: {
      type: String,
      required: 'User required.'
    },
  location: {
      type: [Number],
      required: 'Location required.'
    },
  picture: {
      type: String,
      validate: {
        validator: value => {
          try {
            const url = new URL(value)
            return url.protocol === 'http:' || url.protocol === 'https:'
          } catch(err) {
            return false
          }
        },
        message: () => 'Invalid image URL.'
      },
      default: 'https://miro.medium.com/max/3150/1*NFwzjjur2atssvIlGia0AQ.jpeg'
    },
  carne: {
      type: Number,
      required: 'Carne required.',
    },
  ingredientes: {
      type: Number,
      required: 'Ingredientes required.',
    },
  pan: {
      type: Number,
      required: 'Pan required.',
    },
  originalidad: {
      type: Number,
      required: 'Originalidad required.',
    },
  proporcionalidad: {
      type: Number,
      required: 'Proporcionalidad required.',
    },
  guarnicion: {
      type: Number,
      required: 'Guarnicion required.',
    },
  precio: {
      type: Number,
      required: 'Precio required.',
    },
  nota: {
      type: Number,
      required: 'Nota required.',
    },
  comments: {
    type: String,
  },
});

const Burger = mongoose.model('Burger', burgerSchema);

module.exports = Burger;