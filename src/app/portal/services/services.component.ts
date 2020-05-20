import { Component, OnInit, Injector } from '@angular/core';
import {BreadcrumbUrlService} from '../../core/services/breadcrumb-url.service';
import {IHero} from '../../utilities/interfaces/IHero';
import {HeroService} from '../../core/services/hero.service';
import { BehaviorSubject } from 'rxjs';
import { ReactRelativeApplication } from 'src/app/shared/related/react-relative.component';
declare function initialRelativeLoad():any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  _breadcrumbURL:string  = "dịch vụ" ;
  public heroesObj$: BehaviorSubject<IHero[]>;
  public heroes: IHero[];
  constructor(private breadcrumb:BreadcrumbUrlService,
    private heroService: HeroService,
    private injector: Injector) { 
    this.breadcrumb.changeMessage(this._breadcrumbURL);
  }

  ngOnInit(){
     ReactRelativeApplication.initialize('render-relative',this.injector);
     initialRelativeLoad();
     
  }
  createMessage(message) {
    this.breadcrumb.changeMessage(this._breadcrumbURL + message);
  }

}
