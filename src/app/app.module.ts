import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { EquipsPage } from '../pages/equips/equips';
import { CategoryProvider } from '../providers/category/categoryProvider';
import { ArmorsPage } from '../pages/equips/armors/armors';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EquipsPage,
    ArmorsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EquipsPage,
    ArmorsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoryProvider
  ]
})
export class AppModule {}
