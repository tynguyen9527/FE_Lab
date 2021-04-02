import { Component, OnInit } from '@angular/core';
import { Department } from 'src/data/department';
import { BaseService } from 'src/services/base.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {

  constructor(private _baseService: BaseService) { }
  ngOnInit() {
  }

}
