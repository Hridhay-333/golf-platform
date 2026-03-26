const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://polluser:simple123@ac-bjqfwlu-shard-00-00.m8sictg.mongodb.net:27017,ac-bjqfwlu-shard-00-01.m8sictg.mongodb.net:27017,ac-bjqfwlu-shard-00-02.m8sictg.mongodb.net:27017/golfDB?ssl=true&replicaSet=atlas-4tivre-shard-0&authSource=admin&retryWrites=true&w=majority");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;