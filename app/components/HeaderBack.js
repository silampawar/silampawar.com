import React from 'react';


export default class HeaderBack extends React.Component {
  render() {

    const mainName = (
      <div className="header-back">
        <div className="typewriter">
          <h1>Silam <span>Pawar</span></h1>
          <h2>NodeJS  |  ReactJS | HTML | CSS and much more ....</h2>
        </div>
      </div>
    );
    return (
      <div>{mainName}
      </div>
    )
  }
}