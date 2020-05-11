import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './themes/components/Header';
import Products from './pages/products/products';

const Routing = () => {
	return (
		<BrowserRouter>
			<Header/>
			<Route exact path="/" component={Products}></Route>
		</BrowserRouter>
	)
}

export default Routing;