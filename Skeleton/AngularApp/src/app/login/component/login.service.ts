import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginInput } from '../../../models/LoginInput';
import { JsonResponse } from '../../../models/JsonResponse';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    login_Url: string = "/customer/login";

    constructor(private http: HttpClient) { }

    LoginUser(login: LoginInput): Observable<JsonResponse> {
        const params = new HttpParams()
            .set("user", login.username)
            .set("password", login.password);

        return this.http.post<JsonResponse>(this.login_Url, params);
    }
}
