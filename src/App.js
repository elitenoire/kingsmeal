import logo from './brand/logo.svg'
import React from 'react'
import './App.css'
import Navbar from './navbar'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
	return (
	<Router>
		<Navbar/>
		<header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		This is KingsMeal
		<p>A restaurant on the go!</p>
		</header>	
	</Router>
		
	
	)
}

export default App
