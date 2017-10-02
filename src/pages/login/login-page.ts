import { Component } from '@angular/core';
import { NavController, ViewController, AlertController, LoadingController, Loading, IonicPage, Events } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { MyApp} from '../../app/app.component';
 
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };
 
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private viewCtrl: ViewController, private events:Events) { }
 
  public createAccount() {
    this.nav.push('RegisterPage');
  }
 
  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {        
        this.nav.push(MyApp,{});

      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }

 dismiss() {
    this.viewCtrl.dismiss();
  }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}