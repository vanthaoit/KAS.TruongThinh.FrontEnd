import { Component, OnInit } from '@angular/core';
import {BreadcrumbUrlService} from '../../core/services/breadcrumb-url.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  _breadcrumbURL:string  = "trang chủ" ;
  constructor(private breadcrumb:BreadcrumbUrlService) { 
    this.breadcrumb.changeMessage(this._breadcrumbURL);
  }

  ngOnInit() {
  }

}
