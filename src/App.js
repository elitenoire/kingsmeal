import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/navbar'
import logo from './brand/logo.svg'
import './App.css'

function App() {
	return (
		<Router>
			<Navbar />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				This is KingsMeal
				<p>A restaurant on the go!</p>
			</header>
		</Router>
	)
}

export default App
