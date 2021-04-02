import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseService } from 'src/services/base.service';
import { ModalFooterModel, ModalHeaderModel } from 'src/shared/model/modal.model';

@Component({
  selector: 'app-update-position',
  templateUrl: './update-position.component.html',
  styleUrls: ['./update-position.component.scss']
})
export class UpdatePositionComponent implements OnInit {

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
    this.update()
    
  }

  close(event : any) {
    console.log(event);
    this.ngbActiveModal.close();
  }

  update(){
    const position =  {id: this.item?.id, name: this.insertForm.value.name};
    this._baseService.put<any>("https://localhost:44309/api/position/update", position)
      .subscribe(data => {
        console.log(data)
        this.ngbActiveModal.close();
      }, e => {
        console.log(e)
      });
  }
}
