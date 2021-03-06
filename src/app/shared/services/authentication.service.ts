import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CONSTANTS } from '../constant/main';
import { User } from '../model/user';

@Injectable()
export class AuthService {
    private user: User;
    private testValue: string;
    private baseUrl: string;
    private authCheckUrl: string;
    private loginUrl: string;

    constructor( private http: Http) {
        this.baseUrl = CONSTANTS.APP.API_BASE_URL;
        this.authCheckUrl = this.baseUrl + 'auth/check';
        this.loginUrl = this.baseUrl + 'auth/login';
        this.user = new User;
    }

    public getTestValue() {
        return this.testValue;
    }

    public setTestValue(newValue) {
        this.testValue = newValue;
    }

    public getUserName() {
        return this.user.name;
    }

    public isLoggedIn() {
        return localStorage.getItem('authenticated');
    }

    login(response) {
        this.user.name = response.accountname;
        console.log(this.user);
        localStorage.setItem('authenticated', 'true');
    }

    loginUser(userCredentials): Promise <any> {
        return this.http.post(this.loginUrl, userCredentials)
            .toPromise()
            .then(response => {
                this.login (response.json());
            })
            .catch(this.handleError);
    }

    getAuth(): Promise<void> {
        return this.http.get(this.authCheckUrl)
            .toPromise()
            .then(response => {
                this.login (response.json());
            })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
