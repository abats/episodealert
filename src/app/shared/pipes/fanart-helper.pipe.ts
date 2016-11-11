import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'asFanartPipe',
    pure: true
})

export class FanartPipe implements PipeTransform {
    private imageUrl: string;

    transform(unique_name: string, fanart_name: string) {

        this.imageUrl = 'assets/img/fanart/' + unique_name.substring(0, 2) + '/' + fanart_name;
        return this.imageUrl;

    }
}
