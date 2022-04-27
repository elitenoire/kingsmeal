import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Custom fonts
import '@fontsource/syne/latin-700.css'
import '@fontsource/syne/latin-500.css'
import '@fontsource/poppins/latin-300.css'
import '@fontsource/poppins/latin-400.css'
import '@fontsource/poppins/latin-500.css'
import '@fontsource/poppins/latin-700.css'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
