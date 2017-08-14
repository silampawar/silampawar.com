import React from 'react';
import { connect } from 'react-redux'
import Messages from './../Messages';
import recentWork from './../../actions/recentWork';
import HomeRecentWork from './../HomeRecentWork';
import { bindActionCreators } from 'redux';

class PortfolioList extends React.Component {

  componentDidMount() {

  window.scrollTo(0, 0);

    this.props.recentWork();
    this.setState({ RecentWorkList: this.props.RecentWorkList });
  }

  render() {

    return (
      <div className="paddingTop">
      <div className="container">
        <h1 className="section-title landing-header">Portfolio</h1>
        <div className="row">
        <div className="col-sm-12 col-sm-12 col-md-12 col-lg-12">
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

