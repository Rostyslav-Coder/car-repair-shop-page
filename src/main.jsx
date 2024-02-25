// =============== MAIN MODULE ===============

import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigation from './Navigation.jsx'
import Banner from './Banner.jsx'
import About from './About.jsx'
import Service from './Service.jsx'
import Review from './Review.jsx'
import Contact from './Contact.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Navigation />
		<main>
			<Banner />
			<About />
			<Service />
			<Review />
			<Contact />
		</main>
	</React.StrictMode>,
)
