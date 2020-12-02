import { MenuComponent } from './menu/menu.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './admin/user/user.component';

const routes: Routes = [{path:'menu/',component:MenuComponent},
{path:'admin/users',component:UserComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
