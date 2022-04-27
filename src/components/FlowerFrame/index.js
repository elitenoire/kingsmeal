import { Icon } from '../Icon'
import { ReactComponent as FlowerSvg } from '../../assets/brand/flower.svg'
import './flowerframe.css'

function FlowerFrame({ bg = 'primary', animated, children, icon }) {
	return (
		<div className="ff-wrap" data-animated={animated ? '' : null}>
			<FlowerSvg className="ff-frame" style={{ fill: `var(--${bg})` }} />
			<div className="ff-content">
				{icon && <Icon name={icon} />}
				{children}
			</div>
		</div>
	)
}

export default FlowerFrame
