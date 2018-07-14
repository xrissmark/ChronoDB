import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-armors',
  templateUrl: 'armors.html',
})
export class ArmorsPage {

  private navParams: NavParams;

  constructor(
    public navCtrl: NavController 
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArmorsPage');
  }

}
