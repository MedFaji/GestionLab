import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'labo', loadChildren: () => import('./labo/labo.module').then(m => m.LaboModule)},
  {path: 'respo', loadChildren: () => import('./respo/respo.module').then(m => m.RespoModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
