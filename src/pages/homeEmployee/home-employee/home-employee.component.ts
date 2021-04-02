import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/data/employee';
import { BaseService } from 'src/services/base.service';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';
import { InsertEmployeeComponent } from '../insert-employee/insert-employee.component';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';

@Component({
  selector: 'app-home-employee',
  templateUrl: './home-employee.component.html',
  styleUrls: ['./home-employee.component.scss']
})
export class HomeEmployeeComponent implements OnInit {
  closeResult = '';
  constructor(private _baseService: BaseService
    ,  private modalService: NgbModal) { }
  employees: Employee[] = [];
  ngOnInit() {
    this.fetch();
  }

  fetch(){
      this._baseService.get<Employee[]>("https://localhost:44309/api/employee/getall")
          .subscribe((res: any)=>{
              console.log(res);

             return this.employees = res;
          });
  }

  update(item:any){
    console.log(item);
    var modalRef =  this.modalService.open(UpdateEmployeeComponent, {ariaLabelledBy: 'modal-basic-title'});
    modalRef.componentInstance.item = item;
    modalRef.result.then((result) => {
      console.log(result);
      this.fetch();
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  delete(item:string){
    console.log(item);
    var modalRef =  this.modalService.open(DeleteEmployeeComponent, {ariaLabelledBy: 'modal-basic-title'});
    modalRef.componentInstance.item = item;
    modalRef.result.then((result) => {
      console.log(result);
      this.fetch();
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open(item : any) {
    console.log(item);
    var modalRef =  this.modalService.open(InsertEmployeeComponent, {ariaLabelledBy: 'modal-basic-title'});
    modalRef.componentInstance.item = item;
    modalRef.result.then((result) => {
      console.log(result);
      this.fetch();
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
