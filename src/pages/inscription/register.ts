import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
 

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  styles: [
  `
 page-register {
  .login-content {
    background: #56CA96;
 
    .login-box {
      background: #509287;
      padding: 20px 20px 0px 20px;
      margin-top: 30px;
    }
 
    ion-row {
       align-items: center;
       text-align: center;
     }
 
     ion-item {
         border-radius: 30px !important;
         padding-left: 30px !important;
         font-size: 0.9em;
         margin-bottom: 10px;
         border: 1px solid #ffffff;
         border-bottom: 0px !important;
         box-shadow: none !important;
     }
 
     .signup-col {
       margin: 0px 16px 0px 16px;
       padding-bottom: 20px;
     }
 
     .item-inner {
       border-bottom-color: #ffffff !important;
       box-shadow: none !important;
     }
 
     .submit-btn {
       background: #51CFB1;
       border-radius: 30px !important;
       border: 1px solid #ffffff;
     }
  }
}
  `]
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = { email: '', password: '' };
 
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController) { }
 
  public register() {
    this.auth.register(this.registerCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup("Success", "Account created.");
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
    },
      error => {
        this.showPopup("Error", error);
      });
  }
 
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}