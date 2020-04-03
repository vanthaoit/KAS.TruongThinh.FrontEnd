import { Component, OnInit } from '@angular/core';
import {CommonService} from  'src/app/utilities/common.service';
import {menuData} from 'src/app/utilities/data/menu.data';
import {BreadcrumbUrlService} from '../../core/services/breadcrumb-url.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {
  _currentActiveMenu:any;
  _currentBreabcrumb:string;
  _breabcrumbArray:any[];
  public _menuData:any[];


  constructor(private _commonService:CommonService,private curentBreadcrumb:BreadcrumbUrlService) { 
    this._currentActiveMenu = _commonService.getBreadcrumbAddress();
    this._menuData = menuData;
    this.curentBreadcrumb.currentBreadcrumb.subscribe(message=> this._currentBreabcrumb = message);
    this._breabcrumbArray = this._currentBreabcrumb.split(",");
  }

  ngOnInit() {
    this._commonService.initActiveMenu();
    this._menuData = menuData;
  }
  switchMenu(){
    this._commonService.initActiveMenu();
  }

}
