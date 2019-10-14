import { Component } from '@angular/core';

import { LoginService } from './login.service';
import { LoginInput } from '../../../models/LoginInput';

import '../../../../styles/login.scss';

@Component({
    selector: 'login-form',
    templateUrl: '../template/login.html'
})
export class LoginComponent {

    loginInput: LoginInput = new LoginInput();
    isValid: boolean = false;
    isError: boolean = false;

    constructor(private _loginService: LoginService) { }

    submitLogin() {
        this._loginService.LoginUser(this.loginInput).subscribe(
            data => {
                if (data.success) {
                    this.isValid = true;
                    this.isError = false;
                } else {
                    this.isError = true;
                }
            },
            error => {
                this.isValid = false;
                this.isError = true;
                console.error(error);
            }
        )
    }
}