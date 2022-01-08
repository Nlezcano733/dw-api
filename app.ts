import express, { Express } from "express";
import methodOverride from 'method-override';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Routes import
import products from "./src/routes/products";

// Initializations
const app: Express = express();
require('./src/database');

// Settings
app.set("port", process.env.PORT || 4000);
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride());

// Routes
app.use('/api/products', products);

// Statics files

// Start
app.listen(app.get("port"), () => {
  console.log("Sever on port", app.get("port"));
});