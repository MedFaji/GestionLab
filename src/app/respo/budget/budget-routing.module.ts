import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { budgetIndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: budgetIndexComponent },
  { path: 'add/:id', component: CreateComponent },
  { path: 'update/:id', component: EditComponent },
  { path: 'details/:id', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
