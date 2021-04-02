import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseService } from 'src/services/base.service';
import { ModalFooterModel, ModalHeaderModel } from 'src/shared/model/modal.model';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  insertForm:any;
  
  modalHeader!: ModalHeaderModel;
  modalFooter!: ModalFooterModel;
  public item:any;
  constructor(private formBuilder: FormBuilder
    , private ngbActiveModal: NgbActiveModal
    , private _baseService: BaseService ) { }


  ngOnChanges(changes: SimpleChanges): void {
      console.log(this.item);
    }
  ngOnInit() {
    this.loadItem();
  }

  loadItem(){
    this.insertForm = this.formBuilder.group({
      name: [this.item ? this.item.name :'', [Validators.required]],
      departmentName: [this.item ? this.item.departmentName :'', [Validators.required]],
      positionName: [this.item ? this.item.positionName :'', [Validators.required]]
    });
    this.modalHeader = new ModalHeaderModel();
    this.modalHeader.title = this.item ? `[Update] ${this.item.name}` : `[Add]`;
    this.modalFooter = new ModalFooterModel();
    this.modalFooter.title = "Save";

  }
  save(event:any){
    this.update();
  }

  close(event : any) {
    console.log(event);
    this.ngbActiveModal.close();
  }

  update(){
    const employee = {id: this.item?.id, name: this.insertForm.value.name
      , departmentName: this.insertForm.value.departmentName
      , positionName: this.insertForm.value.positionName};
    this._baseService.put<any>("https://localhost:44309/api/employee/update", employee)
      .subscribe(res=>{
        console.log(res);
        this.ngbActiveModal.close();
      });
  }
}
