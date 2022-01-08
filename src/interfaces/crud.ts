import { LeanDocument, HydratedDocument, Document, Callback, CallbackError, CallbackWithoutResult } from "mongoose";
import { I_pagination } from './pagination';


export interface crud<T> {
  list(): Promise<T extends Document ? LeanDocument<HydratedDocument<T>>[] : T[]>;
  listPaginated(page: number, limit: number): Promise<I_pagination>;
  save(data: T): Promise<T | Document>;
  update(data: T, id: string): Promise<T>;
  delete(id: string): Promise<void>;
  getById(id: string): Promise<T | null>;
  getData(filter: any): Promise<T[]>;
}

/**
 * Implementar cuando se verifique el uso de javascript dentro de las vistas
 * En ese caso, se influira dentro del desarrollo del controlador y la api
 */
export interface I_read<T> {
  list(): Promise<T extends Document ? LeanDocument<HydratedDocument<T>>[] : T[]>;
  listPaginated(page: number, limit: number): Promise<T extends Document ? LeanDocument<HydratedDocument<T>>[] : T[]>;
  getById(id: string): Promise<T | null>;
  getData(key: string, value: any): Promise<T[]>;
}

export interface I_write<T> {
  save(data: T): Promise<T | Document>;
  update(data: T, id: string): Promise<T>;
  delete(id: string): Promise<void>;
}