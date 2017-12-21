import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';

import { NotificationModule } from './notification/notification.module';
import { CircularRangeSliderComponent } from './circular-range-slider/circular-range-slider.component';
import { PdfViewersComponent } from './pdf-viewer/pdf-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NotificationModule,
    MaterialModule,
    PdfViewersComponent
  ],
  declarations: [
    CircularRangeSliderComponent,
    PdfViewersComponent
  ]
})
export class UIModule { }
