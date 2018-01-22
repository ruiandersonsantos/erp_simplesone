const ESCOLHA: number = 0
const ENTRADA: number = 1
const SAIDA: number = 2

export class CfopModel{
    id?: number;
    codigo?: string = "";
    descricao?:string = "";
    tipo?: number = ESCOLHA

    listaDetipo? = [
        {id: ESCOLHA, nome: "Escolha uma opção"},
        {id: ENTRADA, nome: "Entrada"},
        {id: SAIDA, nome: "Saida"}
    ]

    getTipoEntrada?(){
        return ENTRADA
    }

    getTipoSaida?(){
        return SAIDA
    }
}