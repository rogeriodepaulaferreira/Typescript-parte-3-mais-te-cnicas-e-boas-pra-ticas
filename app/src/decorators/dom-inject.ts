export function domInject(selector:string){
    return function(target:any,propretyKey:string){

        //console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propretyKey}`);

        let element:HTMLElement;
        const getter = function() {
            if(!element){
                element = <HTMLElement>document.querySelector(selector);
                //console.log(`buscando elemento do DOM com o selector ${selector} para injetar em ${propretyKey}`);
            }  
            return element;
        }

        Object.defineProperty(target,propretyKey,{
            get:getter
        });
    }
}