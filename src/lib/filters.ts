import { I_product } from "../model/interfaces/I_product";

class Filter {
  static getBrands(data: any[]): string[] {
    let brands = data.map<string>(d => d.brand);
    return brands?.filter((b, i) => brands.indexOf(b) === i);
  }

  static getCategories(data: any[]): string[] {
    let categories = data.map<string>(d => d.category);
    return categories?.filter((b, i) => categories.indexOf(b) === i);
  }
}

export default Filter;