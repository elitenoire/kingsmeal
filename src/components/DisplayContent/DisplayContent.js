import './DisplayContent.scss'

const DisplayContent = () => {
	return (
		<div>
			<div className="display-content">
				<div className="display-content-container">
					<div className="display-content-img">
						<img src="images/Phones.png" alt="heroimg" className="display-hero-img" />
					</div>
					<div className="display-content-text">
						<h1 className="display-text-h1">
							<span className="display-primary-text">Order online with our simple checkout.</span>
							<br></br>
						</h1>
						<p className="display-text-p">
							When an unknown printer took a galley of type and scrambled it to make a type specimen book.
							It has survived not only five centuries, but also
						</p>
						<div className="display-btn-container">
							<a href="/order" className="btn">
								{' '}
								See our FAQ
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DisplayContent
