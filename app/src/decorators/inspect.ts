export function inspect(){
    return function (
        target:any,
        propretyKey: string,
        descriptor: PropertyDescriptor
    ){
        const origin = descriptor.value; 
        descriptor.value = function (...args: any[]){
            console.log(` --- Método ${propretyKey}`);
            console.log(` ------ parâmetos: ${JSON.stringify(args)}`);
            const result = origin.apply(this, args)
            console.log(` ------ retorno: ${JSON.stringify(result)}`);
        }
        
        return descriptor;
    }
}