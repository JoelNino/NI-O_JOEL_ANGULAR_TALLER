import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Serie[] = [];
  averageSeasons: number = 0;
  selected: Boolean = false;
  selectedSerie!: Serie;

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.getSeries();
  }

  getSeries(): void {
    this.serieService.getSeries().subscribe((data) => {
      this.series = data;
      this.calculateAverageSeasons();
    });
  }

  calculateAverageSeasons(): void {
    const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    this.averageSeasons = totalSeasons / this.series.length;
  }

  onSelected(serie: Serie): void {
    this.selectedSerie = serie;
    this.selected = true;
}
}
