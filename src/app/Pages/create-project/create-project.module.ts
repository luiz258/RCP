import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateProjectPage } from './create-project.page';
import { AngularFireDatabaseModule } from '@angular/fire/database';

const routes: Routes = [
  {
    path: '',
    component: CreateProjectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,

    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateProjectPage]
})
export class CreateProjectPageModule { }
