import React from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux'
import { logout } from '../actions/auth';

class Header extends React.Component {

  /**/

  handleLogout(event) {
    event.preventDefault();
    this.props.dispatch(logout());
  }

  render() {
    const active = { borderBottomColor: '#3f51b5' };
    const mainName = (
      <div className="typewriter">
        <h1>Silam Pawar</h1>
        <h2>NodeJS  |  ReactJS | HTML | CSS and much more ....</h2>
      </div>
    );
    const rightNav = (
      <ul className="nav navbar-nav navbar-right">

        <li><Link to="/signup" activeStyle={active}>Home</Link></li>
        <li><Link to="/signup" activeStyle={active}>Posts</Link></li>
        <li><Link to="/signup" activeStyle={active}>Portfolio</Link></li>
        <li><Link to="/signup" activeStyle={active}>Contact</Link></li>
        <li><Link to="/signup" activeStyle={active}>Resume</Link></li>
      </ul>
    );
    return (
      <div className="header-back">
        {mainName}
        <nav className="navbar navbar-static-top navbar-inverse">
          <div className="container">
            <div className="navbar-header">
              <button type="button" data-toggle="collapse" data-target="#navbar" className="navbar-toggle collapsed">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <IndexLink to="/" className="navbar-brand">SP</IndexLink>
            </div>
            <div id="navbar" className="navbar-collapse collapse">

              {rightNav}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Header);
