import mongoose, { Schema } from 'mongoose';

const FoodSchema = new Schema({
  username: String,
  customName: String,
  mealTime: String,
  mood: String,
  imageUrl: String,
  classification: String,
  calories: Number,
  protein: Number,
  carb: Number,
  fat: Number,
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
});

const FoodModel = mongoose.model('Food', FoodSchema);

export default FoodModel;
