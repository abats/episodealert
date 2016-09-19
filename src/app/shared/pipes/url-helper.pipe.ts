import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'asUrlPipe',
    pure: true
})

export class UrlPipe implements PipeTransform {
    private imageUrl: string = 'assets/img/missing.png';
    private returnPoster: any = '';

    // constructor() { }

    transform(poster: string, unique_name: string, size: string) {

        if (poster) {
            if (size) {
                this.returnPoster = poster.split('.');
                this.returnPoster = this.returnPoster[0] + '_' + size + '.jpg';
                this.imageUrl = 'assets/img/poster/' + unique_name.substring(0, 2) + '/' + this.returnPoster;
            } else {
                this.imageUrl = 'assets/img/poster/' + unique_name.substring(0, 2) + '/' + poster;
            }
        }

        return this.imageUrl;
    }
}
