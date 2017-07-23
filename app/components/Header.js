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
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active"><IndexLink to="/" activeStyle={active}>Home</IndexLink></li>
        <li className="nav-item"><Link to="/" activeStyle={active}>Posts</Link></li>
        <li className="nav-item"><Link to="/" activeStyle={active}>Portfolio</Link></li>
        <li className="nav-item"><Link to="/" activeStyle={active}>Contact</Link></li>
        <li className="nav-item"><Link to="/" activeStyle={active}>Resume</Link></li>
      </ul>
    );
    return (
     <div>
       <div className="header-back">
        {mainName}
        </div>
      <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <IndexLink to="/" className="navbar-brand">SP</IndexLink>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
       <IndexLink to="/" className="nav-link" activeStyle={active}>Home<span className="sr-only">(current)</span></IndexLink>
       
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Post</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Resume</a>
      </li>
    </ul>
   
  </div>
</nav> 
</div>


    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Header);
