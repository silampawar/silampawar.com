import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Moment from 'react-moment';
import { IndexLink, Link } from 'react-router';

export default class HomeRecentWork extends React.Component {


    renderCard(card) {
        const imagePath = `./images/recentwork/thumbnil/${card.imgSrc}`;
        const portLink = `/portfolio/${card._id}`;

        var divStyle = {
            backgroundImage: 'url(' + imagePath + ')'
        }

        return (
            /*  <div className="card">
                  <img className="card-img-top" src={imagePath} alt="Card image cap" />
                  <div className="card-block">
                      <h4 className="card-title">{card.workTitle}</h4>
                      <p className="card-text">{card.description}</p>
                  </div>
                  <IndexLink to={portLink} className="btn btn-primary recentWorkButton">Details</IndexLink>
  
                  <div className="card-footer">
                      <small className="text-muted">Last updated <Moment from={new Date().toString()}>{new Date(card.uploadedDate).toString()}</Moment>
  
                      </small>
                  </div>
              </div>*/
            /* <div className="col-xs-12 col-sm-6 col-md-4">
                 <div className="wrapper">
                     <div className="tile job-bucket">
                         <div className="front">
                             <div className="contents">
                                 <img src={imagePath} />
                                 <h3>{card.workTitle}</h3>
                             </div>
                         </div>
                         <div className="back">
                             <h3>{card.workTitle}</h3>
                             <p className="cardDesc">{card.description}</p>
                             <div className="cardDetail"> <IndexLink to={portLink}>Details</IndexLink></div>
                         </div>
                     </div>
                 </div></div>*/


<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-lg-3">
      <div className="fancy-cards">
            <div className="fancy-card">
                <div className="top" style={divStyle}>
                    <div className="caption">
                        <h3 className="title">{card.workTitle}</h3>
                        <h3 className="cardDesc">{card.description}</h3>
                        <IndexLink className="button" to={portLink}>Details</IndexLink>
                    </div>
                </div>
                <div className="middle"></div>
                <div className="bottom"></div>
            </div>
            </div>
            </div>

        )
    }

    render() {
        let mainDisplay = "";
        let limit = this.props.limit;

        if (!this.props.dataList) {
            mainDisplay = (<div>Nothing to display</div>);
        } else {

            let counter = 0;
            mainDisplay = _.map(this.props.dataList, card => {
                if (limit) {
                    if (counter <= limit - 1) {
                        counter++;
                        return this.renderCard(card);
                    }
                } else {
                    return this.renderCard(card);
                }
                return '';

            })

            // mainDisplay = _.map(_.slice(this.props.dataList, [0], [limit]), card => this.renderCard(card))

        }
        return (<div className="container"><div className="row">
            
              
                    {mainDisplay}
                </div></div>);
    }
}
/*
const mapStateToProps = (state) => {
    return {
        RecentWorkList: state.RecentWorkList
    };
};

export default connect(mapStateToProps)(HomeRecentWork); */

