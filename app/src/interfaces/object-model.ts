import { Compare } from "./compare";
import { Printable } from "./printable";

export interface ObjectModel<T> extends Printable, Compare<T>{

}