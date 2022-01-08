import { Model } from 'mongoose';
import { I_discount } from "../model/interfaces/I_discount";
import discountModel from '../model/discountModel';
import baseRepository from "./_baseRepository";

class DiscountRepository extends baseRepository<I_discount>{

  constructor(schemaModel: Model<I_discount>) {
    super(schemaModel);
  }

}

const discountRepository = new DiscountRepository(discountModel);
export default discountRepository;