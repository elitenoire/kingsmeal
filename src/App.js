import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home.jsx'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="*" element={<NotFound />} />
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="product" element={<Product />} />
					<Route path="contact" element={<Contact />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App
