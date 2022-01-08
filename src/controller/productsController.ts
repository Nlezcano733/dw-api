import { Request, Response } from 'express';
import { I_baseController } from './interfaces/I_baseController';
import { I_product } from '../model/interfaces/I_product';
import { _business } from '../model/interfaces/_business';
import productRepository from '../repositories/productRepository';

class ProductsController implements I_baseController {

  async list(req: Request, res: Response): Promise<void> {
    const data = await productRepository.list();
    res.json(data);
  }

  async listPaginated(req: Request, res: Response): Promise<void> {
    let page = req.query?.page || 1;
    let limit = req.query?.limit || 4;
    page = <number>page;
    limit = <number>limit;

    const data = await productRepository.listPaginated(page, limit);
    res.json(data);
  }

  async getById(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;
    const data: I_product | null = await productRepository.getById(id);

    if (data) {
      res.json(data);
    } else {
      res.status(404).send("Product doesn't found");
    }
  }

  async getData(req: Request, res: Response) {
    let key = req.query?.key;
    let value = req.query?.value;

    if (key && value) {
      const data = await productRepository.getData({ key: value });
      if (data.length) {
        res.json(data);
      } else {
        res.status(400).send("Error in Params");
      }
    } else {
      res.status(400).send('Error in request');
    }
  }

  async save(req: Request, res: Response): Promise<void> {
    const serialize: I_product = req.body;
    const { title, brand, type, category, price, stock } = serialize;

    if ([title, brand, type, category, price, stock].every(d => d)) {
      serialize.created_at = new Date;
      const newValue = await productRepository.save(serialize);
      res.json(newValue);
    } else {
      res.status(400).send('Error in request');
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;
    const serialize: I_product = req.body;
    const { title, brand, type, category, price, stock } = serialize;

    if ([title, brand, type, category, price, stock].every(d => d)) {
      serialize.created_at = new Date;
      const value = await productRepository.update(serialize, id);
      if (value) {
        res.json(value);
      } else {
        res.status(404).send("Error! Id product doesn't found");
      }
    } else {
      res.status(400).send('Error in request');
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;
    const verif = await productRepository.getById(id);

    if (verif) {
      await productRepository.delete(id);
      res.status(204).send("Product deleted correctly");
    } else {
      res.status(404).send("Id product doesn't found");
    }
  }
};

const productsController = new ProductsController();
export default productsController;