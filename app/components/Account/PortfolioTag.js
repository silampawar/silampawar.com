import React from 'react';
import moment from 'moment';

export default class PortfolioTag extends React.Component {

  componentDidMount() {
  window.scrollTo(0, 0);
}

   
    render() {
        const projDetails = this.props.portfolioDetails;
        const profileImage = `/images/recentwork/portfolio_Images/${projDetails.mainImageSrc}`;
         
        return (
          <div className="paddingTop">   
                <main id="main" className="site-main" role="main">
                    <section className="section section-light section-md section-article">
                        <div className="container">
                            <div className="row">
                                <article id="post-118" className="viba-portfolio-single-item">
                                    <h1 itemprop="name" className="viba-portfolio-entry-title entry-title">{projDetails.workTitle}</h1>

                                    <div className="col-sm-8 floatLeft">
                                      <img className="img-fluid" width="750" height="385" src= {profileImage} />
                                       <div className="midPadding">{projDetails.description}</div>
                                    </div>
                                    <div className="col-sm-4 viba-portfolio-single-content floatRight paddingLeft">
                                        <div className="viba-portfolio-single-meta">
                                            <div className="vp-single-meta viba-portfolio-single-date">
                                                <h3>Date</h3>
                                                <ul><li><span>{moment(projDetails.uploadedDate).format("MMM DD, YYYY")}</span></li></ul>
                                            </div>
                                            <div className="vp-single-meta viba-portfolio-single-categories">
                                                <h3>Categories</h3>
                                                <ul><li><a href="" rel="tag">Websites</a></li></ul></div>
                                            <div className="vp-single-meta viba-portfolio-single-tags">
                                                <h3>Tags</h3>
                                                <ul><li><a href="" rel="tag">{projDetails.tags}</a></li>
                                                   
                                                </ul></div>
                                            <div className="viba-portfolio-single-project-link">
                                                <a target="_blank" href={projDetails.urlWebsite}>View Project</a>
                                                 <a target="_blank" href={projDetails.urlGitHub}>View on Github</a>
                                                </div>
                                            <div className="viba-portfolio-share-icons footer-icons ">
                                                <span className="vp-share">Share</span>
                                                <ul >
                                                    <li>
                                                        <a href="https:\\facebook.com" target="_blank" >
                                                          <i className="fa fa-facebook" ></i>
                                                        </a>
                                                        
                                                    </li>
                                                    <li>
                                                        <a href="https:\\twitter.com" target="_blank">
                                                        <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div> </div>

                                    </div>
                                    <div className="col-sm-12"></div>
                                </article>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
};