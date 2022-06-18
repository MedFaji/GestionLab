import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { ViewBudgetComponent } from './view-budget/view-budget.component';
import { AddBudgetComponent } from './add-budget/add-budget.component';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    ViewComponent,
    EditComponent,
    ViewBudgetComponent,
    AddBudgetComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    FormsModule
  ]
})
export class MemberModule { }
