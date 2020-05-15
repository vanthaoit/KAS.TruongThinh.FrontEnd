import {Injector} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactHero from './react-hero';
import {BehaviorSubject} from 'rxjs';
import {IHero} from '../utilities/interfaces/IHero';

interface IReactApplication {
injector: Injector;
  heroes$: BehaviorSubject<IHero[]>;
}

class ReactApp extends React.Component<IReactApplication, any> {
  constructor(props) {
    super(props);
    this.state = {
        heroes$: this.props.heroes$
      };
  }

  render() {
    return (
      <div className={'renderer'}>
         <h1 className="txt2"><span> Công trình thương mại phức hợp</span></h1>
        <br/>
        <ReactHero heroes$={this.state.heroes$}/>
      </div>
    );
  }
}

export class ReactApplication {

    static initialize(
        containerId: string,
        injector: Injector,
        heroes$: BehaviorSubject<IHero[]>,
      ) {
        ReactDOM.render(
          <ReactApp injector={injector} heroes$={heroes$}/>,
          document.getElementById(containerId)
        );
        /* get components from their class name: */
        var list = document.getElementById(containerId);
        console.log(list);
        
      }
}
