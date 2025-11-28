import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  f_name: String,
  l_name: String,
  email: { type: String, required: true, unique: true },
  phone: Number,
  password: String,
   role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' } 
}, { timestamps: true 
});

const User = mongoose.model('User', userSchema);

export default User;