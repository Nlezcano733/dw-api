import mongoose from 'mongoose';

export interface I_order extends mongoose.Document {
  products: string[],
  subtotal: number,
  discounts: number,
  total: number,
  date: Date;
}