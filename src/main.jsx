// ========== MAIN COMPONENT MODULE ========== //

import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './components/Navigation.jsx';
import App from './components/App.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Navigation />
		<App />
	</React.StrictMode>,
);
