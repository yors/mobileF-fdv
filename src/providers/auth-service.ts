import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UserFfdv} from '../components/users/shared/user';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
 
@Injectable()
export class AuthService {
  currentUser: UserFfdv;
  HAS_LOGGED_IN = 'hasLoggedIn';

 constructor(
    public storage: Storage,
    public events: Events
  ) {}
  public login(data) {
    if (data.email === null || data.password === null) {
      return Observable.throw("Please insert data");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (data.password === "pass" && data.email === "email");
        this.currentUser = new UserFfdv('Simon', '0753314407', 'saimon@devdactic.com', '12 bis rue alexandra David-neel','password');
       
        this.storage.set("isUserActif", true);

        this.events.publish('user:created', this.currentUser, Date.now());
         this.setUsername('Simon');
        observer.next(access);
        observer.complete();
      });
    }
  }
  public register(data) {
    if (data.email === null || data.password === null) {
      return Observable.throw("Please insert data");
    } else {
      // At this point store the data to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : UserFfdv {
    return this.currentUser;
  }
 setUsername(username: string): void {
    this.storage.set('username', username);
  };

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}