import * as React from 'react';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../utilities/interfaces/IProduct';



interface IReactBidirectionalProduct {
    details$: any;
}

class ReactDetail extends React.Component<IReactBidirectionalProduct, any> {

    constructor(props) {
        super(props);

        this.state = {
            details: this.props.details$
        };
    }
    componentWillMount() {
        if (this.state.details !== undefined && typeof this.state.details != "undefined") {
            console.log("componentWillMount is .... ");
        }
    }

    render() {

        return (
            <div className={'row'}>
                <div className="col-md-6 message-content">
                    <p className="txt21">{this.state.details.content}</p>
                </div>
                <div className="col-md-6">

                    <div id="reactSlideCarousel" className="carousel slide slide-about" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#reactSlideCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#reactSlideCarousel" data-slide-to="1" className=""></li>
                            <li data-target="#reactSlideCarousel" data-slide-to="2" className=""></li>
                            <li data-target="#reactSlideCarousel" data-slide-to="3" className=""></li>
                        </ol>
                        <div className="carousel-inner data-content-wrapper" role="listbox">
                            <div className="item active">

                                <div className="carousel-caption-about carousel-caption-react">
                                    <img src="../../../../assets/images/banner1.jpg" alt="" />
                                    <h3 className="move-up">Big
                                                    <span>Save</span>
                                    </h3>

                                </div>
                            </div>
                            <div className="item">

                                <div className="carousel-caption-about carousel-caption-react">
                                    <img src="../../../../assets/images/banner2.jpg" alt="" />
                                    <h3 className="move-down">Healthy
										<span>Saving</span>
                                    </h3>

                                </div>

                            </div>
                            <div className="item">

                                <div className="carousel-caption-about carousel-caption-react">
                                    <img src="../../../../assets/images/banner3.jpg" alt="" />
                                    <h3 className="move-up">Big
										<span>Deal</span>
                                    </h3>

                                </div>

                            </div>
                            <div className="item">

                                <div className="carousel-caption-about carousel-caption-react">
                                    <img src="../../../../assets/images/banner4.jpg" alt="" />
                                    <h3 className="move-down">Today
										<span>Discount</span>
                                    </h3>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );

    }
}

export default ReactDetail;
