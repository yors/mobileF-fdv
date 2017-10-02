import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController  } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { UserDetailsPage } from '../user-details/user-details';
import { PopoverController } from 'ionic-angular';
import { PopoverPageComponent } from  '../../components/popover-page/popover-page';
import {UsersService} from  '../../components/users/shared/users.service';
import {User} from  '../../components/users/shared/user';
import { ModalUserPage } from '../modal-pages/modal-user';

@Component({
  selector: 'page-list-user',
  templateUrl: 'list-user.html'
})
export class ListUserPage implements OnInit {
  private users: User[] = [];
  constructor(public navCtrl: NavController, public modalController: ModalController, public navParams: NavParams,public pop: PopoverController, public usersService: UsersService, public viewCtrl: ViewController) {
  }
     presentPopover(myEvent) {
    let popover = this.pop.create(PopoverPageComponent );
    popover.present({
      ev: myEvent
    });
  }
ngOnInit() {
    this.usersService.getUsers()
      .subscribe(data => this.users = data);
  }
  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
  
   openModal(item) {

    let modal = this.modalController.create(ModalUserPage, item);
    modal.present();
  }
    userTapped(event, item) {
    this.navCtrl.push(UserDetailsPage, {
      item: item
    });
  }
   getUsers(ev) {
   
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.users = this.users.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else{
    this.ngOnInit();
    }
  }
 
}
