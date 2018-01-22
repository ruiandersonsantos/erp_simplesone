import { Injectable } from '@angular/core';
import {BuilderRequestService} from "../resource/builder-request.service";
import {CfopModel} from "./cfop.model";
import {GlobalService} from "../resource/global.service";
import {Observable} from "rxjs/Observable";



@Injectable()
export class CfopService {

    constructor( private builder: BuilderRequestService, private srvGlobal: GlobalService) {
    }


    public salvar(objeto: CfopModel): Observable<CfopModel> {

        if(objeto.id > 0){
           return this.builder.builder('/cfops/'+objeto.id,this.srvGlobal.getVerboPUT(),objeto)
        }else{
            return this.builder.builder('/cfops',this.srvGlobal.getVerboPOST(),objeto)
        }


    }

    public buscarTodos(): Observable<Array<CfopModel>>{
        return this.builder.builder('/cfops',this.srvGlobal.getVerboGET(),{})
    }

    public buscarPorId(objeto: CfopModel): Observable<CfopModel>{
        return this.builder.builder('/cfops/'+objeto.id,this.srvGlobal.getVerboGET(),objeto)
    }

    public deletar(objeto: CfopModel): Observable<CfopModel>{

        if(objeto.id > 0) {
            return this.builder.builder('/cfops/' + objeto.id, this.srvGlobal.getVerboDELETE(), objeto)
        }
    }

}