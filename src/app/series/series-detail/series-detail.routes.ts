
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeriesDetailComponent } from './series-detail.component';

export const routes: Routes = [
  { path: '', component: SeriesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesDetailRoutingModule {
}
