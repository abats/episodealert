import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.html',
    styleUrls: [
        'footer.scss'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
    @Input() brand: string;

}
