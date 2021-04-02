import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseService } from 'src/services/base.service';
import { ModalFooterModel, ModalHeaderModel } from 'src/shared/model/modal.model';
@Component({
  selector: 'app-insert-department',
  templateUrl: './insert-department.component.html',
  styleUrls: ['./insert-department.component.scss']
})
export class InsertDepartmentComponent implements OnChanges {
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
      name: ['', [Validators.required]]
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
    const department =  {name: this.insertForm.value.name};
    this._baseService.post<any>("https://localhost:44309/api/department/insert", department)
      .subscribe(data => {
        console.log(data)
        this.ngbActiveModal.close();
      }, e => {
        console.log(e)
      });
  }
}
