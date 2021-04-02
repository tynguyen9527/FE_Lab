import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseService } from 'src/services/base.service';
import { ModalFooterModel } from 'src/shared/model/modal.model';

@Component({
  selector: 'app-delete-position',
  templateUrl: './delete-position.component.html',
  styleUrls: ['./delete-position.component.scss']
})
export class DeletePositionComponent implements OnInit {

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
    this._baseService.deleteWithId("https://localhost:44309/api/position/delete",id)
      .subscribe(res=>{
        this.ngbActiveModal.close();
        return console.log(res);
      });
  }
}
