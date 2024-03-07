// search.component.ts
import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  buscadorResultados: any;

  constructor(private service: MovieApiServiceService) { }

  ngOnInit() {
    this.service.getSearchResultEmitter().subscribe((results) => {
      this.buscadorResultados = results;
    });
  }
}

