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

  window.scrollTo(0, 0);

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
          <div className="col-md-6 col-sm-12">
            <h1 className="section-title landing-header">Full-Stack Developer and Estimation Consultant</h1>
          </div>
          <div className="col-md-6 col-sm-12"></div>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="panel">
              <div className="panel-body">
                <h3>Full Stack Developer</h3>
                <p>I am a full stack web developer specialized in both front-end and back-end web development.
                  Have gained sound knowledge in React JS, Redux, NodeJs and Core Java.
                  Currently working on React-Redux and Nodejs projects.  
                </p>

              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="panel">
              <div className="panel-body">
                <h3>Estimation Consultant</h3>
                <p>Apart from development, I am also working as a Project Estimation Consultant.
                  I am responsible for providing solutions and compiling estimates of the cost and effort for the offered services.
                  </p><br/>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="panel">
              <div className="panel-body">
                <h3>And Much More</h3>
                <p>Being a Web developer my passion is to learn new technologies and leverage my knowledge.
                  However, I am more than that, I am a full-time husband, a moody artist, an 
                  amateur photographer, an admirer of Roger Federer and much more.
                </p>

              </div>
            </div>
          </div>
        </div>
        <div className="midPadding"></div>
       
          <div className="recentSection" >
            <div className="section-title">Recent Work
              <small>
                <IndexLink to="/portfolio" className="title-view-more-link"> - View more</IndexLink>
              </small>
            </div>
           <HomeRecentWork dataList={this.props.RecentWorkList} limit="6"/>
        </div>


       
        
          <div className="recentSection" style={{ backgroundColor: "#fff" }}>
            <div className="section-title">Recent Posts
                    <small><IndexLink to="/post" className="title-view-more-link"> - View more</IndexLink>
              </small>
            </div>
                   <HomeRecentPost postList={this.props.RecentPostList} limit="6"/>
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

