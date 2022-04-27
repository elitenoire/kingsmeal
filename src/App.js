import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Pages/Home.jsx'
import About from './Pages/About'
import Product from './Pages/Product'
// import Contact from './pages/Contact'

import './App.css'

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
			</Routes>
		</Router>
	)
}

export default App
