// ========== APP COMPONENT MODULE ========== //

import { ParallaxProvider } from 'react-scroll-parallax'
import Banner from './Banner.jsx'
import About from './About.jsx'
import Service from './Service.jsx'
import Review from './Review.jsx'
import Contact from './Contact.jsx'

const App = () => {
	return (
		<ParallaxProvider className='aplication'>
			<Banner />
			<About />
			<Service />
			<Review />
			<Contact />
		</ParallaxProvider>
	);
};

export default App;
