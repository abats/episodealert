import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'as-footer',
    templateUrl: 'app/shared/footer/footer.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
    @Input() brand: string;

}
