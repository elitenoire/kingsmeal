import { Link } from 'react-router-dom'
import './SupportSection.scss'

const SupportSection = () => {
	return (
		<div className="supportSection">
			<div className="support-container">
				<div className="support-img">
					<img src="images/group-photo.webp" alt="support group" />
				</div>
				<div className="support-content">
					<h1 className="support-heading">
						<span className="dim-heading">Support</span>good food and local business.
					</h1>
					<Link to="/order" className="support-button">
						Order Now
					</Link>
				</div>
			</div>
		</div>
	)
}

export default SupportSection
