// app.component.ts
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';  
import { Router } from '@angular/router';
import { MovieApiServiceService } from './service/movie-api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  buscador: FormGroup;

  constructor(private router: Router, private movieApiService: MovieApiServiceService) {
    this.buscador = new FormGroup({
      'peliNombre': new FormControl(null)
    });
  }

  submitForm() {
    const searchTerm = this.buscador.get('peliNombre')?.value;
    
    if (searchTerm) {
      this.movieApiService.buscarPeliData({ peliNombre: searchTerm }).subscribe((result) => {
        console.log('Search results:', result);
        this.movieApiService.setSearchResults(result.results);  // Almacena los resultados en el servicio
        this.router.navigate(['/search']);
      });
    }
  }
}



