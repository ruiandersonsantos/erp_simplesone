import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Http, Headers } from '@angular/http';
import { LocalstorageService } from './localstorage.service';
import { JwtTokenService } from './jwt-token.service';

import 'rxjs/add/operator/toPromise';

const USER_KEY = 'str_usuario';

@Injectable()
export class LoginService {

    private headers: Headers;

    public nivel: Number = 0;

    public mostraMenu = false;

    private objlogin = {
        grant_type: this.srvGlobal.getGrantType(),
        client_id: this.srvGlobal.getClientId(),
        client_secret: this.srvGlobal.getClientSecret(),
        username: '',
        password: ''
    };

    public objUsuarioLogado = {
        name: '',
        email: '',
        cia_secret: '',
        nivel: '',
        status: ''
    };

    constructor(
        private srvGlobal: GlobalService,
        private  http: Http,
        private  localStorage: LocalstorageService,
        private jwtToken: JwtTokenService
    ) {

        if (this.jwtToken.token) {

            this.setPropriedadesAndToken();
        }
    }


    login(username, password): Promise<any> {

        this.objlogin.username = username;
        this.objlogin.password = password;

        return this.http.post(this.srvGlobal.getUrlLogin(), this.objlogin)
            .toPromise()
            .then(response => {

                this.setPropiedadesAndTokenAfterLogin(response);


            }).catch( response => {
                return Promise.reject(response);
            });
    }

    logout() {
        this.revokeToken();
    }

    private setPropriedadesAndToken() {
        let userLocalStorage;

        userLocalStorage = this.localStorage.getObject(USER_KEY);

        this.objUsuarioLogado = userLocalStorage ? userLocalStorage : this.objUsuarioLogado;

        this.nivel = +this.objUsuarioLogado.nivel;

        this.mostraMenu = true;
    }

    private setPropiedadesAndTokenAfterLogin(response) {
        let token;
        let refresh_token;

        token = response.json().access_token;
        refresh_token = response.json().refresh_token;

        this.jwtToken.token = token;
        this.jwtToken.refreshToken = refresh_token;

        this.getUsuario(token);

        if (+this.objUsuarioLogado.nivel > 0) {
            this.nivel = +this.objUsuarioLogado.nivel;
            this.mostraMenu = true;
        }
    }



    private revokeToken() {
        this.mostraMenu = false;
        this.jwtToken.token = null;
        this.jwtToken.refreshToken = null;
        this.localStorage.remove(USER_KEY);

    }

    private getUsuario(tokenDeAcesso) {
        this.headers = new Headers({'Authorization': 'Bearer ' + tokenDeAcesso});
        this. headers.set('Content-Type', 'application/json');
        this.http.get(this.srvGlobal.getUrlBase() + '/user', {headers: this.headers})
            .toPromise()
            .then( usuario => {

                this.objUsuarioLogado = usuario.json();
                this.localStorage.setObject(USER_KEY, this.objUsuarioLogado);
            });
    }


}