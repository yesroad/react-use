import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, TestPage } from '@/pages';

const Router: React.VFC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/test" element={<TestPage />} />
		</Routes>
	</BrowserRouter>
);

export default Router;
