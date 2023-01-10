import mongoose from "mongoose";

const Connection = async (userName, password) => {
  const URL = `mongodb://${userName}:${password}@ac-9vkkxmi-shard-00-00.dyij5ts.mongodb.net:27017,ac-9vkkxmi-shard-00-01.dyij5ts.mongodb.net:27017,ac-9vkkxmi-shard-00-02.dyij5ts.mongodb.net:27017/?ssl=true&replicaSet=atlas-wevfh2-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(" database connection successful");
  } catch (error) {
    console.log("error in connection", error);
  }
};

export default Connection;
