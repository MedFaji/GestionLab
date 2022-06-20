import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BesoinRoutingModule } from './besoin-routing.module';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    ViewComponent,
    CreateComponent,
    IndexComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    BesoinRoutingModule
  ]
})
export class BesoinModule { }
