import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ConfigTablesService} from "../servicos-globais/config-tables.service";
import {CadastroBModel} from "../model/cadastro-b.model";
import {InformacoesTelaModel} from "../model/informacoes-tela.model";

import {CfopModel} from "./cfop.model";
import {CfopService} from "./cfop.service";


declare var AdminLTE: any;


@Component({
    selector: 'app-cfop',
    templateUrl: './cfop.component.html',
    styleUrls: ['./cfop.component.css']
})
export class CfopComponent implements OnInit, OnDestroy {

    //  bodyClasses = 'skin-blue sidebar-mini';
    body: HTMLBodyElement = document.getElementsByTagName('body')[0];
    /*
        Instancia da classe para add as propriedades da tela (modelo cadastro-b)
     */
    public cadastroCFOP: CadastroBModel = new CadastroBModel();



    /*
        Instancia que controla as informações de auditoria dentro da tela
     */
    private infomacoes: InformacoesTelaModel = new InformacoesTelaModel();

    /*
        Objeto do negocio, instanciado no ngOnInit e no adicionar
     */
    public objCfop: CfopModel;

    private listadetiponatela;

    public listagemCfop: Array<CfopModel> = []

    constructor(private srvConfigTables: ConfigTablesService, private cfopservice: CfopService) {

    }



    ngOnInit() {

        AdminLTE.init();
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');

        this.carregarTabelaGrid();

        this.objCfop = new CfopModel();


        this.preencheInformacoesDaTela();

        this.listadetiponatela = this.objCfop.listaDetipo;
    }



    public adicionar(){

        this.objCfop = new CfopModel();

        this.cadastroCFOP.informacoesTela.telaEstaEmEdicao = true



    }



    public clicouBotaoNaTela(evento){

        this.srvConfigTables.removeDataTable('#example1')

        this.cfopservice.salvar(this.objCfop).subscribe( resposta =>{
            this.preencheObjetoComResposta(resposta);
            this.carregarTabelaGrid();
        })


    }

    private preencheObjetoComResposta(resposta) {
        this.objCfop = resposta
        this.objCfop.listaDetipo = this.listadetiponatela
    }

    public clicouLinha (cfop,acao){

        this.cadastroCFOP.informacoesTela.telaEstaEmEdicao = false

        if(acao === 'editar'){
            this.cadastroCFOP.informacoesTela.telaEstaEmEdicao = true
        }

        this.cfopservice.buscarPorId(cfop).subscribe(resposta =>{

            this.objCfop = resposta
            this.objCfop.listaDetipo = this.listadetiponatela


        })

    }

    ngOnDestroy() {
        this.removeComponentesFramwork();
        this.srvConfigTables.removeDataTable('#example1')

    }



    private carregaComponentesFramwork() {
        this.srvConfigTables.setConfigTables('#example1',true, true, true, true, true, true);
    }

    private preencheInformacoesDaTela() {
        this.infomacoes.titulo = 'Cadastro de CFOP'
        this.infomacoes.icone = 'fa fa-save'
        this.infomacoes.origem = 'Cadastro Manual'
        this.infomacoes.telaorigem = 'CFOP'
        this.infomacoes.nomeusuario = 'Rui Anderson'
        this.infomacoes.datacadastro = '20/01/2018'
        this.infomacoes.usuarioquealterou = 'Rafael Pereira'
        this.infomacoes.dataalteracao = '20/01/2018'
        this.cadastroCFOP.informacoesTela = this.infomacoes


    }



    private removeComponentesFramwork() {
        // remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    }

    private carregarTabelaGrid() {
        this.cfopservice.buscarTodos().subscribe(resposta => {
            this.listagemCfop = resposta
            this.carregaComponentesFramwork();
        })
    }

}
