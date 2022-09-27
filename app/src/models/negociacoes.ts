
import { ObjectModel } from '../interfaces/object-model.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements ObjectModel<Negociacoes> {
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public toText():string {
        return JSON.stringify(this.negociacoes,null,2);
    }

    equals(object: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(object.lista());
    }
}
