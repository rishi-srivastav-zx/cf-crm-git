import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    user_id: String,
    token: String,
})

const Session = mongoose.model('Session', sessionSchema);