import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


interface IReactApplication {
    injector: Injector;
    passData:any;
}

class ReactData extends React.Component<IReactApplication, any> {
    constructor(props) {
        super(props);
        this.state = {
            passData: this.props.passData
        };
    }

    render() {
        return (
            <>
                <h3 className="col-md-12 heading-tittle">Gia công cơ khí</h3>
                <div className="row">
                    <a href="/portal/services/details">
                        <div className="col-md-4">
                            <div className="project-img-div">
                                <img src="../../../../assets/images/detail.jpg" />
                            </div>
                            <p className="txt28">Trung tâm Thể dục Thể thao và...</p>
                        </div>
                    </a>
                    <a href="https://hbcg.vn/project/detail/118-trungtamtheducthethaovakytucxasinhviendaihocrmit.html">
                        <div className="col-md-4">
                            <div className="project-img-div">
                                <img src="../../../../assets/images/detail.jpg" />
                            </div>
                            <p className="txt28">Trung tâm Thể dục Thể thao và...</p>
                        </div>
                    </a>
                    <a href="https://hbcg.vn/project/detail/118-trungtamtheducthethaovakytucxasinhviendaihocrmit.html">
                        <div className="col-md-4">
                            <div className="project-img-div">
                                <img src="../../../../assets/images/detail.jpg" />
                            </div>
                            <p className="txt28">Trung tâm Thể dục Thể thao và...</p>
                        </div>
                    </a>
                </div>
            </>
        );

    }

}


export class ReactDataApplication {

    static initialize(
        containerId: string,
        injector: Injector,
        passData:any
    ) {
        ReactDOM.render(
            <ReactData injector={injector} passData={passData}/>,
            document.getElementById(containerId)
        );

    }
}