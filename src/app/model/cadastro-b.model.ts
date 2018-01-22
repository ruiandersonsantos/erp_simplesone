import {Cadastro_b} from "../interfaces/cadastro_b.interface";
import {InformacoesTelaModel} from "./informacoes-tela.model";
import {EstadoBotoesModel} from "./estado-botoes.model";

const NOVO: string = 'NOVO'
const EDITAR: string = 'EDITAR'
const SALVAR: string = 'SALVAR'
const CANCELAR: string = 'CANCELAR'
const EXCLUIR: string = 'EXCLUIR'

export class CadastroBModel implements Cadastro_b{


    private acaonovo: string = NOVO;
    private acaoeditar: string = EDITAR;
    private acaosalvar: string = SALVAR;
    private acaocancelar: string = CANCELAR;
    private acaoexcluir: string = EXCLUIR;

    public estadoBotoes: EstadoBotoesModel;
    public informacoesTela: InformacoesTelaModel;

    public novo() {

        console.log("Novo Cadastro")
    }

    public salvar(objeto: any, rota: string): Object {

        console.log("Salvar")
        console.log(objeto)
        return undefined;
    }

    public editar() {
        console.log("Editar")
    }

    public cancelar() {
        console.log("Cancelar")
    }

    public excluir(objeto: any, rota: string): Object {

        console.log("excluir")
        return undefined;
    }


    getClicouBotaoNovo(){
        return this.acaonovo
    }

    getClicouBotaoSalvar(){
        return this.acaosalvar
    }

    getClicouBotaoEditar(){
        return this.acaoeditar
    }

    getClicouBotaoCancelar(){
        return this.acaocancelar
    }

    getClicouBotaoExcluir(){
        return this.acaoexcluir
    }

}
