import { Component, OnInit } from '@angular/core';
import { menuData} from 'src/app/utilities/data/menu.data';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  _serviceMenu:any;
  constructor() { }

  ngOnInit() {
    this._serviceMenu = menuData;
  }

}
