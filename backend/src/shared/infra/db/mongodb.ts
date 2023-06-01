import { connect } from "mongoose";
// config
import { configs } from "../../../config/config";

configs.dotenvConfig();

export const mongoConnection = async () => {
  try {
    await connect(
      `mongodb://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/?authSource=${process.env.MONGO_DB_NAME}`
    );
    console.log("connected mongodb !");
  } catch (exception) {
    console.log("not connection ");
  }
};
