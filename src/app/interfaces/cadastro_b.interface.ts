import {InformacoesTelaModel} from '../model/informacoes-tela.model';



export interface Cadastro_b{


    informacoesTela: InformacoesTelaModel


    novo();
    salvar(objeto: any, rota: string): Object;
    editar();
    cancelar();
    excluir(objeto: any, rota: string): Object;

}