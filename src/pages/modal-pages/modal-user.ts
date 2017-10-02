

import { Component } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-modal-user',
  templateUrl: 'modal-user.html',
  styles: [
  `
  .section-border {
    background: rgba(0, 0, 0, 0) url(assets/delimitator.jpg) no-repeat scroll center center;
    height: 23px;
    margin: 5px 0 10px;
    margin-top: 5px;
    margin-right: 0px;
    margin-bottom: 10px;
    margin-left: 0px;
    width: 100%;} 
    `]
})
export class ModalUserPage {
  item;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
   
    this.item=this.params.get('item');
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
}