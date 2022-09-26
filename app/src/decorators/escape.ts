export function escape(target:any,propretyKey:string,descriptor:PropertyDescriptor){

    const origin = descriptor.value; 

    descriptor.value = function (...args: any[]){

        let result = origin.apply(this,args);

        if(typeof result ==='string'){
            //console.log(`@escape em acão na classe ${this.constructor.name} para o método ${propretyKey} `)
            result = result.replace(/<script>[\s\S]*?<\/script>/,'');

        }

        return result

    }
}