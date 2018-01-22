import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

/*
Classe responsavel pelos serviços globais da aplicação.
 */

@Injectable()
export class GlobalService {

    constructor() { }

    getUrlBase() {
        return environment.urlBase;
    }

    getUrlLogin() {
        return environment.urlLogin;
    }

    getUrlLogout() {
        return environment.urlLogout;
    }

    getClientId() {
        return environment.client_id;
    }

    getClientSecret() {
        return environment.client_Secret;
    }

    getGrantType() {
        return environment.grant_type;
    }

    getVerboGET() {
        return environment.verbo_get;
    }

    getVerboPOST() {
        return environment.verbo_post;
    }

    getVerboPUT() {
        return environment.verbo_put;
    }

    getVerboDELETE() {
        return environment.verbo_delete;
    }
}
