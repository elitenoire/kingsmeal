import { Icon } from '../Icon'
import './Header.scss'

const Header = () => {
	return (
		<div className="header">
			<div className="header-wrapper">
				<div className="header-content">
					Created by React group 3 at the SideHustle5.0
					<a
						href="https://github.com/elitenoire/kingsmeal"
						target="_blank"
						className="external-link"
						rel="noreferrer"
					>
						<Icon name="external" />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Header
