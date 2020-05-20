import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


interface IReactApplication {
    injector: Injector;
    passData: any;
}

class ReactData extends React.Component<IReactApplication, any> {
    constructor(props) {
        super(props);
        this.state = {
            passData: this.props.passData
        };
    }

    renObjData:Array<any> = this.props.passData.map(function (data, idx) {
        return ([

            <a href="/portal/services/details/1">
                <div className="col-md-4">
                    <div className="project-img-div">
                        <img src={data.image} />
                    </div>
                    <p className="txt28">{data.name}</p>
                </div>
            </a>
        ]);
    });
    render() {
        return (
            <>
                <h3 className="col-md-12 heading-tittle">Gia công cơ khí</h3>
                <div className="row">
                    {this.renObjData}
                </div>
            </>
        );

    }

}


export class ReactDataApplication {

    static initialize(
        containerId: string,
        injector: Injector,
        passData: any
    ) {
        ReactDOM.render(
            <ReactData injector={injector} passData={passData} />,
            document.getElementById(containerId)
        );

    }
}