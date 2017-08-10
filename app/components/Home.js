import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import recentWork, {recentPost} from '../actions/recentWork';

import { IndexLink, Link } from 'react-router'; 
import HomeRecentWork from './HomeRecentWork';
import HomeRecentPost from './HomeRecentPost';
import HeaderBack from './HeaderBack';

import { bindActionCreators } from 'redux';

class Home extends React.Component {

  componentDidMount() {

    this.props.recentWork();
     this.setState({ RecentWorkList: this.props.RecentWorkList
     });
    this.props.recentPost();
    this.setState({ 
      RecentPostList: this.props.RecentPostList,
     });
  }

  render() {

    return (<div>
      <HeaderBack/>
      <div className="container">
        <Messages messages={this.props.messages} />
        <div className="row pad-top-15">
          <div className="col-sm-6">
            <h1 className="section-title landing-header">Full-Stack Developer and Estimation Consultant</h1>
          </div>
          <div className="col-sm-6"></div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <div className="panel">
              <div className="panel-body">
                <h3>Full Stack Developer</h3>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
                  mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                  mollis euismod. Donec sed odio dui.</p>

              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="panel">
              <div className="panel-body">
                <h3>Estimation Consultant</h3>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
                  mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                  mollis euismod. Donec sed odio dui.</p>

              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="panel">
              <div className="panel-body">
                <h3>And Much More</h3>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
                  mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                  mollis euismod. Donec sed odio dui.</p>

              </div>
            </div>
          </div>
        </div>
        <div className="midPadding"></div>
        <div className="row">
          <div className="recentSection" style={{ backgroundColor: "#faf5f5" }}>
            <div className="section-title">Recent Work
              <small>
                <IndexLink to="/portfolio" className="title-view-more-link"> - View more</IndexLink>
              </small>
            </div>
           
        
               
                  <HomeRecentWork dataList={this.props.RecentWorkList} />
                
           
          </div>
        </div>


       
        <div className="row">
          <div className="recentSection" style={{ backgroundColor: "#fff" }}>
            <div className="section-title">Recent Posts
                    <small><IndexLink to="/post" className="title-view-more-link"> - View more</IndexLink>
              </small>
            </div>
            <div className="container">
              <div className="row">
                <div className="card-deck"></div>
                   <HomeRecentPost postList={this.props.RecentPostList} />
                </div>
            </div>
          </div>
        </div>

<div className="paddingBot"></div>
      </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    RecentWorkList: state.RecentWork,
    RecentPostList: state.RecentPost,

  };
};

//export default connect(mapStateToProps)(Home);

function mapDispatchtoProps(dispatch) {
  return bindActionCreators({ recentWork, recentPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(Home);

