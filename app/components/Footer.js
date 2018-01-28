import React from 'react';
import { IndexLink, Link } from 'react-router';

class Footer extends React.Component {
  render() {
    return (
     <footer className="footer-distributed">

			<div className="footer-left">

				<h3>Silam <span>Pawar</span></h3>

				<p className="footer-links">
					<IndexLink to="/"> Home </IndexLink>
					/
					 <IndexLink to="/post">Post</IndexLink>
					/
					 <IndexLink to="/portfolio"> Portfolio </IndexLink>
					/
					<IndexLink to="/contact"> Contact </IndexLink>
					/
					 <IndexLink to="/resume"> Resume </IndexLink>
				</p>

				<p className="footer-company-name">Silam Pawar &copy; 2017</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>Melbourne</span> VIC, Australia</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>0470 322 579</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:silampawar@gmail.com">silampawar@gmail.com</a></p>
				</div>


			</div>

			<div className="footer-right">

				<div className="footer-icons">
					<p>Social Platforms: </p>
					<a href="https://www.linkedin.com/in/silam-pawar-82b67114/" target="_blank"><i className="fa fa-linkedin"></i></a>
					<a href="https://github.com/silampawar" target="_blank"><i className="fa fa-github"></i></a>
				</div>

			</div>

		</footer>
    );
  }
}

export default Footer;
