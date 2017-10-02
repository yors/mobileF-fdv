import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule }  from '@angular/http';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { UserDetailsPage} from '../pages/user-details/user-details';
import { PopoverPageComponent  } from  '../components/popover-page/popover-page';
import {UsersService} from  '../components/users/shared/users.service';
import { ModalUserPage } from '../pages/modal-pages/modal-user';
import { ModalUserListPage } from '../pages/modal-pages/modal-user-list';
import { AuthService } from '../providers/auth-service';
import { RegisterPage } from '../pages/inscription/register';
import {LoginPage} from '../pages/login/login-page';
import { IonicStorageModule  } from '@ionic/storage';
import { ListPage } from '../pages/list/list';
import { ListUserPage} from '../pages/listUser/list-user';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,PopoverPageComponent ,ListUserPage,UserDetailsPage,ModalUserPage,ModalUserListPage,RegisterPage, LoginPage
     
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
     IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,PopoverPageComponent,ListUserPage,UserDetailsPage,ModalUserPage,ModalUserListPage,RegisterPage, LoginPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersService,  AuthService
  ]
})
export class AppModule {}
