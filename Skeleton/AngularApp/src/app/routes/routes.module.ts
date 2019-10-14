import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routing.module';
import { RoutesComponent } from './component/routes.component';

@NgModule({
    declarations: [RoutesComponent],
    imports: [BrowserModule, HttpClientModule, RoutingModule],
    providers: [],
    bootstrap: [RoutesComponent]
})

export class RoutesModule { }