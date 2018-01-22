import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';

/*
Serviço responsavel pela proteção as rotas,
Sera implementado aqui o controle de acesso conforme o nivel do usuario.
 */

@Injectable()
export class AuthGuardRouterService implements CanActivate {

    constructor(private loginservice: LoginService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {

        if (this.loginservice.nivel > 0) {
            return true;
        }

        this.router.navigate(['login']);
        return false;
    }

}