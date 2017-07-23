import React from 'react';

//import { RecentWork } from '../actions/RWAction.js';
import { connect } from 'react-redux';
import _ from 'lodash';
//import RecentWork from '../'

class HomeRecentWork extends React.Component {


    renderCard(cardDetails) {
       const co= cardDetails.map(card => {
           const imagePath = `./images/recentwork/thumbnil/${card.imgSrc}`;
           const portLink = `/portfolio/${card.workTitle}`;
           return (<div className="col-md-4 col-sm-4 col-xs-4">

                <div className="card">
                    <img className="card-img-top" src={imagePath} alt="Card image cap" />
                    <div className="card-block">
                        <h4 className="card-title">{card.workTitle}</h4>
                        <p className="card-text">{card.description}</p>
                    </div>
                    <a href= {portLink} className="btn btn-primary recentWorkButton">Details</a>
                    <div className="card-footer">
                        <small className="text-muted">Last updated {card.uploadedDate}</small>
                    </div>
                </div>
                <div className="midPadding"></div>
            </div>)
        })
    
        return co;
    }

    render() {
       let mainDisplay="";
        if (!this.props.dataList) {
            mainDisplay = (<div>Nothing to display</div>);
        }else{
            mainDisplay =  this.props.dataList.map(this.renderCard)
        }
        return (

            <div className="recentSection" style={{ backgroundColor: this.props.bgColor }}>
                <div className="section-title">Recent {this.props.heading}
                    <small><a href={this.props.pathTo} className="title-view-more-link"> - View more</a>
                    </small>
                </div>
                <div className="row">
                    <div className="card-deck">
                        {mainDisplay}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        RecentWorkList: state.RecentWorkList
    };
};

export default connect(mapStateToProps)(HomeRecentWork);

