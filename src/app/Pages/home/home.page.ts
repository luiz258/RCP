import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

import { ConstructionProject } from '../../Models/ConstructionProject.models';
import { from } from 'rxjs';
import { LoadingController, NavController, AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items: any[];
  private PATH = '/Documents';
  constructor(

    private db: AngularFirestore,
    public loadingController: LoadingController,
    private navCtrl: NavController,
    public alertController: AlertController,
    public routes: Router,
  ) { }

  ngOnInit() {
    this
      .db
      .collection('project')
      .snapshotChanges()
      .subscribe(data => {
        this.items = data.map(e => {
          return {
            id: e.payload.doc.id,
            // tslint:disable-next-line: no-string-literal
            name: e.payload.doc.data()['name'],
            // tslint:disable-next-line: no-string-literal
            status: e.payload.doc.data()['status'],
          };
        });
        console.log(this.items);
      });

  }



  Navigate(id: any) {
    const navigateExtras: NavigationExtras = {
      state: {
        parametros: id,
      }
    };

    // tslint:disable-next-line: no-unused-expression
    this.db.collection<any>('Project').valueChanges;
    return this.routes.navigate(['/type-document-list', navigateExtras]);



  }

  getNavigate() {
    this.routes.navigate(['/type-document-list']);
  }

}

