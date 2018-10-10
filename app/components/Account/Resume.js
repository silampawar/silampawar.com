import React from 'react';
import { connect } from 'react-redux'



export default class Resume extends React.Component {

componentDidMount () {
  window.scrollTo(0, 0);
}
  render() {
    return (<div className="paddingTop">
      <div className="container">

          <h2 className="viba-portfolio-entry-title">Hello!</h2>
          <h2 className="viba-portfolio-entry-title">My name is Silam Pawar, I'm a Developer and Solution designer from Melbourne, Australia.</h2>
          <h2 className="viba-portfolio-entry-title"><a href="/resume/Silam_Pawar_Resume.docx" target="_blank">Click here</a> to download my resume.</h2>
        </div>

      <section id="cd-timeline" className="cd-container">
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-picture">

			</div>

          <div className="cd-timeline-content">
           <div className="bottomBorder">
            <h2>Technology Lead</h2> ANZ Bank (via Infosys ltd)
            </div>
            <p>At this current position I am heading multiple teams for implementation of multiple releases
              and production support activities.
            </p>
            <span className="cd-date">Work Experience | Till Date - Nov'15</span>
          </div>
        </div>

        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-movie">

          </div>

          <div className="cd-timeline-content">
             <div className="bottomBorder">
            <h2>Solution desginer</h2> ANZ Bank (via Infosys ltd)
            </div>
            <p>As a Solution Designer I was responsible to provide ideal solution to the
              client's requirement and present corresponding commercials. It also involved
              various architect level technical consultations such as New payment platform (NPP)
              design and implementation in Internet banking.
            </p>
            <span className="cd-date">Work Experience | Oct'15 - Sept'14</span>
          </div>
        </div>

        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-picture">

          </div>

          <div className="cd-timeline-content">
             <div className="bottomBorder">
            <h2>Technology Analyst</h2> ANZ Bank (via Infosys ltd)
            </div>
            <p>I was part of the one of the leading bank of Australia and Asia, ANZ Bank Internet
              Banking Solution Center at Infosys ltd. I was a part of Development team who was responsible
              for delivering the enhancements at regular intervals.<br/>
              <u>Technologies</u>:
                 JavaScript, Angular Js 1.x, Core Java, SQL and Web services
            </p>
            <span className="cd-date">Work Experience | Sept'14 - May'12</span>
          </div>
        </div>

        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-location">

          </div>

          <div className="cd-timeline-content">
             <div className="bottomBorder">
            <h2>Senior Software Engineer</h2> Infosys ltd.
            </div>
            <p>I was part of Emerson Data Migration project, I was responsible for building a reporting
              module for the ETL Application. The Reporting module was designed to report
              status of the complete data migration activity.<br/>
               <u>Technologies</u>:
              Core Java, iText and Postgres
              </p>
            <span className="cd-date">Work Experience | May'12 - Jun'11</span>
          </div>
        </div>

        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-location">

			</div>

          <div className="cd-timeline-content">
             <div className="bottomBorder">
            <h2>Software Engineer</h2> Infosys ltd.
            </div>
            <p>I was working as a Developer for IBM Cognos BI tool. The team was responsible
              for providing support and implement enhancements for the client.<br/>
             <u>Technologies</u>:
              Core Java, SQL and Web services
            </p>
            <span className="cd-date">Work Experience | Jun'11 - Dec'09</span>
          </div>
        </div>

        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-movie">

			</div>

          <div className="cd-timeline-content">
             <div className="bottomBorder">
            <h2>Education</h2>
            </div>
            <p>I have completed Bacholers of Technology (B.Tech) in Computers from Dr. B.A.T.U. India</p>
            <span className="cd-date">2005 - 2009</span>
          </div>
        </div>
      </section>
     </div>
    );
  }
}
/*
const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Contact);*/