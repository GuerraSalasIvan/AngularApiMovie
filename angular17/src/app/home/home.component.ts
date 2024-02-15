import { Component } from '@angular/core';
import { MovieApiServiceService } from '../service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private service:MovieApiServiceService){}

  bannerPelis:any=[];


  ngOnInit():void {
    this.banner();
  }

  banner(){
    this.service.bannerApiData().subscribe((result) => {
      console.log(result,'bannerresult#');
      this.bannerPelis = result.results;
    })
  }
}
