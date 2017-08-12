import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Moment from 'react-moment';
import { IndexLink, Link } from 'react-router';
import moment from 'moment';

export default class HomeRecentPost extends React.Component {

    renderCard(card) {

        return (
            <div>

                <div className="article-time" >{moment(card.uploadedDate).format("MMM DD, YYYY")}</div>
                <a href={card.url} target="_blank" className="list-group-item list-group-item list-group-item-action">
                    {card.postTitle}
                </a>

            </div>
        )
    }

    render() {
        let mainDisplay = "";
          let limit = this.props.limit;

        if (!this.props.postList) {
            mainDisplay = (<div>Nothing to display</div>);
        } else {

            let counter = 0;
            mainDisplay = _.map(this.props.postList, card => {
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
            //mainDisplay = _.map(this.props.postList, card => this.renderCard(card))

        }
        return (<div><div className="container"><div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="list-group">
                    {mainDisplay}
                </div>
            </div>
        </div>
        </div>
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

