import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaboRoutingModule } from './labo-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';



import { BudgetModule } from '../../respo/budget/budget.module';
import { Labo } from './labo';



@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    EditComponent,
    CreateComponent,
    

  ],
  imports: [
    CommonModule,
    LaboRoutingModule,
    FormsModule
  ],
  exports: [
    
  ]
})
export class LaboModule { }
