import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryProvider } from '../../providers/category/categoryProvider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public categories = [];
  constructor(
    public navCtrl: NavController,
    private categoryProvider: CategoryProvider) {
  }

  ngOnInit() {
    this.categories = this.categoryProvider.Home();
    console.log(this.categories);
  }

  public navigateToCategory(page:any){
    this.navCtrl.push(page);    
  }

}
