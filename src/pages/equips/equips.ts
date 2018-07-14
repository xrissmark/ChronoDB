import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryProvider } from '../../providers/category/categoryProvider';

@Component({
  selector: 'page-equips',
  templateUrl: 'equips.html',
})
export class EquipsPage {

  public categories = [];
  private categoryProvider: CategoryProvider = new CategoryProvider();
  constructor(
    public navCtrl: NavController    
  ) {
  }

  ngOnInit() {
    this.categoryProvider 
    this.categories = this.categoryProvider.Equipments();
    console.log(this.categories);
  }

  public navigateToCategory(page:any){
    this.navCtrl.push(page);    
  }
  

}
