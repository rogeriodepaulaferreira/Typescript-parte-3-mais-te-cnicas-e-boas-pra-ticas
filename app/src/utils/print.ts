import { Printable } from "../interfaces/printable.js";

export function Print(...objects:Printable[]){
    
    for(let object of objects){
        console.log(object.toText());
    }

}