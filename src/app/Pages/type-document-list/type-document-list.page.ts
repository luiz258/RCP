import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import {
  AngularFireStorage,
  AngularFireUploadTask
} from "@angular/fire/storage";

import { from, Observable } from "rxjs";
import {
  LoadingController,
  NavController,
  AlertController
} from "@ionic/angular";
import { async } from "@angular/core/testing";

import { Inject } from "@angular/core";

@Component({
  selector: "app-type-document-list",
  templateUrl: "./type-document-list.page.html",
  styleUrls: ["./type-document-list.page.scss"]
})
export class TypeDocumentListPage implements OnInit {
  types: any[];

  constructor(
    private db: AngularFirestore,
    public loadingController: LoadingController,
    private navCtrl: NavController,
    public alertController: AlertController,
    di
  ) {
    this.types = [];
  }

  ngOnInit() {}
}
