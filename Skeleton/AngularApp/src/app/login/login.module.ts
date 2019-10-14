import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './component/login.component';

@NgModule({
    declarations: [LoginComponent],
    imports: [BrowserModule, FormsModule, HttpClientModule],
    bootstrap: [LoginComponent]
})

export class LoginModule { }