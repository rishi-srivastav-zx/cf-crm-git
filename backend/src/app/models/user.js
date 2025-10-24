import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  f_name: String,
  l_name: String,
  email: String,
  phone: Number,
  password: String,
});

const User = mongoose.model('User', userSchema);

export default User