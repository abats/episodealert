import { Routes } from '@angular/router';
import { SeriesDetailComponent } from './series-detail.component';

export const SeriesDetailRoutes: Routes = [
  { path: 'series/:uniqueName',  component: SeriesDetailComponent }
];
