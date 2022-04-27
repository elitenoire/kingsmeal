import { Link } from 'react-router-dom'
import './DisplayContent.scss'

const DisplayContent = () => {
	return (
		<div>
			<div className="display-content">
				<div className="display-content-container">
					<div className="display-content-img">
						<img src="images/phones.webp" alt="heroimg" className="display-hero-img" />
					</div>
					<div className="display-content-text">
						<h1 className="display-text-h1">
							<span className="display-primary-text">Order online with our simple checkout.</span>
							<br></br>
						</h1>
						<p className="display-text-p">
							Dine in to sample our tasty dishes, or have it delivered to you. Make table reservations for
							free.
						</p>
						<div className="display-btn-container">
							<Link to="/contact" className="btn">
								{' '}
								See our FAQ
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DisplayContent
