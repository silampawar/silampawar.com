import React from 'react';


export default class HeaderBack extends React.Component {
  render() {

  
    return (
     <div className="header-back">
        <div className="typewriter">
          <h1>Silam <span>Pawar</span></h1>
          <h2>React+Redux | Spring Boot | Solution Designer.....</h2>
        </div>

         <div className="typewriterMobile">
          <h1>Silam <span>Pawar</span></h1>
          <span className="lower">React + Redux, <br/> Spring Boot REST Services, <br/>Solution Designer</span>
          <div className="midPadding"></div>
        </div>
      </div>
    )
  }
}