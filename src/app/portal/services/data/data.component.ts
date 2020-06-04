import { Component, OnInit, Input,ViewChild, Injector } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {BreadcrumbUrlService} from '../../../core/services/breadcrumb-url.service';
import {Material} from '../../../utilities/data/product.data';
import {HttpProviderService} from  '../../../core/services/http-provider.service';
import { ReactDataApplication } from '../data/react-data.component';
import { ReactSidebarApplication } from '../../../shared/sidebar-menu/sidebar-menu/react-sidebar';

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
  _dataHttpService:any[];
  _dataCategory:any[];
  _test:any;
 
  constructor(private breadcrumb:BreadcrumbUrlService,
    private _httpService:HttpProviderService,
    private injector: Injector ) { 
    this.breadcrumb.currentBreadcrumb.subscribe(mess=>this._output = mess);
    this.breadcrumb.changeMessage(this._output + this._lastBreabcrumb);
  }

  ngOnInit() {
    
    this._httpService.get('productcategory/getall').subscribe((resp:any[])=>{
      this._dataCategory = resp;
      //ReactSidebarApplication.Initialize('accordion',resp);
      console.log("category = "+this._dataCategory);
    }, error => {
      debugger
      this._httpService.handleError(error)
    });
    this.getItems();
    this.entity = {Content:''};

  }

  getItems(){
      this._httpService.get('product/getall').subscribe((resp:any[])=>{
      
        this._dataHttpService = resp;
        ReactDataApplication.initialize('product-detail',this.injector,this._dataHttpService);
        console.log(this._dataHttpService);
      }, error => {
        debugger
        this._httpService.handleError(error)
      });

      
  }

  public saveChanges(){
    let abc = this.entity;
    debugger
   
  }


}
