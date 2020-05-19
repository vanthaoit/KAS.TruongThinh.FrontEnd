import { Component, OnInit, Input,ViewChild, Injector } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {BreadcrumbUrlService} from '../../../core/services/breadcrumb-url.service';
import {Material} from '../../../utilities/data/product.data';
import {HttpProviderService} from  '../../../core/services/http-provider.service';
import { ReactDataApplication } from '../data/react-data.component';
import { BehaviorSubject } from 'rxjs';
import { ReactRelativeApplication } from 'src/app/shared/related/react-relative.component';

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
 
  constructor(private breadcrumb:BreadcrumbUrlService,
    private _httpService:HttpProviderService,
    private injector: Injector ) { 
    this.breadcrumb.currentBreadcrumb.subscribe(mess=>this._output = mess);
    this.breadcrumb.changeMessage(this._output + this._lastBreabcrumb);
  }

  ngOnInit() {

    var getItem = [{ab:"1",ba:"2"}];
    var str = '{"theTeam":[{"teamId":"1","status":"pending"},{"teamId":"2","status":"member"},{"teamId":"3","status":"member"}]}';

    var obj = JSON.parse(str);
    obj['theTeam'].push({"teamId":"4","status":"pending"});
    str = JSON.stringify(obj);
    ReactDataApplication.initialize('product-detail',this.injector,str);
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

  public saveChanges(){
    let abc = this.entity;
    debugger
   
  }



}
