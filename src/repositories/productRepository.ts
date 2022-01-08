import { Model } from 'mongoose';
import { I_product } from "../model/interfaces/I_product";
import productModel from '../model/productModel';
import baseRepository from "./_baseRepository";

class ProductRepository extends baseRepository<I_product>{

  constructor(schemaModel: Model<I_product>) {
    super(schemaModel);
  }

}

const productRepository = new ProductRepository(productModel);
export default productRepository;