import './contactus.css'

export default function Contact() {
	return (
		<div className="overall-div">
			<div>
				<div className="getintouch">
					<h1>Get in touch! </h1>
					<p>Contact us to make your enquiry today!</p>
				</div>

				<div className="info-flex-row">
					<div className="info-flex">
						<button className="x-button">
							<img src="images/location.png" alt="location icon" />
							{/* images/Hero-Image.png */}
							<p>25 Festac Close.</p>
						</button>
					</div>

					<div className="info-flex">
						<button className="x-button">
							<img src="images/phone.png" alt="phone icon" />
							<p>+234 818 456 3998</p>
						</button>
					</div>

					<div className="info-flex">
						<button className="x-button">
							<img src="images/mail.png" alt="mai" />
							<p>hello@kingsmeal.com</p>
						</button>
					</div>
				</div>

				<form>
					<p className="title">Contact Form</p>
					<div className="form-divider">
						<div className="flex-left">
							<div>
								<label htmlFor="name">Your Name</label>
								<input type="text" placeholder="Enter your name" id="name"></input>
							</div>
							<div>
								<label htmlFor="name">Mail</label>
								<input type="mail" placeholder="Email" id="email"></input>
							</div>
							<div>
								<label htmlFor="name">Phone</label>
								<input type="text" placeholder="Phone Number" id="phone-number"></input>
							</div>
						</div>

						<p className="flex-right">
							<label for="enquiry">Message</label>
							<textarea id="enquiry" name="enquiry"></textarea>
						</p>
					</div>

					<p className="title">Services</p>

					<div className="flex-buttons">
						<div>
							<button className="pill-button">Reservation</button>
						</div>
						<div>
							<button className="pill-button">Delivery</button>
						</div>
						<div>
							<button className="pill-button">Collection</button>
						</div>
					</div>

					<button className="pill-button">Send Message</button>
				</form>
			</div>
		</div>
	)
}
