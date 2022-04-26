import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import './App.css'
import Home from './Pages/Home'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
	
		<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="about" element={<About />} />
				<Route path="section" element={<Section />} /> */}

			</Routes>
	</BrowserRouter>
	</div>

	)
}

export default App
