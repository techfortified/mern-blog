const mongoose = require("mongoose");
const config = require("../config");

const mongodbConnect = async () => {
  try {
    const uri = config.mongo.mongodb_uri;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });
    console.log(`database connected on uri ${config.mongo.mongodb_uri}`);
  } catch (error) {
    console.log(error.message);
    //    process.exit(0)
  }
};
module.exports = mongodbConnect;
