import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController  } from 'ionic-angular';
import { ModalUserListPage } from '../modal-pages/modal-user-list';
import {LoginPage} from '../login/login-page';
import {MyApp} from '../../app/app.component';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
    styles: [
  `
  .section-border {
    background: rgba(0, 0, 0, 0) url(assets/img/delimitator.jpg) no-repeat scroll center center;
    height: 23px;
    margin: 5px 0 10px;
    margin-top: 5px;
    margin-right: 0px;
    margin-bottom: 10px;
    margin-left: 0px;
    width: 100%;} 
     .section-title {
    text-transform: uppercase;
    font-weight: bold;
    }
    .col1{
border: 1px solid black;
}

    `]
})
export class HelloIonicPage {
showUser: string= 'false';
descriptionEglise: string;
  constructor(public modalController: ModalController, public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
      
      if(null != this.storage){
      console.log("YORIC")
      this.storage.get('isUserActif')
      .then((hasSeenTutorial) => {
        if (hasSeenTutorial) {
           this.showUser='true';
        } 
      });
      }
    this.descriptionEglise=`
    L’église France-Fleuve de Vie est une assemblée pentecôtiste, et charismatique, car elle croit en la manifestation de la Parole de Dieu dans la vie de tout un chacun.
    Elle a la particularité d’être dirigée par un couple Pastoral, les pasteurs Cyrille & Laurence Ndong.
    Du point de vue de la loi, elle est déclarée comme une association Chrétienne dont l’objet est l’exercice des activités culturelles évangéliques notamment l’exercice d’un culte évangélique ; la diffusion de l’évangile de Jésus-Christ ; l’enseignement de la Bible ; et tout autre activité ayant pour objet la promotion de l’évangile de Jésus-Christ. Association loi 1091, déclaré le 5 janvier 2006 sous le numéro 0774011117, apparu dans le journal officiel du 28 janvier 2006 (138 année n°4).
    France-Fleuve de Vie (F-FDV) est membre de la Fédération Des Eglises Chrétienne Evangélique de France (FECE).`
  }

 openModalListUser() {

    let modal = this.modalController.create(ModalUserListPage);
    modal.present();
  }
    openFormLogin() {
    let modal = this.modalController.create(LoginPage);
    modal.present();
  }
}
