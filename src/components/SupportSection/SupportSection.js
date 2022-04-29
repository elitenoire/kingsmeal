import { Link } from 'react-router-dom'
import './SupportSection.scss'

const SupportSection = () => {
	return (
		<div className="content">
			<div className="support-container">
				<div className="support-img">
					<img src="images/group-photo.webp" alt="support group" />
				</div>
				<div className="support-content">
					<h2 className="support-heading">
						<span>Support </span>good food and local business.
					</h2>
					<Link to="/product" className="btn support-button">
						Order Now
					</Link>
				</div>
			</div>
		</div>
	)
}

export default SupportSection
