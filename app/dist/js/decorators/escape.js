export function escape(target, propretyKey, descriptor) {
    const origin = descriptor.value;
    descriptor.value = function (...args) {
        let result = origin.apply(this, args);
        if (typeof result === 'string') {
            result = result.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return result;
    };
}
//# sourceMappingURL=escape.js.map