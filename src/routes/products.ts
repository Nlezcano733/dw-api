import { Router } from 'express';
import productsController from '../controller/productsController';

class ProductsRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', productsController.listPaginated);
    this.router.get('/list', productsController.list);
    this.router.get('/:id', productsController.getById);
    this.router.get('/', productsController.getData);
    this.router.post('/', productsController.save);
    this.router.delete('/:id', productsController.delete);
    this.router.patch('/:id', productsController.update);
  }
}

const productsRoutes: ProductsRoutes = new ProductsRoutes();
export default productsRoutes.router;