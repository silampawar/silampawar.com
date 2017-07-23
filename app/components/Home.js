import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import recentWork from '../actions/recentWork';

import HomeRecentWork from './HomeRecentWork';

import { bindActionCreators } from 'redux';

class Home extends React.Component {

  componentDidMount(){
   
   this.props.recentWork();
   this.setState({ RecentWorkList : this.props.RecentWorkList});
  }

  render() {

    return (
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
        <div><HomeRecentWork heading="Work" dataList = {this.props.RecentWorkList} pathTo="https://google.com" bgColor="#faf5f5"/></div>
        <div className="midPadding"></div>
         <div><HomeRecentWork heading="Articles" pathTo="https://google.com" bgColor="#fff"/></div>
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

export default connect(mapStateToProps, mapDispatchtoProps)(Home);

