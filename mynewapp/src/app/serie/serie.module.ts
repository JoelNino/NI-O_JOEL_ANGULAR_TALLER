import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieListComponent } from './serie-list/serie-list.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SerieListComponent, SerieDetailComponent],
  exports: [SerieListComponent, SerieDetailComponent]
})
export class SerieModule { }
