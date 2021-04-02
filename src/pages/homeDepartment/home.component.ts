import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Department } from 'src/data/department';
import { BaseService } from 'src/services/base.service';
import { DeleteDepartmentComponent } from './delete-department/delete-department.component';
import { InsertDepartmentComponent } from './insert-department/insert-department.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  closeResult = '';
  constructor(private _baseService: BaseService
    ,  private modalService: NgbModal) { }
  departments: Department[] = [];
  ngOnInit() {
    this.fetch();
  }

  fetch(){
      this._baseService.get<Department[]>("https://localhost:44309/api/department/getall")
          .subscribe((res: any)=>{
              console.log(res);

             return this.departments = res;
          });
  }

  update(item:any){
    console.log(item);
    var modalRef =  this.modalService.open(UpdateDepartmentComponent, {ariaLabelledBy: 'modal-basic-title'});
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
    var modalRef =  this.modalService.open(DeleteDepartmentComponent, {ariaLabelledBy: 'modal-basic-title'});
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
    var modalRef =  this.modalService.open(InsertDepartmentComponent, {ariaLabelledBy: 'modal-basic-title'});
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