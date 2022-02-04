import React from 'react';
import { Global } from '@emotion/react';

import Router from '@/router';
import { styles } from './assets/styles/Global.styles';

const App: React.VFC = () => {
	return (
		<>
			<Global styles={styles} />
			<Router />
		</>
	);
};

export default App;
