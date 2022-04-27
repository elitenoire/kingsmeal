import { Link } from 'react-router-dom'
import './SecondaryContent.scss'

const SecondaryContent = props => {
	return (
		<div>
			<div className="content second-content">
				<div className="content-container">
					<div className="content-text">
						<h2 className="text-h2 primary-text">
							{props.headingBefore} <br></br>
							{props.headingAfter}
						</h2>
						<p className="text-p">{props.para}</p>
						<div className="btn-container">
							<Link to="/about" className="btn">
								{' '}
								{props.btnText}
							</Link>
						</div>
					</div>
					<div className="content-img">
						<img src={`images/${props.image}`} alt="hero" className="hero-img" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default SecondaryContent
