import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function Layout() {
	return (
		<div className="app-container">
			<Header />
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default Layout
