import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RespoRoutingModule } from './respo-routing.module';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewComponent,
    EditComponent,
    IndexComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    RespoRoutingModule,
    FormsModule
  ]
})
export class RespoModule { }
