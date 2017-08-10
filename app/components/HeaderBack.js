import React from 'react';


export default class HeaderBack extends React.Component {
  render() {

  
    return (
     <div className="header-back">
        <div className="typewriter">
          <h1>Silam <span>Pawar</span></h1>
          <h2>NodeJS  |  ReactJS | HTML | CSS and much more ....</h2>
        </div>

         <div className="typewriterMobile">
          <h1>Silam <span>Pawar</span></h1>
          <span className="lower">NodeJS | ReactJS | HTML | CSS </span>
          <div className="midPadding"></div>
        </div>
      </div>
    )
  }
}