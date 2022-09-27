import { NegociacaoPattern } from "../interfaces/negociacao-pattern.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacaoService{
    public getNegociacao(): Promise<Negociacao[]>{
        //URL que retona um json com varios elementos
        return fetch('http://localhost:8080/dados')
        //Converte o resultado do fetch para json
        .then(res => res.json())
        //Pega da item do json e gera uma linha do tipo Negociacao
        .then((dados: NegociacaoPattern[]) => {
            return dados.map(dado => {
                return new Negociacao(new Date(), dado.vezes, dado.montante)
            })
        });
    }
}