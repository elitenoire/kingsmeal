import Content from '../components/Content/Content'
import SupportSection from '../components/SupportSection/SupportSection'

function Home() {
	return (
		<>
			<Content
				as="h1"
				bg="bottom"
				title={
					<>
						Beautiful food & takeaway, <span>delivered </span>to your door.
					</>
				}
				text="Home to fresh & authentic African, European & Spicy foods & cocktails freshly prepared everyday."
				link="/product"
				btnText="Place Order"
				image="hero-image.webp"
				highlight
			>
				<div className="feedbacks">
					<img className="feedback-img" src="images/trustpilot-logo.svg" alt="trustpilot" />
					<div className="feedback-text">
						<span className="primary-text">4.8 out of 5 </span>
						based on 2000+ reviews
					</div>
				</div>
			</Content>
			<Content
				bg="top"
				title={
					<>
						The home of <span>fresh </span>products.
					</>
				}
				text="We pride ourselves on discovering the best tastes, flavours and recipes from around the world and sharing them with you."
				link="/about"
				btnText="Learn about us"
				image="group.webp"
				highlight
				reverse
			/>
			<Content
				title={
					<>
						Order <span>online </span>with our simple checkout.
					</>
				}
				text="Dine in to sample our tasty dishes, or have it delivered to you. Make table reservations for free."
				link="/contact"
				btnText="Contact us"
				image="phones.webp"
				highlight
			/>
			<SupportSection />
		</>
	)
}

export default Home