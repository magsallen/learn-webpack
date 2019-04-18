import React from 'react'
import ReactDOM from 'react-dom'

import { Header } from '../components/header'
import { Content } from '../components/content'
import { Footer } from '../components/footer'

import { OnReady } from './utils'
import * as browser from '../browser'

ReactDOM.render(
	<OnReady callback={() => browser.init()}>
		<React.Fragment>
			<Header />
			<Content />
			<Footer />
		</React.Fragment>
	</OnReady>,
	document.getElementById('root')
);
