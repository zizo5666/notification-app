import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Notification } from './notification/notification.component';

const routes: Routes = [
{path: '', component: Notification},
{ path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
