import mongoose, { Schema } from 'mongoose';

const FavSchema = new Schema({
  foodId: String,
  username: String,
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
});

const FavSchema = mongoose.model('Fav', FavSchema);

export default FavSchema;
