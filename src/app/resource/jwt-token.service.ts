import { Injectable } from '@angular/core';
import {LocalstorageService} from './localstorage.service';

const TOKEN_KEY = 'token';
const REFRESH_TOKEN_KEY = 'refresh_token';

/*
Classe responsavel pelas opreações com o token.
 */

@Injectable()
export class JwtTokenService {


    constructor(private localStorage: LocalstorageService) {
    }

    get token() {
        return this.localStorage.get(TOKEN_KEY);
    }

    set token(value) {
        value ? this.localStorage.set(TOKEN_KEY, value) : this.localStorage.remove(TOKEN_KEY);
    }

    get refreshToken() {
        return this.localStorage.get(REFRESH_TOKEN_KEY);
    }

    set refreshToken(value) {
        value ? this.localStorage.set(REFRESH_TOKEN_KEY, value) : this.localStorage.remove(REFRESH_TOKEN_KEY);
    }

}