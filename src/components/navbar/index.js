import { useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo'
import { Icon } from '../Icon'
import './navbar.css'

function Navbar() {
	const [open, setOpen] = useState(false)

	const toggle = useCallback(() => {
		setOpen(_open => !_open)
	}, [])

	return (
		<header className="navbar">
			<div className="navbar-logo">
				<Logo full />
			</div>
			<nav className="navbar-nav" data-open={open ? '' : null}>
				<NavLink to="/about" className="navbar-link">
					About
				</NavLink>
				<NavLink to="/product" className="navbar-link">
					Product
				</NavLink>
				<NavLink to="/contact" className="navbar-link">
					Contact
				</NavLink>
			</nav>
			<button className="navbar-toggle" data-open={open ? '' : null} onClick={toggle}>
				<Icon name={open ? 'close' : 'menu'} />
			</button>
		</header>
	)
}

export default Navbar
