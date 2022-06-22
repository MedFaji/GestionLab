import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { ViewBesoinComponent } from './view-besoin/view-besoin.component';
import { IndexBesoinComponent } from './index-besoin/index-besoin.component';
import { CreateBesoinComponent } from './create-besoin/create-besoin.component';
import { EditBesoinComponent } from './edit-besoin/edit-besoin.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewBesoinComponent,
    IndexBesoinComponent,
    CreateBesoinComponent,
    EditBesoinComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    FormsModule
  ]
})
export class MemberModule { }
