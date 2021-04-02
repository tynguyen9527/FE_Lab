import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/pages/homeDepartment/home.component';
import { HomeEmployeeComponent } from 'src/pages/homeEmployee/home-employee/home-employee.component';
import { HomePositionComponent } from 'src/pages/homePosition/home-position/home-position.component';

const routes: Routes = [
  { path: 'department', component: HomeComponent },
  {path:'employee', component: HomeEmployeeComponent},
  {path:'position', component: HomePositionComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
