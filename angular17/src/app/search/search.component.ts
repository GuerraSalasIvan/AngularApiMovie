import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from '../service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  constructor(private service:MovieApiServiceService) { }

  ngOnInit():void { }


  buscadorResultados:any;
  buscador = new FormGroup({
    'peliNombre':new FormControl(null)
  })

  submitForm(){
    console.log(this.buscador.value,'buscador#')
    this.service.buscarPeliData(this.buscador.value).subscribe((result) => {
      console.log(result,'buscador#');
      this.buscadorResultados = result.results;

    })
  }

}
