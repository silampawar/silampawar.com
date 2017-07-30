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
					<a href="#"> Post </a>
					/
					 <IndexLink to="/portfolio"> Portfolio </IndexLink>
					/
					<a href="#"> Contact </a>
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
					<p>+1 555 123456</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:silampawar@gmail.com">silampawar@gmail.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About me</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div className="footer-icons">

					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
    );
  }
}

export default Footer;
