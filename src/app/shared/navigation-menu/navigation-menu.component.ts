import { Component, OnInit } from '@angular/core';
import {CommonService} from  'src/app/utilities/common.service';
import {menuData} from 'src/app/utilities/data/menu.data';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {
  _currentActiveMenu:any;
  public _menuData:any[];


  constructor(private _commonService:CommonService) { 
    this._currentActiveMenu = _commonService.getBreadcrumbAddress();
    this._menuData = menuData;
  }

  ngOnInit() {
    this._commonService.initActiveMenu();
    this._menuData = menuData;
  }
  switchMenu(){
    this._commonService.initActiveMenu();
  }

}
