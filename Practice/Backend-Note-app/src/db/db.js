
const mongoose =  require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

async function connetDB() {
    await mongoose.connect(`${MONGO_URI}`)

    console.log("connected to DB")
}

module.exports = connetDB;