import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalHeaderComponent } from './modal-header/modal-header.component';
import { ModalFooterComponent } from './modal-footer/modal-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [    
    ModalHeaderComponent,
    ModalFooterComponent
  ],
  exports: [
    ModalHeaderComponent,
    ModalFooterComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }