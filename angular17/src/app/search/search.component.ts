import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  constructor() { }

  ngOnInit():void { }

  buscador = new FormGroup({
    'peliNombre':new FormControl(null)
  })

  submitForm(){
    console.log(this.buscador.value,'buscador#')
  }

}
