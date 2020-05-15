import { Component, OnInit } from '@angular/core';
import {BreadcrumbUrlService} from '../../core/services/breadcrumb-url.service';
import {IHero} from '../../utilities/interfaces/IHero';
import {HeroService} from '../../core/services/hero.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  _breadcrumbURL:string  = "dịch vụ" ;
  public heroesObj$: BehaviorSubject<IHero[]>;
  public heroes: IHero[];
  constructor(private breadcrumb:BreadcrumbUrlService,private heroService: HeroService) { 
    this.breadcrumb.changeMessage(this._breadcrumbURL);
  }

  ngOnInit(): void {
    this.heroService.getHeroes$().subscribe((res: IHero[]) => {
      this.heroes = res;
    });

    this.heroesObj$ = this.heroService.getHeroes$();

    this.initHeroes();
  }
  createMessage(message) {
    this.breadcrumb.changeMessage(this._breadcrumbURL + message);
  }
  initHeroes() {
    this.heroService.addHeroes({name: 'Zeus', age: 88});
    this.heroService.addHeroes({name: 'Poseidon', age: 46});
  }

}
