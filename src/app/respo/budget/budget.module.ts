import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { budgetIndexComponent } from './index/index.component';
import { IndexComponent } from '../../admin/labo/index/index.component';
import { LaboModule } from '../../admin/labo/labo.module';
import { Labo } from '../../admin/labo/labo';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditComponent,
    ViewComponent,
    CreateComponent,
    budgetIndexComponent,

  ],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    FormsModule
    
  ],
  exports: [budgetIndexComponent]
})
export class BudgetModule { }
