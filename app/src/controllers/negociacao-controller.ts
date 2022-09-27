import { domInject } from '../decorators/dom-inject.js';
import { executionTime } from '../decorators/execution-time.js';
import { inspect } from '../decorators/inspect.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacaoService } from '../services/negociacao-service.js';
import { MensagemView } from '../views/mensagem-views.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { Print } from '../utils/print.js'

export class NegociacaoController {
    @domInject('#data')
    private inputData: HTMLInputElement;
    @domInject('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInject('#valor')
    private inputValor: HTMLInputElement;

    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    private service = new NegociacaoService();

    constructor() {
        this.negociacoesView.update(this.negociacoes,'');
    }

    @inspect()
    @executionTime()
    public adiciona(): void {

        const negociacao = Negociacao.criaDe(this.inputData.value,this.inputQuantidade.value,this.inputValor.value); 

        if(!this.diaUtil(negociacao.data)){
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas !','danger');
            return;
        }
  
        this.negociacoes.adiciona(negociacao); 

        Print(negociacao, this.negociacoes);

        this.limparFormulario(); 
        this.atualizaView();
          
        
    }

    importData():void{
        //Service que recupera os dados
        this.service.getNegociacao()
        //Realizando um filtro antes da interação
        .then(negociacoes => {
            return negociacoes.filter(negociacoes => {
                return !this.negociacoes.lista().
                some(negociacao => negociacao.equals(negociacoes))
            })
        })
       //Faz um for para adicionar cada item da lista na nossa grid
       .then(negociacoes => {
        for(let negociacao of negociacoes){ 
            this.negociacoes.adiciona(negociacao);
        }
        //Atualiza a view e manda as negociacoes
        this.negociacoesView.update(this.negociacoes);
    })
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView():void{
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso !','success');
    }

    /**
     *  Função que verifica se a data passada é um dia util(Segunda a Sexta)
     * @param data Date
     * @returns booleand
     */
    private diaUtil(data:Date):boolean{
        return (data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO);
    }

    
}
