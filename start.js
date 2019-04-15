import React from 'react'
import ReactDOM from 'react-dom'

import { Header } from './components/header.jsx'
import { Content } from './components/content.jsx'
import { Footer } from './components/footer.jsx'


ReactDOM.render(
	<React.Fragment>
		<Header />
		<Content />
		<Footer />
	</React.Fragment>,
	document.getElementById('root')
);
