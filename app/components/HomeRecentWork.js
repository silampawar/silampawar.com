import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Moment from 'react-moment';
import { IndexLink, Link } from 'react-router';

export default class HomeRecentWork extends React.Component {

    renderCard(card) {
        const imagePath = `./images/recentwork/thumbnil/${card.imgSrc}`;
        const portLink = `/portfolio/${card._id}`;

        return (<div className="col-md-4 col-sm-4 col-xs-4">
            <div className="card">
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
            </div>
            <div className="midPadding"></div>
        </div>)
    }

    render() {
        let mainDisplay = "";

        if (!this.props.dataList) {
            mainDisplay = (<div>Nothing to display</div>);
        } else {

            mainDisplay = _.map(this.props.dataList, card => this.renderCard(card))
        }
        return (<div><div className="container"><div className="row">{mainDisplay}</div></div>
        </div>);
    }
}
/*
const mapStateToProps = (state) => {
    return {
        RecentWorkList: state.RecentWorkList
    };
};

export default connect(mapStateToProps)(HomeRecentWork); */

