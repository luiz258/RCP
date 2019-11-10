import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

import { from, Observable } from 'rxjs';
import { LoadingController, NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-type-document-list',
  templateUrl: './type-document-list.page.html',
  styleUrls: ['./type-document-list.page.scss'],
})
export class TypeDocumentListPage implements OnInit {

  constructor( private db: AngularFirestore,
    public loadingController: LoadingController,
    private navCtrl: NavController,
    public alertController: AlertController,) { }

  ngOnInit() {
    
  }
  public getById(id: string): Observable<any> {
    return this.db.doc(id).valueChanges();
  }
}
