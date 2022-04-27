import SecondaryContent from './SecondaryContent/SecondaryContent'
import './Content.scss'

const Content = () => {
	return (
		<>
			<div className="content">
				<div className="content-container">
					<div className="content-text">
						<h1 className="text-h1">
							Beautiful food & takeaway,
							<span className="primary-text">delivered</span>
							to your door.
						</h1>
						<p className="text-p">
							Home to fresh & authentic African, European & Spicy foods & cocktails freshly prepared
							everyday.
						</p>
						<div className="btn-container">
							<a href="/order" className="btn">
								{' '}
								Place and Order
							</a>
						</div>
						<div className="feedbacks">
							<img className="feedback-img" src="images/trustpilot-logo.svg" alt="trustpilot" />
							<div className="feedback-text">
								<span className="primary-text">4.8 out of 5</span>
								based on 2000+ reviews
							</div>
						</div>
					</div>
					<div className="content-img">
						<img src="images/hero-image.webp" alt="heroimg" className="hero-img" />
					</div>
				</div>
			</div>

			<SecondaryContent
				headingBefore="The home of"
				headingAfter="fresh products"
				para="We pride ourselves on discovering the best tastes, flavours and recipes from around the world and sharing them with you."
				btnText="Learn about us"
				image="group.webp"
			/>
		</>
	)
}

export default Content
