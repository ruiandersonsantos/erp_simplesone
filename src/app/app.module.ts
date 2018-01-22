import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";



import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';

import { ChartModule } from 'angular2-highcharts';

import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { CfopComponent } from './cfop/cfop.component';

import {ConfigTablesService} from './servicos-globais/config-tables.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { CadastroBComponent } from './modal/cadastro-b/cadastro-b.component';
import {CfopService} from "./cfop/cfop.service";
import {GlobalService} from "./resource/global.service";
import {LoginService} from "./resource/login.service";
import {LocalstorageService} from "./resource/localstorage.service";
import {JwtTokenService} from "./resource/jwt-token.service";
import {AuthGuardRouterService} from "./resource/auth-guard-router.service";
import {BuilderRequestService} from "./resource/builder-request.service";


declare var require: any;


export function highchartsFactory() {
    const hc = require('highcharts');
    const dd = require('highcharts/modules/drilldown');
    dd(hc);

    return hc;
}

@NgModule({
    declarations: [
        AppComponent,
        StarterComponent,
        StarterHeaderComponent,
        StarterLeftSideComponent,
        StarterContentComponent,
        StarterFooterComponent,
        StarterControlSidebarComponent,
        CfopComponent,
        CadastroBComponent

    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AdminModule,
        ChartModule
    ],
    providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy},
        ConfigTablesService,
        CfopService,
        GlobalService,
        LoginService,
        LocalstorageService,
        JwtTokenService,
        AuthGuardRouterService,
        BuilderRequestService,
        {
            provide: HighchartsStatic,
            useFactory: highchartsFactory
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
