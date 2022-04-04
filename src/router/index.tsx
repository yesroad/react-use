import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage, TestPage } from '@/pages';

const Router: React.VFC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/test" element={<TestPage />} />
		</Routes>
	</BrowserRouter>
);

export default Router;
