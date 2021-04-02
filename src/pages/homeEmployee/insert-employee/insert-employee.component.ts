import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseService } from 'src/services/base.service';
import { ModalFooterModel, ModalHeaderModel } from 'src/shared/model/modal.model';

@Component({
  selector: 'app-insert-employee',
  templateUrl: './insert-employee.component.html',
  styleUrls: ['./insert-employee.component.scss']
})
export class InsertEmployeeComponent implements OnInit {

  insertForm: any;
  modalHeader!: ModalHeaderModel;
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
    this.insertForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      departmentName: ['', [Validators.required]],
      positionName: ['', [Validators.required]]
    });
    this.modalHeader = new ModalHeaderModel();
    this.modalHeader.title = this.item ? `[Update] ${this.item.name}` : `[Add]`;
    this.modalFooter = new ModalFooterModel();
    this.modalFooter.title = "Save";

  }


  save(event:any){
    if(this.item == null){
      this.insert();
    }
  }

  close(event : any) {
    console.log(event);
    this.ngbActiveModal.close();
  }

  insert(){
    const employee =  {name: this.insertForm.value.name, departmentName: this.insertForm.value.departmentName, positionName: this.insertForm.value.positionName};
    this._baseService.post<any>("https://localhost:44309/api/employee/insert", employee)
      .subscribe(data => {
        console.log(data)
        this.ngbActiveModal.close();
      }, e => {
        console.log(e)
      });
  }

}
