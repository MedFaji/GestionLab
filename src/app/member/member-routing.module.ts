import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBesoinComponent } from './create-besoin/create-besoin.component';
import { EditBesoinComponent } from './edit-besoin/edit-besoin.component';
import { IndexBesoinComponent } from './index-besoin/index-besoin.component';
import { ViewBesoinComponent } from './view-besoin/view-besoin.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexBesoinComponent },
  { path: 'add', component: CreateBesoinComponent },
  { path: 'update/:id', component: EditBesoinComponent },
  { path: 'details/:id', component: ViewBesoinComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
