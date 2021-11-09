import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  username: String,
  password: String,
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
