import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'budget', loadChildren: () => import('../respo/budget/budget.module').then(m => m.BudgetModule)},
  {path: 'member', loadChildren: () => import('../respo/member/member.module').then(m => m.MemberModule)},
  {path: 'besoin', loadChildren: () => import('../respo/besoin/besoin.module').then(m => m.BesoinModule)}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RespoRoutingModule { }
