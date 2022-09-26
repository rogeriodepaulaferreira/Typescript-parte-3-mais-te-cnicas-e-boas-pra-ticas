import { domInject } from '../decorators/dom-inject.js';
import { executionTime } from '../decorators/execution-time.js';
import { inspect } from '../decorators/inspect.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { htmlTratamento } from '../models/html-tratamento.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-views.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

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
        this.limparFormulario(); 
        this.atualizaView();
          
        
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
