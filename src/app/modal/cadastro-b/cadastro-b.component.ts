import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CadastroBModel} from "../../model/cadastro-b.model";






@Component({
    selector: 'app-cadastro-b',
    templateUrl: './cadastro-b.component.html',
    styleUrls: ['./cadastro-b.component.css']
})
export class CadastroBComponent implements OnInit {



    @Input() public cadastro: CadastroBModel;

    @Output() public btnSalvar: EventEmitter<string> = new EventEmitter();



    constructor() { }

    ngOnInit() {

    }

    public resetarPropriedades(){
        this.cadastro.informacoesTela.telaEstaEmEdicao = false
        this.cadastro.informacoesTela.telaEstaEmExclusao = false
    }



    public salvar(){

        this.cadastro.informacoesTela.telaEstaEmEdicao = true

        this.btnSalvar.emit(this.cadastro.getClicouBotaoSalvar())

    }


    public excluir(){

        this.cadastro.informacoesTela.telaEstaEmExclusao = true

        this.btnSalvar.emit(this.cadastro.getClicouBotaoExcluir())

        this.cadastro.informacoesTela.telaEstaEmExclusao = false

    }





}
