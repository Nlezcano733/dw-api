import mongoose from 'mongoose';

export interface I_discount extends mongoose.Document {
  product: string,
  percentage: number,
  total_discount: number,
  date_end: Date,
  is_active: boolean;
}
