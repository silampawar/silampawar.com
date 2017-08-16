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
          <h2 className="viba-portfolio-entry-title">My name is Silam Pawar, I'm a Full Stack Developer and Technical Estimation Consultant from Melbourne, Australia.</h2>
          <h2 className="viba-portfolio-entry-title"><a href="/resume/Silam_Pawar_7plus.doc" target="_blank">Click here</a> to download my resume.</h2>
        </div>
        
      <section id="cd-timeline" className="cd-container">
        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-picture">
           
			</div>

          <div className="cd-timeline-content">
            <h2>Technology Lead</h2> ANZ Bank (via Infosys ltd)
            <p>At this current position I am heading multiple teams for implementation of multiple releases
              and production support activities.
            </p>
            <span className="cd-date">Till Date - Nov'15</span>
          </div>
        </div>

        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-movie">
           
          </div>

          <div className="cd-timeline-content">
            <h2>Technical Estimation Consultant</h2> ANZ Bank (via Infosys ltd)
            <p>As an Estimation consultant I was responsible to provide optimal solution to the
              client's requirement and present corrosponding commertials. It also involved various 
              artchitect level technical consultations such as New payment platform (NPP) design 
              and implementation in Internt banking.
            </p>
            <span className="cd-date">Oct'15 - Sept'14</span>
          </div>
        </div>

        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-picture">
          
          </div>

          <div className="cd-timeline-content">
            <h2>Technology Analyst</h2> ANZ Bank (via Infosys ltd)
            <p>I was part of the one of the leading bank of Australia and Asia, ANZ Bank Internet 
              Banking Solution Center at Infosys ltd. I was a part of Development team who was responsible 
              for delivering the enhancements at regular intervals.<br/>
              <u>Technologies</u>: 
                 Javascript, Angular Js 1.x, Core Java, SQL and Webservices
            </p>
            <span className="cd-date">Sept'14 - May'12</span>
          </div>
        </div>

        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-location">
          
          </div>

          <div className="cd-timeline-content">
            <h2>Senior Software Engineer</h2> Infosys ltd.
            <p>I was part of Emerson Data Migration project, I was responsible for building a reporting 
              module for the ETL Application. The Reporting module was designed to report 
              status of the complete data migration activity.<br/>
               <u>Technologies</u>: 
              Core Java, iText and Postgres
              </p>
            <span className="cd-date">May'12 - Jun'11</span>
          </div>
        </div>

        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-location">
           
			</div>

          <div className="cd-timeline-content">
            <h2>Software Engineer</h2> Infosys ltd.
            <p>I was working as a Developer for IBM Cognos BI tool. The team was responsible
              for providing support and implement enhancements for the client.<br/>
             <u>Technologies</u>: 
              Core Java, SQL and Webservices
            </p>
            <span className="cd-date">Work Experience | Jun'11 - Dec'09</span>
          </div>
        </div>

        <div className="cd-timeline-block">
          <div className="cd-timeline-img cd-movie">
           
			</div>

          <div className="cd-timeline-content">
            <h2>Education</h2>
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