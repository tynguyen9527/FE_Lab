import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseService } from 'src/services/base.service';
import { ModalFooterModel, ModalHeaderModel } from 'src/shared/model/modal.model';
@Component({
  selector: 'app-delete-department',
  templateUrl: './delete-department.component.html',
  styleUrls: ['./delete-department.component.scss']
})
export class DeleteDepartmentComponent implements OnChanges {

  modalFooter!: ModalFooterModel;
  
  constructor(private formBuilder: FormBuilder
    , private ngbActiveModal: NgbActiveModal
    , private _baseService: BaseService ) { }
    public item : any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.item);
  }
  

  ngOnInit() {
    this.loadItem();
  }


  loadItem(){
    this.modalFooter = new ModalFooterModel();
    this.modalFooter.title = "Delete";

  }


  save(event:any){
    this.delete();
    
  }

  close(event : any) {
    console.log(event);
    this.ngbActiveModal.close();
  }
  delete(){
    const id = this.item;
    this._baseService.deleteWithId("https://localhost:44309/api/department/delete",id)
      .subscribe(res=>{
        this.ngbActiveModal.close();
        return console.log(res);
      });
  }
}
