import { I_read, I_write } from "../../interfaces/crud";

export interface _business<T> extends I_read<T>, I_write<T> {

}