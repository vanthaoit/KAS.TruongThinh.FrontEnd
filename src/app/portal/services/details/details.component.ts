import { Component, OnInit,Injector,Input } from '@angular/core';
import {ReactApplication} from '../../../react/react-application';
import {BehaviorSubject} from 'rxjs';
import {IHero} from '../../../utilities/interfaces/IHero';
import { ReactDataApplication } from '../data/react-data.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  @Input() heroes$: BehaviorSubject<IHero[]>;

  constructor(public injector: Injector) { }

  ngOnInit() {
    ReactApplication.initialize('react-renderer', this.injector,this.heroes$);

  }



}

// @Component({
//   selector: 'app-details',
//   templateUrl: './details.component.html',
//   styleUrls: ['./details.component.css']
// })
// export class DetailsComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
