import ProductCard from '../../components/ProductCard'
import FlowerFrame from '../../components/FlowerFrame'
import { Icon } from '../../components/Icon'
import './product.css'
import data from '../../data'

function ProductPage() {
	return (
		<>
			<div className="product-hero">
				<div className="product-hero-container">
					<h1>Our Menu</h1>
					<p>
						We pride ourselves in the quality of cooking. We spend hours in our test kitchens exploring ways
						to improve our recipes.
					</p>
					<p>- Nandos Chicken</p>
					<span className="product-hero-icon">
						<Icon name="ethnic" />
					</span>
				</div>
			</div>
			<ul>
				{data.map(category => (
					<li key={category.id} className="product-list">
						<div className="product-list-header">
							<div className="product-list-icon">
								<FlowerFrame icon={category.icon} bg={category.color} animated />
							</div>
							<h2 className="product-list-title">{category.label}</h2>
							<p className="product-list-description">{category.desc}</p>
						</div>
						<ul className="product-list-grid">
							{category.menu.map(menuitem => (
								<li key={menuitem.id} className="product-list-gridcell">
									<ProductCard
										animated
										src={`/images/dish/${menuitem.image}`}
										title={menuitem.title}
										price={menuitem.price}
										bg={category.color}
									></ProductCard>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</>
	)
}

export default ProductPage
