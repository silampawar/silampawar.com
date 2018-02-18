import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Moment from 'react-moment';
import { recentWorkDetails } from '../../actions/recentWork';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import PortfolioTag from './PortfolioTag';
 

class Portfolio extends React.Component {

    componentDidMount() {
       // this.props.recent(this.props.params.id);
    }
 
    renderPortfolio(portfolio) {
        return (
                <PortfolioTag portfolioDetails={portfolio}/>
        )
    }

    render() {
        let mainDisplay = '';
         const details = this.props.RecentWorkDetails;
        if (details == null || details==undefined) {
            mainDisplay = (<div>Nothing to display</div>);
             browserHistory.push('/');
        } else {
             mainDisplay =  _.map(details, card=> this.renderPortfolio(card));
        }
        return (<div>{mainDisplay}</div>);
    }
}

const mapStateToProps = (state) => {
    return {
        RecentWorkDetails: state.RecentWork
    };
};


function mapDispatchtoProps(dispatch) {
    return bindActionCreators({ recentWorkDetails }, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(Portfolio);

