import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EquipsPage } from '../../pages/equips/equips';
import { ArmorsPage } from '../../pages/equips/armors/armors';

@Injectable()


export class CategoryProvider {
  
  constructor() {
  
  }
  public Home(): any[]{
    let categories = [];
    let equips = EquipsPage;
    
    categories.push({name:"Equipments", image:"", page:equips});
    categories.push({name:"Characters", image:"", page:equips});
    return categories;
  }

  public Equipments(): any[]{
    let categories = [];
    categories.push({name:"Armors", image:"", page:ArmorsPage});
    return categories;
  }

  public Characters(): any[]{
    let categories = [];
    let equips = EquipsPage;
    categories.push({name:"Playables", image:"", page:equips});
    categories.push({name:"NPCs", image:"", page:equips});
    return categories;
  }

}
