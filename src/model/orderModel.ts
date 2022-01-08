import { model, Schema } from "mongoose";
import { I_order } from './interfaces/I_order';

const orderSchema = new Schema({
  products: Array,
  subtotal: Number,
  discounts: Number,
  total: Number,
  date_purchase: Date
});

export default model<I_order>('Order', orderSchema);