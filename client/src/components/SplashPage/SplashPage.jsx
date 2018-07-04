import React, { Component } from 'react';

import { Login } from '..';

class SplashPage extends Component {
	render() {
		return (
			<div>
				<Login {...this.props} />
			</div>
		);
	}
}
export default SplashPage;
