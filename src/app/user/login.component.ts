import { Component } from '@angular/core';
import { Hero }    from '../shared/model/hero';
import { Title } from '@angular/platform-browser';
import { User } from '../shared/model/user';
import { AuthService } from '../shared/services/authentication.service';


@Component({
    selector: 'app-login-form',
    templateUrl: 'login.html',
    styleUrls: [
        'login.scss'
    ]
})

export class LoginComponent {

    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    loading = false;

    userModel = new User;

    constructor(
        private titleService: Title,
        private authService: AuthService,
    ) {
        titleService.setTitle('Episode Alert - Login');

        console.log(this.model);
        console.log(this.userModel);
    }

    onSubmit() {
        this.submitted = true;
        console.log('submit');
        this.login();
    }

    login() {
        this.loading = true;

        let userCredentials = {
            email : this.userModel.name ,
            password : this.userModel.password
        };

        this.authService.loginUser(userCredentials)
            .then((authInfo) => {
              console.log(authInfo);
        });

    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}
