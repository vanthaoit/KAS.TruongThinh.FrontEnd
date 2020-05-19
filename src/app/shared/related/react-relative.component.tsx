import {Injector} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {BehaviorSubject} from 'rxjs';

interface IReactApplication {
    injector: Injector;
}

class ReactRelative extends React.Component<IReactApplication, any> {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div className="featured-section" id="projects">
          <div className="container">
            <h3 className="tittle-w3l">Liên quan
              <span className="heading-style">
                <i></i>
                <i></i>
                <i></i>
              </span>
            </h3>
        
            <div className="content-bottom-in">
              <ul id="flexiselDemo">
                <li>
                  <div className="w3l-specilamk">
                    <div className="speioffer-agile">
                      <a href="single.html">
                        <img src="../../../../assets/images/detail.jpg" alt=""/>
                      </a>
                    </div>
                    <div className="product-name-w3l">
                      <h4>
                        <a href="single.html">Aashirvaad, 5g</a>
                      </h4>
                      <div className="w3l-pricehkj">
                        <h6>$220.00</h6>
                        <p>Save $40.00</p>
                      </div>
         
                    </div>
                  </div>
                </li>
                <li>
                  <div className="w3l-specilamk">
                    <div className="speioffer-agile">
                      <a href="single.html">
                        <img src="../../../../assets/images/detail.jpg" alt=""/>
                      </a>
                    </div>
                    <div className="product-name-w3l">
                      <h4>
                        <a href="single.html">Aashirvaad, 5g</a>
                      </h4>
                      <div className="w3l-pricehkj">
                        <h6>$220.00</h6>
                        <p>Save $40.00</p>
                      </div>
         
                    </div>
                  </div>
                </li>
                <li>
                  <div className="w3l-specilamk">
                    <div className="speioffer-agile">
                      <a href="single.html">
                        <img src="../../../../assets/images/detail.jpg" alt=""/>
                      </a>
                    </div>
                    <div className="product-name-w3l">
                      <h4>
                        <a href="single.html">Aashirvaad, 5g</a>
                      </h4>
                      <div className="w3l-pricehkj">
                        <h6>$220.00</h6>
                        <p>Save $40.00</p>
                      </div>
         
                    </div>
                  </div>
                </li>
                <li>
                  <div className="w3l-specilamk">
                    <div className="speioffer-agile">
                      <a href="single.html">
                        <img src="../../../../assets/images/detail.jpg" alt=""/>
                      </a>
                    </div>
                    <div className="product-name-w3l">
                      <h4>
                        <a href="single.html">Aashirvaad, 5g</a>
                      </h4>
                      <div className="w3l-pricehkj">
                        <h6>$220.00</h6>
                        <p>Save $40.00</p>
                      </div>
         
                    </div>
                  </div>
                </li>
                <li>
                  <div className="w3l-specilamk">
                    <div className="speioffer-agile">
                      <a href="single.html">
                        <img src="../../../../assets/images/detail.jpg" alt=""/>
                      </a>
                    </div>
                    <div className="product-name-w3l">
                      <h4>
                        <a href="single.html">Aashirvaad, 5g</a>
                      </h4>
                      <div className="w3l-pricehkj">
                        <h6>$220.00</h6>
                        <p>Save $40.00</p>
                      </div>
         
                    </div>
                  </div>
                </li>
                <li>
                  <div className="w3l-specilamk">
                    <div className="speioffer-agile">
                      <a href="single.html">
                        <img src="../../../../assets/images/detail.jpg" alt=""/>
                      </a>
                    </div>
                    <div className="product-name-w3l">
                      <h4>
                        <a href="single.html">Aashirvaad, 5g</a>
                      </h4>
                      <div className="w3l-pricehkj">
                        <h6>$220.00</h6>
                        <p>Save $40.00</p>
                      </div>
         
                    </div>
                  </div>
                </li>
              </ul>
            </div>
        

        
          </div>
        </div>

    );
  }
}

export class ReactRelativeApplication {

    static initialize(
        containerId: string ,
        injector: Injector,
      ) {
        ReactDOM.render(
          <ReactRelative injector={injector}/>,   
          document.getElementById(containerId)
        );
        /* get components from their class name: */
        var list = document.getElementById(containerId);
        console.log(list);
        
      }
}
