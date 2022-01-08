import { Model } from 'mongoose';
import { crud } from "../interfaces/crud";
import { I_pagination } from '../interfaces/pagination';

class baseRepository<T> implements crud<T>{

  private _model: Model<T>;

  constructor(schemaModel: Model<T>) {
    this._model = schemaModel;
  }

  public async list() {
    return await this._model.find({}).lean();
  };

  public async listPaginated(page: number, limit: number) {

    const data = await this._model.find({}).lean();
    const values = data?.map((d: any) => ({ ...d, id: d._id.toString() }));

    const startIndex: number = (page - 1) * limit;
    const endIndex: number = page * limit;
    let next: number = Number(page) + 1;
    let previous: number = Number(page) - 1;

    const resultPage = values.slice(startIndex, endIndex);
    const totalPages = Math.ceil(values.length / limit);

    const nextPage = page < totalPages
      ? `/products?page=${next}`
      : null;

    const prevPage = page > 1
      ? `/products?page=${previous}`
      : null;

    const results: I_pagination = {
      next: nextPage,
      previous: prevPage,
      limit: limit,
      total_data: data.length,
      total_pages: totalPages,
      results: resultPage
    };

    return results;
  }

  public async save(data: T) {
    const newData = new this._model({ ...data });
    return await newData.save();
  }

  public async update(data: T, id: string) {
    return await this._model.replaceOne({ _id: id }, data);
  }

  public async delete(id: string) {
    await this._model.deleteOne({ _id: id });
  }

  public async getById(id: string) {
    return await this._model.findOne({ _id: id });
  }

  public async getData(filter: any) {
    return await this._model.find(filter);
  }
}

export = baseRepository;