import {InformacoesTelaModel} from '../model/informacoes-tela.model';
import {EstadoBotoesModel} from "../model/estado-botoes.model";


export interface Cadastro_b{


    informacoesTela: InformacoesTelaModel
    estadoBotoes: EstadoBotoesModel

    novo();
    salvar(objeto: any, rota: string): Object;
    editar();
    cancelar();
    excluir(objeto: any, rota: string): Object;

}