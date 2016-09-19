import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../services/authentication.service';

@Component({
    selector: 'as-navbar',
    templateUrl: 'app/shared/navbar/navbar.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
    @Input() brand: string;

    constructor(private authService: AuthService) {
    }
}
