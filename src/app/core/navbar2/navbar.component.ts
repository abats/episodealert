import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../shared/services/authentication.service';

@Component({
    selector: 'app-navbar2',
    templateUrl: 'navbar.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Navbar2Component {
    @Input() brand: string;

    constructor(private authService: AuthService) {
    }
}
