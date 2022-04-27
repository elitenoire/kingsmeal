import { ReactComponent as LogoSvg } from '../../assets/brand/logo.svg'
import './logo.css'

function Logo({ as: Tag = 'div', bg, color, full }) {
	return (
		<Tag className="logo">
			<span className="logo-wrap">
				<LogoSvg />
			</span>
			{full && <span className="logo-name">Kings Meal</span>}
		</Tag>
	)
}

export default Logo
