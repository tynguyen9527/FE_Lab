import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from 'src/pages/homeDepartment/home.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';
import { CommonModule } from '@angular/common';
import { InsertDepartmentComponent } from 'src/pages/homeDepartment/insert-department/insert-department.component';
import { DeleteDepartmentComponent } from 'src/pages/homeDepartment/delete-department/delete-department.component';
import { UpdateDepartmentComponent } from 'src/pages/homeDepartment/update-department/update-department.component';
import { HomeEmployeeComponent } from 'src/pages/homeEmployee/home-employee/home-employee.component';
import { InsertEmployeeComponent } from 'src/pages/homeEmployee/insert-employee/insert-employee.component';
import { DeleteEmployeeComponent } from 'src/pages/homeEmployee/delete-employee/delete-employee.component';
import { HomePositionComponent } from 'src/pages/homePosition/home-position/home-position.component';
import { InsertPositionComponent } from 'src/pages/homePosition/insert-position/insert-position.component';
import { DeletePositionComponent } from 'src/pages/homePosition/delete-position/delete-position.component';
import { UpdatePositionComponent } from 'src/pages/homePosition/update-position/update-position.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InsertDepartmentComponent,
    DeleteDepartmentComponent,
    UpdateDepartmentComponent,
    HomeEmployeeComponent,
    InsertEmployeeComponent,
    DeleteEmployeeComponent,
    HomePositionComponent,
    InsertPositionComponent,
    DeletePositionComponent,
    UpdatePositionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
