import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
import { TopSaleComponent } from '../top-sale/top-sale.component';

const routes: Routes = [
  { path: '', redirectTo: '/topsale', pathMatch: 'full' },
  {path:'topsale', component: TopSaleComponent},
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }