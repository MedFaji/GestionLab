import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBudgetComponent } from './add-budget/add-budget.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewBudgetComponent } from './view-budget/view-budget.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'add/:id', component: CreateComponent },
  { path: 'update/:id', component: EditComponent },
  { path: 'details/:id', component: ViewComponent },
  { path: 'membreBudgetDetails/:id', component: ViewBudgetComponent },
  { path: 'membreAddBudget/:id', component: AddBudgetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
