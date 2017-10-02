import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { PopoverController } from 'ionic-angular';
import { PopoverPageComponent } from  '../../components/popover-page/popover-page';
import {UsersService} from  '../../components/users/shared/users.service';
import {User} from  '../../components/users/shared/user';

@Component({
  selector: 'page1-list',
  templateUrl: 'list1.html'
})
export class UserPage implements OnInit {
  icons: string[];
  private users: User[] = [];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public pop: PopoverController, public usersService: UsersService) {
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
    usersTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
 
}
