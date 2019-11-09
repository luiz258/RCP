import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TypeDocumentListPage } from './type-document-list.page';

const routes: Routes = [
  {
    path: '',
    component: TypeDocumentListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),

  ],
  declarations: [TypeDocumentListPage],
})
export class TypeDocumentListPageModule { }
