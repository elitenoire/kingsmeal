
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
// import Contact from './pages/Contact'
import './App.css'
import Contactus from './contactus'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="product" element={<Product />} />
					{/* <Route path="contact" element={<Contact />} /> */}
				</Route>
			</Routes>		</Router>
	)
}

export default App
