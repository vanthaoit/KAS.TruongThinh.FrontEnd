import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
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
  public entity:any;
  public _materialProduct:any;
  _dataHttpService:any;
  _test:any;
  @ViewChild('addDetailsModal', {static: false}) public addDetailsModal: ModalDirective;
 
  constructor(private breadcrumb:BreadcrumbUrlService,private _httpService:HttpProviderService ) { 
    this.breadcrumb.currentBreadcrumb.subscribe(mess=>this._output = mess);
    this.breadcrumb.changeMessage(this._output + this._lastBreabcrumb);
  }

  ngOnInit() {
    this.entity = {Content:''};
    this.getItems();
    //this._dataHttpService = Material;

  }
  public getItems(){
    this._httpService.get('product/getall').subscribe((resp:any[])=>{
      
      this._dataHttpService = resp;
      console.log(this._dataHttpService);
    }, error => {
      debugger
      this._httpService.handleError(error)
    });
  }
  public openDetails(){
    this.addDetailsModal.show();
  }

  public saveChanges(){
    let abc = this.entity;
    debugger
   
  }



}
