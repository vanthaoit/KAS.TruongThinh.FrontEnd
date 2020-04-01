import { Component, OnInit } from '@angular/core';
import {BreadcrumbUrlService} from '../../core/services/breadcrumb-url.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  _breadcrumbURL:string  = "dịch vụ" ;
  constructor(private breadcrumb:BreadcrumbUrlService) { 
    this.breadcrumb.changeMessage(this._breadcrumbURL);
  }

  ngOnInit() {
    
  }
  createMessage(message) {
    this.breadcrumb.changeMessage(this._breadcrumbURL + message);
  }

}
