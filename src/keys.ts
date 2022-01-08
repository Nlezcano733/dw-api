require('dotenv').config();

type mongoConfig = {
  uri: string;
};

export const mongodb: mongoConfig = { uri: process.env.DB_URI || "" };
