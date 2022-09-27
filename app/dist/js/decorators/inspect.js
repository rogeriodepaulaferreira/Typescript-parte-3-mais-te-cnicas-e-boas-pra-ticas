export function inspect() {
    return function (target, propretyKey, descriptor) {
        const origin = descriptor.value;
        descriptor.value = function (...args) {
            console.log(` --- Método ${propretyKey}`);
            console.log(` ------ parâmetos: ${JSON.stringify(args)}`);
            const result = origin.apply(this, args);
            console.log(` ------ retorno: ${JSON.stringify(result)}`);
        };
        return descriptor;
    };
}
//# sourceMappingURL=inspect.js.map