import mongoose from 'mongoose';
import { typeEnum } from '../enums/typeEnum';

export interface I_product extends mongoose.Document {
  title: string,
  brand: string,
  type: typeEnum,
  category: string,
  description: string,
  price: number,
  stock: number,
  picture: string;
  created_at: Date;
}