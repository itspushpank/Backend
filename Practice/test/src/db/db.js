const { default: mongoose } = require('mongoose');
// const db = require('mongoose');

async function database() {
    
    await mongoose.connect("mongodb://itspushpank35_db_user:nyfc5ZfFXeDly7Cu@ac-yupdmbk-shard-00-00.fucwimz.mongodb.net:27017,ac-yupdmbk-shard-00-01.fucwimz.mongodb.net:27017,ac-yupdmbk-shard-00-02.fucwimz.mongodb.net:27017/?ssl=true&replicaSet=atlas-14dh1b-shard-0&authSource=admin&appName=backend-learning-cluster/ather");

    console.log("conneted to DB");

}

module.exports = database;