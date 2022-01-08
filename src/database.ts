import Mongoose = require("mongoose");
require('dotenv').config();

class DataAccess {
  static mongooseInstance: any;
  static mongooseConnection: Mongoose.Connection;

  constructor() {
    DataAccess.connect();
  }

  static connect(): Mongoose.Connection {
    if (this.mongooseInstance) return this.mongooseInstance;

    this.mongooseConnection = Mongoose.connection;
    this.mongooseConnection.once("open", () => {
      console.log("DB is connected.");
    });

    this.mongooseInstance = Mongoose.connect(process.env.DB_URI || "");
    return this.mongooseInstance;
  }

}

DataAccess.connect();
export = DataAccess;