import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'as-orderdisplay',
    templateUrl: 'app/myshows/orderDisplay/orderdisplay.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class OrderDisplayComponent{
    @Input() order: String;
    @Input() activeOrder: String;
    @Input() orderReverse: boolean;

}
