import React from 'react';

export default function HomeRecentWork(props) {

    return (

        <div className="recentSection" style={{backgroundColor: props.bgColor}}>
            <div className="section-title">Recent {props.heading}
                    <small><a href={props.pathTo} className="title-view-more-link"> - View more</a>
                </small>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <span className="">The list is coming soon....</span>
                </div>
            </div>
        </div>
    );

}
