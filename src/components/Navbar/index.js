import { useState, useCallback } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LinkTop from '../LinkTop'
import Logo from '../Logo'
import { Icon } from '../Icon'
import './navbar.css'

function Navbar() {
	const [open, setOpen] = useState(false)

	const toggle = useCallback(() => {
		setOpen(_open => !_open)
	}, [])
	const close = useCallback(() => {
		setOpen(false)
	}, [])

	return (
		<header className="navbar">
			<div className="navbar-logo">
				<Link to="/" className="plain">
					<Logo full />
				</Link>
			</div>
			<nav className="navbar-nav" data-open={open ? '' : null}>
				<NavLink to="/about" className="navbar-link" onClick={close}>
					About
				</NavLink>
				<NavLink to="/product" className="navbar-link" onClick={close}>
					Product
				</NavLink>
				<NavLink to="/contact" className="navbar-link" onClick={close}>
					Contact
				</NavLink>
			</nav>
			<button className="navbar-toggle" data-open={open ? '' : null} onClick={toggle}>
				<Icon name={open ? 'close' : 'menu'} />
			</button>
			<LinkTop />
		</header>
	)
}

export default Navbar
