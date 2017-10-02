

import { Component, ViewChild } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController,MenuController, NavController } from 'ionic-angular';
import { ListUserPage} from '../listUser/list-user';
import { Storage } from '@ionic/storage';
import { MyApp} from '../../app/app.component';
@Component({
  selector: 'page-modal-user-list',
  templateUrl: 'modal-user-list.html',
  styles: [
  ` 
    `]
})
export class ModalUserListPage {
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
      public navCtrl: NavController,public storage: Storage,private nav: NavController
  ) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }
deconnect(){
    this.storage.set('isUserActif', false);
    this.storage.remove('username');
     this.nav.push(MyApp,{});
  };
  openPage() {
    this.nav.push(ListUserPage);
    
  }
}