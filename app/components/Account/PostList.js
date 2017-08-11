import React from 'react';
import { connect } from 'react-redux'
import Messages from './../Messages';
import {recentPost} from './../../actions/recentWork';
import HomeRecentPost from './../HomeRecentPost';
import { bindActionCreators } from 'redux';

class PostList extends React.Component {

  componentDidMount() {
 window.scrollTo(0, 0);
    this.props.recentPost();
    this.setState({ RecentPostList: this.props.RecentPostList });
  }

  render() {

    return (
      <div className="paddingTop">
      <div className="container">
        <h1 className="section-title landing-header">Posts</h1>
          <HomeRecentPost postList={this.props.RecentPostList} />
      </div>
      <div className="midPadding"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    RecentPostList: state.RecentPost,

  };
};

//export default connect(mapStateToProps)(Home);

function mapDispatchtoProps(dispatch) {
  return bindActionCreators({ recentPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(PostList);

