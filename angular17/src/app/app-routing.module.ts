import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'movie/:id', component:DetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
