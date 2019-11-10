import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';


import { ConstructionProject } from '../../Models/ConstructionProject.models';
import { from } from 'rxjs';
import { LoadingController, NavController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.page.html',
  styleUrls: ['./create-project.page.scss'],
})
export class CreateProjectPage implements OnInit {
  public form: FormGroup;
  loaderToShow: any;
  public proj: any;
  constructor(
    private fb: FormBuilder,
    private db: AngularFirestore,
    public loadingController: LoadingController,
    private navCtrl: NavController,
    public alertController: AlertController,
  ) {


    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
      ]),
      ]
    });
  }

  ngOnInit() {

  }

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Enviando...'
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        console.log('Enviando...');
      });
    });
    this.hideLoader();
  }

  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 4000);
  }




  async submit() {

    this.showLoader();
    this
      .db
      .collection('project')
      .add(this.form.value)
      .then(resp => {

        this.hideLoader();
        this.presentAlert();


      }).catch((err) => {
        this.loadingController.dismiss();
        this.cancelAlert();
        console.log(err);
      });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Salvo',
      message: 'Salvo com sucesso',
      buttons: ['OK']
    });

    await alert.present();
  }

  async cancelAlert() {
    const alert = await this.alertController.create({
      header: 'ERRO',
      message: 'Erro no Envio',
      buttons: ['OK']
    });

    await alert.present();
  }

  async getProject() {


  }




}


