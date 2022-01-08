import { model, Schema } from "mongoose";
import { I_product } from './interfaces/I_product';

const productSchema = new Schema({
  title: String,
  brand: String,
  type: String,
  category: String,
  description: String,
  price: Number,
  stock: Number,
  picture: String,
  created_at: Date
});

export default model<I_product>('Product', productSchema);