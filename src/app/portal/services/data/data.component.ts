import { Component, OnInit, Input } from '@angular/core';
import {BreadcrumbUrlService} from '../../../core/services/breadcrumb-url.service';
import {Material} from '../../../utilities/data/product.data';
import {HttpProviderService} from  '../../../core/services/http-provider.service';
declare var $:any;

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  _lastBreabcrumb: string = ",particular services";
  _output:string;
  _materialProduct:any;
  _dataHttpService:any;
 
  constructor(private breadcrumb:BreadcrumbUrlService,private _httpService:HttpProviderService ) { 
    this.breadcrumb.currentBreadcrumb.subscribe(mess=>this._output = mess);
    this.breadcrumb.changeMessage(this._output + this._lastBreabcrumb);
  }

  ngOnInit() {
    this._materialProduct = Material;
    this.getItems();
  }
  getItems(){
    this._httpService.get('product/getall').subscribe((resp:any)=>{
      debugger
      this._dataHttpService = resp;
    }, error => this._httpService.handleError(error));
  }



}
