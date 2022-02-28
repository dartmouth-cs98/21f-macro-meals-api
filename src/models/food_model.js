import mongoose, { Schema } from 'mongoose';

const FoodSchema = new Schema({
  username: String,
  customName: String,
  description: String,
  mealTime: String,
  mood: String,
  imageUrl: String,
  classification: String,
  calories: Number,
  protein: Number,
  carb: Number,
  fat: Number,
  confidence: Number,
  classificationTwo: String,
  caloriesTwo: Number,
  proteinTwo: Number,
  carbTwo: Number,
  fatTwo: Number,
  confidenceTwo: Number,
  classificationThree: String,
  caloriesThree: Number,
  proteinThree: Number,
  carbThree: Number,
  fatThree: Number,
  confidenceThree: Number,
  publicFood: Number,
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
});

const FoodModel = mongoose.model('Food', FoodSchema);

export default FoodModel;
