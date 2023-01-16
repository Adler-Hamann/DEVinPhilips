import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes:Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},  
  {path:'home',component:HomeComponent},
  {path:'home/Lidos',component:HomeComponent, data: {status: 'lidos'}},
  {path:'home/Não Lidos',component:HomeComponent, data : {status: 'nao-lidos'}},
  {path:'home/Todos',component:HomeComponent, data : {status: 'todos'}},
  {path:'sobre',component:AboutComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }