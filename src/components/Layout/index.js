import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function Layout() {
	return (
		<>
		<Header />
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default Layout
