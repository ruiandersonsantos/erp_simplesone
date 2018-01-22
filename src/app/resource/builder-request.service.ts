import { Injectable } from '@angular/core';
import {GlobalService} from './global.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import {JwtTokenService} from './jwt-token.service';
import {Observable} from "rxjs/Observable";

@Injectable()
export class BuilderRequestService {

    private token: string;
    private headers: HttpHeaders;

    constructor(
        private jwtToken: JwtTokenService,
        private  http: HttpClient,
        private srvGlobal: GlobalService
    ) {


    }

    builder(rota: string, verboHttp: string, obj: any): Observable<any> {
        this.token = this.jwtToken.token;

        this.headers = new HttpHeaders();
        this.headers.set('Authorization', 'Bearer ' + this.token);

        if ( this.srvGlobal.getVerboGET() === verboHttp) {

            if(obj.id > 0){
                return this.http.get<Object>(this.srvGlobal.getUrlBase() + rota,{headers:this.headers})
            }else{
                return this.http.get<Array<Object>>(this.srvGlobal.getUrlBase() + rota,{headers:this.headers})
            }

        }

        if ( this.srvGlobal.getVerboPOST() === verboHttp) {

            return this.http.post<any>(this.srvGlobal.getUrlBase() + rota, obj,{headers:this.headers})
        }


        if ( this.srvGlobal.getVerboPUT() === verboHttp) {
            return this.http.put<any>(this.srvGlobal.getUrlBase() + rota, obj,{headers:this.headers})
        }

        if ( this.srvGlobal.getVerboDELETE() === verboHttp) {
            return this.http.delete<any>(this.srvGlobal.getUrlBase() + rota,{headers:this.headers})
        }


    }



}