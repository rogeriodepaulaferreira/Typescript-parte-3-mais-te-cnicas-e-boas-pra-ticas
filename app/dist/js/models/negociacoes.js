export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    toText() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    equals(object) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(object.lista());
    }
}
//# sourceMappingURL=negociacoes.js.map