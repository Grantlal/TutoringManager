import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TutoringManagerComponent } from './tutoring-manager/tutoring-manager.component';

const routes: Routes = [
  { path: 'TutoringManager', component: TutoringManagerComponent }
];

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
