import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../service/movie-api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.scss'
})
export class DetallesComponent  implements OnInit {

  constructor(private service:MovieApiServiceService, private router:ActivatedRoute) { }

  getDetallesPeli:any;

  ngOnInit(): void {
    let getId = this.router.snapshot.paramMap.get('id');
    console.log(getId,'getId#');
    this.getPeli(getId);
    
  }

  getPeli(id:any){
    this.service.obtenerPeli(id).subscribe((result)=> {
      console.log(result, 'PeliId#');
      this.getDetallesPeli = result
    })
  }

}
