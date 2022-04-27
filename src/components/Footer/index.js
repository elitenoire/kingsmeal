import { Link } from 'react-router-dom'
import Logo from '../Logo'
import { Icon } from '../Icon'
import './footer.css'

function Footer() {
	return (
		<footer>
			<div className="footer-layout">
				<div className="footer-block">
					<div className="footer-logo">
						<Logo as="span" />
					</div>
					<p className="footer-block-text">
						We offer premium taste in modern cuisine just for you and the planet.
					</p>
				</div>
				<div className="footer-block">
					<p className="footer-block-title">Navigate</p>
					<nav className="footer-links">
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
						<Link to="/product">Product</Link>
						<Link to="/contact">Contact</Link>
					</nav>
				</div>
				<div className="footer-block">
					<p className="footer-block-title">Follow us</p>
					<div className="footer-socials">
						<a href="https://github.com/elitenoire/kingsmeal" target="_blank" rel="noreferrer">
							<Icon name="github" />
						</a>
						<a href="/#">
							<Icon name="twitter" />
						</a>
						<a href="/#">
							<Icon name="instagram" />
						</a>
						<a href="/#">
							<Icon name="facebook" />
						</a>
					</div>
				</div>
			</div>
			<hr />
			<p className="footer-copyright">{`© ${new Date().getFullYear()} Kings Meal Inc. | Made with 💚`}</p>
		</footer>
	)
}

export default Footer
