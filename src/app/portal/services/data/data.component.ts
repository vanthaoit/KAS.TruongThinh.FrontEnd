import { Component, OnInit, Input } from '@angular/core';
import {BreadcrumbUrlService} from '../../../core/services/breadcrumb-url.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  _lastBreabcrumb: string = ",particular services";
  _output:string;
 
  constructor(private breadcrumb:BreadcrumbUrlService) { 
    this.breadcrumb.currentBreadcrumb.subscribe(mess=>this._output = mess);
    this.breadcrumb.changeMessage(this._output + this._lastBreabcrumb);
  }

  ngOnInit() {
    
  }

}
