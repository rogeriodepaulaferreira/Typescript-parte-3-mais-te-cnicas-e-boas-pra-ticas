export function domInject(selector) {
    return function (target, propretyKey) {
        let element;
        const getter = function () {
            if (!element) {
                element = document.querySelector(selector);
            }
            return element;
        };
        Object.defineProperty(target, propretyKey, {
            get: getter
        });
    };
}
