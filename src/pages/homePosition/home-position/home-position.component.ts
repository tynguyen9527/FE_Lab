import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Position } from 'src/data/position';
import { BaseService } from 'src/services/base.service';
import { DeletePositionComponent } from '../delete-position/delete-position.component';
import { InsertPositionComponent } from '../insert-position/insert-position.component';
import { UpdatePositionComponent } from '../update-position/update-position.component';

@Component({
  selector: 'app-home-position',
  templateUrl: './home-position.component.html',
  styleUrls: ['./home-position.component.scss']
})
export class HomePositionComponent implements OnInit {
  closeResult = '';
  constructor(private _baseService: BaseService
    ,  private modalService: NgbModal) { }
  positions: Position[] = [];
  ngOnInit() {
    this.fetch();
  }

  fetch(){
      this._baseService.get<Position[]>("https://localhost:44309/api/position/getall")
          .subscribe((res: any)=>{
              console.log(res);

             return this.positions = res;
          });
  }

  update(item:any){
    console.log(item);
    var modalRef =  this.modalService.open(UpdatePositionComponent, {ariaLabelledBy: 'modal-basic-title'});
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
    var modalRef =  this.modalService.open(DeletePositionComponent, {ariaLabelledBy: 'modal-basic-title'});
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
    var modalRef =  this.modalService.open(InsertPositionComponent, {ariaLabelledBy: 'modal-basic-title'});
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
