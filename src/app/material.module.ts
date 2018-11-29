import { NgModule } from '@angular/core';
import {  MatCardModule, MatInputModule, MatButtonModule } from "@angular/material";

const matComponents =[
  MatCardModule,
  MatInputModule,
  MatButtonModule
];

@NgModule({
  imports: matComponents,
  exports: matComponents
})
export class MaterialModule {}
