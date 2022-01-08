import { Model } from 'mongoose';
import { I_order } from "../model/interfaces/I_order";
import orderModel from '../model/orderModel';
import baseRepository from "./_baseRepository";

class OrderRepository extends baseRepository<I_order>{

  constructor(schemaModel: Model<I_order>) {
    super(schemaModel);
  }

}

const orderRepository = new OrderRepository(orderModel);
export default orderRepository;