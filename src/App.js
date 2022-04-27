import { BrowserRouter as Router } from 'react-router-dom'
// import Navbar from './components/navbar'
// import logo from './brand/logo.svg'
import './App.css'
import Contactus from './contactus'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

function App() {
	return (
		<Router>
			{/* <Navbar /> */}
			<Routes>
				<Route path='/' element={<Contactus />} />
			</Routes>
			<contactus />
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				This is KingsMeal
				<p>A restaurant on the go!</p>
			</header>
		</Router>
	)
}

export default App
