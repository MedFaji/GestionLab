import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { budgetIndexComponent } from '../../respo/budget/index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'add', component: CreateComponent },
  { path: 'update/:id', component: EditComponent },
  { path: 'details/:id', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RespoRoutingModule { }
