import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CadastroBModel} from "../../model/cadastro-b.model";






@Component({
    selector: 'app-cadastro-b',
    templateUrl: './cadastro-b.component.html',
    styleUrls: ['./cadastro-b.component.css']
})
export class CadastroBComponent implements OnInit {



    @Input() public cadastro: CadastroBModel;

    @Output() public clicouBTN: EventEmitter<string> = new EventEmitter();



    constructor() { }

    ngOnInit() {

    }



    public clicouBotaoSalvar(){

        this.cadastro.informacoesTela.telaEstaEmEdicao = true

        this.clicouBTN.emit(this.cadastro.getClicouBotaoSalvar())

    }





}
