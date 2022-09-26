export function executionTime(seg: boolean = false) {
    return function(
        target:any,
        propretyKey:string,
        descriptor: PropertyDescriptor
        ){
            const metodoOriginal = descriptor.value;
            descriptor.value = function(...args: Array<any>){
                const t1 = performance.now();
                const retorno = metodoOriginal.apply(this,args);
                const t2 = performance.now();
                let divisor = 1;
                let unidade = 'milisegundos'
                if(seg){
                    divisor = 1000;
                    unidade = 'segundos'
                }
                console.log(`${propretyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}`);
                return retorno;
            }           
            return descriptor;
        }
}