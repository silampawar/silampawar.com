import React from 'react';
import { connect } from 'react-redux'
import Messages from './../Messages';
import recentWork from './../../actions/recentWork';
import HomeRecentWork from './../HomeRecentWork';
import { bindActionCreators } from 'redux';

class PortfolioList extends React.Component {

  componentDidMount() {

    this.props.recentWork();
    this.setState({ RecentWorkList: this.props.RecentWorkList });
  }

  render() {

    return (
      <div className="paddingTop">
      <div className="container">
        <h1 className="section-title landing-header">Portfolio</h1>
        <div className="row">
        <div className="col-md-12 col-sm-12">
          <HomeRecentWork dataList={this.props.RecentWorkList} />
          </div>
          </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    RecentWorkList: state.RecentWork,

  };
};

//export default connect(mapStateToProps)(Home);

function mapDispatchtoProps(dispatch) {
  return bindActionCreators({ recentWork }, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(PortfolioList);

