import { model, Schema } from "mongoose";
import { I_discount } from "./interfaces/I_discount";

const discountSchema = new Schema({
  product: Array,
  percentage: Number,
  total_discount: Number,
  date_end: Date,
  is_active: Boolean,
});

export default model<I_discount>('Discount', discountSchema);