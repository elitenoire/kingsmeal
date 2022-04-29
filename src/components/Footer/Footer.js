import { Link } from 'react-router-dom'
import Logo from '../Logo'
import './Footer.scss'

const Footer = () => {
	return (
		<div className="footer">
			<div className="text-grids">
				<div className="about details">
					<Logo as="span" />
					<p>
						Kingsmeal <br></br>
						for small and medium businesses.
					</p>
				</div>
				<div className="about">
					<div className="tag company">COMPANY</div>
					<Link to="/" className="links">
						Home
					</Link>
					<Link to="/about" className="links">
						About
					</Link>
					<Link to="/product" className="links">
						Product
					</Link>
					<Link to="/contact" className="links">
						Contact
					</Link>
				</div>
			</div>
			<div className="footer-credits">
				<div className="text-content">Built with 💚 by the Kings Meal Team</div>
				<div className="social-icons">
					<div className="icons">
						<a
							className="icon"
							target="_blank"
							href="https://www.instagram.com/itsandreydev"
							rel="noreferrer"
						>
							<img src="images/instagram.svg" alt="insta" />
						</a>
						<a
							className="icon"
							target="_blank"
							href="https://www.twitter.com/andreyscott5"
							rel="noreferrer"
						>
							<img src="images/twitter.svg" alt="twitter" />
						</a>
						<a className="icon" target="_blank" href="https://www.youtube.com" rel="noreferrer">
							<img src="images/youtube.svg" alt="youtube" />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
