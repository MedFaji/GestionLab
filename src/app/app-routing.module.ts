import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'respo', loadChildren: () => import('./respo/respo.module').then(m => m.RespoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
