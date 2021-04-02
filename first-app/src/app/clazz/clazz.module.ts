import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { KlassSelectComponent } from './klass-select/klass-select.component';
import { ClazzComponent } from './clazz.component';



@NgModule({
  declarations: [AddComponent, KlassSelectComponent, ClazzComponent],
  imports: [
    CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ]
})
export class ClazzModule { }
