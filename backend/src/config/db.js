import mongoose from "mongoose";

export default async function database() {
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/cf_crm");

        console.log("Connection to Moongose Server Established!");

        return mongoose.connection;
    } catch (error) {
        console.log("Error in establishing database connection!");
    }
}
