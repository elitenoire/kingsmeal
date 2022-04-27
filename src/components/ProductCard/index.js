import FlowerFrame from '../FlowerFrame'
import './productcard.css'

function ProductCard({ bg, animated, src, alt, title, price }) {
	return (
		<div className="pc-wrap">
			<FlowerFrame bg={bg} animated={animated}>
				<img src={src} alt={alt} width="800px" height="800px" />
			</FlowerFrame>
			{(title || price) && (
				<div className="pc-content">
					{title && <h3 className="pc-title">{title}</h3>}
					{price && <p className="pc-price">{`₦${price}`}</p>}
				</div>
			)}
		</div>
	)
}

export default ProductCard
